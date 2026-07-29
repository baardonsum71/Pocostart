import { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Redirect } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuthStore } from '@/stores/authStore';
import { colors } from '@/theme';

export default function Index() {
  const ready = useAuthStore((s) => s.ready);
  const session = useAuthStore((s) => s.session);
  const isGuest = useAuthStore((s) => s.isGuest);

  useEffect(() => {
    // splash hide handled in root layout
  }, []);

  if (!ready) {
    return (
      <LinearGradient colors={['#FFD000', '#FF8A00']} style={styles.loading}>
        <ActivityIndicator color={colors.brand.white} size="large" />
      </LinearGradient>
    );
  }

  if (!session && !isGuest) {
    return <Redirect href="/(auth)/welcome" />;
  }

  return <Redirect href="/(tabs)/home" />;
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
