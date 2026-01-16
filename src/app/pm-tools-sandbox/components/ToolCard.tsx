'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ToolCardProps {
  title: string;
  description: string;
  icon: string;
  category: string;
  onClick: () => void;
}

export default function ToolCard({ title, description, icon, category, onClick }: ToolCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full text-left bg-card rounded-lg p-6 border border-border hover:border-primary transition-smooth shadow-subtle hover:shadow-elevated"
    >
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-lg transition-smooth ${isHovered ? 'bg-primary' : 'bg-muted'}`}>
          <Icon 
            name={icon as any} 
            size={24} 
            className={isHovered ? 'text-primary-foreground' : 'text-primary'}
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-heading font-semibold text-lg text-foreground">
              {title}
            </h3>
            <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
              {category}
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </button>
  );
}