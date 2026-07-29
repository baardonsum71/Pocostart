/** Display prices in NOK — App Store / Play Store are source of truth at checkout. */
export const PRICING = {
  monthly: {
    amountNok: 49,
    label: '49 kr / mnd',
    period: 'månedlig' as const,
    productHint: 'pocostart_monthly',
  },
  yearly: {
    amountNok: 399,
    label: '399 kr / år',
    period: 'årlig' as const,
    productHint: 'pocostart_yearly',
    savingsLabel: 'Spar 189 kr',
    monthlyEquivalent: '33 kr / mnd',
  },
} as const;

export const FREE_LESSON_LIMIT = 2;
