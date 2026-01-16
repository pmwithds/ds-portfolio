'use client';

import Icon from '@/components/ui/AppIcon';
import { motion } from 'framer-motion';

interface FrameworkHeroProps {
  frameworkCount?: number;
  templateCount?: number;
  storyCount?: number;
}

const FrameworkHero = ({
  frameworkCount = 12,
  templateCount = 18,
  storyCount = 6,
}: FrameworkHeroProps) => {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">

          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-2xl mb-6 shadow-subtle"
          >
            <Icon name="CubeIcon" size={40} className="text-accent-foreground" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-4xl lg:text-5xl mb-6"
          >
            Framework Methodology Center
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl opacity-90 mb-8 max-w-3xl mx-auto"
          >
            A curated library of practical product management frameworks I actively use in real projects — covering discovery, prioritization, execution, and scaling. Each framework includes applied use-cases, implementation guidance, and outcome-focused examples.
          </motion.p>

          {/* Stats Pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 text-sm"
          >

            {/* Framework Count */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-primary-foreground bg-opacity-10 px-4 py-2 rounded-full backdrop-blur-sm cursor-default"
            >
              <Icon name="DocumentTextIcon" size={18} className="text-[#1a365d]" />
              <span className="text-[#1a365d] font-medium">
                {frameworkCount}+ Practical Frameworks
              </span>
            </motion.div>

            {/* Templates */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-primary-foreground bg-opacity-10 px-4 py-2 rounded-full backdrop-blur-sm cursor-default"
            >
              <Icon name="ArrowDownTrayIcon" size={18} className="text-[#1a365d]" />
              <span className="text-[#1a365d] font-medium">
                {templateCount}+ Ready-to-Use Templates
              </span>
            </motion.div>

            {/* Stories */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-primary-foreground bg-opacity-10 px-4 py-2 rounded-full backdrop-blur-sm cursor-default"
            >
              <Icon name="ChartBarIcon" size={18} className="text-[#1a365d]" />
              <span className="text-[#1a365d] font-medium">
                {storyCount}+ Applied Case Examples
              </span>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FrameworkHero;
