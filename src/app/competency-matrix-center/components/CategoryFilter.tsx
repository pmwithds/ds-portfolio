'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

interface CategoryFilterProps {
  categories: Category[];
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter = ({ categories, onCategoryChange }: CategoryFilterProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    onCategoryChange(categoryId);
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-subtle border border-border">
      <h3 className="font-heading font-semibold text-lg text-foreground mb-4">Filter by Category</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleCategoryClick('all')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-smooth ${
            activeCategory === 'all' ?'bg-primary text-primary-foreground' :'bg-muted text-foreground hover:bg-primary hover:bg-opacity-10'
          }`}
        >
         All Categories ({categories.reduce((sum, c) => sum + c.count, 0)})
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-smooth ${
              activeCategory === category.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-foreground hover:bg-primary hover:bg-opacity-10'
            }`}
          >
            <Icon name={category.icon as any} size={16} />
            <span>{category.name}</span>
            <span className="text-xs opacity-70">({category.count})</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;