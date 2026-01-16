'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Interest {
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: string;
}

interface PersonalSectionProps {
  interests: Interest[];
}

const PersonalSection: React.FC<PersonalSectionProps> = ({ interests }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Icon name="UserIcon" size={20} className="text-primary" />
              <span className="text-sm font-cta text-primary">Beyond Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-headline font-bold text-gradient-primary mb-4">
              Personal Interests
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((_, index) => (
              <div key={index} className="glassmorphism-card rounded-2xl overflow-hidden h-96 animate-pulse">
                <div className="h-48 bg-muted"></div>
                <div className="p-6 space-y-3">
                  <div className="h-6 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Icon name="UserIcon" size={20} className="text-primary" />
            <span className="text-sm font-cta text-primary">Beyond Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-gradient-primary mb-4">
            Personal Interests
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What I do when I'm not building products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="glassmorphism-card rounded-2xl overflow-hidden hover:shadow-elevation transition-all duration-300 group cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative h-48 overflow-hidden">
                <AppImage
                  src={interest.image}
                  alt={interest.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name={interest.icon as any} size={24} className="text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-headline font-bold text-foreground mb-3">
                  {interest.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {interest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;