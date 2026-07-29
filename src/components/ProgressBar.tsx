import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, radii } from '@/theme';

type Props = {
  progress: number;
  height?: number;
};

export function ProgressBar({ progress, height = 10 }: Props) {
  const clamped = Math.max(0, Math.min(1, progress));
  return (
    <View style={[styles.track, { height, borderRadius: height }]}>
      <LinearGradient
        colors={['#FFD000', '#FF8A00', '#E53935']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={[styles.fill, { width: `${clamped * 100}%`, borderRadius: height }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: '100%',
    backgroundColor: colors.bg.muted,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
  },
});
