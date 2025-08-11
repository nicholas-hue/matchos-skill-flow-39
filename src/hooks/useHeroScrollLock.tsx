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
        
        if (entry.isIntersecting) {
          // Reset and restart animation sequence every time user enters hero section
          setCurrentAnimation(0);
          setAllAnimationsViewed(false);
          setHasCompletedCycle(false);
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
  }, [lockScroll, unlockScroll, isLocked]);

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
        
        // Unlock scroll and automatically scroll past hero section
        setTimeout(() => {
          unlockScroll();
          // Scroll past the hero section
          setTimeout(() => {
            if (heroRef.current) {
              const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight;
              window.scrollTo({ top: heroBottom, behavior: 'smooth' });
            }
          }, 100);
        }, 500); // Small delay to show final animation
        
        return prev; // Stay on last animation
      }
      return next;
    });
  }, [totalAnimations, unlockScroll, scrollCooldown]);

  // Handle scroll wheel events when locked (only if cycle not completed)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      console.log('Wheel event:', { isLocked, isInHeroSection, hasCompletedCycle });
      
      if (isLocked && isInHeroSection && !hasCompletedCycle) {
        e.preventDefault();
        if (e.deltaY > 0) { // Scrolling down
          advanceAnimation();
        }
      } else if (hasCompletedCycle && !isLocked) {
        // Allow normal scrolling after completion
        console.log('Normal scrolling allowed');
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