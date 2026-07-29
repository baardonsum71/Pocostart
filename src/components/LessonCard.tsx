import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { Lesson } from '@/content/lessons';
import { colors, radii, spacing, typography } from '@/theme';

type Props = {
  lesson: Lesson;
  completed: boolean;
  locked: boolean;
  freeLabel?: string;
  onPress: () => void;
};

export function LessonCard({ lesson, completed, locked, freeLabel = 'Free', onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed, locked && styles.locked]}
    >
      <View style={styles.emojiWrap}>
        <Text style={styles.emoji}>{lesson.emoji}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>{lesson.title}</Text>
        <Text style={styles.meta}>
          {lesson.titleEs} · {lesson.xp} XP
          {lesson.isFree ? ` · ${freeLabel}` : ''}
        </Text>
      </View>
      <View style={styles.trailing}>
        {completed ? (
          <Ionicons name="checkmark-circle" size={28} color={colors.success} />
        ) : locked ? (
          <Ionicons name="lock-closed" size={22} color={colors.text.muted} />
        ) : (
          <Ionicons name="chevron-forward" size={22} color={colors.brand.orange} />
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.bg.elevated,
    borderRadius: radii.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border.subtle,
  },
  pressed: {
    opacity: 0.92,
    transform: [{ scale: 0.99 }],
  },
  locked: {
    opacity: 0.72,
  },
  emojiWrap: {
    width: 52,
    height: 52,
    borderRadius: radii.md,
    backgroundColor: colors.bg.soft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 26,
  },
  body: {
    flex: 1,
  },
  title: {
    ...typography.subtitle,
    fontSize: 17,
  },
  meta: {
    ...typography.caption,
    marginTop: 2,
  },
  trailing: {
    width: 32,
    alignItems: 'center',
  },
});
