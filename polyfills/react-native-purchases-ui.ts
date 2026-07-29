/** Expo Go-safe stub for RevenueCat UI */

export const PAYWALL_RESULT = {
  NOT_PRESENTED: 'NOT_PRESENTED',
  ERROR: 'ERROR',
  CANCELLED: 'CANCELLED',
  PURCHASED: 'PURCHASED',
  RESTORED: 'RESTORED',
} as const;

const RevenueCatUI = {
  presentPaywall: async () => PAYWALL_RESULT.NOT_PRESENTED,
  presentPaywallIfNeeded: async () => PAYWALL_RESULT.NOT_PRESENTED,
};

export default RevenueCatUI;
