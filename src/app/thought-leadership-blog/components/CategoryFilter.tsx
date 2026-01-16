import Icon from '@/components/ui/AppIcon';

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <div className="bg-card rounded-lg shadow-subtle p-6 mb-8">
      <div className="flex items-center space-x-2 mb-4">
        <Icon name="FunnelIcon" size={20} className="text-primary" />
        <h3 className="font-heading font-semibold text-lg text-foreground">
          Filter by Category
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {/* ALL BUTTON */}
        <button
          onClick={() => onCategoryChange('all')}
          className={`flex flex-col items-center justify-center p-4 rounded-md transition-smooth ${
            activeCategory === 'all'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-foreground hover:bg-primary hover:bg-opacity-10'
          }`}
        >
          <Icon
            name="ViewColumnsIcon"
            size={24}
            className={`mb-2 ${
              activeCategory === 'all'
                ? 'text-primary-foreground'
                : 'text-muted-foreground'
            }`}
          />

          <span className="text-sm font-medium">All Topics</span>

          <span
            className={`text-xs mt-1 ${
              activeCategory === 'all'
                ? 'opacity-90'
                : 'text-muted-foreground'
            }`}
          >
            {categories.reduce((sum, cat) => sum + cat.count, 0)}
          </span>
        </button>

        {/* CATEGORY BUTTONS */}
        {categories.map((category) => {
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex flex-col items-center justify-center p-4 rounded-md transition-smooth ${
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-primary hover:bg-opacity-10'
              }`}
            >
              <Icon
                name={category.icon as any}
                size={24}
                className={`mb-2 ${
                  isActive
                    ? 'text-primary-foreground'
                    : 'text-muted-foreground'
                }`}
              />

              <span className="text-sm font-medium text-center">
                {category.name}
              </span>

              <span
                className={`text-xs mt-1 ${
                  isActive ? 'opacity-90' : 'text-muted-foreground'
                }`}
              >
                {category.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
