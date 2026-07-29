import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '@/components/Button';
import { ProgressBar } from '@/components/ProgressBar';
import { PronounceCard } from '@/components/PronounceCard';
import { getLesson, getNextLesson } from '@/content/lessons';
import { formatMessage, useLocaleStore, useT } from '@/stores/localeStore';
import { useProgressStore } from '@/stores/progressStore';
import { useSubscriptionStore } from '@/stores/subscriptionStore';
import { colors, radii, spacing, typography } from '@/theme';

type Phase = 'words' | 'speak' | 'quiz' | 'done';

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const t = useT();
  const locale = useLocaleStore((s) => s.locale);
  const lesson = getLesson(String(id), locale);
  const insets = useSafeAreaInsets();
  const markComplete = useProgressStore((s) => s.markLessonComplete);
  const hasAccess = useSubscriptionStore((s) => s.hasAccess);

  const [phase, setPhase] = useState<Phase>('words');
  const [wordIndex, setWordIndex] = useState(0);
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);

  const exercise = useMemo(
    () => (lesson ? lesson.exercises[qIndex] : undefined),
    [lesson, qIndex],
  );

  if (!lesson) {
    return (
      <View style={[styles.root, styles.centered]}>
        <Text style={styles.title}>{t.lesson.notFound}</Text>
        <Button title={t.common.back} onPress={() => router.back()} />
      </View>
    );
  }

  if (!lesson.isFree && !hasAccess) {
    return (
      <View style={[styles.root, styles.centered, { paddingTop: insets.top }]}>
        <Text style={styles.title}>{t.lesson.proTitle}</Text>
        <Text style={styles.subtitle}>{t.lesson.proBody}</Text>
        <Button title={t.lesson.seePlans} onPress={() => router.replace('/paywall')} />
        <Button title={t.common.back} variant="ghost" onPress={() => router.back()} />
      </View>
    );
  }

  const onPick = (option: string) => {
    if (!exercise || selected) return;
    setSelected(option);
    const ok = option === exercise.answer;
    if (ok) {
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setCorrectCount((c) => c + 1);
    } else {
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
  };

  const onNextQuestion = async () => {
    if (!lesson || !exercise) return;
    if (qIndex >= lesson.exercises.length - 1) {
      await markComplete(lesson.id, lesson.xp);
      setPhase('done');
      return;
    }
    setSelected(null);
    setQIndex((i) => i + 1);
  };

  const next = getNextLesson(lesson.id, locale);

  return (
    <View
      style={[
        styles.root,
        { paddingTop: insets.top + spacing.sm, paddingBottom: insets.bottom + spacing.md },
      ]}
    >
      <View style={styles.topBar}>
        <Pressable onPress={() => router.back()} hitSlop={12}>
          <Text style={styles.close}>{t.common.close}</Text>
        </Pressable>
        <Text style={styles.topTitle}>{lesson.title}</Text>
        <View style={{ width: 40 }} />
      </View>

      {phase === 'words' && (
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          <Text style={styles.emoji}>{lesson.emoji}</Text>
          <Text style={styles.title}>{lesson.titleEs}</Text>
          <Text style={styles.subtitle}>{lesson.description}</Text>
          <View style={styles.wordList}>
            {lesson.words.map((w) => (
              <View key={w.es} style={styles.wordRow}>
                <View>
                  <Text style={styles.wordEs}>{w.es}</Text>
                  {w.phonetic ? <Text style={styles.phonetic}>{w.phonetic}</Text> : null}
                </View>
                <Text style={styles.wordNo}>{w.meaning}</Text>
              </View>
            ))}
          </View>
          <Button title={t.speak.practiceInLesson} onPress={() => setPhase('speak')} />
          <Button
            title={t.lesson.startExercises}
            variant="secondary"
            onPress={() => setPhase('quiz')}
          />
        </ScrollView>
      )}

      {phase === 'speak' && lesson && (
        <View style={styles.quiz}>
          <Text style={styles.qMeta}>
            {formatMessage(t.lesson.question, {
              n: wordIndex + 1,
              total: lesson.words.length,
            })}
          </Text>
          <PronounceCard
            phrase={lesson.words[wordIndex].es}
            meaning={lesson.words[wordIndex].meaning}
            phonetic={lesson.words[wordIndex].phonetic}
          />
          <Button
            title={
              wordIndex >= lesson.words.length - 1
                ? t.lesson.startExercises
                : t.speak.nextWord
            }
            onPress={() => {
              if (wordIndex >= lesson.words.length - 1) {
                setPhase('quiz');
                return;
              }
              setWordIndex((i) => i + 1);
            }}
          />
          <Button
            title={t.lesson.startExercises}
            variant="ghost"
            onPress={() => setPhase('quiz')}
          />
        </View>
      )}

      {phase === 'quiz' && exercise && (
        <View style={styles.quiz}>
          <ProgressBar progress={(qIndex + (selected ? 1 : 0)) / lesson.exercises.length} />
          <Text style={styles.qMeta}>
            {formatMessage(t.lesson.question, {
              n: qIndex + 1,
              total: lesson.exercises.length,
            })}
          </Text>
          <Text style={styles.prompt}>{exercise.prompt}</Text>
          <View style={styles.options}>
            {(exercise.options ?? []).map((option) => {
              const show = selected !== null;
              const isCorrect = option === exercise.answer;
              const isSelected = selected === option;
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
          {selected && (
            <Button
              title={
                qIndex >= lesson.exercises.length - 1 ? t.lesson.finish : t.common.next
              }
              onPress={onNextQuestion}
            />
          )}
        </View>
      )}

      {phase === 'done' && (
        <View style={[styles.quiz, styles.centered]}>
          <Text style={styles.emoji}>🎉</Text>
          <Text style={styles.title}>{t.lesson.great}</Text>
          <Text style={styles.subtitle}>
            {formatMessage(t.lesson.correctXp, {
              correct: correctCount,
              total: lesson.exercises.length,
              xp: lesson.xp,
            })}
          </Text>
          {next && (next.isFree || hasAccess) ? (
            <Button
              title={t.lesson.nextLesson}
              onPress={() => router.replace(`/lesson/${next.id}`)}
            />
          ) : next ? (
            <Button title={t.lesson.unlockNext} onPress={() => router.replace('/paywall')} />
          ) : null}
          <Button
            title={t.lesson.backHome}
            variant="secondary"
            onPress={() => router.replace('/(tabs)/home')}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg.canvas,
    paddingHorizontal: spacing.lg,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.md,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  close: {
    ...typography.label,
    color: colors.brand.orange,
  },
  topTitle: {
    ...typography.label,
  },
  scroll: {
    gap: spacing.md,
    paddingBottom: spacing.xl,
  },
  emoji: { fontSize: 48, textAlign: 'center' },
  title: { ...typography.display, fontSize: 30, textAlign: 'center' },
  subtitle: { ...typography.body, textAlign: 'center' },
  wordList: { gap: spacing.sm, marginVertical: spacing.md },
  wordRow: {
    backgroundColor: colors.bg.elevated,
    borderRadius: radii.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border.subtle,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wordEs: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text.primary,
  },
  phonetic: {
    ...typography.caption,
    marginTop: 2,
  },
  wordNo: {
    ...typography.label,
    color: colors.brand.red,
  },
  quiz: {
    flex: 1,
    gap: spacing.md,
  },
  qMeta: { ...typography.caption },
  prompt: { ...typography.title, fontSize: 22 },
  options: { gap: spacing.sm, flex: 1 },
  option: {
    borderWidth: 1.5,
    borderColor: colors.border.subtle,
    borderRadius: radii.md,
    padding: spacing.md,
    backgroundColor: colors.bg.elevated,
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
