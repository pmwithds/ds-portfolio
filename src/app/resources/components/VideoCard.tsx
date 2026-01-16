'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface VideoCardProps {
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  thumbnailAlt: string;
  category: string;
  views: number;
  publishDate: string;
  onPlay: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  description,
  duration,
  thumbnail,
  thumbnailAlt,
  category,
  views,
  publishDate,
  onPlay,
}) => {
  return (
    <div className="glassmorphism-card rounded-xl overflow-hidden transition-smooth hover:scale-[1.02] hover:shadow-elevation group">
      <div className="relative h-48 overflow-hidden cursor-pointer" onClick={onPlay}>
        <AppImage
          src={thumbnail}
          alt={thumbnailAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm">
            <Icon name="PlayIcon" size={32} className="text-white ml-1" />
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-cta font-medium bg-primary/90 text-white backdrop-blur-sm">
            {category}
          </span>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="px-2 py-1 rounded-md text-xs font-cta font-medium bg-black/80 text-white backdrop-blur-sm">
            {duration}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-headline font-semibold text-lg text-foreground mb-2 group-hover:text-gradient-primary transition-all line-clamp-2">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Icon name="EyeIcon" size={14} />
              <span>{views.toLocaleString()} views</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="CalendarIcon" size={14} />
              <span>{publishDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;