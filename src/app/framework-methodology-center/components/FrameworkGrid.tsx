'use client';

import FrameworkCard from './FrameworkCard';
import { motion } from 'framer-motion';
import type { Framework } from './FrameworkMethodologyInteractive';

interface FrameworkGridProps {
  frameworks: Framework[];
  onFrameworkClick: (framework: Framework) => void;
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const FrameworkGrid = ({ frameworks, onFrameworkClick }: FrameworkGridProps) => {

  if (frameworks.length === 0) {
    return (
      <section className="mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-md mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4">
            <span className="text-2xl">🔍</span>
          </div>

          <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
            No matching frameworks
          </h3>

          <p className="text-muted-foreground text-sm">
            Try adjusting your filters or search keywords to explore more frameworks.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {frameworks.map(framework => (
          <FrameworkCard
            key={framework.id}
            framework={framework}
            onClick={() => onFrameworkClick(framework)}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default FrameworkGrid;
