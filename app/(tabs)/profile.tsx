import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '@/components/Button';
import { LanguagePicker } from '@/components/LanguagePicker';
import { PRICING } from '@/constants/pricing';
import { useAuthStore } from '@/stores/authStore';
import { useProgressStore } from '@/stores/progressStore';
import { useT } from '@/stores/localeStore';
import { useSubscriptionStore } from '@/stores/subscriptionStore';
import { colors, radii, spacing, typography } from '@/theme';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const t = useT();
  const user = useAuthStore((s) => s.user);
  const isGuest = useAuthStore((s) => s.isGuest);
  const signOut = useAuthStore((s) => s.signOut);
  const deleteAccount = useAuthStore((s) => s.deleteAccount);
  const xp = useProgressStore((s) => s.xp);
  const streak = useProgressStore((s) => s.streak);
  const hasAccess = useSubscriptionStore((s) => s.hasAccess);
  const restore = useSubscriptionStore((s) => s.restore);

  const onRestore = async () => {
    const ok = await restore();
    Alert.alert(
      ok ? t.profile.restored : t.profile.noPurchases,
      ok ? t.profile.restoredBody : t.profile.noPurchasesBody,
    );
  };

  const onSignOut = () => {
    Alert.alert(t.profile.signOut, t.profile.signOutConfirm, [
      { text: t.common.cancel, style: 'cancel' },
      {
        text: t.profile.signOut,
        style: 'destructive',
        onPress: async () => {
          await signOut();
          router.replace('/(auth)/welcome');
        },
      },
    ]);
  };

  const onDeleteAccount = () => {
    if (isGuest || !user || user.id === 'guest') {
      Alert.alert(t.profile.deleteAccount, t.profile.deleteGuestBody);
      return;
    }

    Alert.alert(t.profile.deleteAccount, t.profile.deleteAccountConfirm, [
      { text: t.common.cancel, style: 'cancel' },
      {
        text: t.profile.deleteAccountForever,
        style: 'destructive',
        onPress: () => {
          Alert.alert(t.profile.deleteAccountForever, t.profile.deleteAccountFinal, [
            { text: t.common.cancel, style: 'cancel' },
            {
              text: t.profile.deleteAccountForever,
              style: 'destructive',
              onPress: async () => {
                try {
                  await deleteAccount();
                  Alert.alert(t.profile.deletedTitle, t.profile.deletedBody);
                  router.replace('/(auth)/welcome');
                } catch (e) {
                  Alert.alert(
                    t.profile.deleteFailed,
                    e instanceof Error ? e.message : t.common.tryAgain,
                  );
                }
              },
            },
          ]);
        },
      },
    ]);
  };

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={[
        styles.content,
        { paddingTop: insets.top + spacing.md, paddingBottom: insets.bottom + spacing.lg },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>{t.profile.title}</Text>
      <View style={styles.card}>
        <Text style={styles.name}>{user?.name || t.profile.student}</Text>
        <Text style={styles.email}>{user?.email || t.profile.noEmail}</Text>
        <View style={styles.row}>
          <Text style={styles.meta}>
            🔥 {streak} {t.profile.days}
          </Text>
          <Text style={styles.meta}>⭐ {xp} XP</Text>
          <Text style={styles.meta}>{hasAccess ? t.common.pro : t.profile.free}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.section}>{t.profile.language}</Text>
        <LanguagePicker />
      </View>

      <View style={styles.card}>
        <Text style={styles.section}>{t.profile.subscription}</Text>
        <Text style={styles.body}>
          {hasAccess
            ? t.profile.hasPro
            : `${t.profile.noPro} (${PRICING.monthly.label} / ${PRICING.yearly.label})`}
        </Text>
        {!hasAccess && (
          <Button title={t.profile.seePlans} onPress={() => router.push('/paywall')} />
        )}
        <Button title={t.profile.restore} variant="secondary" onPress={onRestore} />
      </View>

      <Button title={t.profile.signOut} variant="ghost" onPress={onSignOut} />
      <Button title={t.profile.deleteAccount} variant="danger" onPress={onDeleteAccount} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg.canvas,
  },
  content: {
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
  },
  title: { ...typography.display, fontSize: 32 },
  card: {
    backgroundColor: colors.bg.elevated,
    borderRadius: radii.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border.subtle,
    gap: spacing.sm,
  },
  name: { ...typography.title, fontSize: 22 },
  email: { ...typography.caption },
  row: { flexDirection: 'row', gap: spacing.md, marginTop: spacing.xs, flexWrap: 'wrap' },
  meta: { ...typography.label, color: colors.text.secondary },
  section: { ...typography.subtitle },
  body: { ...typography.body, marginBottom: spacing.xs },
});
