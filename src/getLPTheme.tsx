import { PaletteMode } from '@mui/material'
import { ThemeOptions, alpha } from '@mui/material/styles'

export const feltGreen = {
  50: '#EEF6F3',
  100: '#D4E9E1',
  200: '#A8D3C3',
  300: '#6DB49B',
  400: '#2E8B6E',
  500: '#196B52',
  600: '#0F4C3A',
  700: '#0B3A2C',
  800: '#082B20',
  900: '#051E16',
}

export const appCyan = {
  50: '#ECFEFF',
  100: '#CFFAFE',
  200: '#A5F3FC',
  300: '#67E8F9',
  400: '#2CC5D8',
  500: '#0891B2',
  600: '#0E7490',
  700: '#155E75',
  800: '#164E63',
  900: '#083344',
}

export const slateInk = {
  50: '#F7F8F5',
  100: '#EEF3F0',
  200: '#DCE5E0',
  300: '#C2D0C8',
  400: '#8FA399',
  500: '#5C7067',
  600: '#4B5D56',
  700: '#31403A',
  800: '#1C2924',
  900: '#14201C',
}

export default function getLPTheme(mode: PaletteMode): ThemeOptions {
  return {
    palette: {
      mode,
      primary: {
        light: feltGreen[400],
        main: feltGreen[600],
        dark: feltGreen[800],
        contrastText: '#FFFFFF',
      },
      secondary: {
        light: appCyan[400],
        main: appCyan[500],
        dark: appCyan[700],
        contrastText: '#FFFFFF',
      },
      background: {
        default: slateInk[50],
        paper: '#FFFFFF',
      },
      text: {
        primary: slateInk[900],
        secondary: slateInk[600],
      },
      divider: alpha(feltGreen[600], 0.12),
    },
    shape: {
      borderRadius: 14,
    },
    typography: {
      fontFamily: [
        '"Plus Jakarta Sans"',
        '"Noto Sans JP"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Hiragino Sans"',
        'sans-serif',
      ].join(','),
      h1: {
        fontSize: 'clamp(2rem, 4.2vw, 3.35rem)',
        fontWeight: 800,
        lineHeight: 1.24,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontSize: 'clamp(1.65rem, 3vw, 2.35rem)',
        fontWeight: 800,
        lineHeight: 1.3,
        letterSpacing: '-0.015em',
      },
      h3: {
        fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
        fontWeight: 700,
        lineHeight: 1.4,
        letterSpacing: '-0.01em',
      },
      h4: {
        fontSize: '1.2rem',
        fontWeight: 700,
        lineHeight: 1.45,
      },
      subtitle1: {
        fontSize: '1.05rem',
        fontWeight: 500,
        lineHeight: 1.75,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.8,
        letterSpacing: '0.015em',
      },
      body2: {
        fontSize: '0.925rem',
        lineHeight: 1.75,
        letterSpacing: '0.015em',
      },
      button: {
        textTransform: 'none',
        fontWeight: 700,
        letterSpacing: '0.02em',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: slateInk[50],
            color: slateInk[900],
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            borderRadius: 999,
            padding: '10px 22px',
            transition: 'all 180ms cubic-bezier(0.2, 0.8, 0.2, 1)',
          },
          containedPrimary: {
            backgroundColor: feltGreen[600],
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: feltGreen[700],
              transform: 'translateY(-1px)',
              boxShadow: `0 10px 24px ${alpha(feltGreen[600], 0.24)}`,
            },
          },
          outlinedPrimary: {
            borderColor: alpha(feltGreen[600], 0.35),
            color: feltGreen[700],
            '&:hover': {
              borderColor: feltGreen[600],
              backgroundColor: alpha(feltGreen[600], 0.05),
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            border: `1px solid ${alpha(feltGreen[600], 0.12)}`,
            boxShadow: `0 12px 32px ${alpha(slateInk[900], 0.05)}`,
          },
        },
      },
      MuiAccordion: {
        defaultProps: {
          disableGutters: true,
          elevation: 0,
        },
        styleOverrides: {
          root: {
            borderRadius: '16px !important',
            border: `1px solid ${alpha(feltGreen[600], 0.14)}`,
            backgroundColor: '#FFFFFF',
            marginBottom: 14,
            overflow: 'hidden',
            transition: 'border-color 180ms ease, box-shadow 180ms ease',
            '&:before': {
              display: 'none',
            },
            '&:hover': {
              borderColor: alpha(feltGreen[600], 0.3),
            },
            '&.Mui-expanded': {
              borderColor: feltGreen[600],
              boxShadow: `0 12px 28px ${alpha(feltGreen[600], 0.08)}`,
            },
          },
        },
      },
      MuiLink: {
        defaultProps: {
          underline: 'hover',
        },
        styleOverrides: {
          root: {
            color: appCyan[600],
            fontWeight: 600,
          },
        },
      },
    },
  }
}
