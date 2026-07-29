import { Platform, StyleSheet, View } from 'react-native';
import * as AppleAuthentication from 'expo-apple-authentication';
import { useEffect, useState } from 'react';

type Props = {
  onPress: () => void;
  disabled?: boolean;
};

/** Official Apple button — required for reliable Sign in with Apple (esp. iPad). */
export function AppleSignInButton({ onPress, disabled }: Props) {
  const [available, setAvailable] = useState(Platform.OS === 'ios');

  useEffect(() => {
    if (Platform.OS !== 'ios') {
      setAvailable(false);
      return;
    }
    AppleAuthentication.isAvailableAsync()
      .then(setAvailable)
      .catch(() => setAvailable(false));
  }, []);

  if (!available) return null;

  return (
    <View style={[styles.wrap, disabled && styles.disabled]} pointerEvents={disabled ? 'none' : 'auto'}>
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.CONTINUE}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={16}
        style={styles.button}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { width: '100%' },
  disabled: { opacity: 0.5 },
  button: { width: '100%', height: 52 },
});
