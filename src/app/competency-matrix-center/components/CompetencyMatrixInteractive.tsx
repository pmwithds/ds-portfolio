'use client';

import { useState, useEffect, useMemo } from 'react';
import CompetencyCard from './CompetencyCard';
import ScaleFilter from './ScaleFilter';
import CompetencyHeatMap from './CompetencyHeatMap';
import FrameworkShowcase from './FrameworkShowcase';
import CategoryFilter from './CategoryFilter';
console.log("CategoryFilter =", CategoryFilter);

interface Competency {
  id: string;
  title: string;
  description: string;
  level: number;
  maxLevel: number;
  icon: string;
  category: string;
  scale: string[];
  examples: string[];
}

interface HeatMapCell {
  skill: string;
  scale: string;
  level: number;
  description: string;
  frameworks: string[];
  category: string;
}

interface Framework {
  name: string;
  description: string;
  icon: string;
  applications: string[];
  metrics: string;
}

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

const CompetencyMatrixInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeScale, setActiveScale] = useState<string>('all');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

 const competencies: Competency[] = [

  // ================= STRATEGY =================

  {
    id: '1',
    title: 'Product Strategy & Vision',
    description: 'Defining product direction, MVP scope and roadmap aligned with business goals',
    level: 9,
    maxLevel: 10,
    icon: 'LightBulbIcon',
    category: 'Strategy',
    scale: ['0-1', '1-1000', '1000+'],
    examples: [
      'Created MVP roadmap aligned with early customer validation',
      'Defined product vision and problem statements for new feature initiatives',
      'Aligned internal stakeholders on quarterly product priorities'
    ]
  },

  {
    id: '2',
    title: 'Roadmapping & Prioritization',
    description: 'Structuring product backlog and prioritizing features based on impact and effort',
    level: 9,
    maxLevel: 10,
    icon: 'ListBulletIcon',
    category: 'Strategy',
    scale: ['0-1', '1-1000'],
    examples: [
      'Applied prioritization frameworks to manage MVP scope',
      'Improved sprint planning clarity through roadmap structuring',
      'Balanced business goals with engineering capacity'
    ]
  },

  {
    id: '3',
    title: 'Go-to-Market Execution',
    description: 'Supporting product launches and adoption strategies',
    level: 8,
    maxLevel: 10,
    icon: 'RocketLaunchIcon',
    category: 'Strategy',
    scale: ['0-1', '1-1000'],
    examples: [
      'Planned MVP launch activities and release communication',
      'Created onboarding and feature announcement materials',
      'Collaborated with marketing teams for rollout execution'
    ]
  },

  // ================= ANALYTICS =================

  {
    id: '4',
    title: 'Data-Driven Decision Making',
    description: 'Using metrics and experimentation to guide product improvements',
    level: 9,
    maxLevel: 10,
    icon: 'ChartBarIcon',
    category: 'Analytics',
    scale: ['1-1000'],
    examples: [
      'Defined core product KPIs and engagement metrics',
      'Used experiment insights to guide feature prioritization',
      'Improved decision quality through metric reviews'
    ]
  },

  {
    id: '5',
    title: 'Growth & Experimentation',
    description: 'Running structured experiments to improve acquisition and engagement',
    level: 8,
    maxLevel: 10,
    icon: 'ArrowTrendingUpIcon',
    category: 'Analytics',
    scale: ['1-1000'],
    examples: [
      'Designed onboarding experiments to improve activation',
      'Tested feature variations to increase engagement',
      'Used learning loops to refine product roadmap'
    ]
  },

  // ================= RESEARCH =================

  {
    id: '6',
    title: 'User Research & Validation',
    description: 'Conducting discovery research to validate product ideas',
    level: 9,
    maxLevel: 10,
    icon: 'UserGroupIcon',
    category: 'Research',
    scale: ['0-1', '1-1000'],
    examples: [
      'Conducted customer interviews for problem validation',
      'Ran usability testing sessions for UX improvements',
      'Translated insights into actionable requirements'
    ]
  },

  {
    id: '7',
    title: 'Market & Competitive Analysis',
    description: 'Analyzing competitors and market trends to inform strategy',
    level: 8,
    maxLevel: 10,
    icon: 'MagnifyingGlassIcon',
    category: 'Research',
    scale: ['0-1', '1-1000'],
    examples: [
      'Performed competitor feature benchmarking',
      'Tracked market trends for roadmap planning',
      'Identified opportunity gaps for new features'
    ]
  },

  // ================= DELIVERY / PROCESS =================

  {
    id: '8',
    title: 'Agile & Scrum Delivery',
    description: 'Managing sprint execution and iterative product delivery',
    level: 9,
    maxLevel: 10,
    icon: 'BoltIcon',
    category: 'Process',
    scale: ['0-1', '1-1000'],
    examples: [
      'Planned sprint cycles with engineering teams',
      'Improved backlog grooming quality',
      'Maintained consistent sprint cadence'
    ]
  },

  {
    id: '9',
    title: 'Release Planning & Coordination',
    description: 'Managing release cycles and deployment readiness',
    level: 8,
    maxLevel: 10,
    icon: 'CalendarIcon',
    category: 'Process',
    scale: ['0-1', '1-1000'],
    examples: [
      'Planned release timelines with engineering teams',
      'Coordinated deployment readiness activities',
      'Improved communication during launches'
    ]
  },

  {
    id: '10',
    title: 'Project Execution & Delivery Management',
    description: 'Coordinating delivery timelines and cross-team execution',
    level: 9,
    maxLevel: 10,
    icon: 'ClipboardDocumentCheckIcon',
    category: 'Process',
    scale: ['0-1', '1-1000'],
    examples: [
      'Tracked sprint commitments and delivery milestones',
      'Managed delivery dependencies across teams',
      'Improved execution predictability'
    ]
  },

  // ================= LEADERSHIP =================

  {
    id: '11',
    title: 'Stakeholder Communication',
    description: 'Aligning teams and managing expectations',
    level: 9,
    maxLevel: 10,
    icon: 'UsersIcon',
    category: 'Leadership',
    scale: ['0-1', '1-1000'],
    examples: [
      'Presented roadmap updates to stakeholders',
      'Managed expectations around scope and timelines',
      'Resolved delivery blockers through collaboration'
    ]
  },

  {
    id: '12',
    title: 'Cross-Team Collaboration',
    description: 'Working effectively with engineering, design and business teams',
    level: 9,
    maxLevel: 10,
    icon: 'UserGroupIcon',
    category: 'Leadership',
    scale: ['0-1', '1-1000'],
    examples: [
      'Facilitated cross-team planning discussions',
      'Improved communication flow between functions',
      'Helped resolve team dependency issues'
    ]
  },

  // ================= TECHNICAL / AI =================

  {
    id: '13',
    title: 'Technical Architecture Collaboration',
    description: 'Working with engineers on system design and technical trade-offs',
    level: 8,
    maxLevel: 10,
    icon: 'CpuChipIcon',
    category: 'Technical',
    scale: ['0-1', '1-1000'],
    examples: [
      'Participated in API design discussions',
      'Supported architecture decisions for MVP',
      'Helped prioritize technical improvements'
    ]
  },

  {
    id: '14',
    title: 'AI & Automation Feature Design',
    description: 'Designing AI-powered and automation-based product features',
    level: 8,
    maxLevel: 10,
    icon: 'SparklesIcon',
    category: 'Technical',
    scale: ['0-1', '1-1000'],
    examples: [
      'Designed AI-assisted workflow prototypes',
      'Tested prompt-based automation features',
      'Validated AI use cases for internal tools'
    ]
  },

  // ================= PRODUCT OPERATIONS =================

  {
    id: '15',
    title: 'Product Documentation & Process Setup',
    description: 'Creating documentation and operational processes to support delivery',
    level: 8,
    maxLevel: 10,
    icon: 'DocumentTextIcon',
    category: 'Process',
    scale: ['0-1', '1-1000'],
    examples: [
      'Created PRDs and feature documentation',
      'Maintained release notes and change logs',
      'Improved onboarding documentation'
    ]
  }

];

const heatMapData: HeatMapCell[] = [

  // ================= STRATEGY =================

  {
    skill: 'Product Strategy',
    scale: '0-1',
    level: 10,
    description: 'Defining MVP vision, problem-solution fit and validation',
    frameworks: ['Lean Canvas', 'Jobs-to-be-Done', 'Value Proposition Canvas'],
    category: 'Strategy'
  },
  {
    skill: 'Product Strategy',
    scale: '1-1000',
    level: 9,
    description: 'Scaling roadmap and monetization execution',
    frameworks: ['OKRs', 'North Star Metric', 'Product-Market Fit Framework'],
    category: 'Strategy'
  },
  {
    skill: 'Product Strategy',
    scale: '1000+',
    level: 7,
    description: 'Enterprise strategy alignment and portfolio execution',
    frameworks: ['Portfolio Strategy', 'Platform Strategy', 'Ecosystem Mapping'],
    category: 'Strategy'
  },

  {
    skill: 'Roadmapping & Prioritization',
    scale: '0-1',
    level: 9,
    description: 'MVP scope definition and backlog structuring',
    frameworks: ['MoSCoW', 'User Story Mapping', 'ICE Scoring'],
    category: 'Strategy'
  },
  {
    skill: 'Roadmapping & Prioritization',
    scale: '1-1000',
    level: 9,
    description: 'Outcome-driven roadmap prioritization',
    frameworks: ['RICE', 'Opportunity Solution Tree', 'WSJF'],
    category: 'Strategy'
  },
  {
    skill: 'Roadmapping & Prioritization',
    scale: '1000+',
    level: 7,
    description: 'Portfolio-level prioritization and capacity planning',
    frameworks: ['Weighted Scoring', 'SAFe Portfolio Kanban', 'Capacity Planning'],
    category: 'Strategy'
  },

  {
    skill: 'Pricing & Monetization',
    scale: '0-1',
    level: 8,
    description: 'Early pricing experiments and packaging',
    frameworks: ['Value-Based Pricing', 'Freemium Models', 'Cost-Plus Pricing'],
    category: 'Strategy'
  },
  {
    skill: 'Pricing & Monetization',
    scale: '1-1000',
    level: 8,
    description: 'Revenue optimization and monetization scaling',
    frameworks: ['ARPU Modeling', 'Cohort Revenue Analysis', 'Pricing Experiments'],
    category: 'Strategy'
  },
  {
    skill: 'Pricing & Monetization',
    scale: '1000+',
    level: 7,
    description: 'Enterprise pricing strategy exposure',
    frameworks: ['Good-Better-Best Packaging', 'Contract Pricing', 'Value Selling'],
    category: 'Strategy'
  },

  // ================= ANALYTICS =================

  {
    skill: 'Data Analytics',
    scale: '0-1',
    level: 9,
    description: 'Initial KPI definition and event tracking setup',
    frameworks: ['AARRR Metrics', 'GA4', 'Event Taxonomy'],
    category: 'Analytics'
  },
  {
    skill: 'Data Analytics',
    scale: '1-1000',
    level: 9,
    description: 'Funnel, cohort and retention analysis',
    frameworks: ['Mixpanel', 'Amplitude', 'Funnel Optimization'],
    category: 'Analytics'
  },
  {
    skill: 'Data Analytics',
    scale: '1000+',
    level: 7,
    description: 'Enterprise analytics collaboration',
    frameworks: ['Data Warehousing', 'BI Dashboards', 'Predictive Analytics'],
    category: 'Analytics'
  },

  {
    skill: 'Experimentation & Growth',
    scale: '0-1',
    level: 8,
    description: 'Early hypothesis testing and experiment culture',
    frameworks: ['Lean Experiments', 'Hypothesis Backlog', 'MVP Testing'],
    category: 'Analytics'
  },
  {
    skill: 'Experimentation & Growth',
    scale: '1-1000',
    level: 9,
    description: 'Scaling A/B testing and growth loops',
    frameworks: ['A/B Testing', 'Growth Loops', 'Conversion Rate Optimization'],
    category: 'Analytics'
  },
  {
    skill: 'Experimentation & Growth',
    scale: '1000+',
    level: 7,
    description: 'Enterprise experimentation exposure',
    frameworks: ['Experiment Platforms', 'Multi-Variant Testing', 'ML Optimization'],
    category: 'Analytics'
  },

  // ================= RESEARCH =================

  {
    skill: 'User Research',
    scale: '0-1',
    level: 10,
    description: 'Customer discovery and usability validation',
    frameworks: ['User Interviews', 'Usability Testing', 'Problem Interviews'],
    category: 'Research'
  },
  {
    skill: 'User Research',
    scale: '1-1000',
    level: 9,
    description: 'Continuous discovery programs',
    frameworks: ['In-App Surveys', 'Session Recordings', 'Heatmaps'],
    category: 'Research'
  },
  {
    skill: 'User Research',
    scale: '1000+',
    level: 7,
    description: 'Enterprise research operations exposure',
    frameworks: ['Research Ops', 'Panel Management', 'Longitudinal Studies'],
    category: 'Research'
  },

  {
    skill: 'Journey Mapping & Personas',
    scale: '0-1',
    level: 9,
    description: 'Persona creation and experience mapping',
    frameworks: ['Persona Canvas', 'Empathy Maps', 'Storyboarding'],
    category: 'Research'
  },
  {
    skill: 'Journey Mapping & Personas',
    scale: '1-1000',
    level: 9,
    description: 'Customer experience optimization',
    frameworks: ['Customer Journey Mapping', 'Service Blueprinting', 'Touchpoint Analysis'],
    category: 'Research'
  },
  {
    skill: 'Journey Mapping & Personas',
    scale: '1000+',
    level: 7,
    description: 'Enterprise CX strategy collaboration',
    frameworks: ['CX Frameworks', 'Omnichannel Mapping', 'Experience Architecture'],
    category: 'Research'
  },

  // ================= TECHNICAL =================

  {
    skill: 'Technical Architecture',
    scale: '0-1',
    level: 9,
    description: 'MVP system design and API decisions',
    frameworks: ['API Design', 'System Design Basics', 'Monolith vs Microservices'],
    category: 'Technical'
  },
  {
    skill: 'Technical Architecture',
    scale: '1-1000',
    level: 8,
    description: 'Scaling infrastructure and performance tuning',
    frameworks: ['Microservices', 'Cloud Architecture', 'Caching Strategies'],
    category: 'Technical'
  },
  {
    skill: 'Technical Architecture',
    scale: '1000+',
    level: 7,
    description: 'Enterprise system architecture exposure',
    frameworks: ['DevOps Pipelines', 'Security Compliance', 'Zero Trust'],
    category: 'Technical'
  },

  {
    skill: 'AI / GenAI Integration',
    scale: '0-1',
    level: 9,
    description: 'Building AI MVP features and prototypes',
    frameworks: ['Prompt Engineering', 'OpenAI APIs', 'Rapid Prototyping'],
    category: 'Technical'
  },
  {
    skill: 'AI / GenAI Integration',
    scale: '1-1000',
    level: 8,
    description: 'Production AI feature rollout',
    frameworks: ['RAG Architecture', 'Vector Databases', 'Inference Optimization'],
    category: 'Technical'
  },
  {
    skill: 'AI / GenAI Integration',
    scale: '1000+',
    level: 6,
    description: 'Enterprise AI governance exposure',
    frameworks: ['AI Governance', 'Model Monitoring', 'Responsible AI'],
    category: 'Technical'
  },

  // ================= LEADERSHIP =================

  {
    skill: 'Stakeholder Management',
    scale: '0-1',
    level: 8,
    description: 'Founder and early stakeholder alignment',
    frameworks: ['Pitch Decks', 'Product Briefs', 'Alignment Workshops'],
    category: 'Leadership'
  },
  {
    skill: 'Stakeholder Management',
    scale: '1-1000',
    level: 9,
    description: 'Cross-functional leadership execution',
    frameworks: ['Executive Reviews', 'RACI Matrix', 'Change Management'],
    category: 'Leadership'
  },
  {
    skill: 'Stakeholder Management',
    scale: '1000+',
    level: 8,
    description: 'Enterprise governance collaboration',
    frameworks: ['Board Reporting', 'Stakeholder Mapping', 'Influence Models'],
    category: 'Leadership'
  },

  {
    skill: 'Executive Communication',
    scale: '0-1',
    level: 8,
    description: 'Product storytelling and alignment',
    frameworks: ['Narrative Frameworks', 'Product Demos', 'Vision Decks'],
    category: 'Leadership'
  },
  {
    skill: 'Executive Communication',
    scale: '1-1000',
    level: 9,
    description: 'Leadership communication and decision support',
    frameworks: ['Decision Memos', 'Business Reviews', 'Strategic Narratives'],
    category: 'Leadership'
  },
  {
    skill: 'Executive Communication',
    scale: '1000+',
    level: 8,
    description: 'C-level strategic communication exposure',
    frameworks: ['Executive Briefings', 'Board Presentations', 'Investor Updates'],
    category: 'Leadership'
  },

  // ================= PROCESS =================

  {
    skill: 'Agile Delivery',
    scale: '0-1',
    level: 9,
    description: 'Sprint planning and MVP delivery',
    frameworks: ['Scrum', 'Kanban', 'Backlog Grooming'],
    category: 'Process'
  },
  {
    skill: 'Agile Delivery',
    scale: '1-1000',
    level: 9,
    description: 'Delivery optimization and velocity improvement',
    frameworks: ['Velocity Tracking', 'Sprint Metrics', 'Flow Efficiency'],
    category: 'Process'
  },
  {
    skill: 'Agile Delivery',
    scale: '1000+',
    level: 8,
    description: 'Scaled agile implementation',
    frameworks: ['SAFe', 'LeSS', 'Enterprise Scrum'],
    category: 'Process'
  },

  {
    skill: 'Product Operations',
    scale: '0-1',
    level: 8,
    description: 'Release coordination and process setup',
    frameworks: ['Release Checklists', 'Change Logs', 'Feature Flags'],
    category: 'Process'
  },
  {
    skill: 'Product Operations',
    scale: '1-1000',
    level: 8,
    description: 'Operational workflow scaling',
    frameworks: ['Release Playbooks', 'Incident Management', 'Postmortems'],
    category: 'Process'
  },
  {
    skill: 'Product Operations',
    scale: '1000+',
    level: 7,
    description: 'Enterprise product ops exposure',
    frameworks: ['Portfolio Operations', 'Governance Models', 'Process Automation'],
    category: 'Process'
  },
    // ================= PROJECT MANAGEMENT =================

  {
    skill: 'Project Planning & Scheduling',
    scale: '0-1',
    level: 9,
    description: 'MVP delivery planning and milestone tracking',
    frameworks: ['Work Breakdown Structure (WBS)', 'Sprint Planning', 'Roadmap Planning'],
    category: 'Process'
  },
  {
    skill: 'Project Planning & Scheduling',
    scale: '1-1000',
    level: 9,
    description: 'Multi-team delivery planning and dependency management',
    frameworks: ['Gantt Charts', 'Critical Path Method', 'Capacity Planning'],
    category: 'Process'
  },
  {
    skill: 'Project Planning & Scheduling',
    scale: '1000+',
    level: 8,
    description: 'Enterprise release and portfolio delivery coordination',
    frameworks: ['Program Increment Planning', 'SAFe Roadmaps', 'Enterprise Scheduling'],
    category: 'Process'
  },

  {
    skill: 'Risk & Issue Management',
    scale: '0-1',
    level: 8,
    description: 'Identifying early product and delivery risks',
    frameworks: ['Risk Register', 'Pre-Mortem Analysis', 'Assumption Mapping'],
    category: 'Process'
  },
  {
    skill: 'Risk & Issue Management',
    scale: '1-1000',
    level: 9,
    description: 'Proactive mitigation and escalation handling',
    frameworks: ['RAID Logs', 'Root Cause Analysis', 'Impact Assessment'],
    category: 'Process'
  },
  {
    skill: 'Risk & Issue Management',
    scale: '1000+',
    level: 8,
    description: 'Enterprise risk governance and compliance coordination',
    frameworks: ['Risk Heat Maps', 'Compliance Audits', 'Enterprise Risk Frameworks'],
    category: 'Process'
  },

  {
    skill: 'Delivery Execution',
    scale: '0-1',
    level: 9,
    description: 'Hands-on MVP execution and sprint delivery',
    frameworks: ['Scrum Ceremonies', 'Kanban Boards', 'Daily Standups'],
    category: 'Process'
  },
  {
    skill: 'Delivery Execution',
    scale: '1-1000',
    level: 9,
    description: 'Optimizing delivery velocity and throughput',
    frameworks: ['Velocity Tracking', 'Cycle Time Metrics', 'Flow Efficiency'],
    category: 'Process'
  },
  {
    skill: 'Delivery Execution',
    scale: '1000+',
    level: 8,
    description: 'Enterprise delivery governance and performance reporting',
    frameworks: ['Program Management Dashboards', 'Delivery OKRs', 'Executive Reporting'],
    category: 'Process'
  },

  {
    skill: 'Cross-Team Coordination',
    scale: '0-1',
    level: 8,
    description: 'Aligning engineering, design, and business teams',
    frameworks: ['Daily Syncs', 'Standup Rituals', 'Collaboration Cadence'],
    category: 'Leadership'
  },
  {
    skill: 'Cross-Team Coordination',
    scale: '1-1000',
    level: 9,
    description: 'Managing dependencies across multiple teams',
    frameworks: ['Scrum of Scrums', 'Dependency Mapping', 'RACI Matrix'],
    category: 'Leadership'
  },
  {
    skill: 'Cross-Team Coordination',
    scale: '1000+',
    level: 8,
    description: 'Enterprise program coordination',
    frameworks: ['Scaled Agile Sync', 'Program Boards', 'Stakeholder Alignment Models'],
    category: 'Leadership'
  },

  {
    skill: 'Project Communication & Reporting',
    scale: '0-1',
    level: 8,
    description: 'Transparent progress updates and stakeholder communication',
    frameworks: ['Status Reports', 'Weekly Updates', 'Demo Reviews'],
    category: 'Leadership'
  },
  {
    skill: 'Project Communication & Reporting',
    scale: '1-1000',
    level: 9,
    description: 'Executive-level delivery reporting',
    frameworks: ['Business Reviews', 'KPI Dashboards', 'Milestone Tracking'],
    category: 'Leadership'
  },
  {
    skill: 'Project Communication & Reporting',
    scale: '1000+',
    level: 8,
    description: 'Enterprise governance reporting',
    frameworks: ['Steering Committee Reports', 'Portfolio Dashboards', 'Executive Briefings'],
    category: 'Leadership'
  }


];




  const frameworks: Framework[] = [

  // ---------------- PRODUCT STRATEGY ----------------

  {
    name: 'RICE Prioritization',
    description: 'Quantitative prioritization framework to evaluate feature impact and delivery effort',
    icon: 'CalculatorIcon',
    applications: [
      'Used to prioritize MVP and post-launch feature backlog',
      'Helped structure roadmap discussions with engineering and stakeholders',
      'Enabled objective comparison between competing feature ideas'
    ],
    metrics: 'Improved roadmap clarity and reduced subjective prioritization'
  },

  {
    name: 'Opportunity Solution Tree',
    description: 'Outcome-driven framework to connect business goals with user problems and solution options',
    icon: 'TreePineIcon',
    applications: [
      'Mapped customer problems to opportunity areas during discovery phase',
      'Improved ideation workshops with structured solution exploration',
      'Helped align product roadmap with measurable outcomes'
    ],
    metrics: 'Improved problem-solution alignment during early discovery'
  },

  {
    name: 'North Star Metric',
    description: 'Framework to define a core metric representing long-term product value',
    icon: 'StarIcon',
    applications: [
      'Identified engagement-focused success metric for product roadmap alignment',
      'Used NSM to guide feature prioritization decisions',
      'Improved team focus on value creation instead of vanity metrics'
    ],
    metrics: 'Improved clarity in success measurement and outcome tracking'
  },

  // ---------------- PRODUCT DISCOVERY ----------------

  {
    name: 'Jobs-to-be-Done (JTBD)',
    description: 'Customer research framework to understand user motivations and desired outcomes',
    icon: 'BriefcaseIcon',
    applications: [
      'Conducted structured customer interviews during MVP discovery',
      'Used JTBD insights to refine feature requirements',
      'Improved positioning and value proposition clarity'
    ],
    metrics: 'Helped improve early user adoption and engagement'
  },

  {
    name: 'Lean Canvas',
    description: 'One-page business model framework for validating product assumptions',
    icon: 'DocumentTextIcon',
    applications: [
      'Used Lean Canvas to validate problem, solution, and customer segments',
      'Identified high-risk assumptions before development',
      'Supported faster discovery iteration cycles'
    ],
    metrics: 'Reduced wasted development effort during MVP stage'
  },

  {
    name: 'User Story Mapping',
    description: 'Visual framework to organize user journeys and define MVP scope',
    icon: 'MapIcon',
    applications: [
      'Created end-to-end journey maps for core user flows',
      'Helped define MVP release scope',
      'Improved collaboration between design and engineering teams'
    ],
    metrics: 'Improved sprint planning structure and backlog clarity'
  },

  // ---------------- DELIVERY & EXECUTION ----------------

  {
    name: 'OKR Framework',
    description: 'Goal-setting framework for aligning product execution with business objectives',
    icon: 'FlagIcon',
    applications: [
      'Defined quarterly product objectives and delivery outcomes',
      'Used OKRs to improve execution focus',
      'Enabled better progress visibility across stakeholders'
    ],
    metrics: 'Improved alignment between planning and delivery execution'
  },

  {
    name: 'MoSCoW Prioritization',
    description: 'Requirement prioritization framework for scope control and release planning',
    icon: 'ListBulletIcon',
    applications: [
      'Used during sprint planning and release scoping',
      'Helped manage scope creep',
      'Improved delivery predictability'
    ],
    metrics: 'Reduced last-minute scope changes and rework'
  },

  {
    name: 'Agile Scrum Framework',
    description: 'Iterative delivery framework for managing product development cycles',
    icon: 'BoltIcon',
    applications: [
      'Facilitated sprint planning and backlog grooming',
      'Participated in daily standups and sprint reviews',
      'Improved delivery rhythm and team collaboration'
    ],
    metrics: 'Improved sprint execution consistency'
  },

  // ---------------- PRODUCT OPERATIONS ----------------

  {
    name: 'RACI Matrix',
    description: 'Responsibility assignment framework for cross-functional alignment',
    icon: 'UsersIcon',
    applications: [
      'Clarified ownership between product, engineering, and business teams',
      'Reduced dependency confusion',
      'Improved accountability in delivery execution'
    ],
    metrics: 'Improved cross-team coordination efficiency'
  },

  {
    name: 'Release Management Playbook',
    description: 'Structured approach to coordinate feature releases and production rollouts',
    icon: 'RocketLaunchIcon',
    applications: [
      'Planned feature release timelines',
      'Coordinated deployment readiness with engineering teams',
      'Improved communication around launches'
    ],
    metrics: 'Reduced release friction and post-launch issues'
  },

  // ---------------- AI / DATA READY ----------------

  {
    name: 'Experiment Design Framework',
    description: 'Structured experimentation approach for validating product hypotheses',
    icon: 'BeakerIcon',
    applications: [
      'Designed simple A/B experiments for feature validation',
      'Tested onboarding and engagement improvements',
      'Improved data-driven decision making'
    ],
    metrics: 'Improved confidence in feature rollout decisions'
  },

  {
    name: 'Prompt Engineering Workflow',
    description: 'Framework for designing, testing and iterating AI prompts for GenAI features',
    icon: 'CpuChipIcon',
    applications: [
      'Designed structured prompts for AI-assisted workflows',
      'Tested output quality across variations',
      'Improved response consistency and relevance'
    ],
    metrics: 'Improved reliability of AI-powered feature outputs'
  }

];

const filteredCompetencies = useMemo(() => {
  return competencies.filter(comp => {

    const scaleMatch =
      activeScale === 'all' || comp.scale.includes(activeScale);

    const categoryMatch =
      activeCategory === 'all' || comp.category === activeCategory;

    return scaleMatch && categoryMatch;
  });
}, [activeScale, activeCategory]);


// -----------------------------
// FILTERED HEATMAP
// -----------------------------

const filteredHeatMapData = useMemo(() => {
  return heatMapData.filter(item => {
    const scaleMatch =
      activeScale === 'all' || item.scale === activeScale;

    const categoryMatch =
      activeCategory === 'all' || item.category === activeCategory;

    return scaleMatch && categoryMatch;
  });
}, [activeScale, activeCategory, heatMapData]);


const baseCategories = [
  { id: 'Strategy', name: 'Strategy', icon: 'LightBulbIcon' },
  { id: 'Analytics', name: 'Analytics', icon: 'ChartBarIcon' },
  { id: 'Research', name: 'Research', icon: 'MagnifyingGlassIcon' },
  { id: 'Process', name: 'Process', icon: 'BoltIcon' },
  { id: 'Leadership', name: 'Leadership', icon: 'UsersIcon' },
  { id: 'Technical', name: 'Technical', icon: 'CpuChipIcon' }
];

// -----------------------------------
// DYNAMIC CATEGORY COUNTS
// -----------------------------------

const categories: Category[] = useMemo(() => {
  return baseCategories.map(cat => {

    const uniqueSkills = new Set(
      heatMapData
        .filter(item => item.category === cat.id)
        .map(item => item.skill)
    );

    return {
      ...cat,
      count: uniqueSkills.size
    };
  });
}, [heatMapData]);





  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="animate-pulse space-y-8">
              <div className="h-32 bg-muted rounded-lg"></div>
              <div className="h-64 bg-muted rounded-lg"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="h-64 bg-muted rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }



  return (
    <div className="space-y-8">
      <ScaleFilter onFilterChange={setActiveScale} />
      <CategoryFilter categories={categories} onCategoryChange={setActiveCategory} />
      <CompetencyHeatMap data={filteredHeatMapData} />
      
      <div>
        <div className="mb-6">
          <h2 className="font-heading font-bold text-2xl text-foreground mb-2">
            Detailed Competencies
          </h2>
          <p className="text-muted-foreground">
            Showing {filteredCompetencies.length} of {competencies.length} competencies
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompetencies.map(competency => (
            <CompetencyCard key={competency.id} {...competency} />
          ))}
        </div>
      </div>

      <FrameworkShowcase frameworks={frameworks} />
    </div>
  );
};

export default CompetencyMatrixInteractive;