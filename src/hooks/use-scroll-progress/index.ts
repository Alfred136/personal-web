import { useState, useEffect } from 'react';

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
      setShowProgressBar(window.scrollY >= 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollProgress, showProgressBar };
};

export { useScrollProgress };
