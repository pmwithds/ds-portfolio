'use client';

import Icon from '@/components/ui/AppIcon';

interface FrameworkFiltersProps {
  categories: string[];
  scales: string[];
  selectedCategory: string;
  selectedScale: string;
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onScaleChange: (scale: string) => void;
  onSearchChange: (query: string) => void;
  totalFrameworks: number;
  filteredCount: number;
}

const FrameworkFilters = ({
  categories,
  scales,
  selectedCategory,
  selectedScale,
  searchQuery,
  onCategoryChange,
  onScaleChange,
  onSearchChange,
  totalFrameworks,
  filteredCount
}: FrameworkFiltersProps) => {
  return (
    <section className="bg-card border-b border-border sticky top-16 z-40 backdrop-blur-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-4">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Icon
              name="MagnifyingGlassIcon"
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search by framework name or use-case..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4">

            {/* Category */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-foreground">
                Category
              </span>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'bg-muted hover:bg-primary hover:text-primary-foreground'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Scale */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-foreground">
                Product Scale
              </span>
              <div className="flex flex-wrap gap-2">
                {scales.map(scale => (
                  <button
                    key={scale}
                    onClick={() => onScaleChange(scale)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      selectedScale === scale
                        ? 'bg-accent text-accent-foreground shadow-sm'
                        : 'bg-muted hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    {scale}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Results Counter */}
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">{filteredCount}</span> of{' '}
          <span className="font-medium text-foreground">{totalFrameworks}</span> frameworks
        </div>

      </div>
    </section>
  );
};

export default FrameworkFilters;
