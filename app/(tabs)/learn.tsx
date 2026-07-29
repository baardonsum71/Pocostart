import { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LessonCard } from '@/components/LessonCard';
import { getUnitLessons, getUnits } from '@/content/lessons';
import { formatMessage, useLocaleStore, useT } from '@/stores/localeStore';
import { useProgressStore } from '@/stores/progressStore';
import { useSubscriptionStore } from '@/stores/subscriptionStore';
import { colors, radii, spacing, typography } from '@/theme';

export default function LearnScreen() {
  const insets = useSafeAreaInsets();
  const t = useT();
  const locale = useLocaleStore((s) => s.locale);
  const units = useMemo(() => getUnits(locale), [locale]);
  const isComplete = useProgressStore((s) => s.isLessonComplete);
  const hasAccess = useSubscriptionStore((s) => s.hasAccess);

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={[
        styles.content,
        { paddingTop: insets.top + spacing.md, paddingBottom: insets.bottom + 24 },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>{t.learn.title}</Text>
      <Text style={styles.subtitle}>{t.learn.subtitle}</Text>

      {units.map((unit) => (
        <View key={unit.id} style={styles.unit}>
          <View style={[styles.unitBadge, { backgroundColor: unit.color }]}>
            <Text style={styles.unitBadgeText}>
              {formatMessage(t.learn.unit, { n: unit.order })}
            </Text>
          </View>
          <Text style={styles.unitTitle}>{unit.title}</Text>
          <Text style={styles.unitDesc}>{unit.description}</Text>
          <View style={styles.list}>
            {getUnitLessons(unit.id, locale).map((lesson) => {
              const locked = !lesson.isFree && !hasAccess;
              return (
                <LessonCard
                  key={lesson.id}
                  lesson={lesson}
                  completed={isComplete(lesson.id)}
                  locked={locked}
                  freeLabel={t.common.free}
                  onPress={() => {
                    if (locked) {
                      router.push('/paywall');
                      return;
                    }
                    router.push(`/lesson/${lesson.id}`);
                  }}
                />
              );
            })}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg.canvas },
  content: { paddingHorizontal: spacing.lg, gap: spacing.lg },
  title: { ...typography.display, fontSize: 32 },
  subtitle: { ...typography.body, marginTop: -8 },
  unit: { gap: spacing.sm },
  unitBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radii.pill,
  },
  unitBadgeText: {
    color: colors.brand.white,
    fontWeight: '800',
    fontSize: 12,
  },
  unitTitle: { ...typography.title, fontSize: 22 },
  unitDesc: { ...typography.caption, marginBottom: spacing.xs },
  list: { gap: spacing.sm },
});
