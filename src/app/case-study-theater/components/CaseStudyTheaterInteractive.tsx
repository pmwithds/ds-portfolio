'use client';

import { useState, useEffect } from 'react';
import CaseStudyCard from './CaseStudyCard';
import FilterBar from './FilterBar';
import CaseStudyModal from './CaseStudyModal';
import StatsOverview from './StatsOverview';

interface Metric {
  label: string;
  value: string;
  change: string;
}

interface CaseStudy {
  id: number;
  title: string;
  company: string;
  industry: string;
  scale: '0-1' | '1-1000' | '1000+';
  duration: string;
  image: string;
  alt: string;
  challenge: string;
  solution: string;
  impact: string;
  metrics: Metric[];
  frameworks: string[];
  tags: string[];
}

interface Stat {
  label: string;
  value: string;
  icon: string;
}

export default function CaseStudyTheaterInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedScale, setSelectedScale] = useState('All Scales');
  const [selectedFramework, setSelectedFramework] = useState('All Frameworks');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const mockCaseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Zero-to-One: Building a FinTech Payment Platform',
    company: 'PayFlow Solutions',
    industry: 'FinTech',
    scale: '0-1',
    duration: '18 months',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c7085398-1764660533982.png",
    alt: 'Modern office workspace with financial charts displayed on multiple computer monitors showing payment analytics',
    challenge: 'PayFlow Solutions needed to enter the competitive digital payments market with a differentiated product. The challenge was to build a payment platform from scratch that could compete with established players while addressing unmet merchant needs around reconciliation complexity and settlement delays.',
    solution: 'Led product strategy using Jobs-to-be-Done framework to identify merchant pain points. Implemented Lean Canvas methodology to validate assumptions through 50+ merchant interviews. Built MVP using North Star metric of "successful payment reconciliations" to guide feature prioritization. Established OKRs framework for cross-functional alignment across engineering, design, and business teams.',
    impact: 'Successfully launched platform to 200+ merchants in first 6 months. Achieved 94% merchant satisfaction score and 78% feature adoption rate. Platform processed $12M in transaction volume within first year. Reduced merchant reconciliation time from 4 hours to 15 minutes, directly addressing core JTBD insight.',
    metrics: [
    { label: 'Merchants Onboarded', value: '200+', change: '+200% vs. target' },
    { label: 'Transaction Volume', value: '$12M', change: 'First year' },
    { label: 'Satisfaction Score', value: '94%', change: '+44% vs. industry avg' },
    { label: 'Time to Market', value: '6 months', change: '3 months ahead' }],

    frameworks: ['Jobs-to-be-Done', 'Lean Canvas', 'North Star Metric', 'OKRs'],
    tags: ['MVP', 'Market Entry', 'Product-Market Fit', 'Cross-functional Leadership']
  },
  {
    id: 2,
    title: 'Scaling a HealthTech Telemedicine Platform',
    company: 'MediConnect',
    industry: 'HealthTech',
    scale: '1-1000',
    duration: '24 months',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12c789640-1764659114724.png",
    alt: 'Healthcare professional in white coat using tablet device for telemedicine consultation in modern medical office',
    challenge: 'MediConnect had achieved product-market fit with 1,000 active users but faced scaling challenges. Platform stability issues during peak hours, inconsistent user experience across devices, and operational inefficiencies in provider onboarding were limiting growth. Need to scale to 50,000+ users while maintaining quality.',
    solution: 'Implemented RICE prioritization framework to balance growth initiatives with technical debt reduction. Established Design Thinking workshops with providers and patients to redesign onboarding flows. Used OKRs to align 5 product teams around shared growth objectives. Built comprehensive analytics infrastructure to track North Star metric of "completed consultations."',
    impact: 'Scaled platform from 1,000 to 75,000 active users while improving system uptime from 94% to 99.7%. Reduced provider onboarding time from 14 days to 2 days through process optimization. Increased consultation completion rate from 68% to 89% through UX improvements. Platform now handles 10,000+ daily consultations.',
    metrics: [
    { label: 'Active Users', value: '75,000', change: '+7,400% growth' },
    { label: 'System Uptime', value: '99.7%', change: '+5.7% improvement' },
    { label: 'Daily Consultations', value: '10,000+', change: '+850% increase' },
    { label: 'Onboarding Time', value: '2 days', change: '-86% reduction' }],

    frameworks: ['RICE', 'Design Thinking', 'OKRs', 'North Star Metric'],
    tags: ['Scaling', 'Infrastructure', 'User Experience', 'Operational Excellence']
  },
  {
    id: 3,
    title: 'Enterprise Optimization: E-Commerce Platform Transformation',
    company: 'RetailGiant',
    industry: 'E-Commerce',
    scale: '1000+',
    duration: '36 months',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1528b020c-1764648555488.png",
    alt: 'Large modern warehouse with automated sorting systems and conveyor belts handling thousands of e-commerce packages',
    challenge: 'RetailGiant\'s legacy e-commerce platform served 2M+ customers but suffered from technical debt, fragmented user experience, and declining conversion rates. Needed to modernize platform architecture while maintaining business continuity and improving key metrics across checkout, search, and personalization.',
    solution: 'Led enterprise-wide transformation using OKRs framework to align 12 product teams. Implemented RICE prioritization for feature roadmap across 50+ initiatives. Used Design Thinking methodology for checkout redesign, conducting 200+ user research sessions. Established North Star metric of "successful purchase journeys" with supporting metrics across funnel.',
    impact: 'Increased conversion rate from 2.1% to 3.8% through checkout optimization, generating $45M additional annual revenue. Improved search relevance by 67% using ML-powered recommendations. Reduced page load time from 4.2s to 1.1s, improving SEO rankings. Platform now handles 500,000+ daily transactions with 99.95% uptime.',
    metrics: [
    { label: 'Conversion Rate', value: '3.8%', change: '+81% improvement' },
    { label: 'Additional Revenue', value: '$45M', change: 'Annual impact' },
    { label: 'Page Load Time', value: '1.1s', change: '-74% faster' },
    { label: 'Daily Transactions', value: '500K+', change: '+120% capacity' }],

    frameworks: ['OKRs', 'RICE', 'Design Thinking', 'North Star Metric'],
    tags: ['Enterprise', 'Technical Debt', 'Conversion Optimization', 'Platform Modernization']
  },
  {
    id: 4,
    title: 'SaaS Product Launch: B2B Analytics Platform',
    company: 'DataInsights Pro',
    industry: 'SaaS',
    scale: '0-1',
    duration: '12 months',
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
    alt: 'Business analytics dashboard on laptop screen showing colorful data visualizations and charts in modern office setting',
    challenge: 'DataInsights Pro identified market opportunity for SMB-focused analytics platform but faced crowded competitive landscape. Challenge was to differentiate product positioning, validate market demand, and achieve first 100 paying customers within 12 months while maintaining lean team structure.',
    solution: 'Applied Jobs-to-be-Done framework through 80+ customer interviews to identify underserved analytics needs. Used Lean Canvas to validate business model assumptions. Implemented North Star metric of "insights generated per user" to guide product development. Established OKRs for go-to-market strategy across product, sales, and marketing.',
    impact: 'Achieved 150 paying customers in 10 months, exceeding target by 50%. Reached $500K ARR with 92% customer retention rate. Product achieved 4.8/5 rating on G2 with 45+ reviews. Average customer generates 127 insights per month, validating North Star metric. Secured $2M seed funding based on traction.',
    metrics: [
    { label: 'Paying Customers', value: '150', change: '+50% vs. target' },
    { label: 'Annual Revenue', value: '$500K', change: 'ARR achieved' },
    { label: 'Retention Rate', value: '92%', change: '+22% vs. industry' },
    { label: 'G2 Rating', value: '4.8/5', change: '45+ reviews' }],

    frameworks: ['Jobs-to-be-Done', 'Lean Canvas', 'North Star Metric', 'OKRs'],
    tags: ['SaaS', 'B2B', 'Go-to-Market', 'Customer Development']
  },
  {
    id: 5,
    title: 'EdTech Platform: Scaling Online Learning Experience',
    company: 'LearnHub',
    industry: 'EdTech',
    scale: '1-1000',
    duration: '20 months',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b4292620-1764671097098.png",
    alt: 'Student using laptop for online learning with educational interface showing video lecture and interactive course materials',
    challenge: 'LearnHub had 5,000 active learners but struggled with low course completion rates (32%) and limited engagement. Platform needed to scale to 100,000+ learners while dramatically improving learning outcomes and instructor satisfaction. Technical infrastructure couldn\'t support planned growth.',
    solution: 'Implemented Design Thinking methodology with learners and instructors to redesign learning experience. Used RICE framework to prioritize engagement features vs. infrastructure improvements. Established OKRs around course completion as primary success metric. Built analytics dashboard tracking North Star metric of "learning milestones achieved."',
    impact: 'Scaled to 120,000 active learners while increasing course completion rate from 32% to 68%. Improved learner engagement time from 45 minutes to 2.3 hours per week. Instructor satisfaction increased from 6.2/10 to 8.9/10. Platform now supports 500+ courses with 99.5% uptime during peak learning hours.',
    metrics: [
    { label: 'Active Learners', value: '120K', change: '+2,300% growth' },
    { label: 'Completion Rate', value: '68%', change: '+113% improvement' },
    { label: 'Weekly Engagement', value: '2.3 hrs', change: '+207% increase' },
    { label: 'Instructor Score', value: '8.9/10', change: '+43% satisfaction' }],

    frameworks: ['Design Thinking', 'RICE', 'OKRs', 'North Star Metric'],
    tags: ['EdTech', 'Engagement', 'Learning Outcomes', 'Platform Scaling']
  },
  {
    id: 6,
    title: 'Enterprise SaaS: Workflow Automation Platform',
    company: 'AutoFlow Enterprise',
    industry: 'Enterprise',
    scale: '1000+',
    duration: '30 months',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a0b7563b-1765794380085.png",
    alt: 'Corporate team collaborating around conference table with workflow diagrams displayed on large screen in modern boardroom',
    challenge: 'AutoFlow Enterprise served 500+ enterprise clients but faced declining NPS scores (32) and increasing churn (18% annually). Legacy architecture limited customization capabilities. Needed to modernize platform while serving existing customers and expanding into new enterprise segments.',
    solution: 'Led transformation using OKRs framework across 15 product teams. Implemented RICE prioritization for 100+ feature requests from enterprise clients. Conducted Design Thinking workshops with 50+ enterprise customers to redesign workflow builder. Established North Star metric of "automated workflows per customer."',
    impact: 'Increased NPS from 32 to 67 through platform improvements and customer success initiatives. Reduced annual churn from 18% to 7%. Expanded customer base to 800+ enterprises with average contract value increasing from $50K to $120K. Platform now processes 10M+ automated workflows daily.',
    metrics: [
    { label: 'NPS Score', value: '67', change: '+109% improvement' },
    { label: 'Annual Churn', value: '7%', change: '-61% reduction' },
    { label: 'Contract Value', value: '$120K', change: '+140% increase' },
    { label: 'Daily Workflows', value: '10M+', change: '+380% volume' }],

    frameworks: ['OKRs', 'RICE', 'Design Thinking', 'North Star Metric'],
    tags: ['Enterprise', 'Customer Success', 'Platform Architecture', 'Churn Reduction']
  }];


  const overviewStats: Stat[] = [
  { label: 'Case Studies', value: '6', icon: 'DocumentTextIcon' },
  { label: 'Industries Covered', value: '6', icon: 'BuildingOfficeIcon' },
  { label: 'Frameworks Applied', value: '8+', icon: 'CubeIcon' },
  { label: 'Avg. Impact Increase', value: '150%', icon: 'ChartBarIcon' }];


  const filteredStudies = mockCaseStudies.filter((study) => {
    const matchesIndustry =
    selectedIndustry === 'All Industries' || study.industry === selectedIndustry;
    const matchesScale = selectedScale === 'All Scales' || study.scale === selectedScale;
    const matchesFramework =
    selectedFramework === 'All Frameworks' ||
    study.frameworks.includes(selectedFramework);
    const matchesSearch =
    searchQuery === '' ||
    study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    study.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    study.challenge.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesIndustry && matchesScale && matchesFramework && matchesSearch;
  });

  const handleClearFilters = () => {
    setSelectedIndustry('All Industries');
    setSelectedScale('All Scales');
    setSelectedFramework('All Frameworks');
    setSearchQuery('');
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-12 bg-muted rounded w-1/3 mb-4"></div>
            <div className="h-6 bg-muted rounded w-2/3 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) =>
              <div key={i} className="h-96 bg-muted rounded-xl"></div>
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Overview */}
        <StatsOverview stats={overviewStats} />

        {/* Filter Bar */}
        <FilterBar
          selectedIndustry={selectedIndustry}
          selectedScale={selectedScale}
          selectedFramework={selectedFramework}
          searchQuery={searchQuery}
          onIndustryChange={setSelectedIndustry}
          onScaleChange={setSelectedScale}
          onFrameworkChange={setSelectedFramework}
          onSearchChange={setSearchQuery}
          onClearFilters={handleClearFilters} />


        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredStudies.length} of {mockCaseStudies.length} case studies
          </p>
        </div>

        {/* Case Studies Grid */}
        {filteredStudies.length > 0 ?
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudies.map((study) =>
          <CaseStudyCard
            key={study.id}
            study={study}
            onViewDetails={setSelectedStudy} />

          )}
          </div> :

        <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
              No Case Studies Found
            </h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters or search query
            </p>
            <button
            onClick={handleClearFilters}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-smooth">

              Clear All Filters
            </button>
          </div>
        }
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal study={selectedStudy} onClose={() => setSelectedStudy(null)} />
    </div>);

}