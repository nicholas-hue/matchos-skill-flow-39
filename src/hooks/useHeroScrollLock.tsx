import { useEffect, useRef, useState, useCallback } from 'react';

export const useHeroScrollLock = (totalAnimations: number) => {
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isInHeroSection, setIsInHeroSection] = useState(false);
  const [allAnimationsViewed, setAllAnimationsViewed] = useState(false);
  const [hasCompletedCycle, setHasCompletedCycle] = useState(false);
  
  const heroRef = useRef<HTMLElement>(null);
  const originalScrollY = useRef(0);
  const lastScrollTime = useRef(0);
  const scrollCooldown = 500; // 500ms cooldown between animation changes

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
    console.log('Attempting to unlock scroll:', { isLocked });
    if (isLocked) {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, originalScrollY.current);
      setIsLocked(false);
      console.log('Scroll unlocked');
    }
  }, [isLocked]);

  // Track if user is in hero section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInHeroSection(entry.isIntersecting);
        
        if (entry.isIntersecting && !isLocked) {
          // Only lock when entering hero section and not already locked
          console.log('Entering hero section, resetting and locking scroll');
          
          // Reset all animation states
          setCurrentAnimation(0);
          setAllAnimationsViewed(false);
          setHasCompletedCycle(false);
          
          // Lock scroll
          if (!isLocked) {
            originalScrollY.current = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${originalScrollY.current}px`;
            document.body.style.width = '100%';
            setIsLocked(true);
          }
        } else if (!entry.isIntersecting) {
          // Reset cycle completion when leaving hero section
          setHasCompletedCycle(false);
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
  }, [isLocked]);

  const advanceAnimation = useCallback(() => {
    const now = Date.now();
    if (now - lastScrollTime.current < scrollCooldown) return;
    
    lastScrollTime.current = now;
    
    setCurrentAnimation(prev => {
      const next = prev + 1;
      console.log('Animation advancing:', { current: prev, next, totalAnimations });
      
      if (next >= totalAnimations) {
        // All animations viewed, unlock scroll and mark cycle as complete
        console.log('All animations completed, unlocking scroll');
        setAllAnimationsViewed(true);
        setHasCompletedCycle(true);
        
        // Force unlock scroll immediately with proper restoration
        const scrollY = originalScrollY.current;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        setIsLocked(false);
        
        // Restore scroll position and then scroll past hero
        window.scrollTo(0, scrollY);
        
        // Scroll past the hero section after restoration
        setTimeout(() => {
          if (heroRef.current) {
            const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight;
            window.scrollTo({ top: heroBottom + 100, behavior: 'smooth' });
          }
        }, 100);
        
        return prev; // Stay on last animation
      }
      return next;
    });
  }, [totalAnimations, unlockScroll, scrollCooldown]);

  // Handle scroll wheel events when locked (only if cycle not completed)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {      
      if (isLocked && isInHeroSection && !hasCompletedCycle) {
        e.preventDefault();
        console.log('Prevented scroll, advancing animation');
        if (e.deltaY > 0) { // Scrolling down
          advanceAnimation();
        }
      }
    };

    // Handle touch events for mobile
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (isLocked && isInHeroSection && !hasCompletedCycle) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isLocked && isInHeroSection && !hasCompletedCycle) {
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
  }, [isLocked, isInHeroSection, hasCompletedCycle, advanceAnimation]);


  return {
    heroRef,
    currentAnimation,
    isLocked,
    isInHeroSection,
    allAnimationsViewed,
    hasCompletedCycle,
    lockScroll,
    unlockScroll
  };
};