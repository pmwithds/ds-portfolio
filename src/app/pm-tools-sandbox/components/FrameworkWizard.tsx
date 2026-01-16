'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FrameworkWizardProps {
  onClose: () => void;
}

interface Framework {
  name: string;
  description: string;
  bestFor: string[];
  complexity: 'Low' | 'Medium' | 'High';
}

export default function FrameworkWizard({ onClose }: FrameworkWizardProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState<string>('');
  const [teamSize, setTeamSize] = useState<string>('');
  const [timeline, setTimeline] = useState<string>('');
  const [complexity, setComplexity] = useState<string>('');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="fixed inset-0 bg-foreground bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-background rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h2 className="font-heading font-bold text-2xl text-foreground">Framework Selection Wizard</h2>
          </div>
          <div className="p-6">Loading...</div>
        </div>
      </div>
    );
  }

  const frameworks: Framework[] = [
    {
      name: 'RICE Prioritization',
      description: 'Score features based on Reach, Impact, Confidence, and Effort to prioritize product roadmap.',
      bestFor: ['Feature prioritization', 'Roadmap planning', 'Resource allocation'],
      complexity: 'Low'
    },
    {
      name: 'Jobs-to-be-Done (JTBD)',
      description: 'Understand customer motivations and the jobs they hire your product to accomplish.',
      bestFor: ['Customer research', 'Product discovery', 'Market positioning'],
      complexity: 'Medium'
    },
    {
      name: 'OKR Framework',
      description: 'Set ambitious objectives and measurable key results to align team efforts.',
      bestFor: ['Goal setting', 'Team alignment', 'Performance tracking'],
      complexity: 'Medium'
    },
    {
      name: 'North Star Metric',
      description: 'Identify the single metric that best captures the core value your product delivers.',
      bestFor: ['Product strategy', 'Growth focus', 'Team alignment'],
      complexity: 'Low'
    },
    {
      name: 'Lean Canvas',
      description: 'One-page business model to validate product-market fit and identify key assumptions.',
      bestFor: ['Startup validation', 'Business modeling', 'Hypothesis testing'],
      complexity: 'Low'
    },
    {
      name: 'Design Sprint',
      description: 'Five-day process to solve critical problems through prototyping and user testing.',
      bestFor: ['Problem solving', 'Rapid prototyping', 'User validation'],
      complexity: 'High'
    }
  ];

  const getRecommendedFrameworks = (): Framework[] => {
    if (!projectType || !teamSize || !timeline || !complexity) {
      return frameworks;
    }

    let recommended = [...frameworks];

    if (projectType === 'new-product') {
      recommended = recommended.filter(f => 
        f.name === 'Lean Canvas' || f.name === 'Jobs-to-be-Done (JTBD)' || f.name === 'North Star Metric'
      );
    } else if (projectType === 'feature') {
      recommended = recommended.filter(f => 
        f.name === 'RICE Prioritization' || f.name === 'Design Sprint'
      );
    } else if (projectType === 'optimization') {
      recommended = recommended.filter(f => 
        f.name === 'North Star Metric' || f.name === 'OKR Framework'
      );
    }

    if (complexity === 'low') {
      recommended = recommended.filter(f => f.complexity === 'Low' || f.complexity === 'Medium');
    }

    return recommended.length > 0 ? recommended : frameworks;
  };

  const recommendedFrameworks = getRecommendedFrameworks();

  return (
    <div className="fixed inset-0 bg-foreground bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-border flex items-center justify-between sticky top-0 bg-background z-10">
          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground">Framework Selection Wizard</h2>
            <p className="text-sm text-muted-foreground mt-1">Find the perfect PM framework for your project</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-muted transition-smooth"
            aria-label="Close wizard"
          >
            <Icon name="XMarkIcon" size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 pt-6">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-smooth ${
                  step >= s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {s}
                </div>
                {s < 4 && (
                  <div className={`flex-1 h-1 mx-2 rounded transition-smooth ${
                    step > s ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Project Type</span>
            <span>Team Size</span>
            <span>Timeline</span>
            <span>Complexity</span>
          </div>
        </div>

        <div className="p-6">
          {/* Step 1: Project Type */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                What type of project are you working on?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { value: 'new-product', label: 'New Product', icon: 'RocketLaunchIcon' },
                  { value: 'feature', label: 'Feature Development', icon: 'PuzzlePieceIcon' },
                  { value: 'optimization', label: 'Product Optimization', icon: 'ChartBarIcon' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setProjectType(option.value)}
                    className={`p-6 rounded-lg border-2 transition-smooth text-left ${
                      projectType === option.value
                        ? 'border-primary bg-primary bg-opacity-5' :'border-border hover:border-primary hover:bg-muted'
                    }`}
                  >
                    <Icon name={option.icon as any} size={32} className="text-primary mb-3" />
                    <p className="font-semibold text-foreground">{option.label}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Team Size */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                What is your team size?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { value: 'small', label: 'Small (1-5)', icon: 'UserIcon' },
                  { value: 'medium', label: 'Medium (6-15)', icon: 'UserGroupIcon' },
                  { value: 'large', label: 'Large (16+)', icon: 'UsersIcon' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setTeamSize(option.value)}
                    className={`p-6 rounded-lg border-2 transition-smooth text-left ${
                      teamSize === option.value
                        ? 'border-primary bg-primary bg-opacity-5' :'border-border hover:border-primary hover:bg-muted'
                    }`}
                  >
                    <Icon name={option.icon as any} size={32} className="text-primary mb-3" />
                    <p className="font-semibold text-foreground">{option.label}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Timeline */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                What is your project timeline?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { value: 'short', label: 'Short (1-4 weeks)', icon: 'BoltIcon' },
                  { value: 'medium', label: 'Medium (1-3 months)', icon: 'CalendarIcon' },
                  { value: 'long', label: 'Long (3+ months)', icon: 'ClockIcon' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setTimeline(option.value)}
                    className={`p-6 rounded-lg border-2 transition-smooth text-left ${
                      timeline === option.value
                        ? 'border-primary bg-primary bg-opacity-5' :'border-border hover:border-primary hover:bg-muted'
                    }`}
                  >
                    <Icon name={option.icon as any} size={32} className="text-primary mb-3" />
                    <p className="font-semibold text-foreground">{option.label}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Complexity & Results */}
          {step === 4 && (
            <div className="space-y-6">
              {!complexity ? (
                <>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                    What is the project complexity level?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { value: 'low', label: 'Low Complexity', icon: 'CheckCircleIcon' },
                      { value: 'medium', label: 'Medium Complexity', icon: 'AdjustmentsHorizontalIcon' },
                      { value: 'high', label: 'High Complexity', icon: 'CubeIcon' }
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setComplexity(option.value)}
                        className={`p-6 rounded-lg border-2 transition-smooth text-left ${
                          complexity === option.value
                            ? 'border-primary bg-primary bg-opacity-5' :'border-border hover:border-primary hover:bg-muted'
                        }`}
                      >
                        <Icon name={option.icon as any} size={32} className="text-primary mb-3" />
                        <p className="font-semibold text-foreground">{option.label}</p>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-success bg-opacity-10 border border-success rounded-lg p-4 flex items-start space-x-3">
                    <Icon name="CheckCircleIcon" size={24} className="text-success flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-success mb-1">Recommendations Ready!</h4>
                      <p className="text-sm text-foreground">
                        Based on your inputs, we've identified {recommendedFrameworks.length} framework{recommendedFrameworks.length !== 1 ? 's' : ''} that match your needs.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-heading font-semibold text-lg text-foreground">
                      Recommended Frameworks
                    </h3>
                    {recommendedFrameworks.map((framework, index) => (
                      <div key={index} className="bg-card rounded-lg p-6 border border-border">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-heading font-semibold text-lg text-foreground">
                            {framework.name}
                          </h4>
                          <span className={`text-xs font-medium px-2 py-1 rounded ${
                            framework.complexity === 'Low' ? 'bg-success bg-opacity-10 text-success' :
                            framework.complexity === 'Medium'? 'bg-warning bg-opacity-10 text-warning' : 'bg-error bg-opacity-10 text-error'
                          }`}>
                            {framework.complexity} Complexity
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          {framework.description}
                        </p>
                        <div>
                          <p className="text-xs font-semibold text-foreground mb-2">Best for:</p>
                          <div className="flex flex-wrap gap-2">
                            {framework.bestFor.map((use, i) => (
                              <span key={i} className="text-xs bg-muted text-foreground px-3 py-1 rounded-full">
                                {use}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="p-6 border-t border-border flex justify-between">
          <button
            onClick={() => {
              if (step > 1) setStep(step - 1);
              if (step === 4 && complexity) setComplexity('');
            }}
            disabled={step === 1}
            className="px-6 py-2 rounded-md border border-border text-foreground hover:bg-muted transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Back
          </button>
          <div className="flex space-x-3">
            {step < 4 && (
              <button
                onClick={() => setStep(step + 1)}
                disabled={
                  (step === 1 && !projectType) ||
                  (step === 2 && !teamSize) ||
                  (step === 3 && !timeline)
                }
                className="px-6 py-2 rounded-md bg-primary text-primary-foreground hover:bg-opacity-90 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            )}
            {step === 4 && complexity && (
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-md bg-primary text-primary-foreground hover:bg-opacity-90 transition-smooth"
              >
                Done
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}