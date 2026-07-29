import { create } from 'zustand';
import type { AppUser, Session } from '@/lib/supabase';
import { isSupabaseConfigured, mapUser, supabase } from '@/lib/supabase';

type AuthState = {
  ready: boolean;
  session: Session | null;
  user: AppUser | null;
  isGuest: boolean;
  bootstrap: () => Promise<void>;
  continueAsGuest: () => void;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (
    email: string,
    password: string,
    name?: string,
    preferredLocale?: string,
  ) => Promise<void>;
  signInWithApple: () => Promise<void>;
  deleteAccount: () => Promise<void>;
  signOut: () => Promise<void>;
  setSession: (session: Session | null) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  ready: false,
  session: null,
  user: null,
  isGuest: false,

  setSession: (session) =>
    set({
      session,
      user: mapUser(session?.user ?? null),
      isGuest: false,
    }),

  continueAsGuest: () =>
    set({
      ready: true,
      isGuest: true,
      session: null,
      user: { id: 'guest', name: 'Gjest', email: undefined },
    }),

  bootstrap: async () => {
    if (!supabase) {
      set({ ready: true, session: null, user: null, isGuest: false });
      return;
    }

    try {
      const { data } = await Promise.race([
        supabase.auth.getSession(),
        new Promise<{ data: { session: null } }>((resolve) =>
          setTimeout(() => resolve({ data: { session: null } }), 3000),
        ),
      ]);
      set({
        ready: true,
        session: data.session,
        user: mapUser(data.session?.user ?? null),
        isGuest: false,
      });

      supabase.auth.onAuthStateChange((_event, session) => {
        set({ session, user: mapUser(session?.user ?? null), isGuest: false });
      });
    } catch {
      set({ ready: true, session: null, user: null, isGuest: false });
    }
  },

  signInWithEmail: async (email, password) => {
    if (!supabase) throw new Error('Supabase er ikke konfigurert. Kopier .env.example til .env');
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    set({ session: data.session, user: mapUser(data.user), isGuest: false });
  },

  signUpWithEmail: async (email, password, name, preferredLocale) => {
    if (!supabase) throw new Error('Supabase er ikke konfigurert. Kopier .env.example til .env');
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name || email.split('@')[0],
          preferred_locale: preferredLocale || 'en',
        },
      },
    });
    if (error) throw error;
    if (data.user) {
      await supabase.from('profiles').upsert({
        id: data.user.id,
        display_name: name || email.split('@')[0],
        preferred_locale: preferredLocale || 'en',
        updated_at: new Date().toISOString(),
      });
    }
    set({ session: data.session, user: mapUser(data.user), isGuest: false });
  },

  signInWithApple: async () => {
    if (!supabase) throw new Error('Supabase er ikke konfigurert');
    const AppleAuthentication = await import('expo-apple-authentication');
    const Crypto = await import('expo-crypto');

    const available = await AppleAuthentication.isAvailableAsync();
    if (!available) {
      throw new Error('Sign in with Apple is not available on this device');
    }

    // Cryptographically random nonce — Math.random breaks Apple + Supabase validation
    const nonceBytes = await Crypto.getRandomBytesAsync(32);
    const rawNonce = Array.from(nonceBytes, (b) => b.toString(16).padStart(2, '0')).join('');
    const hashedNonce = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      rawNonce,
    );

    let credential: Awaited<ReturnType<typeof AppleAuthentication.signInAsync>>;
    try {
      credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
        nonce: hashedNonce,
      });
    } catch (e: unknown) {
      const code =
        e && typeof e === 'object' && 'code' in e ? String((e as { code?: string }).code) : '';
      if (code === 'ERR_REQUEST_CANCELED' || code === 'ERR_CANCELED') {
        throw new Error('CANCELLED');
      }
      throw e instanceof Error ? e : new Error('Apple sign-in failed');
    }

    if (!credential.identityToken) {
      throw new Error('Apple Sign-In mangler identity token');
    }

    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: 'apple',
      token: credential.identityToken,
      nonce: rawNonce,
    });
    if (error) throw error;

    const fullName = [credential.fullName?.givenName, credential.fullName?.familyName]
      .filter(Boolean)
      .join(' ')
      .trim();

    if (data.user && fullName) {
      await supabase.auth.updateUser({ data: { full_name: fullName } });
      await supabase.from('profiles').upsert({
        id: data.user.id,
        display_name: fullName,
        updated_at: new Date().toISOString(),
      });
    } else if (data.user) {
      await supabase.from('profiles').upsert({
        id: data.user.id,
        display_name: data.user.email?.split('@')[0] ?? 'Learner',
        updated_at: new Date().toISOString(),
      });
    }

    set({
      session: data.session,
      user: mapUser({
        ...data.user!,
        user_metadata: {
          ...data.user!.user_metadata,
          full_name: fullName || data.user!.user_metadata?.full_name,
        },
      }),
      isGuest: false,
    });
  },

  deleteAccount: async () => {
    if (!supabase) throw new Error('Supabase er ikke konfigurert');
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) throw new Error('Not signed in');

    const { error: rpcError } = await supabase.rpc('delete_own_account');
    if (rpcError) {
      throw new Error(
        rpcError.message ||
          'Account deletion is not configured. Run delete_own_account SQL in Supabase.',
      );
    }

    await supabase.auth.signOut();
    set({ session: null, user: null, isGuest: false });
  },

  signOut: async () => {
    if (supabase) await supabase.auth.signOut();
    set({ session: null, user: null, isGuest: false });
  },
}));

export { isSupabaseConfigured };
