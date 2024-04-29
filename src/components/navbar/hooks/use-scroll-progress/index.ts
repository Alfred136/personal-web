import { useState, useEffect } from 'react';
import * as Constants from '@/components/navbar/constants';

const useScrollProgress = (initialShowBar: boolean) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(initialShowBar);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableDistance = documentHeight - windowHeight;
      const currentScrollPercentage = (scrollY / scrollableDistance) * 100;
      setScrollProgress(currentScrollPercentage);
      setShowProgressBar(window.scrollY >= Constants.SCROLL_Y_THRESHOLD);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollProgress, showProgressBar };
};

export { useScrollProgress };
