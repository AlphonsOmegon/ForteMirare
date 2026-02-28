'use client';

import { useEffect, useRef, useState } from 'react';

interface LazyYouTubeProps {
  videoId: string;
  className?: string;
  title?: string;
}

export const LazyYouTube: React.FC<LazyYouTubeProps> = ({ 
  videoId, 
  className = '',
  title = 'YouTube video player'
}) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { rootMargin: '200px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className} style={{ width: '100%', height: '100%' }}>
      {isInView ? (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=1&modestbranding=1&rel=0&playsinline=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ width: '100%', height: '100%' }}
        />
      ) : (
        <div style={{ 
          width: '100%', 
          height: '100%', 
          aspectRatio: '16/9',
          background: 'linear-gradient(257deg,rgba(0, 0, 0, 0.53) 8%, rgba(92, 92, 92, 0.3) 49%, rgba(0, 0, 0, 0.43) 88%)'
        }} />
      )}
    </div>
  );
};