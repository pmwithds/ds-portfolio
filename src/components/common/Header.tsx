'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationItem {
  name: string;
  href: string;
  icon: string;
}

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems: NavigationItem[] = [
    { name: 'Home', href: '/strategic-landing-hub', icon: 'HomeIcon' },
    { name: 'Competency Matrix', href: '/competency-matrix-center', icon: 'ChartBarIcon' },
    { name: 'Frameworks', href: '/framework-methodology-center', icon: 'CubeIcon' },
    { name: 'Case Studies', href: '/case-study-theater', icon: 'DocumentTextIcon' }
  ];

  const moreItems: NavigationItem[] = [
    { name: 'Blog', href: '/thought-leadership-blog', icon: 'PencilSquareIcon' },
    { name: 'PM Tools', href: '/pm-tools-sandbox', icon: 'WrenchScrewdriverIcon' }
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 bg-card transition-all duration-300 ${
        scrolled ? 'shadow-elevated backdrop-blur-md' : 'shadow-subtle'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <motion.div whileHover={{ scale: 1.04 }}>
            <Link href="/" className="flex items-center space-x-3 group">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg font-bold text-lg text-white transition-all"
                style={{ backgroundColor: '#1a365d' }}
              >
                <span style={{ color: '#ed8936' }}>D</span>
                <span>S</span>
              </div>

              <div className="hidden sm:flex flex-col">
                <span className="font-semibold text-base leading-tight text-[#1a365d]">
                  Dnyaneshwar Shinde
                </span>
                <span className="text-xs leading-tight text-[#ed8936]">
                  Digital Product Leader
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <motion.div key={item.href} whileHover={{ y: -2 }}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-smooth ${
                    isActive(item.href)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted hover:text-primary'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            ))}

            {/* More Dropdown */}
            <div className="relative group">
              <motion.button
                whileHover={{ y: -2 }}
                className="flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-smooth"
              >
                <Icon name="EllipsisHorizontalIcon" size={18} />
                <span>More</span>
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="absolute right-0 mt-2 w-48 bg-popover rounded-md shadow-elevated opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth"
              >
                {moreItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-smooth first:rounded-t-md last:rounded-b-md ${
                      isActive(item.href)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-muted hover:text-primary'
                    }`}
                  >
                    <Icon name={item.icon as any} size={18} />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </motion.div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/about-ds"
                className="px-4 py-2 text-sm font-semibold text-primary border border-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                About Me
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
             <Link
                href="/pm-tools-sandbox"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full px-4 py-3 text-sm font-semibold bg-brand-red text-white rounded-md hover:bg-opacity-90 transition-smooth"
              >
                PM Tools Sandbox
              </Link>
              </motion.div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-smooth"
            aria-label="Toggle menu"
          >
            <Icon name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-1">
              {[...navigationItems, ...moreItems].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-md text-sm font-medium transition-smooth ${
                    isActive(item.href)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted hover:text-primary'
                  }`}
                >
                  <Icon name={item.icon as any} size={20} />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            <div className="px-4 py-4 space-y-2 border-t border-border">
              <Link
                href="/about-ds"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-4 py-3 text-center text-sm font-semibold text-primary border border-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                About Me
              </Link>

               <Link
                href="/pm-tools-sandbox"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full px-4 py-3 text-sm font-semibold bg-brand-red text-white rounded-md hover:bg-opacity-90 transition-smooth"
              >
                PM Tools Sandbox
              </Link>

      
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
