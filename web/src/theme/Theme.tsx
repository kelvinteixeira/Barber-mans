import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const baseTheme = createTheme();

const barberiaTheme = createTheme({
  palette: {
    primary: {
      light: '#555555',
      main: '#333333',
      dark: '#222222',
      contrastText: '#D7B76C'
    },
    secondary: {
      light: '#FFF5D1',
      main: '#D7B76C',
      dark: '#D4AF37',
      contrastText: '#333333'
    },
    background: {
      default: '#222222',
      paper: '#333333'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#D7B76C',
      disabled: '#777777'
    }
  },
  breakpoints: {
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
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#D7B76C',
      [baseTheme.breakpoints.up('sm')]: {
        fontSize: '3rem',
      },
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '3.5rem',
      },
      [baseTheme.breakpoints.up('lg')]: {
        fontSize: '4rem',
      },
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#D7B76C',
      [baseTheme.breakpoints.up('sm')]: {
        fontSize: '2.25rem',
      },
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '2.5rem',
      },
      [baseTheme.breakpoints.up('lg')]: {
        fontSize: '3rem',
      },
    },
    h3: {
      fontSize: '1.75rem',
      color: '#D7B76C',
      [baseTheme.breakpoints.up('sm')]: {
        fontSize: '1.9rem',
      },
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
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#D7B76C',
            },
            '&:hover fieldset': {
              borderColor: '#D4AF37',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#D7B76C',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#D7B76C',
          },
        }
      }
    }
  }
});

export const theme = responsiveFontSizes(barberiaTheme);