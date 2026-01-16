import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Article {
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

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const getScaleBadgeColor = (scale: string) => {
    switch (scale) {
      case '0-1': return 'bg-brand-purple text-white';
      case '1-1000': return 'bg-brand-blue text-white';
      case '1000+': return 'bg-brand-green text-white';
      default: return 'bg-muted text-foreground';
    }
  };

  return (
    <article className="bg-card rounded-lg shadow-subtle overflow-hidden hover:shadow-elevated transition-smooth group">
      <Link href={`/thought-leadership-blog/${article.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <AppImage
            src={article.image}
            alt={article.imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold ${getScaleBadgeColor(article.scale)}`}>
              <Icon name="ChartBarIcon" size={14} />
              <span>{article.scale}</span>
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-3">
            <Icon name={article.categoryIcon as any} size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">{article.category}</span>
          </div>
          
          <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-smooth line-clamp-2">
            {article.title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
            {article.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
            <div className="flex items-center space-x-2">
              <Icon name="CalendarIcon" size={16} />
              <span>{article.publishDate}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="ClockIcon" size={16} />
              <span>{article.readTime} min read</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;