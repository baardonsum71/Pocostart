import { useMemo, useState } from 'react';
import { ActivityIndicator, Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '@/components/Button';
import { PRICING } from '@/constants/pricing';
import { isRevenueCatConfigured } from '@/lib/revenueCat';
import { formatMessage, useT } from '@/stores/localeStore';
import { useSubscriptionStore } from '@/stores/subscriptionStore';
import { colors, radii, spacing, typography } from '@/theme';

type Plan = 'monthly' | 'yearly';

export default function PaywallScreen() {
  const insets = useSafeAreaInsets();
  const t = useT();
  const [plan, setPlan] = useState<Plan>('yearly');
  const ready = useSubscriptionStore((s) => s.ready);
  const isPurchasing = useSubscriptionStore((s) => s.isPurchasing);
  const purchase = useSubscriptionStore((s) => s.purchase);
  const restore = useSubscriptionStore((s) => s.restore);
  const monthlyPackage = useSubscriptionStore((s) => s.monthlyPackage);
  const yearlyPackage = useSubscriptionStore((s) => s.yearlyPackage);
  const error = useSubscriptionStore((s) => s.error);

  const monthly = monthlyPackage();
  const yearly = yearlyPackage();

  const priceLabel = useMemo(() => {
    if (plan === 'monthly') {
      return monthly?.product.priceString ?? PRICING.monthly.label;
    }
    return yearly?.product.priceString ?? PRICING.yearly.label;
  }, [plan, monthly, yearly]);

  const onBuy = async () => {
    if (!isRevenueCatConfigured()) {
      Alert.alert(t.paywall.devMode, t.paywall.devModeBody);
      return;
    }

    const pkg = plan === 'monthly' ? monthly : yearly;
    if (!pkg) {
      Alert.alert(t.paywall.missingProduct, t.paywall.missingProductBody);
      return;
    }

    const ok = await purchase(pkg);
    if (ok) {
      Alert.alert(t.paywall.welcomePro, t.paywall.welcomeProBody, [
        { text: t.paywall.continue, onPress: () => router.back() },
      ]);
    }
  };

  const onRestore = async () => {
    const ok = await restore();
    Alert.alert(
      ok ? t.paywall.welcomePro : t.paywall.missingProduct,
      ok ? t.paywall.welcomeProBody : t.paywall.missingProductBody,
    );
    if (ok) router.back();
  };

  return (
    <View style={[styles.root, { paddingBottom: insets.bottom + spacing.md }]}>
      <LinearGradient
        colors={['#FFD000', '#FF8A00']}
        style={[styles.hero, { paddingTop: insets.top + spacing.md }]}
      >
        <Pressable onPress={() => router.back()} hitSlop={12}>
          <Text style={styles.close}>{t.common.close}</Text>
        </Pressable>
        <Text style={styles.brand}>{t.paywall.title}</Text>
        <Text style={styles.heroText}>{t.paywall.subtitle}</Text>
      </LinearGradient>

      <View style={styles.body}>
        {t.paywall.features.map((f) => (
          <Text key={f} style={styles.feature}>
            ✓  {f}
          </Text>
        ))}

        <View style={styles.plans}>
          <Pressable
            onPress={() => setPlan('yearly')}
            style={[styles.plan, plan === 'yearly' && styles.planActive]}
          >
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{t.paywall.savings}</Text>
            </View>
            <Text style={styles.planTitle}>{t.paywall.yearly}</Text>
            <Text style={styles.planPrice}>
              {yearly?.product.priceString ?? PRICING.yearly.label}
            </Text>
            <Text style={styles.planMeta}>{PRICING.yearly.monthlyEquivalent}</Text>
          </Pressable>

          <Pressable
            onPress={() => setPlan('monthly')}
            style={[styles.plan, plan === 'monthly' && styles.planActive]}
          >
            <Text style={styles.planTitle}>{t.paywall.monthly}</Text>
            <Text style={styles.planPrice}>
              {monthly?.product.priceString ?? PRICING.monthly.label}
            </Text>
            <Text style={styles.planMeta}>{t.paywall.flexible}</Text>
          </Pressable>
        </View>

        {!ready ? (
          <ActivityIndicator color={colors.brand.red} />
        ) : (
          <Button
            title={formatMessage(t.paywall.continuePrice, { price: priceLabel })}
            loading={isPurchasing}
            onPress={onBuy}
          />
        )}

        <Button title={t.paywall.restore} variant="ghost" onPress={onRestore} />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <Text style={styles.legal}>{t.paywall.legal}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg.canvas,
  },
  hero: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  close: {
    ...typography.label,
    color: colors.brand.navy,
    marginBottom: spacing.md,
  },
  brand: {
    fontSize: 34,
    fontWeight: '900',
    color: colors.brand.navy,
    letterSpacing: -0.8,
  },
  heroText: {
    ...typography.body,
    color: colors.brand.navy,
    marginTop: spacing.xs,
    fontWeight: '600',
  },
  body: {
    flex: 1,
    padding: spacing.lg,
    gap: spacing.sm,
  },
  feature: {
    ...typography.body,
    color: colors.text.primary,
    fontWeight: '600',
  },
  plans: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginVertical: spacing.md,
  },
  plan: {
    flex: 1,
    backgroundColor: colors.bg.elevated,
    borderRadius: radii.lg,
    borderWidth: 2,
    borderColor: colors.border.subtle,
    padding: spacing.md,
    minHeight: 130,
    justifyContent: 'flex-end',
  },
  planActive: {
    borderColor: colors.brand.red,
    backgroundColor: '#FFF5F4',
  },
  badge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: colors.brand.red,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: radii.pill,
  },
  badgeText: {
    color: colors.brand.white,
    fontSize: 11,
    fontWeight: '800',
  },
  planTitle: {
    ...typography.label,
    color: colors.text.secondary,
  },
  planPrice: {
    fontSize: 20,
    fontWeight: '900',
    color: colors.text.primary,
    marginTop: 4,
  },
  planMeta: {
    ...typography.caption,
    marginTop: 2,
  },
  legal: {
    ...typography.caption,
    textAlign: 'center',
    lineHeight: 18,
    marginTop: spacing.sm,
  },
  error: {
    ...typography.caption,
    color: colors.error,
    textAlign: 'center',
  },
});
