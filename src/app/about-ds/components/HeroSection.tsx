'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  profile: {
    name: string;
    title: string;
    tagline: string;
    image: string;
    alt: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ profile }) => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

      {/* Animated Glow Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-7"
          >

            {/* Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full w-fit"
            >
              <Icon name="SparklesIcon" size={18} className="text-primary" />
              <span className="text-sm font-medium text-primary">
                About Me
              </span>
            </motion.div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold leading-tight">
              <span className="text-gradient-primary">
                {profile.name}
              </span>
            </h1>

            {/* Title */}
            <p className="text-xl sm:text-2xl font-semibold text-secondary">
              {profile.title}
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              {profile.tagline}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-5 pt-4">

              <motion.div
                whileHover={{ y: -3 }}
                className="flex items-center space-x-2"
              >
                <Icon name="MapPinIcon" size={18} className="text-primary" />
                <span className="text-sm">Pune, India</span>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="flex items-center space-x-2"
              >
                <Icon name="BriefcaseIcon" size={18} className="text-secondary" />
                <span className="text-sm">9+ Years Experience</span>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="flex items-center space-x-2"
              >
                <Icon name="AcademicCapIcon" size={18} className="text-accent" />
                <span className="text-sm">B.E. Electronics & Telecom</span>
              </motion.div>

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="relative w-full max-w-md mx-auto"
            >

              {/* Glow Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-xl opacity-30" />

              <div className="relative glassmorphism-card rounded-2xl p-2 overflow-hidden">

                <div className="relative aspect-square rounded-xl overflow-hidden">

                  <AppImage
                    src={profile.image}
                    alt={profile.alt}
                    className="w-full h-full object-cover"
                  />

                </div>

              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
