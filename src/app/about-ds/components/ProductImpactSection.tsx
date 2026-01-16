import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface ImpactItem {
  category: string;
  title: string;
  metric: string;
  description: string;
  icon: string;
}

interface Company {
  name: string;
  logo: string;
  alt: string;
}

interface ProductImpactSectionProps {
  impacts: ImpactItem[];
  companies: Company[];
}

const ProductImpactSection: React.FC<ProductImpactSectionProps> = ({ impacts, companies }) => {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-6">
            <Icon name="BoltIcon" size={20} className="text-secondary animate-pulse" />
            <span className="text-sm font-cta text-secondary">
              Real Product Impact
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-gradient-primary mb-4">
            Product Impact Highlights
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Measurable outcomes delivered across startups, SMBs and enterprise-grade digital products
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="glassmorphism-card rounded-2xl p-6 sm:p-8 hover:shadow-elevation transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={impact.icon as any} size={24} className="text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs font-cta text-primary mb-3">
                    {impact.category}
                  </div>

                  <h3 className="text-xl font-headline font-bold text-foreground mb-1">
                    {impact.title}
                  </h3>

                  <p className="text-secondary font-cta mb-2">
                    {impact.metric}
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    {impact.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="glassmorphism-card rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-headline font-bold text-foreground mb-2">
              Clients & Product Collaborations
            </h3>
            <p className="text-muted-foreground">
              Organizations and teams I’ve partnered with to deliver real business outcomes
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 rounded-lg hover:bg-muted/50 transition-all duration-300 hover:scale-105"
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

export default ProductImpactSection;
