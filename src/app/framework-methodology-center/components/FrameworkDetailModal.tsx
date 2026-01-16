'use client';

import { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import type { Framework } from './FrameworkMethodologyInteractive';

interface FrameworkDetailModalProps {
  framework: Framework;
  onClose: () => void;
}

const FrameworkDetailModal = ({ framework, onClose }: FrameworkDetailModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-card rounded-lg shadow-elevated max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-start justify-between z-10">
          <div className="flex items-start space-x-4 flex-1">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name={framework.icon as any} size={24} className="text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-2">
                {framework.name}
              </h2>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-muted text-foreground rounded-full text-xs font-medium">
                  {framework.category}
                </span>
                <span className="px-3 py-1 bg-accent bg-opacity-20 text-accent-foreground rounded-full text-xs font-medium">
                  {framework.scale}
                </span>
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                  {framework.difficulty}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-md transition-smooth flex-shrink-0"
            aria-label="Close modal"
          >
            <Icon name="XMarkIcon" size={24} className="text-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Image */}
          <div className="relative h-64 rounded-lg overflow-hidden">
            <AppImage
              src={framework.image}
              alt={framework.alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
              Overview
            </h3>
            <p className="text-foreground leading-relaxed">
              {framework.description}
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-muted p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="ClockIcon" size={20} className="text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Time to Implement</span>
              </div>
              <p className="font-semibold text-foreground">{framework.timeToImplement}</p>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="AcademicCapIcon" size={20} className="text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Difficulty</span>
              </div>
              <p className="font-semibold text-foreground">{framework.difficulty}</p>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="DocumentTextIcon" size={20} className="text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Template</span>
              </div>
              <p className="font-semibold text-foreground">
                {framework.downloadableTemplate ? 'Available' : 'Not Available'}
              </p>
            </div>
          </div>

          {/* Key Benefits */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
              Key Benefits
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {framework.keyBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Implementation Steps */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
              Implementation Steps
            </h3>
            <div className="space-y-4">
              {framework.steps.map((step, index) => (
                <div key={index} className="bg-muted p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                      <p className="text-sm text-foreground mb-3">{step.description}</p>
                      <div className="space-y-1">
                        <p className="text-xs font-medium text-muted-foreground">Deliverables:</p>
                        <ul className="space-y-1">
                          {step.deliverables.map((deliverable, dIndex) => (
                            <li key={dIndex} className="flex items-center space-x-2 text-xs text-foreground">
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-World Applications */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
              Real-World Applications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {framework.realWorldApplications.map((application, index) => (
                <div key={index} className="flex items-start space-x-2 bg-muted p-3 rounded-lg">
                  <Icon name="LightBulbIcon" size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{application}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Adoption Stories */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
              Adoption Success Stories
            </h3>
            <div className="space-y-4">
              {framework.adoptionStories.map((story, index) => (
                <div key={index} className="border border-border rounded-lg p-4 bg-card">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">{story.company}</h4>
                      <p className="text-sm text-muted-foreground">{story.role}</p>
                    </div>
                    <Icon name="BuildingOfficeIcon" size={20} className="text-primary" />
                  </div>
                  <p className="text-sm text-foreground mb-3">{story.impact}</p>
                  <div className="flex items-center space-x-2 text-xs">
                    <Icon name="ChartBarIcon" size={16} className="text-success" />
                    <span className="font-semibold text-success">{story.metrics}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
            {framework.downloadableTemplate && (
              <button className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-opacity-90 transition-smooth">
                <Icon name="ArrowDownTrayIcon" size={20} />
                <span>Download Template</span>
              </button>
            )}
            <Link
              href={framework.caseStudyLink}
              className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 border border-primary text-primary rounded-md font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              <Icon name="DocumentTextIcon" size={20} />
              <span>View Case Studies</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameworkDetailModal;