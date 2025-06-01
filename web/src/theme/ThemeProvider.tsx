import { ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { theme } from './Theme';

interface CustomThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: CustomThemeProviderProps) => {
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
};