import { useMediaQuery } from '@mui/material';
import { theme } from '../theme/Theme';

export const useResponsive = () => {
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLg = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const isXl = useMediaQuery(theme.breakpoints.up('xl'));

  return {
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    isMobile: isXs,
    isTablet: isSm || isMd,
    isDesktop: isLg || isXl,
    currentBreakpoint: isXs ? 'xs' : isSm ? 'sm' : isMd ? 'md' : isLg ? 'lg' : 'xl'
  };
};