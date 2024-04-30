import { useState, useEffect } from 'react';
import { SCREEN_SIZES } from '@/shared/constants';
import type { ScreenSizeBreakpoint } from '@/shared/types';

const useIsScreenSize = (breakpoint: ScreenSizeBreakpoint) => {
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

export { useIsScreenSize };
