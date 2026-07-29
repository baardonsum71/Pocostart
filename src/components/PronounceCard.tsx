import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useEffect } from 'react';
import { useSpanishPronunciation } from '@/hooks/useSpanishPronunciation';
import { useT } from '@/stores/localeStore';
import { colors, radii, spacing, typography } from '@/theme';

type Props = {
  phrase: string;
  meaning?: string;
  phonetic?: string;
};

export function PronounceCard({ phrase, meaning, phonetic }: Props) {
  const t = useT();
  const {
    available,
    listening,
    transcript,
    result,
    error,
    playModel,
    startListening,
    stopListening,
    reset,
  } = useSpanishPronunciation();

  useEffect(() => {
    reset();
  }, [phrase, reset]);

  useEffect(() => {
    if (!result) return;
    if (result.grade === 'perfect' || result.grade === 'great') {
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else if (result.grade === 'close') {
      void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } else {
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
  }, [result]);

  const onMic = async () => {
    if (listening) {
      stopListening();
      return;
    }
    await startListening(phrase);
  };

  const gradeLabel =
    result?.grade === 'perfect'
      ? t.speak.perfect
      : result?.grade === 'great'
        ? t.speak.great
        : result?.grade === 'close'
          ? t.speak.close
          : result
            ? t.speak.tryAgain
            : null;

  const gradeColor =
    result?.grade === 'perfect' || result?.grade === 'great'
      ? colors.success
      : result?.grade === 'close'
        ? colors.warning
        : colors.error;

  return (
    <View style={styles.card}>
      <Text style={styles.phrase}>{phrase}</Text>
      {meaning ? <Text style={styles.meaning}>{meaning}</Text> : null}
      {phonetic ? <Text style={styles.phonetic}>{phonetic}</Text> : null}

      <View style={styles.actions}>
        <Pressable
          style={styles.secondaryBtn}
          onPress={() => playModel(phrase)}
          accessibilityRole="button"
          accessibilityLabel={t.speak.listen}
        >
          <Ionicons name="volume-high" size={22} color={colors.brand.navy} />
          <Text style={styles.secondaryLabel}>{t.speak.listen}</Text>
        </Pressable>

        <Pressable
          style={[styles.micBtn, listening && styles.micBtnActive]}
          onPress={onMic}
          disabled={available === false}
          accessibilityRole="button"
          accessibilityLabel={listening ? t.speak.stop : t.speak.tapToSpeak}
        >
          <Ionicons
            name={listening ? 'stop' : 'mic'}
            size={28}
            color={colors.brand.white}
          />
        </Pressable>
      </View>

      <Text style={styles.hint}>
        {listening ? t.speak.listening : t.speak.tapToSpeak}
      </Text>

      {available === false && (
        <Text style={styles.error}>{t.speak.unavailable}</Text>
      )}
      {error === 'permission' && (
        <Text style={styles.error}>{t.speak.permissionDenied}</Text>
      )}
      {error && error !== 'permission' && error !== 'unavailable' && (
        <Text style={styles.error}>{t.speak.errorGeneric}</Text>
      )}

      {transcript ? (
        <Text style={styles.heard}>
          {t.speak.youSaid}: <Text style={styles.heardValue}>«{transcript}»</Text>
        </Text>
      ) : null}

      {result && gradeLabel ? (
        <View style={[styles.result, { borderColor: gradeColor }]}>
          <Text style={[styles.score, { color: gradeColor }]}>
            {result.score}% · {gradeLabel}
          </Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.bg.elevated,
    borderRadius: radii.xl,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border.subtle,
    gap: spacing.sm,
    alignItems: 'center',
  },
  phrase: {
    fontSize: 32,
    fontWeight: '900',
    color: colors.text.primary,
    textAlign: 'center',
    letterSpacing: -0.4,
  },
  meaning: {
    ...typography.body,
    textAlign: 'center',
  },
  phonetic: {
    ...typography.caption,
    textAlign: 'center',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginTop: spacing.md,
  },
  secondaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.bg.soft,
    borderRadius: radii.lg,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: colors.border.subtle,
  },
  secondaryLabel: {
    fontWeight: '800',
    color: colors.brand.navy,
  },
  micBtn: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.brand.red,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.brand.red,
    shadowOpacity: 0.35,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  micBtnActive: {
    backgroundColor: colors.brand.navy,
    transform: [{ scale: 1.05 }],
  },
  hint: {
    ...typography.caption,
    marginTop: spacing.xs,
  },
  heard: {
    ...typography.label,
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
  heardValue: {
    color: colors.text.primary,
    fontWeight: '800',
  },
  result: {
    marginTop: spacing.sm,
    borderWidth: 2,
    borderRadius: radii.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.bg.soft,
  },
  score: {
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
  },
  error: {
    ...typography.caption,
    color: colors.error,
    textAlign: 'center',
  },
});
