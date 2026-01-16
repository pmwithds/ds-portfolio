'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Icon from '@/components/ui/AppIcon';

interface Value {
  title: string;
  description: string;
  icon: string;
}

interface ValuesSectionProps {
  values: Value[];
}

/* -----------------------------------
   Animation Variants (Typed)
------------------------------------ */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] // ✅ Type-safe easing
    }
  }
};

const ValuesSection: React.FC<ValuesSectionProps> = ({ values }) => {
  return (
    <section className="py-16 sm:py-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Icon name="HeartIcon" size={20} className="text-primary" />
            <span className="text-sm font-cta text-primary">
              Core Values
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-gradient-primary mb-4">
            What Drives Me
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Principles shaped by building real products, leading teams, and solving business problems at scale
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="glassmorphism-card rounded-2xl p-8 hover:shadow-elevation transition-all duration-300 group relative overflow-hidden"
            >

              {/* Glow Hover Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Icon
                  name={value.icon as any}
                  size={30}
                  className="text-white"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-headline font-bold text-foreground mb-3">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {value.description}
              </p>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ValuesSection;
