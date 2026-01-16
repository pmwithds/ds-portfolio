'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/AppIcon';

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
  icon: string;
}

interface TimelineSectionProps {
  timeline: TimelineItem[];
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ timeline }) => {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
            <Icon name="ClockIcon" size={20} className="text-accent" />
            <span className="text-sm font-cta text-accent">
              Career Timeline
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-gradient-primary mb-4">
            Professional Journey
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of product leadership, entrepreneurship, and digital transformation impact
          </p>
        </motion.div>

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-70 animate-pulse hidden lg:block" />

          <div className="space-y-14">

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="lg:grid lg:grid-cols-12 lg:gap-10">

                  {/* Year + Icon Column */}
                  <div className="lg:col-span-3 mb-4 lg:mb-0">
                    <div className="flex items-center space-x-4 lg:justify-end">

                      {/* Desktop Icon */}
                      <div className="hidden lg:flex w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary items-center justify-center relative z-10 transition-transform duration-300 hover:scale-110">
                        <Icon
                          name={item.icon as any}
                          size={22}
                          className="text-white"
                        />
                      </div>

                      {/* Year */}
                      <div className="text-right">
                        <div className="text-xl sm:text-2xl font-headline font-bold text-gradient-primary">
                          {item.year}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="lg:col-span-9">
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="glassmorphism-card rounded-2xl p-6 sm:p-8 hover:shadow-elevation transition-all duration-300"
                    >

                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">

                        <div>
                          <h3 className="text-xl sm:text-2xl font-headline font-bold text-foreground mb-1">
                            {item.title}
                          </h3>

                          <p className="text-base sm:text-lg text-secondary font-cta">
                            {item.company}
                          </p>
                        </div>

                        {/* Mobile Icon */}
                        <div className="lg:hidden w-11 h-11 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                          <Icon
                            name={item.icon as any}
                            size={20}
                            className="text-white"
                          />
                        </div>

                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-3">

                        <div className="flex items-center space-x-2 text-sm font-cta text-accent">
                          <Icon name="CheckCircleIcon" size={16} />
                          <span>Key Impact & Achievements</span>
                        </div>

                        <ul className="space-y-2">
                          {item.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-3 transition-all duration-300 hover:translate-x-1"
                            >
                              <Icon
                                name="ArrowRightIcon"
                                size={14}
                                className="text-primary mt-1 flex-shrink-0"
                              />

                              <span className="text-muted-foreground text-sm sm:text-base">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>

                      </div>

                    </motion.div>
                  </div>

                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
