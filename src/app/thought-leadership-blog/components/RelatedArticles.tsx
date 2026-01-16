import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface RelatedArticle {
  id: string;
  title: string;
  category: string;
  categoryIcon: string;
  readTime: number;
  image: string;
  imageAlt: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

const RelatedArticles = ({ articles }: RelatedArticlesProps) => {
  return (
    <section className="mb-12">
      <div className="flex items-center space-x-2 mb-6">
        <Icon name="BookOpenIcon" size={24} className="text-primary" />
        <h2 className="font-heading font-bold text-2xl text-foreground">Related Reading</h2>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/thought-leadership-blog/${article.id}`}
            className="bg-card rounded-lg shadow-subtle overflow-hidden hover:shadow-elevated transition-smooth group"
          >
            <div className="relative h-40 overflow-hidden">
              <AppImage
                src={article.image}
                alt={article.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
              />
            </div>
            
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name={article.categoryIcon as any} size={14} className="text-primary" />
                <span className="text-xs font-medium text-primary">{article.category}</span>
              </div>
              
              <h3 className="font-heading font-semibold text-base text-foreground mb-2 group-hover:text-primary transition-smooth line-clamp-2">
                {article.title}
              </h3>
              
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Icon name="ClockIcon" size={14} />
                <span>{article.readTime} min read</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;