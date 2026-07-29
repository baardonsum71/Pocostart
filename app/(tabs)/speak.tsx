import { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '@/components/Button';
import { PronounceCard } from '@/components/PronounceCard';
import { getLessons } from '@/content/lessons';
import { useLocaleStore, useT } from '@/stores/localeStore';
import { useProgressStore } from '@/stores/progressStore';
import { useSubscriptionStore } from '@/stores/subscriptionStore';
import { colors, spacing, typography } from '@/theme';

export default function SpeakScreen() {
  const insets = useSafeAreaInsets();
  const t = useT();
  const locale = useLocaleStore((s) => s.locale);
  const completed = useProgressStore((s) => s.completedLessonIds);
  const hasAccess = useSubscriptionStore((s) => s.hasAccess);

  const phrases = useMemo(() => {
    const lessons = getLessons(locale).filter(
      (l) => l.isFree || hasAccess || completed.includes(l.id),
    );
    return lessons.flatMap((l) =>
      l.words.map((w) => ({
        key: `${l.id}-${w.es}`,
        phrase: w.es,
        meaning: w.meaning,
        phonetic: w.phonetic,
      })),
    );
  }, [locale, hasAccess, completed]);

  const [index, setIndex] = useState(0);
  const current = phrases[index % Math.max(phrases.length, 1)];

  if (phrases.length === 0) {
    return (
      <View style={[styles.root, styles.centered, { paddingTop: insets.top }]}>
        <Text style={styles.title}>{t.speak.title}</Text>
        <Text style={styles.subtitle}>{t.practice.emptyBody}</Text>
      </View>
    );
  }

  return (
    <View
      style={[
        styles.root,
        { paddingTop: insets.top + spacing.md, paddingBottom: insets.bottom + spacing.md },
      ]}
    >
      <Text style={styles.title}>{t.speak.title}</Text>
      <Text style={styles.subtitle}>{t.speak.subtitle}</Text>
      <Text style={styles.counter}>
        {index + 1} / {phrases.length}
      </Text>

      <PronounceCard
        phrase={current.phrase}
        meaning={current.meaning}
        phonetic={current.phonetic}
      />

      <Button
        title={t.speak.nextWord}
        variant="secondary"
        onPress={() => setIndex((i) => (i + 1) % phrases.length)}
      />
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
  counter: {
    ...typography.caption,
    fontWeight: '800',
  },
});
