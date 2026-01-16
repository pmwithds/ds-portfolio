'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/AppIcon';

interface StorySectionProps {
  story: {
    title: string;
    paragraphs: string[];
  };
}

const StorySection: React.FC<StorySectionProps> = ({ story }) => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">

      {/* Subtle Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >

        {/* Header */}
        <div className="text-center mb-14">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-6"
          >
            <Icon name="BookOpenIcon" size={18} className="text-secondary" />
            <span className="text-sm font-medium text-secondary">
              My Journey
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-gradient-primary">
            {story.title}
          </h2>

        </div>

        {/* Story Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
          className="glassmorphism-card rounded-2xl p-8 sm:p-12 space-y-7 shadow-subtle hover:shadow-elevated transition-smooth"
        >

          {story.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}

        </motion.div>

      </motion.div>
    </section>
  );
};

export default StorySection;
