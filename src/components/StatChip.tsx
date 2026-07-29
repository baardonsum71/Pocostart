import { StyleSheet, Text, View } from 'react-native';
import { colors, radii, spacing } from '@/theme';

type Props = {
  icon: string;
  label: string;
  value: string | number;
};

export function StatChip({ icon, label, value }: Props) {
  return (
    <View style={styles.chip}>
      <Text style={styles.icon}>{icon}</Text>
      <View>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.bg.elevated,
    borderRadius: radii.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderWidth: 1,
    borderColor: colors.border.subtle,
  },
  icon: {
    fontSize: 22,
  },
  value: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text.primary,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text.muted,
  },
});
