'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface CalculatorCardProps {
  title: string;
  description: string;
  icon: string;
  category: string;
  usageCount: number;
  onLaunch: () => void;
}

const CalculatorCard: React.FC<CalculatorCardProps> = ({
  title,
  description,
  icon,
  category,
  usageCount,
  onLaunch,
}) => {
  return (
    <div className="glassmorphism-card rounded-xl p-6 transition-smooth hover:scale-[1.02] hover:shadow-elevation group cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center glow-accent">
          <Icon name={icon as any} size={28} className="text-white" />
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-cta font-medium bg-accent/10 text-accent">
          {category}
        </span>
      </div>

      <h3 className="font-headline font-semibold text-lg text-foreground mb-2 group-hover:text-gradient-accent transition-all">
        {title}
      </h3>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
          <Icon name="UserGroupIcon" size={14} />
          <span>{usageCount.toLocaleString()} uses</span>
        </div>
        <button
          onClick={onLaunch}
          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-accent to-secondary text-background rounded-lg font-cta font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          <Icon name="CalculatorIcon" size={16} />
          <span>Launch</span>
        </button>
      </div>
    </div>
  );
};

export default CalculatorCard;