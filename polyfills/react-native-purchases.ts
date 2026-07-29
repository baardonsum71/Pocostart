/** Expo Go-safe stub — real SDK loads in production EAS builds via metro.config.js */

const noopAsync = async () => undefined;

export const LOG_LEVEL = {
  VERBOSE: 'VERBOSE',
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
  SILENT: 'SILENT',
} as const;

const Purchases = {
  configure: noopAsync,
  setLogLevel: () => undefined,
  logIn: async (appUserID: string) => ({
    customerInfo: emptyCustomerInfo(appUserID),
    created: false,
  }),
  logOut: async () => emptyCustomerInfo('anonymous'),
  getOfferings: async () => ({ current: null, all: {} }),
  getCustomerInfo: async () => emptyCustomerInfo('expo-go'),
  purchasePackage: async () => {
    throw Object.assign(new Error('Purchases not available in Expo Go. Use an EAS build.'), {
      userCancelled: false,
    });
  },
  restorePurchases: async () => emptyCustomerInfo('expo-go'),
};

function emptyCustomerInfo(originalAppUserId: string) {
  return {
    entitlements: { active: {}, all: {} },
    activeSubscriptions: [],
    allPurchasedProductIdentifiers: [],
    latestExpirationDate: null,
    firstSeen: new Date().toISOString(),
    originalAppUserId,
    requestDate: new Date().toISOString(),
    allExpirationDates: {},
    allPurchaseDates: {},
    originalApplicationVersion: null,
    originalPurchaseDate: null,
    managementURL: null,
    nonSubscriptionTransactions: [],
  };
}

export default Purchases;
