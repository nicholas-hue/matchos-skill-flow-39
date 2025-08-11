import { useEffect, useRef, useState, useCallback } from 'react';

export const useHeroScrollLock = (totalAnimations: number) => {
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isInHeroSection, setIsInHeroSection] = useState(false);
  const [allAnimationsViewed, setAllAnimationsViewed] = useState(false);
  
  const heroRef = useRef<HTMLElement>(null);
  const originalScrollY = useRef(0);
  const lastScrollTime = useRef(0);
  const scrollCooldown = 500; // 500ms cooldown between animation changes

  // Track if user is in hero section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInHeroSection(entry.isIntersecting);
        
        // Lock scroll when entering hero section (if not all animations viewed)
        if (entry.isIntersecting && !allAnimationsViewed) {
          lockScroll();
        } else if (!entry.isIntersecting && isLocked) {
          unlockScroll();
        }
      },
      { 
        threshold: 0.7,
        rootMargin: '0px'
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, [allAnimationsViewed, isLocked]);

  const lockScroll = useCallback(() => {
    if (!isLocked) {
      originalScrollY.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${originalScrollY.current}px`;
      document.body.style.width = '100%';
      setIsLocked(true);
    }
  }, [isLocked]);

  const unlockScroll = useCallback(() => {
    if (isLocked) {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, originalScrollY.current);
      setIsLocked(false);
    }
  }, [isLocked]);

  const advanceAnimation = useCallback(() => {
    const now = Date.now();
    if (now - lastScrollTime.current < scrollCooldown) return;
    
    lastScrollTime.current = now;
    
    setCurrentAnimation(prev => {
      const next = prev + 1;
      if (next >= totalAnimations) {
        // All animations viewed, unlock scroll
        setAllAnimationsViewed(true);
        unlockScroll();
        return prev; // Stay on last animation
      }
      return next;
    });
  }, [totalAnimations, unlockScroll, scrollCooldown]);

  // Handle scroll wheel events when locked
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isLocked && isInHeroSection && !allAnimationsViewed) {
        e.preventDefault();
        if (e.deltaY > 0) { // Scrolling down
          advanceAnimation();
        }
      }
    };

    // Handle touch events for mobile
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (isLocked && isInHeroSection && !allAnimationsViewed) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isLocked && isInHeroSection && !allAnimationsViewed) {
        e.preventDefault();
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY - touchY;
        
        if (deltaY > 50) { // Swipe up (scroll down)
          advanceAnimation();
          touchStartY = touchY; // Reset to prevent multiple triggers
        }
      }
    };

    const options = { passive: false };
    window.addEventListener('wheel', handleWheel, options);
    window.addEventListener('touchstart', handleTouchStart, options);
    window.addEventListener('touchmove', handleTouchMove, options);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isLocked, isInHeroSection, allAnimationsViewed, advanceAnimation]);

  // Reset when leaving hero section
  useEffect(() => {
    if (!isInHeroSection && allAnimationsViewed) {
      setCurrentAnimation(0);
      setAllAnimationsViewed(false);
    }
  }, [isInHeroSection, allAnimationsViewed]);

  return {
    heroRef,
    currentAnimation,
    isLocked,
    isInHeroSection,
    allAnimationsViewed,
    lockScroll,
    unlockScroll
  };
};