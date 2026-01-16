'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { motion } from 'framer-motion';
import { LinkedInIcon, GitHubIcon, TwitterIcon, MailIcon } from '@/components/ui/SocialIcons';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections: FooterSection[] = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: '/strategic-landing-hub' },
        { name: 'Competency Matrix', href: '/competency-matrix-center' },
        { name: 'Frameworks', href: '/framework-methodology-center' },
        { name: 'Case Studies', href: '/case-study-theater' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/thought-leadership-blog' },
        { name: 'PM Tools', href: '/pm-tools-sandbox' },
        { name: 'Download Resume', href: '#' },
        { name: 'Contact', href: '/schedule' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/dnyaneshwar-s/' },
        { name: 'Twitter', href: 'https://x.com/dnynshwrshinde7' },
        { name: 'GitHub', href: 'https://github.com/dny343' },
        { name: 'Email', href: 'mailto:dnynshwrshinde007@gmail.com' }
      ]
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Main Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
        >

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-3 group mb-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg font-bold text-lg text-white transition-all group-hover:scale-105"
                style={{ backgroundColor: '#ed8936' }}
              >
                DS
              </div>

              <div className="hidden sm:flex flex-col">
                <span className="font-semibold text-base leading-tight text-[#ffffff]">
                  Dnyaneshwar Shinde
                </span>
                <span className="text-xs leading-tight text-[#ed8936]">
                  Digital Product Leader
                </span>
              </div>
            </Link>

            <p className="text-sm opacity-90 mb-4 max-w-xs">
              Helping teams design, build, and scale products through structured thinking,
              strong execution, and measurable delivery outcomes.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3">
              {[
                { Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/dnyaneshwar-s/' },
                { Icon: TwitterIcon, href: 'https://x.com/dnynshwrshinde7' },
                { Icon: GitHubIcon, href: 'https://github.com/dny343' },
                { Icon: MailIcon, href: 'mailto:dnynshwrshinde007@gmail.com' }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group flex h-10 w-10 items-center justify-center rounded-lg transition-all hover:scale-105"
                  style={{ backgroundColor: '#1a365d' }}
                >
                  <item.Icon className="h-5 w-5 text-white group-hover:text-[#ed8936] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-heading font-semibold text-base mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-smooth inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="border-t border-primary-foreground border-opacity-20 pt-8 mb-8"
        >
          <div className="max-w-md">
            <h3 className="font-heading font-semibold text-base mb-2">
              PM Insights Newsletter
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Practical product frameworks, delivery playbooks, and real-world lessons - once a month.
            </p>

            <form className="flex gap-2">
              <input
                type="email"
                placeholder="your.email@company.com"
                className="flex-1 px-4 py-2 rounded-md bg-primary-foreground bg-opacity-10 border border-primary-foreground border-opacity-20 text-primary-foreground placeholder-primary-foreground placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-accent text-sm"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-accent text-accent-foreground rounded-md font-semibold text-sm hover:bg-opacity-90 transition-smooth"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-primary-foreground border-opacity-20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-sm opacity-80">
            © {currentYear} Dnyaneshwar Shinde. All rights reserved.
          </p>

          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm opacity-80 hover:opacity-100 transition-smooth"
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
