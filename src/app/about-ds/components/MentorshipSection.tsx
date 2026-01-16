import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface MentorshipApproach {
  title: string;
  description: string;
  icon: string;
}

interface MentorshipSectionProps {
  philosophy: string;
  approaches: MentorshipApproach[];
  stats: {
    mentees: number;
    hours: number;
    companies: number;
  };
}

const MentorshipSection: React.FC<MentorshipSectionProps> = ({ philosophy, approaches, stats }) => {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
            <Icon name="AcademicCapIcon" size={20} className="text-accent" />
            <span className="text-sm font-cta text-accent">Mentorship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-gradient-primary mb-4">
            Giving Back to the Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {philosophy}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          <div className="glassmorphism-card rounded-2xl p-8 text-center">
            <div className="text-4xl font-headline font-bold text-gradient-primary mb-2">
              {stats.mentees}+
            </div>
            <p className="text-muted-foreground">Mentees Guided</p>
          </div>
          <div className="glassmorphism-card rounded-2xl p-8 text-center">
            <div className="text-4xl font-headline font-bold text-gradient-accent mb-2">
              {stats.hours}+
            </div>
            <p className="text-muted-foreground">Mentorship Hours</p>
          </div>
          <div className="glassmorphism-card rounded-2xl p-8 text-center">
            <div className="text-4xl font-headline font-bold text-gradient-primary mb-2">
              {stats.companies}+
            </div>
            <p className="text-muted-foreground">Companies Represented</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="glassmorphism-card rounded-2xl p-8 hover:shadow-elevation transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center flex-shrink-0">
                  <Icon name={approach.icon as any} size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-headline font-bold text-foreground mb-3">
                    {approach.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {approach.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;