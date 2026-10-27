import { useEffect } from 'react';

export const useScrollReveal = (selector: string = '.reveal-up') => {
  useEffect(() => {
    // Only run on the client side
    if (typeof window === 'undefined') return;

    const elements = document.querySelectorAll(selector);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Optionally, unobserve if we only want the animation to happen once
          // observer.unobserve(entry.target); 
        } else {
          // Remove class if we want the animation to repeat when scrolling back up
          // entry.target.classList.remove('revealed');
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.15, // Trigger when 15% of the element is visible
    });

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selector]);
};
