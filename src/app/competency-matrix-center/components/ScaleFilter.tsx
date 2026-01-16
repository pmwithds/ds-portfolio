'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ScaleOption {
  id: string;
  label: string;
  description: string;
  icon: string;
}

interface ScaleFilterProps {
  onFilterChange: (scaleId: string) => void;
}

const ScaleFilter = ({ onFilterChange }: ScaleFilterProps) => {
  const [activeScale, setActiveScale] = useState<string>('all');

  const scaleOptions: ScaleOption[] = [
    {
      id: 'all',
      label: 'All Scales',
      description: 'Complete competency overview',
      icon: 'Squares2X2Icon',
    },
    {
      id: '0-1',
      label: '0-1 Scale',
      description: 'Zero-to-one innovations',
      icon: 'RocketLaunchIcon',
    },
    {
      id: '1-1000',
      label: '1-1000 Scale',
      description: 'Growth & scaling phase',
      icon: 'ChartBarSquareIcon',
    },
    {
      id: '1000+',
      label: '1000+ Scale',
      description: 'Enterprise optimization',
      icon: 'BuildingOffice2Icon',
    },
  ];

  const handleFilterClick = (scaleId: string) => {
    setActiveScale(scaleId);
    onFilterChange(scaleId);
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-subtle border border-border">
      <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
        Filter by Product Scale
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {scaleOptions.map((option) => {
          const isActive = activeScale === option.id;

          return (
            <button
              key={option.id}
              onClick={() => handleFilterClick(option.id)}
              className={`p-4 rounded-md text-left transition-smooth ${
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-primary hover:bg-opacity-10'
              }`}
            >
              <div className="flex items-center space-x-2 mb-2">
                <Icon
                  name={option.icon as any}
                  size={20}
                  className={isActive ? 'text-primary-foreground' : 'text-muted-foreground'}
                />

                <span
                  className={`font-semibold text-sm ${
                    isActive ? 'text-primary-foreground' : 'text-foreground'
                  }`}
                >
                  {option.label}
                </span>
              </div>

              <p
                className={`text-xs ${
                  isActive ? 'text-primary-foreground opacity-90' : 'text-muted-foreground'
                }`}
              >
                {option.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ScaleFilter;
