import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const baseTheme = createTheme();

const barberiaTheme = createTheme({
  palette: {
    primary: {
      light: '#555555',        // Cinza mais claro
      main: '#333333',        // Cinza escuro (cor principal)
      dark: '#222222',        // Quase preto
      contrastText: '#D7B76C' // Texto dourado
    },
    secondary: {
      light: '#FFF5D1',       // Dourado muito claro
      main: '#D7B76C',        // Dourado principal
      dark: '#D4AF37',        // Dourado mais escuro
      contrastText: '#333333' // Texto cinza escuro
    },
    background: {
      default: '#222222',     // Fundo preto
      paper: '#333333'
    },
    text: {
      primary: '#FFFFFF',    // Texto branco
      secondary: '#D7B76C',   // Texto dourado
      disabled: '#777777'    // Texto cinza
    }
  },  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '4.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#D7B76C', // Dourado para títulos
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '3.5rem',
      },
      [baseTheme.breakpoints.up('lg')]: {
        fontSize: '4rem',
      },
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 600,
      color: '#D7B76C',
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '2.5rem',
      },
      [baseTheme.breakpoints.up('lg')]: {
        fontSize: '3rem',
      },
    },
    h3: {
      fontSize: '2.5rem',
      color: '#D7B76C',
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '2rem',
      },
    },
    body1: {
      fontSize: '1rem',
      color: '#FFFFFF',
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '1.1rem',
      },
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          padding: '8px 22px',
          fontSize: '1rem',
          transition: 'all 0.3s ease',
          [baseTheme.breakpoints.up('md')]: {
            padding: '10px 24px',
            fontSize: '1.05rem',
          },
        },
        containedPrimary: {
          backgroundColor: '#333333',
          color: '#D7B76C',
          '&:hover': {
            backgroundColor: '#222222',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 8px rgba(255, 215, 0, 0.2)'
          }
        },
        containedSecondary: {
          backgroundColor: '#D7B76C',
          color: '#333333',
          '&:hover': {
            backgroundColor: '#D4AF37',
            transform: 'translateY(-2px)'
          }
        },
        outlinedPrimary: {
          borderColor: '#D7B76C',
          color: '#D7B76C',
          '&:hover': {
            backgroundColor: 'rgba(255, 215, 0, 0.1)',
            borderColor: '#D4AF37'
          }
        },
        outlinedSecondary: {
          borderColor: '#555555',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: 'rgba(85, 85, 85, 0.1)',
            borderColor: '#777777'
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#333333',
          color: '#FFFFFF',
          border: '1px solid #D7B76C',
          padding: '16px',
          [baseTheme.breakpoints.up('sm')]: {
            padding: '20px',
          },
          [baseTheme.breakpoints.up('md')]: {
            padding: '24px',
          },
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#222222',
          borderBottom: '1px solid #D7B76C',
          boxShadow: 'none'
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '16px',
          paddingRight: '16px',
          [baseTheme.breakpoints.up('sm')]: {
            paddingLeft: '24px',
            paddingRight: '24px',
          },
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          wordBreak: 'break-word',
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#D7B76C',
          textDecoration: 'none',
          '&:hover': {
            color: '#D4AF37',
            textDecoration: 'underline'
          }
        }
      }
    }
  }
});

export const theme = responsiveFontSizes(barberiaTheme);