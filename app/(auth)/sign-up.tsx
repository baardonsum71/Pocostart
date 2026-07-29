import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '@/components/Button';
import { AppleSignInButton } from '@/components/AppleSignInButton';
import { LanguagePicker } from '@/components/LanguagePicker';
import { useAuthStore } from '@/stores/authStore';
import { useLocaleStore, useT } from '@/stores/localeStore';
import { colors, radii, spacing, typography } from '@/theme';

export default function SignUpScreen() {
  const insets = useSafeAreaInsets();
  const t = useT();
  const locale = useLocaleStore((s) => s.locale);
  const signUpWithEmail = useAuthStore((s) => s.signUpWithEmail);
  const signInWithApple = useAuthStore((s) => s.signInWithApple);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (password.length < 6) {
      Alert.alert(t.auth.password, t.auth.passwordShort);
      return;
    }
    setLoading(true);
    try {
      await signUpWithEmail(email.trim(), password, name.trim(), locale);
      router.replace('/(tabs)/home');
    } catch (e) {
      Alert.alert(t.auth.signUpFailed, e instanceof Error ? e.message : t.common.tryAgain);
    } finally {
      setLoading(false);
    }
  };

  const onApple = async () => {
    setLoading(true);
    try {
      await signInWithApple();
      router.replace('/(tabs)/home');
    } catch (e) {
      if (e instanceof Error && e.message === 'CANCELLED') return;
      Alert.alert(t.auth.appleFailed, e instanceof Error ? e.message : t.common.tryAgain);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={[
        styles.root,
        { paddingTop: insets.top + spacing.md, paddingBottom: insets.bottom + spacing.md },
      ]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Pressable onPress={() => router.back()} hitSlop={12}>
        <Text style={styles.back}>← {t.common.back}</Text>
      </Pressable>

      <Text style={styles.title}>{t.auth.signUpTitle}</Text>
      <Text style={styles.subtitle}>{t.auth.signUpSubtitle}</Text>

      <Text style={styles.langLabel}>{t.auth.languageLabel}</Text>
      <LanguagePicker compact />

      <View style={styles.form}>
        <TextInput
          placeholder={t.auth.name}
          placeholderTextColor={colors.text.muted}
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
          placeholder={t.auth.email}
          placeholderTextColor={colors.text.muted}
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          secureTextEntry
          placeholder={t.auth.password}
          placeholderTextColor={colors.text.muted}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <Button title={t.auth.createAccount} loading={loading} onPress={onSubmit} />
        <AppleSignInButton disabled={loading} onPress={onApple} />
      </View>

      <Pressable onPress={() => router.replace('/(auth)/sign-in')}>
        <Text style={styles.switch}>{t.auth.switchToSignIn}</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.bg.canvas,
  },
  back: {
    ...typography.label,
    color: colors.brand.orange,
    marginBottom: spacing.lg,
  },
  title: {
    ...typography.display,
    fontSize: 30,
  },
  subtitle: {
    ...typography.body,
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  langLabel: {
    ...typography.label,
    marginBottom: spacing.sm,
  },
  form: {
    gap: spacing.md,
    marginTop: spacing.md,
  },
  input: {
    backgroundColor: colors.bg.elevated,
    borderWidth: 1.5,
    borderColor: colors.border.subtle,
    borderRadius: radii.md,
    paddingHorizontal: spacing.md,
    paddingVertical: 16,
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
  },
  switch: {
    ...typography.label,
    textAlign: 'center',
    marginTop: spacing.xl,
    color: colors.text.secondary,
  },
});
