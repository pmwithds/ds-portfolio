'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-foreground bg-opacity-10 rounded-full mb-6"
          >
            <Icon name="SparklesIcon" size={18} className="text-[#1a365d]" />
            <span className="text-sm font-medium text-[#1a365d]">
              Ready to Collaborate?
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-6"
          >
            Let&apos;s Build Meaningful Products Together
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-primary-foreground text-opacity-90 mb-8 max-w-2xl mx-auto"
          >
            Whether you&apos;re hiring a product leader, looking to improve delivery
            processes, or exploring collaboration opportunities - I help teams turn
            ideas into scalable, real-world solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold text-base hover:bg-opacity-90 transition-smooth shadow-elevated"
            >
              <span>Schedule Conversation</span>
              <Icon name="EnvelopeIcon" size={20} />
            </Link>

            <Link
              href="/resources"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-primary-foreground bg-opacity-10 text-primary-foreground border border-primary-foreground border-opacity-20 rounded-lg font-semibold text-base hover:bg-opacity-20 transition-smooth"
            >
              <span className="text-[#1a365d]">Download Resume</span>
              <Icon name="ArrowDownTrayIcon" size={20} className="text-[#1a365d]" />
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-primary-foreground border-opacity-20"
          >
            <div className="flex flex-col items-center space-y-2">
              <Icon name="ClockIcon" size={32} className="text-accent" />
              <div className="font-semibold text-lg">Quick Response</div>
              <div className="text-sm text-primary-foreground text-opacity-80">
                Typically respond within 24 hours
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <Icon name="GlobeAltIcon" size={32} className="text-accent" />
              <div className="font-semibold text-lg">Remote Collaboration</div>
              <div className="text-sm text-primary-foreground text-opacity-80">
                Comfortable working across time zones
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <Icon name="ChatBubbleLeftRightIcon" size={32} className="text-accent" />
              <div className="font-semibold text-lg">Intro Call</div>
              <div className="text-sm text-primary-foreground text-opacity-80">
                30-minute discovery conversation
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
