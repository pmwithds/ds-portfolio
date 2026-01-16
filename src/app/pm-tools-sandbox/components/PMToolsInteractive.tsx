'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Icon from '@/components/ui/AppIcon';
import ToolCard from './ToolCard';
import ROICalculator from './ROICalculator';
import FrameworkWizard from './FrameworkWizard';
import PrioritizationMatrix from './PrioritizationMatrix';
import MetricsDashboard from './MetricsDashboard';

interface Tool {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export default function PMToolsInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const tools: Tool[] = [
    {
      id: 'roi-calculator',
      title: 'ROI Calculator',
      description: 'Calculate return on investment for product initiatives with detailed financial projections and payback period analysis.',
      icon: 'CalculatorIcon',
      category: 'Financial'
    },
    {
      id: 'framework-wizard',
      title: 'Framework Selection Wizard',
      description: 'Find the perfect PM framework based on your project parameters, team size, and complexity level.',
      icon: 'SparklesIcon',
      category: 'Strategy'
    },
    {
      id: 'prioritization-matrix',
      title: 'RICE Prioritization Matrix',
      description: 'Prioritize features using Reach, Impact, Confidence, and Effort scoring methodology.',
      icon: 'TableCellsIcon',
      category: 'Planning'
    },
    {
      id: 'metrics-dashboard',
      title: 'Product Metrics Dashboard',
      description: 'Visualize key product metrics with interactive charts showing user growth, revenue, and feature adoption.',
      icon: 'ChartBarIcon',
      category: 'Analytics'
    },
    {
      id: 'user-story-generator',
      title: 'User Story Generator',
      description: 'Create well-structured user stories following best practices with acceptance criteria templates.',
      icon: 'DocumentTextIcon',
      category: 'Planning'
    },
    {
      id: 'sprint-velocity-tracker',
      title: 'Sprint Velocity Tracker',
      description: 'Track team velocity across sprints and predict future capacity for better sprint planning.',
      icon: 'BoltIcon',
      category: 'Analytics'
    },
    {
      id: 'stakeholder-mapper',
      title: 'Stakeholder Mapping Tool',
      description: 'Identify and analyze stakeholders based on influence and interest levels for effective communication.',
      icon: 'UserGroupIcon',
      category: 'Strategy'
    },
    {
      id: 'competitive-analyzer',
      title: 'Competitive Analysis Matrix',
      description: 'Compare your product against competitors across key features and market positioning dimensions.',
      icon: 'ChartPieIcon',
      category: 'Strategy'
    },
    {
      id: 'okr-tracker',
      title: 'OKR Progress Tracker',
      description: 'Set and monitor Objectives and Key Results with visual progress indicators and milestone tracking.',
      icon: 'FlagIcon',
      category: 'Planning'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tools', icon: 'SquaresPlusIcon' },
    { id: 'Financial', name: 'Financial', icon: 'CurrencyDollarIcon' },
    { id: 'Strategy', name: 'Strategy', icon: 'LightBulbIcon' },
    { id: 'Planning', name: 'Planning', icon: 'ClipboardDocumentListIcon' },
    { id: 'Analytics', name: 'Analytics', icon: 'ChartBarIcon' }
  ];

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">Loading...</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const filteredTools = tools.filter(tool => {
    const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleToolClick = (toolId: string) => {
    if (['roi-calculator', 'framework-wizard', 'prioritization-matrix', 'metrics-dashboard'].includes(toolId)) {
      setActiveTool(toolId);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-16">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-primary-foreground bg-opacity-10 px-4 py-2 rounded-full mb-6">
                <Icon name="WrenchScrewdriverIcon" size={20} className="text-primary"/>
                <span className="text-sm font-semibold text-primary">Interactive PM Tools</span>
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
                PM Tools Sandbox
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                Hands-on experience with product management methodologies through interactive calculators, frameworks, and strategic tools that demonstrate systematic thinking and measurable impact.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-6">
              {/* Search Bar */}
              <div className="w-full lg:w-96">
                <div className="relative">
                  <Icon 
                    name="MagnifyingGlassIcon" 
                    size={20} 
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                  />
                  <input
                    type="text"
                    placeholder="Search tools..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-smooth ${
                      activeCategory === category.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground hover:bg-primary hover:bg-opacity-10'
                    }`}
                  >
                    <Icon name={category.icon as any} size={18} />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-12">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            {filteredTools.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTools.map((tool) => (
                  <ToolCard
                    key={tool.id}
                    title={tool.title}
                    description={tool.description}
                    icon={tool.icon}
                    category={tool.category}
                    onClick={() => handleToolClick(tool.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon name="MagnifyingGlassIcon" size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  No tools found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-card py-16 border-t border-border">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                Why Use PM Tools Sandbox?
              </h2>
              <p className="text-muted-foreground">
                Experience product management frameworks through interactive demonstrations that showcase strategic thinking and measurable outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="AcademicCapIcon" size={32} className="text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Learn by Doing
                </h3>
                <p className="text-sm text-muted-foreground">
                  Hands-on experience with PM methodologies through interactive tools and real-world scenarios.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="ChartBarIcon" size={32} className="text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Data-Driven Decisions
                </h3>
                <p className="text-sm text-muted-foreground">
                  Make informed product decisions using calculators and frameworks that quantify impact and ROI.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="ArrowDownTrayIcon" size={32} className="text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Export & Share
                </h3>
                <p className="text-sm text-muted-foreground">
                  Download results and templates to use in your own product management workflows and presentations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
              <h2 className="font-heading font-bold text-3xl mb-4">
                Ready to Explore More PM Frameworks?
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Dive deeper into product management methodologies and see how these tools apply to real-world case studies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/framework-methodology-center"
                  className="px-8 py-3 bg-primary-foreground text-primary rounded-md font-semibold hover:bg-opacity-90 transition-smooth"
                >
                  View All Frameworks
                </a>
                <a
                  href="/case-study-theater"
                  className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded-md font-semibold hover:bg-primary-foreground hover:bg-opacity-10 transition-smooth"
                >
                  See Case Studies
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Tool Modals */}
      {activeTool === 'roi-calculator' && (
        <ROICalculator onClose={() => setActiveTool(null)} />
      )}
      {activeTool === 'framework-wizard' && (
        <FrameworkWizard onClose={() => setActiveTool(null)} />
      )}
      {activeTool === 'prioritization-matrix' && (
        <PrioritizationMatrix onClose={() => setActiveTool(null)} />
      )}
      {activeTool === 'metrics-dashboard' && (
        <MetricsDashboard onClose={() => setActiveTool(null)} />
      )}
    </div>
  );
}