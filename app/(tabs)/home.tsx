import { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '@/components/Button';
import { ProgressBar } from '@/components/ProgressBar';
import { StatChip } from '@/components/StatChip';
import { getLessons } from '@/content/lessons';
import { useAuthStore } from '@/stores/authStore';
import { formatMessage, useLocaleStore, useT } from '@/stores/localeStore';
import { useProgressStore } from '@/stores/progressStore';
import { useSubscriptionStore } from '@/stores/subscriptionStore';
import { colors, radii, spacing, typography } from '@/theme';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const t = useT();
  const locale = useLocaleStore((s) => s.locale);
  const lessons = useMemo(() => getLessons(locale), [locale]);
  const user = useAuthStore((s) => s.user);
  const xp = useProgressStore((s) => s.xp);
  const streak = useProgressStore((s) => s.streak);
  const completedCount = useProgressStore((s) => s.completedCount());
  const isComplete = useProgressStore((s) => s.isLessonComplete);
  const hasAccess = useSubscriptionStore((s) => s.hasAccess);

  const nextLesson =
    lessons.find((l) => !isComplete(l.id) && (l.isFree || hasAccess)) ??
    lessons.find((l) => !isComplete(l.id)) ??
    lessons[0];

  const progress = completedCount / lessons.length;
  const firstName = user?.name?.split(' ')[0];

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={[
        styles.content,
        { paddingTop: insets.top + spacing.md, paddingBottom: insets.bottom + 24 },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>
            {firstName
              ? formatMessage(t.home.greetingNamed, { name: firstName })
              : t.home.greeting}
          </Text>
          <Text style={styles.brand}>poco start</Text>
        </View>
        {!hasAccess && (
          <Pressable style={styles.proPill} onPress={() => router.push('/paywall')}>
            <Text style={styles.proText}>{t.common.pro}</Text>
          </Pressable>
        )}
      </View>

      <LinearGradient
        colors={['#FFD000', '#FF8A00']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.heroCard}
      >
        <Text style={styles.heroEyebrow}>{t.home.nextLesson}</Text>
        <Text style={styles.heroTitle}>
          {nextLesson.emoji} {nextLesson.title}
        </Text>
        <Text style={styles.heroBody}>{nextLesson.description}</Text>
        <Button
          title={t.home.continueCta}
          onPress={() => {
            if (!nextLesson.isFree && !hasAccess) {
              router.push('/paywall');
              return;
            }
            router.push(`/lesson/${nextLesson.id}`);
          }}
          style={styles.heroCta}
        />
      </LinearGradient>

      <View style={styles.statsRow}>
        <StatChip icon="🔥" label={t.home.streak} value={streak} />
        <StatChip icon="⭐" label={t.home.xp} value={xp} />
        <StatChip
          icon="📚"
          label={t.home.done}
          value={`${completedCount}/${lessons.length}`}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t.home.progress}</Text>
        <View style={styles.progressCard}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>{t.home.courseCompletion}</Text>
            <Text style={styles.progressPct}>{Math.round(progress * 100)}%</Text>
          </View>
          <ProgressBar progress={progress} />
        </View>
      </View>

      {!hasAccess && (
        <Pressable style={styles.upsell} onPress={() => router.push('/paywall')}>
          <Text style={styles.upsellTitle}>{t.home.unlockTitle}</Text>
          <Text style={styles.upsellBody}>{t.home.unlockBody}</Text>
        </Pressable>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg.canvas },
  content: { paddingHorizontal: spacing.lg, gap: spacing.lg },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  greeting: {
    ...typography.body,
    color: colors.text.secondary,
  },
  brand: {
    ...typography.display,
    fontSize: 32,
    marginTop: 2,
  },
  proPill: {
    backgroundColor: colors.brand.navy,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: radii.pill,
  },
  proText: {
    color: colors.brand.white,
    fontWeight: '800',
  },
  heroCard: {
    borderRadius: radii.xl,
    padding: spacing.lg,
    gap: spacing.sm,
  },
  heroEyebrow: {
    color: 'rgba(26,39,68,0.7)',
    fontWeight: '700',
    fontSize: 13,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: colors.brand.navy,
    letterSpacing: -0.4,
  },
  heroBody: {
    ...typography.body,
    color: colors.brand.navy,
    marginBottom: spacing.sm,
  },
  heroCta: {
    backgroundColor: colors.brand.navy,
  },
  statsRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  section: {
    gap: spacing.sm,
  },
  sectionTitle: {
    ...typography.subtitle,
  },
  progressCard: {
    backgroundColor: colors.bg.elevated,
    borderRadius: radii.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border.subtle,
    gap: spacing.sm,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabel: {
    ...typography.label,
  },
  progressPct: {
    ...typography.label,
    color: colors.brand.orange,
  },
  upsell: {
    backgroundColor: colors.bg.soft,
    borderRadius: radii.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border.subtle,
  },
  upsellTitle: {
    ...typography.subtitle,
    fontSize: 16,
  },
  upsellBody: {
    ...typography.caption,
    marginTop: 4,
  },
});
