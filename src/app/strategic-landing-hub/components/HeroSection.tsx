'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { motion, AnimatePresence } from 'framer-motion';

interface ValueProposition {
  id: number;
  text: string;
  highlight: string;
}

const HeroSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentProposition, setCurrentProposition] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const valuePropositions: ValueProposition[] = [
    {
      id: 1,
      text: 'Building products from',
      highlight: '0→1 MVP validation to early scale adoption'
    },
    {
      id: 2,
      text: 'Driving impact through',
      highlight: 'structured execution and product thinking'
    },
    {
      id: 3,
      text: 'Designing systems that',
      highlight: 'balance speed, usability and scale'
    }
  ];

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentProposition((prev) => (prev + 1) % valuePropositions.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isHydrated]);

  return (
    <section className="relative bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground py-20 lg:py-28 overflow-hidden">

      {/* Background blur */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-purple rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >

            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-foreground rounded-full border border-primary-foreground">
              <Icon name="SparklesIcon" size={18} className="text-accent" />
              <span className="text-sm font-medium text-[#1a365d]">
                Digital Product Leader
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Transforming Vision Into{' '}
              <span className="text-accent">Measurable Impact</span>
            </h1>

            {/* Animated Value Proposition */}
            <div className="h-16 flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentProposition}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-lg sm:text-xl text-primary-foreground/90"
                >
                  {valuePropositions[currentProposition].text}{' '}
                  <span className="font-semibold text-accent">
                    {valuePropositions[currentProposition].highlight}
                  </span>
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-primary-foreground/80 max-w-2xl">
              Product professional focused on building practical, scalable solutions.
              Strong experience in MVP execution, delivery leadership and data-informed
              product decisions.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">

              <Link
                href="/case-study-theater"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-opacity-90 transition shadow-elevated"
              >
                <Icon name="DocumentTextIcon" size={18} />
                <span>View Case Studies</span>
              </Link>

              <button className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-primary-foreground text-primary-foreground border border-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/20 transition">
                <Icon name="ArrowDownTrayIcon" size={18} className="text-[#1a365d]" />
                <span className="text-[#1a365d]">Download Resume</span>
              </button>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">

              <div>
                <div className="font-heading font-bold text-3xl text-accent">9+</div>
                <div className="text-sm text-primary-foreground/80">Years Experience</div>
              </div>

              <div>
                <div className="font-heading font-bold text-3xl text-accent">12+</div>
                <div className="text-sm text-primary-foreground/80">Products / MVPs Delivered</div>
              </div>

              <div>
                <div className="font-heading font-bold text-3xl text-accent">High</div>
                <div className="text-sm text-primary-foreground/80">Business Impact Contribution</div>
              </div>

            </div>

          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="hidden lg:block"
          >

            <div className="relative flex flex-col items-center space-y-8">

              {/* Floating Avatar */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="relative group"
              >

                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-brand-purple blur-xl opacity-40"></div>

                <div className="relative p-1 rounded-full bg-gradient-to-br from-accent to-brand-purple">
                  <div className="bg-card rounded-full p-1">
                    <img
                      src="/assets/images/ds-2.jpeg"
                      alt="Dnyaneshwar Shinde"
                      className="h-60 w-60 rounded-full object-cover shadow-elevated"
                    />
                  </div>
                </div>

                <div className="absolute -bottom-2 -right-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                  Product Leader
                </div>

              </motion.div>

              {/* Skill Scale Card */}
              <div className="relative w-full">

                <div className="relative bg-card rounded-2xl p-8 shadow-elevated space-y-6">

                  {[
                    { label: '0→1 Innovation', value: '90%', color: 'bg-brand-blue', icon: 'ChartBarIcon' },
                    { label: '1–1000 Scaling', value: '85%', color: 'bg-brand-green', icon: 'RocketLaunchIcon' },
                    { label: '1000+ Exposure', value: '70%', color: 'bg-brand-purple', icon: 'BuildingOfficeIcon' }
                  ].map((item, i) => (

                    <div key={i} className="flex items-center space-x-4">

                      <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center`}>
                        <Icon name={item.icon as any} size={22} className="text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="h-3 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: item.value }}
                            transition={{ delay: 0.6 + i * 0.2, duration: 1 }}
                            className={`h-full ${item.color} rounded-full`}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.label}
                        </p>
                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
