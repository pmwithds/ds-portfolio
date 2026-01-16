import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Recognition {
  type: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  icon: string;
}

interface Company {
  name: string;
  logo: string;
  alt: string;
}

interface RecognitionSectionProps {
  recognitions: Recognition[];
  companies: Company[];
}

const RecognitionSection: React.FC<RecognitionSectionProps> = ({ recognitions, companies }) => {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-6">
            <Icon name="TrophyIcon" size={20} className="text-secondary" />
            <span className="text-sm font-cta text-secondary">Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-gradient-primary mb-4">
            Industry Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Awards, speaking engagements, and notable achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {recognitions.map((recognition, index) => (
            <div
              key={index}
              className="glassmorphism-card rounded-2xl p-6 sm:p-8 hover:shadow-elevation transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Icon name={recognition.icon as any} size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs font-cta text-primary mb-3">
                    {recognition.type}
                  </div>
                  <h3 className="text-xl font-headline font-bold text-foreground mb-2">
                    {recognition.title}
                  </h3>
                  <p className="text-secondary font-cta mb-2">
                    {recognition.organization} • {recognition.year}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {recognition.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glassmorphism-card rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-headline font-bold text-foreground mb-2">
              Trusted by Leading Companies
            </h3>
            <p className="text-muted-foreground">
              Previous employers and notable collaborations
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 rounded-lg hover:bg-muted/50 transition-colors duration-300"
              >
                <AppImage
                  src={company.logo}
                  alt={company.alt}
                  className="w-full h-12 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;