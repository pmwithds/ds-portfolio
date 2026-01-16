'use client';

import { useState } from 'react';
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

interface CaseStudyCardProps {
  study: CaseStudy;
  onViewDetails: (study: CaseStudy) => void;
}

export default function CaseStudyCard({ study, onViewDetails }: CaseStudyCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const scaleColors = {
    '0-1': 'bg-brand-purple text-white',
    '1-1000': 'bg-brand-blue text-white',
    '1000+': 'bg-brand-green text-white',
  };

  return (
    <div className="bg-card rounded-xl shadow-subtle hover:shadow-elevated transition-smooth overflow-hidden group">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <AppImage
          src={study.image}
          alt={study.alt}
          className={`w-full h-full object-cover transition-all duration-500 ${
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } group-hover:scale-110`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${scaleColors[study.scale]}`}>
            {study.scale} Scale
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="font-heading font-bold text-xl text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-smooth">
            {study.title}
          </h3>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="BuildingOfficeIcon" size={16} />
            <span>{study.company}</span>
            <span>•</span>
            <span>{study.industry}</span>
          </div>
        </div>

        {/* Challenge Preview */}
        <div className="mb-4">
          <p className="text-sm text-foreground line-clamp-3">
            {study.challenge}
          </p>
        </div>

        {/* Key Metrics Preview */}
        <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-border">
          {study.metrics.slice(0, 3).map((metric, index) => (
            <div key={index} className="text-center">
              <div className="font-heading font-bold text-lg text-primary">
                {metric.value}
              </div>
              <div className="text-xs text-muted-foreground line-clamp-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Frameworks Used */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {study.frameworks.slice(0, 3).map((framework, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-muted text-foreground text-xs rounded-md"
              >
                {framework}
              </span>
            ))}
            {study.frameworks.length > 3 && (
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                +{study.frameworks.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => onViewDetails(study)}
          className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-opacity-90 transition-smooth"
        >
          <span>View Full Case Study</span>
          <Icon name="ArrowRightIcon" size={16} />
        </button>
      </div>
    </div>
  );
}