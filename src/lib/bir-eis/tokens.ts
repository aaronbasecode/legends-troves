// Design System Tokens for BIR EIS Bridge System
// Palette extracted strictly from user specification and attached images

export const PALETTE = {
  // Grayscale Palette (Attachment 2)
  black: '#000000',
  gray900: '#161616',
  gray800: '#262626',
  gray700: '#393939',
  gray600: '#525252',
  gray500: '#6F6F6F',
  gray400: '#8D8D8D',
  gray300: '#A8A8A8',
  gray200: '#C6C6C6',
  gray100: '#E0E0E0',
  gray50: '#F4F4F4',
  white: '#FFFFFF',

  // Charts Palette (Attachment 1)
  charts: {
    row1: [
      '#3344B4', // Deep Royal Blue
      '#883AB0', // Purple
      '#BE2C9F', // Magenta Violet
      '#E62788', // Vivid Rose
      '#FF3B6B', // Coral Pink
      '#FE5D4D', // Salmon Red
      '#FF822E', // Tangerine
      '#FFA504', // Amber Gold
    ],
    row2: [
      '#1769BD', // Ocean Blue
      '#347FCC', // Cobalt Blue
      '#3495D2', // Cerulean
      '#2EB9DC', // Sky Cyan
      '#42BBB2', // Aqua Teal
      '#48C488', // Mint Emerald
      '#75C95F', // Fresh Green
      '#B4CC47', // Chartreuse Lime
    ],
  },
} as const;

// Typography Scale (Inter: 12px, 14px, 16px, 18px, 20px, 24px in 400, 500, 600)
export const TYPOGRAPHY = {
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  sizes: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
  },
} as const;
