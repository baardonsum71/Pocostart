export const colors = {
  brand: {
    yellow: '#FFD000',
    orange: '#FF8A00',
    red: '#E53935',
    navy: '#1A2744',
    white: '#FFFFFF',
  },
  bg: {
    canvas: '#FFF8F0',
    elevated: '#FFFFFF',
    soft: '#FFF1E0',
    muted: '#F3E7D8',
  },
  text: {
    primary: '#1A2744',
    secondary: '#5C6B85',
    muted: '#8A97AD',
    inverse: '#FFFFFF',
    accent: '#E53935',
  },
  border: {
    subtle: '#E8D9C8',
    strong: '#D4C0A8',
  },
  success: '#2E9B5E',
  warning: '#F0A202',
  error: '#D64545',
  overlay: 'rgba(26, 39, 68, 0.45)',
} as const;

export const gradients = {
  brand: ['#FFD000', '#FF8A00', '#E53935'] as const,
  hero: ['#FFE566', '#FF9F1C'] as const,
  soft: ['#FFF8F0', '#FFE8CC'] as const,
  card: ['#FFFFFF', '#FFF6EB'] as const,
};
