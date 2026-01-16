'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ResourceCardProps {
  title: string;
  description: string;
  category: string;
  downloadCount: number;
  fileType: string;
  fileSize: string;
  lastUpdated: string;
  tags: string[];
  onDownload: () => void;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  category,
  downloadCount,
  fileType,
  fileSize,
  lastUpdated,
  tags,
  onDownload,
}) => {
  return (
    <div className="glassmorphism-card rounded-xl p-6 transition-smooth hover:scale-[1.02] hover:shadow-elevation group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Icon name="DocumentTextIcon" size={24} className="text-white" />
          </div>
          <div>
            <h3 className="font-headline font-semibold text-lg text-foreground group-hover:text-gradient-primary transition-all">
              {title}
            </h3>
            <span className="text-xs text-muted-foreground">{category}</span>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-cta font-medium bg-primary/10 text-primary">
          {fileType}
        </span>
      </div>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 rounded-md text-xs font-body bg-muted text-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Icon name="ArrowDownTrayIcon" size={14} />
            <span>{downloadCount.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="DocumentIcon" size={14} />
            <span>{fileSize}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="ClockIcon" size={14} />
            <span>{lastUpdated}</span>
          </div>
        </div>
        <button
          onClick={onDownload}
          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-cta font-semibold text-sm shadow-cta hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          <Icon name="ArrowDownTrayIcon" size={16} />
          <span>Download</span>
        </button>
      </div>
    </div>
  );
};

export default ResourceCard;