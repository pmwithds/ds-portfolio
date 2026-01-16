'use client';

import { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Metric {
  label: string;
  value: string;
  change: string;
}

interface CaseStudy {
  id: number;
  title: string;
  company: string;
  industry: string;
  scale: '0-1' | '1-1000' | '1000+';
  duration: string;
  image: string;
  alt: string;
  challenge: string;
  solution: string;
  impact: string;
  metrics: Metric[];
  frameworks: string[];
  tags: string[];
}

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
}

export default function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (study) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [study]);

  if (!study) return null;

  const scaleColors = {
    '0-1': 'bg-brand-purple text-white',
    '1-1000': 'bg-brand-blue text-white',
    '1000+': 'bg-brand-green text-white',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-background rounded-xl shadow-elevated max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center space-x-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${scaleColors[study.scale]}`}>
              {study.scale} Scale
            </span>
            <span className="text-sm text-muted-foreground">{study.duration}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-smooth"
            aria-label="Close modal"
          >
            <Icon name="XMarkIcon" size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Hero Image */}
          <div className="relative h-64 rounded-xl overflow-hidden mb-6">
            <AppImage
              src={study.image}
              alt={study.alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title & Company */}
          <div className="mb-6">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-2">
              {study.title}
            </h2>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Icon name="BuildingOfficeIcon" size={18} />
              <span className="font-medium">{study.company}</span>
              <span>•</span>
              <span>{study.industry}</span>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="bg-card rounded-xl p-6 mb-6">
            <h3 className="font-heading font-bold text-xl text-foreground mb-4">
              Key Metrics & Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {study.metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="font-heading font-bold text-3xl text-primary mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-foreground font-medium mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-success font-semibold">
                    {metric.change}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge Section */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <Icon name="ExclamationTriangleIcon" size={20} className="text-warning" />
              <h3 className="font-heading font-bold text-xl text-foreground">
                The Challenge
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">{study.challenge}</p>
          </div>

          {/* Solution Section */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <Icon name="LightBulbIcon" size={20} className="text-accent" />
              <h3 className="font-heading font-bold text-xl text-foreground">
                The Solution
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">{study.solution}</p>
          </div>

          {/* Impact Section */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <Icon name="ChartBarIcon" size={20} className="text-success" />
              <h3 className="font-heading font-bold text-xl text-foreground">
                The Impact
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">{study.impact}</p>
          </div>

          {/* Frameworks Used */}
          <div className="mb-6">
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">
              Frameworks & Methodologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {study.frameworks.map((framework, index) => (
                <span
                  key={index}
                  className="px-3 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">
              Related Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-2 bg-muted text-foreground text-sm rounded-lg"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}