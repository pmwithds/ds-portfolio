'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="glassmorphism rounded-2xl p-8 md:p-12 border-gradient">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6 glow-primary">
          <Icon name="EnvelopeIcon" size={32} className="text-white" />
        </div>

        <h2 className="font-headline font-bold text-3xl md:text-4xl text-gradient-primary mb-4">
          Stay Updated with PM Insights
        </h2>

        <p className="text-muted-foreground text-lg mb-8">
          Get weekly product management frameworks, case studies, and industry trends delivered to your inbox. Join 5,000+ product professionals.
        </p>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-cta font-semibold shadow-cta hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-center space-x-3 px-6 py-4 bg-success/10 border border-success rounded-lg max-w-xl mx-auto">
            <Icon name="CheckCircleIcon" size={24} className="text-success" />
            <span className="text-success font-cta font-semibold">
              Successfully subscribed! Check your email for confirmation.
            </span>
          </div>
        )}

        <div className="flex items-center justify-center space-x-6 mt-8 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Icon name="ShieldCheckIcon" size={16} />
            <span>No spam, ever</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="BoltIcon" size={16} />
            <span>Unsubscribe anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;