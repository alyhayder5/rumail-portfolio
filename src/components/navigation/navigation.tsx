'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import { Home, User, Briefcase, Mail, Code } from 'lucide-react';

export default function Navigation() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 0.95]);
  const blur = useTransform(scrollYProgress, [0, 0.1], [0, 10]);

  const navItems = useMemo(
    () => [
      { id: 'hero', label: 'Home', icon: Home },
      { id: 'about', label: 'About', icon: User },
      { id: 'projects', label: 'Projects', icon: Code },
      { id: 'experience', label: 'Experience', icon: Briefcase },
      { id: 'contact', label: 'Contact', icon: Mail },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <>
      {/* Background Blur */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-40"
        style={{
          background: `linear-gradient(135deg, rgba(15, 23, 42, ${backgroundOpacity}) 0%, rgba(30, 41, 59, ${backgroundOpacity}) 100%)`,
          backdropFilter: `blur(${blur}px)`,
        }}
      />

      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-white font-bold text-xl hidden sm:block">
                Rumí
              </span>
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
