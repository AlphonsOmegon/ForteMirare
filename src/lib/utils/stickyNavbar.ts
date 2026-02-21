import { useState, useRef, useEffect } from 'react';

export const useStickyNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getNavPosition = () => {
      if (!navRef.current) return 0;
      const rect = navRef.current.getBoundingClientRect();
      return rect.top + window.scrollY;
    };

    const navOffsetTop = getNavPosition();

    const handleScroll = () => {
      setIsSticky(window.scrollY >= navOffsetTop);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isSticky, navRef };
};