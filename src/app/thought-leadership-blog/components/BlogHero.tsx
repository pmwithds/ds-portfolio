import Icon from '@/components/ui/AppIcon';

interface BlogHeroProps {
  totalArticles: number;
  categories: string[];
}

const BlogHero = ({ totalArticles, categories }: BlogHeroProps) => {
  return (
    <section className="bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground py-16 lg:py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-accent bg-opacity-20 px-4 py-2 rounded-full mb-6">
            <Icon name="SparklesIcon" size={20} className="text-white" />
            <span className="text-sm font-semibold text-white">Strategic PM Insights</span>
          </div>
          
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
            Thought Leadership Blog
          </h1>
          
          <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Industry insights, proven methodologies, and strategic frameworks that demonstrate systematic thinking and measurable impact across the product lifecycle. From zero-to-one innovation to enterprise-scale optimization.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="DocumentTextIcon" size={20} className="opacity-80" />
              <span className="opacity-90">{totalArticles} Articles</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="TagIcon" size={20} className="opacity-80" />
              <span className="opacity-90">{categories.length} Categories</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="ClockIcon" size={20} className="opacity-80" />
              <span className="opacity-90">Weekly Updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;