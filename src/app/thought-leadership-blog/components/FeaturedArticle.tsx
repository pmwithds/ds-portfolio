import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface FeaturedArticleData {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  categoryIcon: string;
  readTime: number;
  publishDate: string;
  image: string;
  imageAlt: string;
  scale: string;
  tags: string[];
}

interface FeaturedArticleProps {
  article: FeaturedArticleData;
}

const FeaturedArticle = ({ article }: FeaturedArticleProps) => {
  const getScaleBadgeColor = (scale: string) => {
    switch (scale) {
      case '0-1': return 'bg-brand-purple text-white';
      case '1-1000': return 'bg-brand-blue text-white';
      case '1000+': return 'bg-brand-green text-white';
      default: return 'bg-muted text-foreground';
    }
  };

  return (
    <section className="mb-12">
      <div className="flex items-center space-x-2 mb-6">
        <Icon name="StarIcon" size={24} className="text-accent" />
        <h2 className="font-heading font-bold text-2xl text-foreground">Featured Article</h2>
      </div>
      
      <Link href={`/thought-leadership-blog/${article.id}`}>
        <article className="bg-card rounded-lg shadow-elevated overflow-hidden hover:shadow-lg transition-smooth group">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-64 lg:h-full overflow-hidden">
              <AppImage
                src={article.image}
                alt={article.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
              />
              <div className="absolute top-6 left-6">
                <span className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-semibold ${getScaleBadgeColor(article.scale)}`}>
                  <Icon name="ChartBarIcon" size={16} />
                  <span>{article.scale} Scale</span>
                </span>
              </div>
            </div>
            
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name={article.categoryIcon as any} size={20} className="text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                  {article.category}
                </span>
              </div>
              
              <h3 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4 group-hover:text-primary transition-smooth">
                {article.title}
              </h3>
              
              <p className="text-muted-foreground text-base lg:text-lg mb-6 leading-relaxed">
                {article.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground pt-6 border-t border-border">
                <div className="flex items-center space-x-2">
                  <Icon name="CalendarIcon" size={18} />
                  <span>{article.publishDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="ClockIcon" size={18} />
                  <span>{article.readTime} min read</span>
                </div>
              </div>
              
              <div className="mt-6">
                <span className="inline-flex items-center space-x-2 text-primary font-semibold group-hover:space-x-3 transition-smooth">
                  <span>Read Full Article</span>
                  <Icon name="ArrowRightIcon" size={20} />
                </span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </section>
  );
};

export default FeaturedArticle;