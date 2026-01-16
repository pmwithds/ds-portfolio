'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import FrameworkHero from './FrameworkHero';
import FrameworkFilters from './FrameworkFilters';
import FrameworkGrid from './FrameworkGrid';
import FrameworkDetailModal from './FrameworkDetailModal';

export interface Framework {
  id: string;
  name: string;
  category: string;
  scale: string;
  description: string;
  image: string;
  alt: string;
  icon: string;
  difficulty: string;
  timeToImplement: string;
  keyBenefits: string[];
  realWorldApplications: string[];
  steps: {
    title: string;
    description: string;
    deliverables: string[];
  }[];
  caseStudyLink: string;
  downloadableTemplate: boolean;
  adoptionStories: {
    company: string;
    role: string;
    impact: string;
    metrics: string;
  }[];
}

const FrameworkMethodologyInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedScale, setSelectedScale] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFramework, setSelectedFramework] = useState<Framework | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const frameworks: Framework[] = [
  {
    id: 'fw-001',
    name: 'Jobs-to-be-Done Framework',
    category: 'Discovery',
    scale: '0-1',
    description: 'Customer-centric framework for understanding the fundamental problems users are trying to solve, enabling product-market fit validation and feature prioritization.',
    image: "https://images.unsplash.com/photo-1591616657901-159fa0ab88dc",
    alt: 'Business professional analyzing customer journey map with sticky notes on whiteboard in modern office',
    icon: 'UserGroupIcon',
    difficulty: 'Intermediate',
    timeToImplement: '2-4 weeks',
    keyBenefits: [
    'Deep customer empathy and understanding',
    'Clear product differentiation strategy',
    'Reduced feature bloat and scope creep',
    'Improved product-market fit validation'],

    realWorldApplications: [
    'New product concept validation',
    'Feature prioritization decisions',
    'Market segmentation strategy',
    'Competitive positioning analysis'],

    steps: [
    {
      title: 'Identify the Job',
      description: 'Conduct customer interviews to understand the core job customers are hiring your product to do.',
      deliverables: ['Interview transcripts', 'Job statement templates', 'Customer persona maps']
    },
    {
      title: 'Map the Job Journey',
      description: 'Document the complete journey from problem recognition to solution evaluation.',
      deliverables: ['Journey maps', 'Pain point analysis', 'Opportunity areas']
    },
    {
      title: 'Define Success Metrics',
      description: 'Establish measurable outcomes that indicate successful job completion.',
      deliverables: ['Success criteria', 'KPI dashboard', 'Measurement framework']
    },
    {
      title: 'Prioritize Solutions',
      description: 'Evaluate and rank potential solutions based on job importance and satisfaction gaps.',
      deliverables: ['Prioritization matrix', 'Roadmap alignment', 'Resource allocation plan']
    }],

    caseStudyLink: '/case-study-theater',
    downloadableTemplate: true,
    adoptionStories: [
    {
      company: 'FinTech Startup',
      role: 'Lead Product Manager',
      impact: 'Identified core job-to-be-done for small business owners, leading to 3x increase in product adoption',
      metrics: '300% user growth, 45% reduction in churn'
    },
    {
      company: 'Healthcare SaaS',
      role: 'Senior PM',
      impact: 'Repositioned product around physician workflow optimization, resulting in enterprise contract wins',
      metrics: '$2.5M ARR increase, 8 enterprise clients'
    }]

  },
  {
    id: 'fw-002',
    name: 'OKR Framework',
    category: 'Strategy',
    scale: '1-1000',
    description: 'Objectives and Key Results framework for aligning team efforts with measurable business outcomes, enabling transparent goal-setting and progress tracking.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17b542c8d-1764670082756.png",
    alt: 'Team members collaborating around laptop reviewing quarterly objectives and key results dashboard',
    icon: 'ChartBarIcon',
    difficulty: 'Beginner',
    timeToImplement: '1-2 weeks',
    keyBenefits: [
    'Clear alignment across teams and stakeholders',
    'Measurable progress tracking',
    'Increased accountability and ownership',
    'Flexible adaptation to changing priorities'],

    realWorldApplications: [
    'Quarterly planning cycles',
    'Cross-functional team alignment',
    'Product roadmap prioritization',
    'Performance measurement systems'],

    steps: [
    {
      title: 'Set Objectives',
      description: 'Define 3-5 ambitious, qualitative goals that align with company strategy.',
      deliverables: ['Objective statements', 'Strategic alignment map', 'Stakeholder buy-in']
    },
    {
      title: 'Define Key Results',
      description: 'Establish 3-5 measurable outcomes for each objective with specific targets.',
      deliverables: ['Key result metrics', 'Baseline measurements', 'Target thresholds']
    },
    {
      title: 'Cascade and Align',
      description: 'Ensure team OKRs support organizational objectives and avoid conflicts.',
      deliverables: ['Team OKR documents', 'Dependency maps', 'Alignment matrix']
    },
    {
      title: 'Track and Review',
      description: 'Monitor progress weekly and conduct formal reviews at quarter end.',
      deliverables: ['Progress dashboards', 'Review presentations', 'Retrospective insights']
    }],

    caseStudyLink: '/case-study-theater',
    downloadableTemplate: true,
    adoptionStories: [
    {
      company: 'E-commerce Platform',
      role: 'Product Lead',
      impact: 'Implemented OKR framework across 5 product teams, improving delivery predictability',
      metrics: '85% on-time delivery, 40% faster decision-making'
    }]

  },
  {
    id: 'fw-003',
    name: 'RICE Prioritization',
    category: 'Prioritization',
    scale: '1-1000',
    description: 'Quantitative scoring model (Reach, Impact, Confidence, Effort) for objective feature prioritization and resource allocation decisions.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1613ccba4-1764682580953.png",
    alt: 'Product manager analyzing prioritization matrix with colored sticky notes on glass board',
    icon: 'ListBulletIcon',
    difficulty: 'Beginner',
    timeToImplement: '1 week',
    keyBenefits: [
    'Data-driven prioritization decisions',
    'Reduced bias in feature selection',
    'Clear communication of trade-offs',
    'Efficient resource allocation'],

    realWorldApplications: [
    'Feature backlog prioritization',
    'Sprint planning decisions',
    'Resource allocation across initiatives',
    'Stakeholder expectation management'],

    steps: [
    {
      title: 'Calculate Reach',
      description: 'Estimate how many users will be affected within a specific time period.',
      deliverables: ['User impact estimates', 'Audience segmentation', 'Reach calculations']
    },
    {
      title: 'Assess Impact',
      description: 'Score the impact on individual users using a standardized scale (0.25 to 3).',
      deliverables: ['Impact scores', 'User value assessment', 'Business value mapping']
    },
    {
      title: 'Determine Confidence',
      description: 'Rate confidence in estimates as High (100%), Medium (80%), or Low (50%).',
      deliverables: ['Confidence ratings', 'Assumption documentation', 'Risk assessment']
    },
    {
      title: 'Estimate Effort',
      description: 'Calculate total person-months required across all team members.',
      deliverables: ['Effort estimates', 'Resource requirements', 'Timeline projections']
    }],

    caseStudyLink: '/case-study-theater',
    downloadableTemplate: true,
    adoptionStories: [
    {
      company: 'Mobile App Startup',
      role: 'Product Manager',
      impact: 'Prioritized 50+ feature requests using RICE, focusing team on high-impact work',
      metrics: '60% increase in feature adoption, 30% faster delivery'
    }]

  },
  {
    id: 'fw-004',
    name: 'North Star Metric',
    category: 'Metrics',
    scale: '0-1',
    description: 'Single metric that best captures the core value delivered to customers, aligning product development with business growth.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_104138064-1764664583775.png",
    alt: 'Analytics dashboard showing key performance metrics and growth trends on large monitor',
    icon: 'StarIcon',
    difficulty: 'Advanced',
    timeToImplement: '3-6 weeks',
    keyBenefits: [
    'Unified team focus on value creation',
    'Clear success measurement',
    'Reduced metric confusion',
    'Aligned incentives across functions'],

    realWorldApplications: [
    'Product strategy definition',
    'Growth team alignment',
    'Investor communication',
    'Performance dashboard design'],

    steps: [
    {
      title: 'Identify Core Value',
      description: 'Determine the fundamental value your product delivers to customers.',
      deliverables: ['Value proposition statement', 'Customer value analysis', 'Competitive differentiation']
    },
    {
      title: 'Select Leading Indicator',
      description: 'Choose a metric that predicts long-term business success and customer satisfaction.',
      deliverables: ['Metric candidates', 'Correlation analysis', 'Validation framework']
    },
    {
      title: 'Define Input Metrics',
      description: 'Identify the key drivers that influence your North Star Metric.',
      deliverables: ['Input metric tree', 'Causal relationships', 'Measurement plan']
    },
    {
      title: 'Implement Tracking',
      description: 'Build dashboards and establish regular review cadences.',
      deliverables: ['Analytics implementation', 'Dashboard designs', 'Review schedules']
    }],

    caseStudyLink: '/case-study-theater',
    downloadableTemplate: true,
    adoptionStories: [
    {
      company: 'SaaS Platform',
      role: 'VP Product',
      impact: 'Defined "Weekly Active Teams" as North Star, aligning 12 product teams around collaboration value',
      metrics: '150% growth in NSM, $10M ARR increase'
    }]

  },
  {
    id: 'fw-005',
    name: 'Lean Canvas',
    category: 'Discovery',
    scale: '0-1',
    description: 'One-page business model framework for rapid validation of product ideas and business assumptions before significant investment.',
    image: "https://images.unsplash.com/photo-1710361197301-d3cd03b34561",
    alt: 'Startup team brainstorming business model canvas with colorful markers on large whiteboard',
    icon: 'DocumentTextIcon',
    difficulty: 'Beginner',
    timeToImplement: '1-2 weeks',
    keyBenefits: [
    'Fast validation of business assumptions',
    'Clear problem-solution articulation',
    'Reduced time to market insights',
    'Investor-ready business model'],

    realWorldApplications: [
    'Startup idea validation',
    'New product line exploration',
    'Pivot decision-making',
    'Investor pitch preparation'],

    steps: [
    {
      title: 'Define Problem',
      description: 'Identify the top 3 problems your target customers face.',
      deliverables: ['Problem statements', 'Customer interviews', 'Pain point ranking']
    },
    {
      title: 'Propose Solution',
      description: 'Outline your unique value proposition and key features.',
      deliverables: ['Solution description', 'Feature list', 'Value proposition canvas']
    },
    {
      title: 'Identify Channels',
      description: 'Determine how you will reach and acquire customers.',
      deliverables: ['Channel strategy', 'Customer acquisition plan', 'Marketing tactics']
    },
    {
      title: 'Model Economics',
      description: 'Estimate costs, revenue streams, and key metrics.',
      deliverables: ['Financial projections', 'Unit economics', 'Break-even analysis']
    }],

    caseStudyLink: '/case-study-theater',
    downloadableTemplate: true,
    adoptionStories: [
    {
      company: 'EdTech Startup',
      role: 'Founder/PM',
      impact: 'Validated product-market fit using Lean Canvas before development, saving 6 months',
      metrics: '$500K seed funding, 1000+ beta users'
    }]

  },
  {
    id: 'fw-006',
    name: 'Kano Model',
    category: 'Prioritization',
    scale: '1-1000',
    description: 'Feature categorization framework that classifies features based on customer satisfaction impact, enabling strategic feature investment decisions.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10bdf7acd-1768489590189.png",
    alt: 'Product team reviewing customer satisfaction survey results and feature priority matrix',
    icon: 'FaceSmileIcon',
    difficulty: 'Intermediate',
    timeToImplement: '2-3 weeks',
    keyBenefits: [
    'Customer satisfaction optimization',
    'Strategic feature investment',
    'Competitive differentiation clarity',
    'Reduced over-engineering risk'],

    realWorldApplications: [
    'Feature roadmap planning',
    'Customer satisfaction improvement',
    'Competitive analysis',
    'Product positioning strategy'],

    steps: [
    {
      title: 'Survey Customers',
      description: 'Ask customers about their reactions to feature presence and absence.',
      deliverables: ['Survey design', 'Response data', 'Customer segments']
    },
    {
      title: 'Categorize Features',
      description: 'Classify features as Basic, Performance, or Delighters based on responses.',
      deliverables: ['Feature categories', 'Kano diagram', 'Priority matrix']
    },
    {
      title: 'Analyze Trade-offs',
      description: 'Evaluate investment required versus satisfaction impact for each category.',
      deliverables: ['Cost-benefit analysis', 'Investment recommendations', 'Roadmap updates']
    },
    {
      title: 'Monitor Evolution',
      description: 'Track how features migrate between categories over time.',
      deliverables: ['Trend analysis', 'Competitive benchmarks', 'Strategy adjustments']
    }],

    caseStudyLink: '/case-study-theater',
    downloadableTemplate: true,
    adoptionStories: [
    {
      company: 'Consumer App',
      role: 'Senior PM',
      impact: 'Used Kano Model to identify delighter features, increasing NPS by 25 points',
      metrics: 'NPS +25, 40% increase in referrals'
    }]

  },
  {
    id: 'fw-007',
    name: 'Pirate Metrics (AARRR)',
    category: 'Metrics',
    scale: '1-1000',
    description: 'Growth funnel framework tracking Acquisition, Activation, Retention, Revenue, and Referral for comprehensive product health monitoring.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fcf5df14-1768489590174.png",
    alt: 'Growth analytics funnel visualization showing user journey from acquisition to referral on screen',
    icon: 'FunnelIcon',
    difficulty: 'Intermediate',
    timeToImplement: '3-4 weeks',
    keyBenefits: [
    'Holistic growth measurement',
    'Funnel bottleneck identification',
    'Data-driven optimization',
    'Cross-functional alignment'],

    realWorldApplications: [
    'Growth strategy development',
    'Conversion optimization',
    'Product-market fit validation',
    'Investor reporting'],

    steps: [
    {
      title: 'Define Funnel Stages',
      description: 'Establish clear definitions for each AARRR stage specific to your product.',
      deliverables: ['Stage definitions', 'Event tracking plan', 'Conversion criteria']
    },
    {
      title: 'Implement Tracking',
      description: 'Set up analytics to measure user progression through each stage.',
      deliverables: ['Analytics setup', 'Dashboard creation', 'Data validation']
    },
    {
      title: 'Analyze Bottlenecks',
      description: 'Identify where users drop off and prioritize optimization efforts.',
      deliverables: ['Funnel analysis', 'Drop-off reports', 'Hypothesis generation']
    },
    {
      title: 'Optimize and Iterate',
      description: 'Run experiments to improve conversion at each stage.',
      deliverables: ['Experiment designs', 'A/B test results', 'Optimization roadmap']
    }],

    caseStudyLink: '/case-study-theater',
    downloadableTemplate: true,
    adoptionStories: [
    {
      company: 'Marketplace Platform',
      role: 'Growth PM',
      impact: 'Implemented AARRR framework, identifying activation bottleneck and improving conversion by 35%',
      metrics: '35% activation increase, 20% revenue growth'
    }]

  },
  {
    id: 'fw-008',
    name: 'Design Sprint',
    category: 'Execution',
    scale: '0-1',
    description: 'Five-day process for rapidly prototyping and testing solutions to critical business questions through structured collaboration.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_139f2f5ad-1768489590194.png",
    alt: 'Design team conducting sprint workshop with prototypes and user testing materials on table',
    icon: 'BoltIcon',
    difficulty: 'Advanced',
    timeToImplement: '1 week',
    keyBenefits: [
    'Rapid validation of ideas',
    'Reduced development risk',
    'Cross-functional collaboration',
    'Customer-centric solutions'],

    realWorldApplications: [
    'New feature validation',
    'Problem-solving workshops',
    'Innovation initiatives',
    'Strategic decision-making'],

    steps: [
    {
      title: 'Map the Challenge',
      description: 'Define the problem, set long-term goal, and map the user journey.',
      deliverables: ['Problem statement', 'Journey map', 'Sprint questions']
    },
    {
      title: 'Sketch Solutions',
      description: 'Generate multiple solution concepts through structured ideation.',
      deliverables: ['Solution sketches', 'Concept variations', 'Voting results']
    },
    {
      title: 'Decide and Storyboard',
      description: 'Select the best solution and create detailed storyboard for prototype.',
      deliverables: ['Selected concept', 'Detailed storyboard', 'Prototype plan']
    },
    {
      title: 'Prototype and Test',
      description: 'Build realistic prototype and conduct user testing sessions.',
      deliverables: ['Working prototype', 'Test scripts', 'User feedback report']
    }],

    caseStudyLink: '/case-study-theater',
    downloadableTemplate: true,
    adoptionStories: [
    {
      company: 'Enterprise SaaS',
      role: 'Product Lead',
      impact: 'Ran design sprint to validate new workflow feature, saving 3 months of development',
      metrics: '90% user approval, $200K dev cost savings'
    }]

  },
  {
    id: 'fw-009',
    name: 'Value Proposition Canvas',
    category: 'Strategy',
    scale: '0-1',
    description: 'Strategic tool for ensuring product-market fit by mapping customer jobs, pains, and gains to product features and benefits.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c1268312-1767864528167.png",
    alt: 'Business strategist mapping value proposition canvas with customer segments and product benefits',
    icon: 'PuzzlePieceIcon',
    difficulty: 'Intermediate',
    timeToImplement: '2-3 weeks',
    keyBenefits: [
    'Clear product-market fit validation',
    'Customer-centric positioning',
    'Differentiation strategy clarity',
    'Marketing message alignment'],

    realWorldApplications: [
    'Product positioning',
    'Go-to-market strategy',
    'Feature prioritization',
    'Customer segmentation'],

    steps: [
    {
      title: 'Map Customer Profile',
      description: 'Document customer jobs, pains, and gains from their perspective.',
      deliverables: ['Customer profile', 'Jobs-to-be-done list', 'Pain/gain analysis']
    },
    {
      title: 'Design Value Map',
      description: 'List products/services, pain relievers, and gain creators you offer.',
      deliverables: ['Value map', 'Feature inventory', 'Benefit statements']
    },
    {
      title: 'Achieve Fit',
      description: 'Ensure your value map addresses the most important customer jobs, pains, and gains.',
      deliverables: ['Fit assessment', 'Gap analysis', 'Prioritization matrix']
    },
    {
      title: 'Test and Iterate',
      description: 'Validate assumptions with customers and refine your value proposition.',
      deliverables: ['Test results', 'Customer feedback', 'Refined value proposition']
    }],

    caseStudyLink: '/case-study-theater',
    downloadableTemplate: true,
    adoptionStories: [
    {
      company: 'B2B SaaS',
      role: 'Product Marketing Manager',
      impact: 'Used Value Proposition Canvas to reposition product, increasing enterprise sales by 50%',
      metrics: '50% sales increase, 30% higher ASP'
    }]

  },
  {
    id: 'fw-010',
    name: 'Opportunity Solution Tree',
    category: 'Discovery',
    scale: '1-1000',
    description: 'Visual framework for connecting business outcomes to customer opportunities and solution experiments in a structured hierarchy.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c898f321-1768489588415.png",
    alt: 'Product team collaborating on opportunity solution tree diagram with branches showing outcomes and experiments',
    icon: 'BeakerIcon',
    difficulty: 'Advanced',
    timeToImplement: '4-6 weeks',
    keyBenefits: [
    'Clear outcome-to-solution traceability',
    'Continuous discovery mindset',
    'Reduced solution bias',
    'Systematic experimentation'],

    realWorldApplications: [
    'Product discovery process',
    'Experiment planning',
    'Stakeholder alignment',
    'Team decision-making'],

    steps: [
    {
      title: 'Define Outcome',
      description: 'Establish the business outcome you are trying to achieve.',
      deliverables: ['Outcome statement', 'Success metrics', 'Stakeholder alignment']
    },
    {
      title: 'Map Opportunities',
      description: 'Identify customer needs and pain points that could drive the outcome.',
      deliverables: ['Opportunity map', 'Customer research', 'Prioritized opportunities']
    },
    {
      title: 'Generate Solutions',
      description: 'Brainstorm multiple solution ideas for each opportunity.',
      deliverables: ['Solution concepts', 'Assumption mapping', 'Risk assessment']
    },
    {
      title: 'Design Experiments',
      description: 'Create small tests to validate assumptions before building.',
      deliverables: ['Experiment designs', 'Learning goals', 'Test results']
    }],

    caseStudyLink: '/case-study-theater',
    downloadableTemplate: true,
    adoptionStories: [
    {
      company: 'Product Team',
      role: 'Discovery Lead',
      impact: 'Implemented OST framework, reducing failed feature launches by 60%',
      metrics: '60% fewer failures, 2x faster learning'
    }]

  },
  {
    id: 'fw-011',
    name: 'ICE Scoring',
    category: 'Prioritization',
    scale: '1-1000',
    description: 'Lightweight prioritization framework scoring ideas on Impact, Confidence, and Ease for rapid decision-making.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b198a887-1768489592990.png",
    alt: 'Product manager reviewing ICE scoring matrix with impact confidence and ease ratings on spreadsheet',
    icon: 'CalculatorIcon',
    difficulty: 'Beginner',
    timeToImplement: '1 week',
    keyBenefits: [
    'Fast prioritization decisions',
    'Simple scoring methodology',
    'Team consensus building',
    'Transparent trade-offs'],

    realWorldApplications: [
    'Growth experiment prioritization',
    'Quick feature decisions',
    'Backlog grooming',
    'Sprint planning'],

    steps: [
    {
      title: 'Score Impact',
      description: 'Rate the potential positive effect on your key metric (1-10 scale).',
      deliverables: ['Impact scores', 'Metric definitions', 'Scoring rationale']
    },
    {
      title: 'Score Confidence',
      description: 'Rate your confidence in the impact estimate (1-10 scale).',
      deliverables: ['Confidence ratings', 'Assumption documentation', 'Risk factors']
    },
    {
      title: 'Score Ease',
      description: 'Rate how easy it is to implement (1-10 scale, higher = easier).',
      deliverables: ['Ease scores', 'Effort estimates', 'Resource requirements']
    },
    {
      title: 'Calculate and Prioritize',
      description: 'Average the three scores and rank ideas by ICE score.',
      deliverables: ['ICE scores', 'Prioritized list', 'Action plan']
    }],

    caseStudyLink: '/case-study-theater',
    downloadableTemplate: true,
    adoptionStories: [
    {
      company: 'Growth Team',
      role: 'Growth PM',
      impact: 'Used ICE to prioritize 100+ growth experiments, focusing on high-impact quick wins',
      metrics: '25% conversion increase, 50% faster execution'
    }]

  },
  {
    id: 'fw-012',
    name: 'Product-Market Fit Survey',
    category: 'Metrics',
    scale: '0-1',
    description: 'Sean Ellis test for measuring product-market fit by asking users how disappointed they would be if the product no longer existed.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b7e0690b-1768489588791.png",
    alt: 'Survey results dashboard showing product market fit score and user sentiment analysis',
    icon: 'ClipboardDocumentCheckIcon',
    difficulty: 'Beginner',
    timeToImplement: '1-2 weeks',
    keyBenefits: [
    'Quantitative PMF measurement',
    'Early warning system',
    'Segmentation insights',
    'Benchmark comparison'],

    realWorldApplications: [
    'PMF validation',
    'Pivot decisions',
    'Investor updates',
    'Growth readiness assessment'],

    steps: [
    {
      title: 'Design Survey',
      description: 'Create survey with key question: "How would you feel if you could no longer use this product?"',
      deliverables: ['Survey design', 'Question set', 'Distribution plan']
    },
    {
      title: 'Collect Responses',
      description: 'Survey active users who have experienced core product value.',
      deliverables: ['Response data', 'Sample size', 'Completion rate']
    },
    {
      title: 'Analyze Results',
      description: 'Calculate percentage of users who would be "very disappointed" (40%+ = PMF).',
      deliverables: ['PMF score', 'Segment analysis', 'Trend tracking']
    },
    {
      title: 'Act on Insights',
      description: 'Use qualitative feedback to improve product for disappointed users.',
      deliverables: ['Improvement roadmap', 'Feature priorities', 'Messaging updates']
    }],

    caseStudyLink: '/case-study-theater',
    downloadableTemplate: true,
    adoptionStories: [
    {
      company: 'SaaS Startup',
      role: 'Founder/PM',
      impact: 'Measured PMF at 45%, validated readiness for growth investment',
      metrics: '45% PMF score, $1M growth funding'
    }]

  }];


  const categories = ['All', 'Discovery', 'Strategy', 'Prioritization', 'Metrics', 'Execution'];
  const scales = ['All', '0-1', '1-1000', '1000+'];

  const filteredFrameworks = frameworks.filter((framework) => {
    const matchesCategory = selectedCategory === 'All' || framework.category === selectedCategory;
    const matchesScale = selectedScale === 'All' || framework.scale === selectedScale;
    const matchesSearch = framework.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    framework.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesScale && matchesSearch;
  });

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="animate-pulse space-y-8">
              <div className="h-64 bg-muted rounded-lg"></div>
              <div className="h-12 bg-muted rounded-lg w-1/3"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) =>
                <div key={i} className="h-96 bg-muted rounded-lg"></div>
                )}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <FrameworkHero />
        <FrameworkFilters
          categories={categories}
          scales={scales}
          selectedCategory={selectedCategory}
          selectedScale={selectedScale}
          searchQuery={searchQuery}
          onCategoryChange={setSelectedCategory}
          onScaleChange={setSelectedScale}
          onSearchChange={setSearchQuery}
          totalFrameworks={frameworks.length}
          filteredCount={filteredFrameworks.length} />

        <FrameworkGrid
          frameworks={filteredFrameworks}
          onFrameworkClick={setSelectedFramework} />

      </main>
      <Footer />
      {selectedFramework &&
      <FrameworkDetailModal
        framework={selectedFramework}
        onClose={() => setSelectedFramework(null)} />

      }
    </div>);

};

export default FrameworkMethodologyInteractive;