
import React, { useState, useEffect, useRef } from 'react';

const socialLinks = [
  { href: "https://youtube.com/@shivendrra_", icon: "https://raw.githubusercontent.com/shivendrra/shivendrra/main/website/media/youtube.svg", label: "YouTube" },
  { href: "https://twitter.com/shivendrra_", icon: "https://raw.githubusercontent.com/shivendrra/shivendrra/main/website/media/twitter.svg", label: "Twitter" },
  { href: "https://github.com/shivendrra", icon: "https://raw.githubusercontent.com/shivendrra/shivendrra/main/website/media/github.svg", label: "GitHub" },
  { href: "https://linkedin.com/in/shivendrra", icon: "https://raw.githubusercontent.com/shivendrra/shivendrra/main/website/media/linkedin.svg", label: "LinkedIn" },
  { href: "https://instagram.com/shivendrra_", icon: "https://raw.githubusercontent.com/shivendrra/shivendrra/main/website/media/instagram.svg", label: "Instagram" },
  { href: "https://dribbble.com/shivendrra_", icon: "https://raw.githubusercontent.com/shivendrra/shivendrra/main/website/media/dribbble.svg", label: "Dribbble" },
  { href: "https://behance.net/shivendrra_", icon: "https://raw.githubusercontent.com/shivendrra/shivendrra/main/website/media/behance.svg", label: "Behance" },
];

const SocialBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop.current && scrollTop > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollTop.current = scrollTop;
    };
    window.addEventListener('scroll', handleScroll, false);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'} w-[90%] sm:w-auto`}>
      <div className="bg-white/30 backdrop-blur-xl border border-white/20 rounded-full px-3 py-2 sm:px-6 sm:py-3 flex items-center w-full justify-around sm:justify-start sm:gap-3 shadow-lg">
        {socialLinks.map(({ href, icon, label }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 sm:p-2 rounded-full transition-all duration-300 hover:bg-primary/10 hover:-translate-y-0.5"
            aria-label={label}
          >
            <img src={icon} alt={`${label} icon`} className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialBar;
