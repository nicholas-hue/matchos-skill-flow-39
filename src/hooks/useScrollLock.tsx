import { useEffect, useRef, useState } from 'react';

export const useScrollLock = () => {
  const [isLocked, setIsLocked] = useState(false);
  const [isInHeroSection, setIsInHeroSection] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const originalScrollY = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInHeroSection(entry.isIntersecting);
      },
      { 
        threshold: 0.5,
        rootMargin: '-10px 0px -10px 0px'
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const lockScroll = () => {
    if (!isLocked) {
      originalScrollY.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${originalScrollY.current}px`;
      document.body.style.width = '100%';
      setIsLocked(true);
    }
  };

  const unlockScroll = () => {
    if (isLocked) {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, originalScrollY.current);
      setIsLocked(false);
    }
  };

  return {
    heroRef,
    isLocked,
    isInHeroSection,
    lockScroll,
    unlockScroll
  };
};