'use client';

import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { motion } from 'framer-motion';
import type { Framework } from './FrameworkMethodologyInteractive';

interface FrameworkCardProps {
  framework: Framework;
  onClick: () => void;
}

const FrameworkCard = ({ framework, onClick }: FrameworkCardProps) => {
  const difficultyColors = {
    Beginner: 'bg-success text-success-foreground',
    Intermediate: 'bg-warning text-warning-foreground',
    Advanced: 'bg-error text-error-foreground'
  };

  return (
    <motion.article
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group bg-card rounded-xl shadow-subtle hover:shadow-elevated cursor-pointer overflow-hidden border border-border"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={framework.image}
          alt={framework.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute top-3 right-3 flex gap-2">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className={`px-2 py-1 rounded-full text-xs font-semibold ${difficultyColors[framework.difficulty as keyof typeof difficultyColors]}`}
          >
            {framework.difficulty}
          </motion.span>

          {framework.downloadableTemplate && (
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="px-2 py-1 rounded-full text-xs font-semibold bg-brand-blue text-white"
            >
              Template
            </motion.span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">

        {/* Title Block */}
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shrink-0">
            <Icon
              name={framework.icon as any}
              size={20}
              className="text-primary-foreground"
            />
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {framework.name}
            </h3>

            <div className="flex flex-wrap gap-2 mt-1 text-xs text-muted-foreground">
              <span className="px-2 py-0.5 bg-muted rounded-full">
                {framework.category}
              </span>
              <span className="px-2 py-0.5 bg-accent bg-opacity-20 text-accent-foreground rounded-full">
                Scale {framework.scale}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-foreground leading-relaxed line-clamp-3">
          {framework.description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
          <div className="flex items-center space-x-1">
            <Icon name="ClockIcon" size={14} />
            <span>{framework.timeToImplement}</span>
          </div>

          <div className="flex items-center space-x-1">
            <Icon name="UserGroupIcon" size={14} />
            <span>{framework.adoptionStories.length} case examples</span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-sm font-medium text-primary">
            Explore Framework
          </span>
          <Icon
            name="ArrowRightIcon"
            size={20}
            className="text-primary transition-transform group-hover:translate-x-1"
          />
        </div>

      </div>
    </motion.article>
  );
};

export default FrameworkCard;
