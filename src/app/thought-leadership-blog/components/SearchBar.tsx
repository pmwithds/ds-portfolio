import Icon from '@/components/ui/AppIcon';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  resultsCount: number;
}

const SearchBar = ({ searchQuery, onSearchChange, resultsCount }: SearchBarProps) => {
  return (
    <div className="bg-card rounded-lg shadow-subtle p-6 mb-8">
      <div className="relative">
        <Icon 
          name="MagnifyingGlassIcon" 
          size={20} 
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search articles by title, topic, or keyword..."
          className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
        />
      </div>
      {searchQuery && (
        <p className="text-sm text-muted-foreground mt-3">
          Found <span className="font-semibold text-foreground">{resultsCount}</span> article{resultsCount !== 1 ? 's' : ''} matching "{searchQuery}"
        </p>
      )}
    </div>
  );
};

export default SearchBar;