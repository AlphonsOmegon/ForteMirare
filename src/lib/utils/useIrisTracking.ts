import { useEffect, useState } from "react";

const MAX_RADIUS_PERCENTAGE = 0.03;

export const useIrisTracking = () => {
  const [irisPosition, setIrisPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let rafId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        const iris = document.querySelector('.IrisImg') as HTMLElement;
        if (!iris) {
          rafId = null;
          return;
        }

        const eyeContainer = iris.parentElement;
        if (!eyeContainer) {
          rafId = null;
          return;
        }

        const rect = eyeContainer.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const deltaX = e.clientX - eyeCenterX;
        const deltaY = e.clientY - eyeCenterY;
        
        const angle = Math.atan2(deltaY, deltaX);
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxRadius = rect.width * MAX_RADIUS_PERCENTAGE;
        const constrainedDistance = Math.min(distance, maxRadius);
        
        const moveX = Math.cos(angle) * constrainedDistance;
        const moveY = Math.sin(angle) * constrainedDistance;

        setIrisPosition({ x: moveX, y: moveY });
        rafId = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return irisPosition;
};