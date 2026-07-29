import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import { catalogs, isLocaleCode } from '@/i18n/locales';
import type { LocaleCode } from '@/i18n/types';

const memory = new Map<string, string>();
const storage = {
  getItem: async (name: string) => {
    if (Platform.OS === 'web') return memory.get(name) ?? null;
    return SecureStore.getItemAsync(name);
  },
  setItem: async (name: string, value: string) => {
    if (Platform.OS === 'web') {
      memory.set(name, value);
      return;
    }
    await SecureStore.setItemAsync(name, value);
  },
  removeItem: async (name: string) => {
    if (Platform.OS === 'web') {
      memory.delete(name);
      return;
    }
    await SecureStore.deleteItemAsync(name);
  },
};

type LocaleState = {
  locale: LocaleCode;
  hydrated: boolean;
  setLocale: (locale: LocaleCode) => void;
  setHydrated: (value: boolean) => void;
};

function detectDeviceLocale(): LocaleCode {
  try {
    const full =
      Intl.DateTimeFormat().resolvedOptions().locale?.toLowerCase() ?? 'en';
    // Filipino often reports as fil-* or tl-* (Tagalog); "fi" alone is Finnish
    if (full.startsWith('fil') || full.startsWith('tl')) return 'fil';
    const raw = full.slice(0, 2);
    if (raw === 'nb' || raw === 'nn') return 'no';
    if (isLocaleCode(raw)) return raw;
  } catch {
    // ignore
  }
  return 'en';
}

export const useLocaleStore = create<LocaleState>()(
  persist(
    (set) => ({
      locale: detectDeviceLocale(),
      hydrated: false,
      setLocale: (locale) => set({ locale }),
      setHydrated: (value) => set({ hydrated: value }),
    }),
    {
      name: 'pocostart-locale',
      storage: createJSONStorage(() => storage),
      partialize: (s) => ({ locale: s.locale }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    },
  ),
);

/** Reactive helper — re-renders when locale changes. */
export function useT() {
  const locale = useLocaleStore((s) => s.locale);
  return catalogs[locale] ?? catalogs.en;
}

export function formatMessage(
  template: string,
  vars: Record<string, string | number>,
) {
  return Object.entries(vars).reduce(
    (acc, [key, value]) => acc.replaceAll(`{${key}}`, String(value)),
    template,
  );
}
