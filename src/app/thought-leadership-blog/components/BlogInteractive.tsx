'use client';

import { useState, useEffect } from 'react';
import BlogHero from './BlogHero';
import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';
import ArticleCard from './ArticleCard';
import FeaturedArticle from './FeaturedArticle';
import NewsletterCTA from './NewsletterCTA';
import SocialShare from './SocialShare';
import RelatedArticles from './RelatedArticles';

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

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

const BlogInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const categories: Category[] = [
  { id: 'frameworks', name: 'Frameworks', icon: 'CubeIcon', count: 12 },
  { id: 'strategy', name: 'Strategy', icon: 'ChartBarIcon', count: 15 },
  { id: 'scaling', name: 'Scaling', icon: 'ArrowTrendingUpIcon', count: 10 },
  { id: 'innovation', name: 'Innovation', icon: 'LightBulbIcon', count: 8 },
  { id: 'leadership', name: 'Leadership', icon: 'UserGroupIcon', count: 11 }];


  const articles: Article[] = [
  {
    id: 'north-star-metric-framework',
    title: 'The North Star Metric Framework: Aligning Teams Around What Matters',
    excerpt: 'How defining a single, measurable North Star Metric transformed product strategy and drove 40% increase in user engagement across three product lines. A systematic approach to metric selection and team alignment.',
    category: 'Frameworks',
    categoryIcon: 'CubeIcon',
    readTime: 12,
    publishDate: 'Jan 10, 2026',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c3895ecc-1764656426788.png",
    imageAlt: 'Business analytics dashboard showing growth metrics and KPI charts on computer screen',
    scale: '1-1000',
    tags: ['metrics', 'alignment', 'strategy']
  },
  {
    id: 'zero-to-one-product-discovery',
    title: 'Zero-to-One Product Discovery: Validating Ideas Before Building',
    excerpt: 'A comprehensive framework for early-stage product validation that saved 6 months of development time and $500K in resources. Learn the systematic approach to customer discovery and problem validation.',
    category: 'Innovation',
    categoryIcon: 'LightBulbIcon',
    readTime: 15,
    publishDate: 'Jan 8, 2026',
    image: "https://images.unsplash.com/photo-1690192053559-6753ee4dd5e9",
    imageAlt: 'Diverse team collaborating around whiteboard with sticky notes during product discovery session',
    scale: '0-1',
    tags: ['discovery', 'validation', 'lean']
  },
  {
    id: 'scaling-product-teams',
    title: 'Scaling Product Teams: From 10 to 100 Without Losing Velocity',
    excerpt: 'Lessons learned from scaling product organization through hypergrowth while maintaining 85% sprint completion rate. Organizational structures, communication patterns, and decision frameworks that work at scale.',
    category: 'Scaling',
    categoryIcon: 'ArrowTrendingUpIcon',
    readTime: 18,
    publishDate: 'Jan 5, 2026',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_170dcb507-1767614437204.png",
    imageAlt: 'Large diverse team meeting in modern office space with multiple collaboration zones',
    scale: '1000+',
    tags: ['scaling', 'organization', 'velocity']
  },
  {
    id: 'data-driven-prioritization',
    title: 'Data-Driven Prioritization: Beyond RICE and ICE Frameworks',
    excerpt: 'A hybrid prioritization model combining quantitative metrics with qualitative insights that improved feature success rate by 60%. Practical implementation guide with real-world examples and templates.',
    category: 'Strategy',
    categoryIcon: 'ChartBarIcon',
    readTime: 10,
    publishDate: 'Jan 3, 2026',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_121641e71-1768489590169.png",
    imageAlt: 'Product manager analyzing prioritization matrix on laptop with colorful data visualizations',
    scale: '1-1000',
    tags: ['prioritization', 'frameworks', 'data']
  },
  {
    id: 'stakeholder-management-enterprise',
    title: 'Enterprise Stakeholder Management: Navigating Complex Organizations',
    excerpt: 'Strategic approaches to managing 50+ stakeholders across multiple business units while maintaining product vision. Communication frameworks and influence tactics that drive alignment at scale.',
    category: 'Leadership',
    categoryIcon: 'UserGroupIcon',
    readTime: 14,
    publishDate: 'Dec 28, 2025',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12c40ed85-1766500363598.png",
    imageAlt: 'Executive presentation in corporate boardroom with diverse senior stakeholders',
    scale: '1000+',
    tags: ['stakeholders', 'communication', 'enterprise']
  },
  {
    id: 'product-market-fit-signals',
    title: 'Product-Market Fit Signals: Knowing When You\'ve Found It',
    excerpt: 'Quantitative and qualitative indicators that signal true product-market fit beyond vanity metrics. Case study of achieving PMF in 8 months with systematic validation approach.',
    category: 'Innovation',
    categoryIcon: 'LightBulbIcon',
    readTime: 11,
    publishDate: 'Dec 25, 2025',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_194abfaf4-1766545897299.png",
    imageAlt: 'Startup team celebrating product launch success with growth charts visible on screen',
    scale: '0-1',
    tags: ['PMF', 'validation', 'metrics']
  },
  {
    id: 'technical-debt-strategy',
    title: 'Technical Debt Strategy: Balancing Innovation and Maintenance',
    excerpt: 'A framework for quantifying, prioritizing, and systematically addressing technical debt while maintaining feature velocity. Reduced critical incidents by 70% while increasing deployment frequency.',
    category: 'Strategy',
    categoryIcon: 'ChartBarIcon',
    readTime: 13,
    publishDate: 'Dec 22, 2025',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19633389d-1764664294332.png",
    imageAlt: 'Software engineers reviewing code architecture and technical debt on multiple monitors',
    scale: '1-1000',
    tags: ['technical-debt', 'engineering', 'strategy']
  },
  {
    id: 'customer-feedback-loops',
    title: 'Building Effective Customer Feedback Loops at Scale',
    excerpt: 'Systematic approach to collecting, analyzing, and acting on customer feedback from 100K+ users. Closed-loop feedback system that improved NPS by 25 points in 6 months.',
    category: 'Frameworks',
    categoryIcon: 'CubeIcon',
    readTime: 16,
    publishDate: 'Dec 20, 2025',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a826caf4-1767678401416.png",
    imageAlt: 'Customer success team analyzing user feedback data on collaborative digital workspace',
    scale: '1000+',
    tags: ['feedback', 'customers', 'scale']
  },
  {
    id: 'competitive-intelligence-framework',
    title: 'Competitive Intelligence Framework for Product Strategy',
    excerpt: 'Structured approach to competitive analysis that informs product strategy without becoming reactive. How systematic competitive intelligence drove 3 successful product differentiations.',
    category: 'Strategy',
    categoryIcon: 'ChartBarIcon',
    readTime: 9,
    publishDate: 'Dec 18, 2025',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1127f8c21-1767604853201.png",
    imageAlt: 'Strategic planning session with competitive analysis charts and market positioning maps',
    scale: '1-1000',
    tags: ['competitive', 'strategy', 'analysis']
  },
  {
    id: 'cross-functional-collaboration',
    title: 'Cross-Functional Collaboration: Breaking Down Silos',
    excerpt: 'Practical frameworks for fostering collaboration between product, engineering, design, and business teams. Reduced time-to-market by 40% through improved cross-functional workflows.',
    category: 'Leadership',
    categoryIcon: 'UserGroupIcon',
    readTime: 12,
    publishDate: 'Dec 15, 2025',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fe425f79-1768489592604.png",
    imageAlt: 'Cross-functional team workshop with product managers, designers, and engineers collaborating',
    scale: '1-1000',
    tags: ['collaboration', 'teams', 'process']
  },
  {
    id: 'mvp-to-scale-journey',
    title: 'From MVP to Scale: The Critical Transition Phase',
    excerpt: 'Navigating the challenging phase between product-market fit and scale. Architectural decisions, team structures, and process changes that enable sustainable growth from 1K to 100K users.',
    category: 'Scaling',
    categoryIcon: 'ArrowTrendingUpIcon',
    readTime: 17,
    publishDate: 'Dec 12, 2025',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c9a0e32f-1768489589535.png",
    imageAlt: 'Product roadmap visualization showing evolution from MVP to scaled product on digital board',
    scale: '1-1000',
    tags: ['scaling', 'growth', 'architecture']
  },
  {
    id: 'experimentation-culture',
    title: 'Building an Experimentation Culture: A/B Testing at Scale',
    excerpt: 'How to establish systematic experimentation practices that drive data-informed decisions. Ran 200+ experiments annually with 35% win rate, generating $2M in incremental revenue.',
    category: 'Frameworks',
    categoryIcon: 'CubeIcon',
    readTime: 14,
    publishDate: 'Dec 10, 2025',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cb36d0c4-1767811279633.png",
    imageAlt: 'Data scientist presenting A/B test results with statistical significance charts on screen',
    scale: '1000+',
    tags: ['experimentation', 'testing', 'data']
  }];


  const featuredArticle = articles[0];

  const relatedArticles = [
  {
    id: 'okr-implementation-guide',
    title: 'OKR Implementation Guide: From Theory to Practice',
    category: 'Frameworks',
    categoryIcon: 'CubeIcon',
    readTime: 10,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f8ff8364-1766988299630.png",
    imageAlt: 'Team reviewing OKR objectives and key results on collaborative whiteboard'
  },
  {
    id: 'product-analytics-mastery',
    title: 'Product Analytics Mastery: Beyond Basic Metrics',
    category: 'Strategy',
    categoryIcon: 'ChartBarIcon',
    readTime: 13,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_175c0b31a-1765305752920.png",
    imageAlt: 'Product analytics dashboard showing user behavior funnels and retention cohorts'
  },
  {
    id: 'agile-at-scale',
    title: 'Agile at Scale: SAFe, LeSS, or Custom Framework?',
    category: 'Scaling',
    categoryIcon: 'ArrowTrendingUpIcon',
    readTime: 15,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bc94a461-1768489589006.png",
    imageAlt: 'Large agile team conducting scaled sprint planning with multiple scrum boards'
  }];


  const filteredArticles = articles.filter((article) => {
    const matchesCategory = activeCategory === 'all' || article.category.toLowerCase() === categories.find((c) => c.id === activeCategory)?.name.toLowerCase();
    const matchesSearch = searchQuery === '' ||
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (email: string) => {
    if (!isHydrated) return;
    alert(`Thank you for subscribing with ${email}! You'll receive our next newsletter with PM insights and frameworks.`);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="pt-16">
          <BlogHero totalArticles={articles.length} categories={categories.map((c) => c.name)} />
          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
            <div className="animate-pulse space-y-8">
              <div className="h-64 bg-muted rounded-lg"></div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) =>
                <div key={i} className="h-96 bg-muted rounded-lg"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-16">
        <BlogHero totalArticles={articles.length} categories={categories.map((c) => c.name)} />
        
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
          <FeaturedArticle article={featuredArticle} />
          
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory} />

          
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            resultsCount={filteredArticles.length} />

          
          <SocialShare articleTitle="PMPortfolio Thought Leadership" />
          
          {filteredArticles.length > 0 ?
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredArticles.slice(1).map((article) =>
            <ArticleCard key={article.id} article={article} />
            )}
            </div> :

          <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4">
                <svg className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">No Articles Found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your filters or search query</p>
              <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-opacity-90 transition-smooth">

                Clear Filters
              </button>
            </div>
          }
          
          <NewsletterCTA onSubscribe={handleSubscribe} />
          
          <RelatedArticles articles={relatedArticles} />
        </div>
      </div>
    </div>);

};

export default BlogInteractive;