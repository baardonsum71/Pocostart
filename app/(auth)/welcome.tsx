import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '@/components/Button';
import { LanguagePicker } from '@/components/LanguagePicker';
import { useAuthStore } from '@/stores/authStore';
import { useT } from '@/stores/localeStore';
import { colors, spacing, typography } from '@/theme';

export default function WelcomeScreen() {
  const insets = useSafeAreaInsets();
  const t = useT();

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={['#FFD000', '#FF8A00', '#E53935']}
        locations={[0, 0.55, 1]}
        style={StyleSheet.absoluteFill}
      />

      <View
        style={[
          styles.content,
          { paddingTop: insets.top + spacing.md, paddingBottom: insets.bottom + spacing.lg },
        ]}
      >
        <View>
          <Text style={styles.langLabel}>{t.welcome.chooseLanguage}</Text>
          <LanguagePicker compact />
        </View>

        <View style={styles.hero}>
          <View style={styles.iconBubble}>
            <Image source={require('../../assets/icon.png')} style={styles.icon} />
          </View>
          <Text style={styles.brand}>poco start</Text>
          <Text style={styles.tagline}>{t.welcome.tagline}</Text>
        </View>

        <View style={styles.actions}>
          <Button title={t.welcome.getStarted} onPress={() => router.push('/(auth)/sign-up')} />
          <Button
            title={t.welcome.haveAccount}
            variant="secondary"
            onPress={() => router.push('/(auth)/sign-in')}
            style={styles.secondaryBtn}
          />
          <Pressable
            onPress={() => {
              useAuthStore.getState().continueAsGuest();
              router.replace('/(tabs)/home');
            }}
            style={styles.guestBtn}
          >
            <Text style={styles.guestText}>{t.welcome.tryGuest}</Text>
          </Pressable>
          <Text style={styles.legal}>{t.welcome.legal}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    justifyContent: 'space-between',
  },
  langLabel: {
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '800',
    marginBottom: spacing.sm,
    fontSize: 13,
  },
  hero: {
    alignItems: 'center',
  },
  iconBubble: {
    width: 120,
    height: 120,
    borderRadius: 30,
    overflow: 'hidden',
    shadowColor: '#1A2744',
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 8,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  brand: {
    marginTop: spacing.lg,
    fontSize: 40,
    fontWeight: '900',
    color: colors.brand.white,
    letterSpacing: -1,
  },
  tagline: {
    ...typography.body,
    color: 'rgba(255,255,255,0.92)',
    textAlign: 'center',
    marginTop: spacing.sm,
    maxWidth: 300,
    fontWeight: '600',
  },
  actions: {
    gap: spacing.sm,
  },
  secondaryBtn: {
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderColor: 'transparent',
  },
  guestBtn: {
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },
  guestText: {
    color: 'rgba(255,255,255,0.95)',
    fontWeight: '700',
    fontSize: 16,
  },
  legal: {
    ...typography.caption,
    color: 'rgba(255,255,255,0.85)',
    textAlign: 'center',
    marginTop: spacing.sm,
  },
});
