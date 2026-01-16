'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import ResourceCard from './ResourceCard';
import ArticleCard from './ArticleCard';
import CalculatorCard from './CalculatorCard';
import VideoCard from './VideoCard';
import NewsletterSection from './NewsletterSection';

interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
  downloadCount: number;
  fileType: string;
  fileSize: string;
  lastUpdated: string;
  tags: string[];
}

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: number;
  publishDate: string;
  image: string;
  imageAlt: string;
  tags: string[];
  views: number;
}

interface Calculator {
  id: number;
  title: string;
  description: string;
  icon: string;
  category: string;
  usageCount: number;
}

interface Video {
  id: number;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  thumbnailAlt: string;
  category: string;
  views: number;
  publishDate: string;
}

const ResourcesInteractive: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'templates' | 'articles' | 'calculators' | 'videos'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const resources: Resource[] = [
  {
    id: 1,
    title: "Product Roadmap Template",
    description: "Comprehensive quarterly roadmap template with strategic alignment framework and stakeholder communication guidelines.",
    category: "Planning",
    downloadCount: 2847,
    fileType: "PDF",
    fileSize: "2.4 MB",
    lastUpdated: "Jan 2026",
    tags: ["Roadmap", "Strategy", "Planning"]
  },
  {
    id: 2,
    title: "User Story Mapping Kit",
    description: "Complete user story mapping framework with prioritization matrix and acceptance criteria templates.",
    category: "Agile",
    downloadCount: 3521,
    fileType: "XLSX",
    fileSize: "1.8 MB",
    lastUpdated: "Dec 2025",
    tags: ["User Stories", "Agile", "Backlog"]
  },
  {
    id: 3,
    title: "Feature Prioritization Framework",
    description: "RICE scoring model with weighted criteria and impact assessment tools for data-driven prioritization.",
    category: "Strategy",
    downloadCount: 4102,
    fileType: "XLSX",
    fileSize: "1.2 MB",
    lastUpdated: "Jan 2026",
    tags: ["Prioritization", "RICE", "Strategy"]
  },
  {
    id: 4,
    title: "Stakeholder Analysis Matrix",
    description: "Power-interest grid with communication planning templates and influence mapping tools.",
    category: "Communication",
    downloadCount: 1956,
    fileType: "PDF",
    fileSize: "1.5 MB",
    lastUpdated: "Dec 2025",
    tags: ["Stakeholders", "Communication", "Management"]
  },
  {
    id: 5,
    title: "Product Launch Checklist",
    description: "90-day launch plan with go-to-market strategy, marketing coordination, and success metrics tracking.",
    category: "Launch",
    downloadCount: 3287,
    fileType: "PDF",
    fileSize: "3.1 MB",
    lastUpdated: "Jan 2026",
    tags: ["Launch", "GTM", "Marketing"]
  },
  {
    id: 6,
    title: "OKR Setting Workbook",
    description: "Quarterly objectives and key results framework with alignment cascading and progress tracking.",
    category: "Strategy",
    downloadCount: 2634,
    fileType: "XLSX",
    fileSize: "2.0 MB",
    lastUpdated: "Dec 2025",
    tags: ["OKRs", "Goals", "Strategy"]
  }];


  const articles: Article[] = [
  {
    id: 1,
    title: "The Evolution of Product Management in 2026",
    excerpt: "Exploring how AI-driven insights and data democratization are reshaping the product manager role and strategic decision-making processes.",
    category: "Industry Trends",
    readTime: 8,
    publishDate: "Jan 10, 2026",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ff08559a-1765030143856.png",
    imageAlt: "Modern office workspace with multiple computer screens displaying data analytics dashboards and product metrics",
    tags: ["AI", "Future", "Strategy"],
    views: 4521
  },
  {
    id: 2,
    title: "Building Products Users Actually Want",
    excerpt: "A deep dive into user-centric design principles, continuous discovery practices, and validation frameworks that prevent building the wrong thing.",
    category: "Methodology",
    readTime: 12,
    publishDate: "Jan 8, 2026",
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0",
    imageAlt: "Product team collaborating around whiteboard with user journey maps and sticky notes during design sprint",
    tags: ["User Research", "Design", "Discovery"],
    views: 3847
  },
  {
    id: 3,
    title: "Mastering Stakeholder Communication",
    excerpt: "Proven frameworks for managing executive expectations, aligning cross-functional teams, and communicating product vision effectively.",
    category: "Leadership",
    readTime: 10,
    publishDate: "Jan 5, 2026",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_135beea41-1766566082889.png",
    imageAlt: "Business professionals in conference room presenting product strategy on large screen during executive meeting",
    tags: ["Communication", "Leadership", "Stakeholders"],
    views: 2956
  },
  {
    id: 4,
    title: "Data-Driven Product Decisions",
    excerpt: "How to leverage analytics, A/B testing, and user behavior data to make confident product decisions and measure real impact.",
    category: "Analytics",
    readTime: 15,
    publishDate: "Jan 3, 2026",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
    imageAlt: "Close-up of laptop screen showing colorful data visualization charts and product performance metrics dashboard",
    tags: ["Analytics", "Data", "Metrics"],
    views: 5234
  },
  {
    id: 5,
    title: "Scaling Product Teams Effectively",
    excerpt: "Strategies for growing product organizations while maintaining quality, culture, and velocity through structured processes.",
    category: "Team Building",
    readTime: 11,
    publishDate: "Dec 28, 2025",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1390e794a-1767900718984.png",
    imageAlt: "Diverse product team members collaborating at standing desk with laptops and design mockups in modern office",
    tags: ["Scaling", "Teams", "Process"],
    views: 3102
  },
  {
    id: 6,
    title: "Product-Market Fit Validation",
    excerpt: "Systematic approach to testing product-market fit hypotheses, measuring retention signals, and knowing when to pivot or persevere.",
    category: "Strategy",
    readTime: 9,
    publishDate: "Dec 25, 2025",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_119c8b2d4-1767071461856.png",
    imageAlt: "Entrepreneur analyzing market research data and customer feedback on tablet in startup office environment",
    tags: ["PMF", "Validation", "Strategy"],
    views: 4687
  }];


  const calculators: Calculator[] = [
  {
    id: 1,
    title: "ROI Impact Calculator",
    description: "Calculate expected return on investment for product features with revenue impact, cost analysis, and payback period estimation.",
    icon: "CurrencyDollarIcon",
    category: "Financial",
    usageCount: 8934
  },
  {
    id: 2,
    title: "RICE Prioritization Tool",
    description: "Score features using Reach, Impact, Confidence, and Effort framework with weighted calculations and ranking visualization.",
    icon: "ChartBarIcon",
    category: "Prioritization",
    usageCount: 12456
  },
  {
    id: 3,
    title: "Sprint Capacity Planner",
    description: "Plan sprint capacity with team velocity tracking, story point allocation, and resource availability management.",
    icon: "CalendarIcon",
    category: "Agile",
    usageCount: 6721
  },
  {
    id: 4,
    title: "Churn Rate Analyzer",
    description: "Analyze customer churn patterns with cohort analysis, retention curves, and predictive churn risk scoring.",
    icon: "ArrowTrendingDownIcon",
    category: "Analytics",
    usageCount: 5438
  },
  {
    id: 5,
    title: "Feature Adoption Tracker",
    description: "Track feature adoption rates with DAU/MAU metrics, engagement scoring, and user segment analysis.",
    icon: "UserGroupIcon",
    category: "Metrics",
    usageCount: 7892
  },
  {
    id: 6,
    title: "Technical Debt Estimator",
    description: "Quantify technical debt impact with maintenance cost calculations, risk assessment, and refactoring prioritization.",
    icon: "WrenchScrewdriverIcon",
    category: "Engineering",
    usageCount: 4567
  }];


  const videos: Video[] = [
  {
    id: 1,
    title: "Product Strategy Deep Dive",
    description: "Complete walkthrough of building a product strategy from market analysis to execution roadmap with real examples.",
    duration: "24:35",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1c965e206-1767657071895.png",
    thumbnailAlt: "Product manager presenting strategy framework on whiteboard with market analysis and competitive positioning diagrams",
    category: "Strategy",
    views: 15234,
    publishDate: "Jan 12, 2026"
  },
  {
    id: 2,
    title: "User Interview Masterclass",
    description: "Learn effective user interview techniques, question frameworks, and insight extraction methods from real sessions.",
    duration: "18:42",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1b0b66ff1-1767105535428.png",
    thumbnailAlt: "Product researcher conducting user interview with participant in modern office setting with recording equipment",
    category: "Research",
    views: 12876,
    publishDate: "Jan 9, 2026"
  },
  {
    id: 3,
    title: "Data Analysis for PMs",
    description: "Practical guide to analyzing product metrics, creating dashboards, and deriving actionable insights from user data.",
    duration: "31:18",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1a3c4eb46-1766996581602.png",
    thumbnailAlt: "Computer screen displaying product analytics dashboard with graphs, charts, and key performance indicators",
    category: "Analytics",
    views: 18543,
    publishDate: "Jan 6, 2026"
  },
  {
    id: 4,
    title: "Roadmap Planning Session",
    description: "Live recording of quarterly roadmap planning with stakeholder alignment, prioritization decisions, and timeline setting.",
    duration: "42:15",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_196044b7e-1766988301355.png",
    thumbnailAlt: "Product team gathered around large screen displaying quarterly roadmap with feature timelines and milestones",
    category: "Planning",
    views: 9876,
    publishDate: "Jan 4, 2026"
  },
  {
    id: 5,
    title: "A/B Testing Best Practices",
    description: "Step-by-step guide to designing, running, and analyzing A/B tests with statistical significance and sample size calculations.",
    duration: "27:53",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1fadc7f92-1768069795242.png",
    thumbnailAlt: "Split screen showing two product variations being tested with conversion metrics and statistical analysis results",
    category: "Experimentation",
    views: 14321,
    publishDate: "Dec 30, 2025"
  },
  {
    id: 6,
    title: "Product Launch Execution",
    description: "Behind-the-scenes look at coordinating a major product launch across marketing, sales, and customer success teams.",
    duration: "35:27",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1954f0282-1768491421566.png",
    thumbnailAlt: "Product launch war room with team members coordinating across multiple screens showing launch metrics and timelines",
    category: "Launch",
    views: 11234,
    publishDate: "Dec 27, 2025"
  }];


  const categories = ['All', 'Planning', 'Strategy', 'Agile', 'Communication', 'Launch', 'Analytics', 'Research', 'Leadership'];

  const tabs = [
  { id: 'all' as const, label: 'All Resources', icon: 'Squares2X2Icon' },
  { id: 'templates' as const, label: 'Templates', icon: 'DocumentTextIcon' },
  { id: 'articles' as const, label: 'Articles', icon: 'NewspaperIcon' },
  { id: 'calculators' as const, label: 'Calculators', icon: 'CalculatorIcon' },
  { id: 'videos' as const, label: 'Videos', icon: 'PlayCircleIcon' }];


  const handleDownload = (resourceTitle: string) => {
    alert(`Downloading: ${resourceTitle}`);
  };

  const handleReadArticle = (articleTitle: string) => {
    alert(`Opening article: ${articleTitle}`);
  };

  const handleLaunchCalculator = (calculatorTitle: string) => {
    alert(`Launching calculator: ${calculatorTitle}`);
  };

  const handlePlayVideo = (videoTitle: string) => {
    alert(`Playing video: ${videoTitle}`);
  };

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const filteredCalculators = calculators.filter((calculator) => {
    const matchesCategory = selectedCategory === 'All' || calculator.category === selectedCategory;
    const matchesSearch = calculator.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    calculator.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredVideos = videos.filter((video) => {
    const matchesCategory = selectedCategory === 'All' || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Icon name="SparklesIcon" size={20} className="text-primary" />
              <span className="text-sm font-cta font-semibold text-primary">
                Product Management Resources
              </span>
            </div>

            <h1 className="font-headline font-bold text-5xl md:text-6xl lg:text-7xl text-gradient-primary mb-6">
              Resource Library
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Frameworks, templates, and insights to elevate your product management practice. Download proven tools and learn from real-world experiences.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="DocumentTextIcon" size={20} className="text-primary" />
                <span className="text-foreground">
                  <span className="font-bold text-primary">50+</span> Templates
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="NewspaperIcon" size={20} className="text-secondary" />
                <span className="text-foreground">
                  <span className="font-bold text-secondary">100+</span> Articles
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CalculatorIcon" size={20} className="text-accent" />
                <span className="text-foreground">
                  <span className="font-bold text-accent">15+</span> Calculators
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="PlayCircleIcon" size={20} className="text-primary" />
                <span className="text-foreground">
                  <span className="font-bold text-primary">30+</span> Videos
                </span>
              </div>
            </div>
          </div>

          <div className="glassmorphism rounded-2xl p-6 mb-12">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Icon
                  name="MagnifyingGlassIcon"
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search resources, articles, tools..."
                  className="w-full pl-12 pr-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all" />

              </div>

              <div className="flex items-center space-x-2 overflow-x-auto pb-2 lg:pb-0">
                {categories.map((category) =>
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-3 rounded-lg font-cta font-medium text-sm whitespace-nowrap transition-all ${
                  selectedCategory === category ?
                  'bg-gradient-to-r from-primary to-secondary text-white shadow-cta' :
                  'bg-muted text-muted-foreground hover:bg-muted/80'}`
                  }>

                    {category}
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 mb-8 overflow-x-auto pb-2">
            {tabs.map((tab) =>
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-cta font-semibold text-sm whitespace-nowrap transition-all ${
              activeTab === tab.id ?
              'bg-gradient-to-r from-primary to-secondary text-white shadow-cta' :
              'bg-muted text-muted-foreground hover:bg-muted/80'}`
              }>

                <Icon name={tab.icon as any} size={20} />
                <span>{tab.label}</span>
              </button>
            )}
          </div>

          {(activeTab === 'all' || activeTab === 'templates') &&
          <div className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-headline font-bold text-3xl text-foreground">
                  Templates & Frameworks
                </h2>
                <span className="text-sm text-muted-foreground">
                  {filteredResources.length} resources
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource) =>
              <ResourceCard
                key={resource.id}
                {...resource}
                onDownload={() => handleDownload(resource.title)} />

              )}
              </div>
            </div>
          }

          {(activeTab === 'all' || activeTab === 'articles') &&
          <div className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-headline font-bold text-3xl text-foreground">
                  Thought Leadership
                </h2>
                <span className="text-sm text-muted-foreground">
                  {filteredArticles.length} articles
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) =>
              <ArticleCard
                key={article.id}
                {...article}
                onRead={() => handleReadArticle(article.title)} />

              )}
              </div>
            </div>
          }

          {(activeTab === 'all' || activeTab === 'calculators') &&
          <div className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-headline font-bold text-3xl text-foreground">
                  Interactive Calculators
                </h2>
                <span className="text-sm text-muted-foreground">
                  {filteredCalculators.length} tools
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCalculators.map((calculator) =>
              <CalculatorCard
                key={calculator.id}
                {...calculator}
                onLaunch={() => handleLaunchCalculator(calculator.title)} />

              )}
              </div>
            </div>
          }

          {(activeTab === 'all' || activeTab === 'videos') &&
          <div className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-headline font-bold text-3xl text-foreground">
                  Video Walkthroughs
                </h2>
                <span className="text-sm text-muted-foreground">
                  {filteredVideos.length} videos
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVideos.map((video) =>
              <VideoCard
                key={video.id}
                {...video}
                onPlay={() => handlePlayVideo(video.title)} />

              )}
              </div>
            </div>
          }

          <NewsletterSection />
        </div>
      </div>
    </div>);

};

export default ResourcesInteractive;