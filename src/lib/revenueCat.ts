import { Platform } from 'react-native';

export function getRevenueCatAPIKey(): string | undefined {
  if (process.env.EXPO_PUBLIC_CREATE_ENV === 'DEVELOPMENT') {
    return process.env.EXPO_PUBLIC_REVENUE_CAT_TEST_STORE_API_KEY;
  }
  return (
    Platform.select({
      ios: process.env.EXPO_PUBLIC_REVENUE_CAT_APP_STORE_API_KEY,
      android: process.env.EXPO_PUBLIC_REVENUE_CAT_PLAY_STORE_API_KEY,
      default: process.env.EXPO_PUBLIC_REVENUE_CAT_TEST_STORE_API_KEY,
    }) ?? undefined
  );
}

export function isRevenueCatConfigured() {
  return Boolean(getRevenueCatAPIKey());
}

export function getEntitlementId() {
  return process.env.EXPO_PUBLIC_REVENUE_CAT_ENTITLEMENT_ID || 'poco start Pro';
}

let configured = false;

/** Lazy-load Purchases so Expo Go can run without crashing. */
export async function getPurchases() {
  const apiKey = getRevenueCatAPIKey();
  if (!apiKey) {
    throw new Error('RevenueCat er ikke konfigurert. Sett API-nøkler i .env');
  }

  const Purchases = (await import('react-native-purchases')).default;
  const { LOG_LEVEL } = await import('react-native-purchases');

  if (!configured) {
    Purchases.setLogLevel(LOG_LEVEL.INFO);
    Purchases.configure({ apiKey });
    configured = true;
  }

  return Purchases;
}
