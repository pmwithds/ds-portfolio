'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  quote: string;
  metrics: string;
}

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sandeep Kankariya',
      role: 'Director',
      company: 'Kankariya Corporation (India)',
      image: '/assets/testimonials/sandeep.jpg',
      alt: 'Business leader from manufacturing company',
      quote:
        'Dnyaneshwar helped us digitize legacy workflows and introduce structured product thinking into daily operations. The outcome was better coordination and faster execution across departments.',
      metrics: 'Process standardization, faster turnaround cycles'
    },
    {
      id: 2,
      name: 'David Abrams',
      role: 'Founder',
      company: 'Christmas Company (USA)',
      image: '/assets/testimonials/david.jpg',
      alt: 'Founder of Christmas decor brand',
      quote:
        'He translated business requirements into scalable internal tools and sales platforms. This significantly improved our operational visibility and team productivity.',
      metrics: 'Sales enablement improvements, workflow automation'
    },
    {
      id: 3,
      name: 'Vikas Dalmia',
      role: 'Co-Founder',
      company: 'Vastrachowk (India)',
      image: '/assets/testimonials/vikas.jpg',
      alt: 'Fashion startup founder',
      quote:
        'Working with Dnyaneshwar brought structure to our product planning and feature prioritization. We were able to align customer needs with business goals more clearly.',
      metrics: 'Improved roadmap clarity, digital adoption'
    },
    {
      id: 4,
      name: 'Geoff',
      role: 'Founder',
      company: 'Myntist (Australia)',
      image: '/assets/testimonials/geoff.jpg',
      alt: 'Marketplace startup founder',
      quote:
        'He helped bring clarity to a complex marketplace model combining physical products and digital assets. Execution became faster and more predictable.',
      metrics: 'Marketplace optimization, faster iterations'
    },
    {
      id: 5,
      name: 'Perry',
      role: 'Founder & Coach',
      company: 'Life Coaching Practice (USA)',
      image: '/assets/testimonials/perry.jpg',
      alt: 'US-based life coach entrepreneur',
      quote:
        'Dnyaneshwar structured my onboarding flows and digital platform experience. The changes improved client engagement and made service delivery smoother.',
      metrics: 'Better onboarding experience, engagement uplift'
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-foreground bg-opacity-10 rounded-full mb-4">
            <Icon name="ChatBubbleLeftRightIcon" size={18} className="text-[#1a365d]" />
            <span className="text-sm font-medium text-[#1a365d]">
              Client Testimonials
            </span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Trusted by Business Owners & Product Teams
          </h2>

          <p className="text-lg text-primary-foreground text-opacity-80 max-w-3xl mx-auto">
            Feedback from founders and leadership teams across manufacturing, retail,
            SaaS, marketplaces, and service businesses.
          </p>
        </motion.div>

        {/* CARD */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-elevated">

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col lg:flex-row gap-8 items-center"
              >

                {/* IMAGE */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-accent shadow-subtle">
                    <AppImage
                      src={current.image}
                      alt={current.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex-1 text-center lg:text-left">
                  <Icon
                    name="ChatBubbleLeftIcon"
                    size={40}
                    className="text-accent mb-4 mx-auto lg:mx-0"
                  />

                  <blockquote className="text-lg lg:text-xl text-foreground mb-6 leading-relaxed">
                    "{current.quote}"
                  </blockquote>

                  <div className="mb-4">
                    <div className="font-heading font-semibold text-xl text-foreground">
                      {current.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {current.role} at {current.company}
                    </div>
                  </div>

                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-green bg-opacity-10 rounded-full">
                    <Icon name="ChartBarIcon" size={16} className="text-brand-green" />
                    <span className="text-sm font-medium text-brand-green">
                      {current.metrics}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CONTROLS */}
            <div className="flex items-center justify-center gap-4 mt-8">

              <button
                onClick={handlePrevious}
                className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth flex items-center justify-center"
              >
                <Icon name="ChevronLeftIcon" size={24} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-accent w-8'
                        : 'bg-muted-foreground bg-opacity-30 hover:bg-opacity-50 w-2'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth flex items-center justify-center"
              >
                <Icon name="ChevronRightIcon" size={24} />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialCarousel;
