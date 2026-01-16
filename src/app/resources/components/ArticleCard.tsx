'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: number;
  publishDate: string;
  image: string;
  imageAlt: string;
  tags: string[];
  views: number;
  onRead: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  excerpt,
  category,
  readTime,
  publishDate,
  image,
  imageAlt,
  tags,
  views,
  onRead,
}) => {
  return (
    <div className="glassmorphism-card rounded-xl overflow-hidden transition-smooth hover:scale-[1.02] hover:shadow-elevation group">
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-cta font-medium bg-primary/90 text-white backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-headline font-semibold text-xl text-foreground mb-3 group-hover:text-gradient-primary transition-all line-clamp-2">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {excerpt}
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
              <Icon name="ClockIcon" size={14} />
              <span>{readTime} min read</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="EyeIcon" size={14} />
              <span>{views.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="CalendarIcon" size={14} />
              <span>{publishDate}</span>
            </div>
          </div>
          <button
            onClick={onRead}
            className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors duration-300 font-cta font-semibold text-sm"
          >
            <span>Read More</span>
            <Icon name="ArrowRightIcon" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;