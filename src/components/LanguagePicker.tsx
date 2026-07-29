import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LOCALE_OPTIONS } from '@/i18n/locales';
import type { LocaleCode } from '@/i18n/types';
import { useLocaleStore } from '@/stores/localeStore';
import { colors, radii, spacing } from '@/theme';

type Props = {
  compact?: boolean;
  onSelected?: (code: LocaleCode) => void;
};

export function LanguagePicker({ compact, onSelected }: Props) {
  const locale = useLocaleStore((s) => s.locale);
  const setLocale = useLocaleStore((s) => s.setLocale);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.row, compact && styles.rowCompact]}
    >
      {LOCALE_OPTIONS.map((option) => {
        const active = option.code === locale;
        return (
          <Pressable
            key={option.code}
            onPress={() => {
              setLocale(option.code);
              onSelected?.(option.code);
            }}
            style={[styles.chip, active && styles.chipActive, compact && styles.chipCompact]}
          >
            <Text style={styles.flag}>{option.flag}</Text>
            <View>
              <Text style={[styles.name, active && styles.nameActive]}>{option.nativeName}</Text>
              {!compact && (
                <Text style={styles.english}>{option.englishName}</Text>
              )}
            </View>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    gap: spacing.sm,
    paddingVertical: spacing.xs,
  },
  rowCompact: {
    paddingVertical: 0,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.bg.elevated,
    borderWidth: 1.5,
    borderColor: colors.border.subtle,
    borderRadius: radii.lg,
    paddingHorizontal: 12,
    paddingVertical: 10,
    minWidth: 120,
  },
  chipCompact: {
    minWidth: 0,
    paddingVertical: 8,
  },
  chipActive: {
    borderColor: colors.brand.red,
    backgroundColor: '#FFF5F4',
  },
  flag: {
    fontSize: 20,
  },
  name: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.text.primary,
  },
  nameActive: {
    color: colors.brand.red,
  },
  english: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.text.muted,
  },
});
