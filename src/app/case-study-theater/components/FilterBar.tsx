'use client';

import Icon from '@/components/ui/AppIcon';

interface FilterBarProps {
  selectedIndustry: string;
  selectedScale: string;
  selectedFramework: string;
  searchQuery: string;
  onIndustryChange: (industry: string) => void;
  onScaleChange: (scale: string) => void;
  onFrameworkChange: (framework: string) => void;
  onSearchChange: (query: string) => void;
  onClearFilters: () => void;
}

export default function FilterBar({
  selectedIndustry,
  selectedScale,
  selectedFramework,
  searchQuery,
  onIndustryChange,
  onScaleChange,
  onFrameworkChange,
  onSearchChange,
  onClearFilters,
}: FilterBarProps) {
  const industries = [
    'All Industries',
    'FinTech',
    'HealthTech',
    'E-Commerce',
    'SaaS',
    'EdTech',
    'Enterprise',
  ];

  const scales = ['All Scales', '0-1', '1-1000', '1000+'];

  const frameworks = [
    'All Frameworks',
    'RICE',
    'Jobs-to-be-Done',
    'OKRs',
    'North Star',
    'Lean Canvas',
    'Design Thinking',
  ];

  const hasActiveFilters =
    selectedIndustry !== 'All Industries' ||
    selectedScale !== 'All Scales' ||
    selectedFramework !== 'All Frameworks' ||
    searchQuery !== '';

  return (
    <div className="bg-card rounded-xl shadow-subtle p-6 mb-8">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Icon
            name="MagnifyingGlassIcon"
            size={20}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="text"
            placeholder="Search case studies by title, company, or challenge..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          />
        </div>
      </div>

      {/* Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Industry Filter */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Industry
          </label>
          <select
            value={selectedIndustry}
            onChange={(e) => onIndustryChange(e.target.value)}
            className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          >
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        {/* Scale Filter */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Product Scale
          </label>
          <select
            value={selectedScale}
            onChange={(e) => onScaleChange(e.target.value)}
            className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          >
            {scales.map((scale) => (
              <option key={scale} value={scale}>
                {scale}
              </option>
            ))}
          </select>
        </div>

        {/* Framework Filter */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Framework Used
          </label>
          <select
            value={selectedFramework}
            onChange={(e) => onFrameworkChange(e.target.value)}
            className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          >
            {frameworks.map((framework) => (
              <option key={framework} value={framework}>
                {framework}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Clear Filters Button */}
      {hasActiveFilters && (
        <div className="flex justify-end">
          <button
            onClick={onClearFilters}
            className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-primary hover:text-primary-foreground hover:bg-primary rounded-lg transition-smooth"
          >
            <Icon name="XMarkIcon" size={16} />
            <span>Clear All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
}