import React, { useState, useEffect, useRef } from 'react';

const socialLinks = [
  { href: "https://youtube.com/@shivendrra_", icon: "media/youtube.svg" },
  { href: "https://twitter.com/shivendrra_", icon: "media/twitter.svg" },
  { href: "https://github.com/shivendrra", icon: "media/github.svg" },
  { href: "https://linkedin.com/in/shivendrra", icon: "media/linkedin.svg" },
  { href: "https://instagram.com/shivendrra_", icon: "media/instagram.svg" },
  { href: "https://dribbble.com/shivendrra_", icon: "media/dribbble.svg" },
  { href: "https://behance.net/shivendrra_", icon: "media/behance.svg" },
];

const SocialBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const SCROLL_THRESHOLD = 5; // Minimum scroll distance to trigger a change

      // Ignore minor scroll fluctuations
      if (Math.abs(currentScrollY - lastScrollY.current) < SCROLL_THRESHOLD) {
        return;
      }
      
      const isScrollingDown = currentScrollY > lastScrollY.current;

      // Logic:
      // 1. If we are near the top of the page, always hide the bar.
      // 2. If we scroll down past the initial threshold, show the bar.
      // 3. If we scroll up, hide the bar.
      if (currentScrollY < 300) {
        setIsVisible(false);
      } else if (isScrollingDown) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
      <div className="bg-white/50 backdrop-blur-sm rounded-full px-4 py-3 sm:px-6 sm:py-4 flex gap-4 sm:gap-5 shadow-lg">
        {socialLinks.map(({ href, icon }) => (
          <a 
            key={href} 
            href={href} 
            className="p-1 sm:p-2 rounded-full transition-all duration-300 hover:bg-primary/10 hover:-translate-y-0.5" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={icon} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialBar;
