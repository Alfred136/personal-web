import { useState, useEffect } from 'react';

type screenSizeBreakpoint = 'xs' | 'ss' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const SCREEN_SIZES: Record<screenSizeBreakpoint, string> = {
  xs: '320px',
  ss: '480px',
  sm: '768px',
  md: '1060px',
  lg: '1200px',
  xl: '1440px',
  xxl: '1700px'
};

export const useIsScreenSize = (breakpoint: screenSizeBreakpoint) => {
  const [isScreenSize, setIsScreenSize] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${SCREEN_SIZES[breakpoint]})`);
    setIsScreenSize(mediaQuery.matches);
    const handleResize = (e: MediaQueryListEvent) => setIsScreenSize(e.matches);
    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, [breakpoint]);

  return {
    isScreenSize
  };
};
