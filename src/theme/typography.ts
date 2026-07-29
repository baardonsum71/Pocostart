import { TextStyle } from 'react-native';
import { colors } from './colors';

export const typography = {
  display: {
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: -0.6,
    color: colors.text.primary,
  } satisfies TextStyle,
  title: {
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: -0.3,
    color: colors.text.primary,
  } satisfies TextStyle,
  subtitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text.primary,
  } satisfies TextStyle,
  body: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: colors.text.secondary,
  } satisfies TextStyle,
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text.primary,
  } satisfies TextStyle,
  caption: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text.muted,
  } satisfies TextStyle,
};
