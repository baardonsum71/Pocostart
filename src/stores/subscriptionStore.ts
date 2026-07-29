import { create } from 'zustand';
import type { PurchasesOfferings, PurchasesPackage } from 'react-native-purchases';
import { getEntitlementId, getPurchases, isRevenueCatConfigured } from '@/lib/revenueCat';

type SubscriptionState = {
  ready: boolean;
  hasAccess: boolean;
  offerings: PurchasesOfferings | null;
  isPurchasing: boolean;
  error: string | null;
  init: (appUserId?: string) => Promise<void>;
  refresh: () => Promise<void>;
  purchase: (pkg: PurchasesPackage) => Promise<boolean>;
  restore: () => Promise<boolean>;
  monthlyPackage: () => PurchasesPackage | undefined;
  yearlyPackage: () => PurchasesPackage | undefined;
};

function hasProAccess(customerInfo: { entitlements: { active: Record<string, unknown> } }) {
  const id = getEntitlementId();
  return Boolean(customerInfo.entitlements.active[id]);
}

export const useSubscriptionStore = create<SubscriptionState>((set, get) => ({
  ready: false,
  hasAccess: false,
  offerings: null,
  isPurchasing: false,
  error: null,

  monthlyPackage: () => {
    const current = get().offerings?.current;
    if (!current) return undefined;
    return (
      current.monthly ??
      current.availablePackages.find((p) =>
        /month|måned|mnd|monthly/i.test(p.product.identifier + p.identifier),
      )
    );
  },

  yearlyPackage: () => {
    const current = get().offerings?.current;
    if (!current) return undefined;
    return (
      current.annual ??
      current.availablePackages.find((p) =>
        /year|år|annual|yearly/i.test(p.product.identifier + p.identifier),
      )
    );
  },

  init: async (appUserId) => {
    if (!isRevenueCatConfigured()) {
      // Without keys: paywall shows display prices; free lessons still work.
      set({
        ready: true,
        hasAccess: false,
        offerings: null,
      });
      return;
    }

    try {
      const Purchases = await getPurchases();
      if (appUserId) {
        await Purchases.logIn(String(appUserId));
      }
      const [customerInfo, offerings] = await Promise.all([
        Purchases.getCustomerInfo(),
        Purchases.getOfferings(),
      ]);
      set({
        ready: true,
        hasAccess: hasProAccess(customerInfo),
        offerings,
        error: null,
      });
    } catch (e) {
      set({
        ready: true,
        hasAccess: false,
        error: e instanceof Error ? e.message : 'Kunne ikke starte abonnement',
      });
    }
  },

  refresh: async () => {
    if (!isRevenueCatConfigured()) return;
    try {
      const Purchases = await getPurchases();
      const customerInfo = await Purchases.getCustomerInfo();
      set({ hasAccess: hasProAccess(customerInfo), error: null });
    } catch (e) {
      set({ error: e instanceof Error ? e.message : 'Oppdatering feilet' });
    }
  },

  purchase: async (pkg) => {
    set({ isPurchasing: true, error: null });
    try {
      const Purchases = await getPurchases();
      const { customerInfo } = await Purchases.purchasePackage(pkg);
      const access = hasProAccess(customerInfo);
      set({ hasAccess: access, isPurchasing: false });
      return access;
    } catch (e: unknown) {
      const cancelled =
        typeof e === 'object' && e !== null && 'userCancelled' in e && (e as { userCancelled?: boolean }).userCancelled;
      set({
        isPurchasing: false,
        error: cancelled ? null : e instanceof Error ? e.message : 'Kjøp feilet',
      });
      return false;
    }
  },

  restore: async () => {
    set({ isPurchasing: true, error: null });
    try {
      const Purchases = await getPurchases();
      const customerInfo = await Purchases.restorePurchases();
      const access = hasProAccess(customerInfo);
      set({ hasAccess: access, isPurchasing: false });
      return access;
    } catch (e) {
      set({
        isPurchasing: false,
        error: e instanceof Error ? e.message : 'Gjenoppretting feilet',
      });
      return false;
    }
  },
}));
