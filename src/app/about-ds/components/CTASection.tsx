import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glassmorphism-card rounded-2xl p-8 sm:p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
            <Icon name="ChatBubbleLeftRightIcon" size={32} className="text-white" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-gradient-primary mb-4">
            Let's Build Something Amazing
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're looking for a product leader, seeking mentorship, or want to collaborate on an exciting project, I'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-cta font-semibold shadow-cta hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <span>Schedule Conversation</span>
              <Icon name="ArrowRightIcon" size={20} />
            </Link>
            
            <Link
              href="/resources"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 glassmorphism-card rounded-lg font-cta font-semibold hover:shadow-elevation transition-all duration-300"
            >
              <span>Explore Resources</span>
              <Icon name="BookOpenIcon" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;