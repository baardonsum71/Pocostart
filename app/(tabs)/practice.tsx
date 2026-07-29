import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Button } from '@/components/Button';
import { getLessons } from '@/content/lessons';
import { formatMessage, useLocaleStore, useT } from '@/stores/localeStore';
import { useProgressStore } from '@/stores/progressStore';
import { useSubscriptionStore } from '@/stores/subscriptionStore';
import { colors, radii, spacing, typography } from '@/theme';

export default function PracticeScreen() {
  const insets = useSafeAreaInsets();
  const t = useT();
  const locale = useLocaleStore((s) => s.locale);
  const completed = useProgressStore((s) => s.completedLessonIds);
  const hasAccess = useSubscriptionStore((s) => s.hasAccess);

  const pool = useMemo(() => {
    const source = getLessons(locale).filter(
      (l) => l.isFree || hasAccess || completed.includes(l.id),
    );
    return source.flatMap((l) => l.exercises.map((e) => ({ ...e, lessonTitle: l.title })));
  }, [completed, hasAccess, locale]);

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const exercise = pool[index % Math.max(pool.length, 1)];

  if (pool.length === 0) {
    return (
      <View style={[styles.root, styles.centered, { paddingTop: insets.top }]}>
        <Text style={styles.title}>{t.practice.emptyTitle}</Text>
        <Text style={styles.subtitle}>{t.practice.emptyBody}</Text>
        <Button title={t.practice.goLearn} onPress={() => router.push('/(tabs)/learn')} />
      </View>
    );
  }

  const onPick = (option: string) => {
    if (selected) return;
    setSelected(option);
    const correct = option === exercise.answer;
    if (correct) {
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setScore((s) => s + 1);
    } else {
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
  };

  const next = () => {
    setSelected(null);
    setIndex((i) => i + 1);
  };

  return (
    <View
      style={[
        styles.root,
        { paddingTop: insets.top + spacing.md, paddingBottom: insets.bottom + spacing.md },
      ]}
    >
      <Text style={styles.title}>{t.practice.title}</Text>
      <Text style={styles.subtitle}>
        {formatMessage(t.practice.score, { score, lesson: exercise.lessonTitle })}
      </Text>

      <View style={styles.card}>
        <Text style={styles.prompt}>{exercise.prompt}</Text>
        <View style={styles.options}>
          {(exercise.options ?? []).map((option) => {
            const isSelected = selected === option;
            const isCorrect = option === exercise.answer;
            const show = selected !== null;
            return (
              <Pressable
                key={option}
                onPress={() => onPick(option)}
                style={[
                  styles.option,
                  show && isCorrect && styles.optionCorrect,
                  show && isSelected && !isCorrect && styles.optionWrong,
                ]}
              >
                <Text style={styles.optionText}>{option}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      {selected && <Button title={t.practice.next} onPress={next} />}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg.canvas,
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { ...typography.display, fontSize: 32 },
  subtitle: { ...typography.body },
  card: {
    flex: 1,
    backgroundColor: colors.bg.elevated,
    borderRadius: radii.xl,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border.subtle,
    gap: spacing.lg,
  },
  prompt: {
    ...typography.title,
    fontSize: 22,
  },
  options: { gap: spacing.sm },
  option: {
    borderWidth: 1.5,
    borderColor: colors.border.subtle,
    borderRadius: radii.md,
    padding: spacing.md,
    backgroundColor: colors.bg.soft,
  },
  optionCorrect: {
    borderColor: colors.success,
    backgroundColor: '#E8F7EF',
  },
  optionWrong: {
    borderColor: colors.error,
    backgroundColor: '#FDECEC',
  },
  optionText: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.text.primary,
  },
});
