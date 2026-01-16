import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import AboutInteractive from './components/AboutInteractive';

export const metadata: Metadata = {
  title: 'About - Dnyaneshwar Shinde',
  description: 'Learn about my journey as a digital product leader, combining analytical rigor with creative problem-solving to build products that matter. Discover my career story, values, and approach to product management.'
};

export default function AboutPage() {
  const profile = {
    name: "Dnyaneshwar Shinde",
    title: "Digital Product Leader | AI & Automation Products",
    tagline: "Product leader with 9+ years of experience building SaaS, automation, and AI-enabled platforms across B2B and consumer domains. I specialize in turning business problems into scalable digital products through structured discovery, data-informed decisions, and execution-focused product delivery.",
    image: "/assets/images/ds-3.jpeg",
    alt: "Professional headshot of Dnyaneshwar Shinde, a confident product manager with short brown hair wearing a navy blazer against a neutral background"
  };

const story = {
  title: "From Business, Tech & Startups to Product Leadership",
  paragraphs: [
    "My career didn’t start in a traditional product role. With a background in Electronics & Telecommunication Engineering, I began in customer-facing and sales-oriented roles where I worked directly with businesses to understand their operational challenges. This early exposure shaped how I think about products today - not as features, but as solutions to real business problems.",

    "Over time, I transitioned into building digital solutions - starting with websites, mobile apps, SEO and growth systems for small and mid-sized businesses. As a founder and operator, I worked with more than 25 clients across industries, delivering end-to-end projects that ranged from MVP development to automation and system integrations. This hands-on experience taught me how products are actually used in the real world, beyond documentation and roadmaps.",

    "My shift into formal product leadership accelerated when I started working closely with engineering teams, designers, and stakeholders to ship scalable platforms. In my recent role as Digital Product Lead and Project Success Manager, I’ve been involved in building sales enablement tools, internal business platforms, AI-assisted workflows, and automation-driven systems - balancing delivery execution with long-term product strategy.",

    "What defines my approach today is structured decision-making combined with practical execution. I rely on frameworks like OKRs, JTBD, RICE, and continuous discovery practices to prioritize effectively, reduce delivery risk, and align teams around outcomes rather than output. I focus heavily on stakeholder alignment, roadmap clarity, and measurable impact rather than vanity metrics.",

    "Today, my goal is to grow as a product leader in AI-enabled and data-driven products - especially in domains like healthcare, fintech, and B2B SaaS. I’m passionate about building scalable systems, mentoring junior professionals, and continuously improving how technology can simplify complex business processes while delivering meaningful user value."
  ]
};


const timeline = [
  {
    year: "2024 – 2025",
    title: "Project Manager | Virtual CTO",
    company: "Plus91 Technologies Pvt Ltd",
    description:
      "Led delivery operations and product execution for multiple SaaS and automation clients. Acted as Virtual CTO partner for early-stage founders, aligning product roadmaps, sprint execution, and client success outcomes.",
    achievements: [
      "Improved sprint velocity by ~20% by implementing structured backlog refinement and sprint rituals",
      "Standardized delivery dashboards to improve stakeholder visibility and milestone tracking",
      "Coordinated client demos, release planning, and roadmap prioritization cycles",
      "Strengthened cross-team collaboration between engineering, design, and business stakeholders"
    ],
    icon: "RocketLaunchIcon"
  },

  {
    year: "2022 – 2024",
    title: "Associate Director – Technology",
    company: "Your CXO Online Solutions Pvt Ltd",
    description:
      "Owned product strategy and delivery for B2B SaaS platforms, AI-powered assistants, and workflow automation tools across marketing, operations, and analytics domains.",
    achievements: [
      "Led 10+ client product initiatives across automation and SaaS platforms",
      "Designed AI chat assistants and workflow automations reducing manual operations by ~30–35%",
      "Defined product roadmaps, sprint cadences, and release governance frameworks",
      "Improved on-time delivery predictability by ~25% through agile optimization practices"
    ],
    icon: "ChartBarIcon"
  },

  {
    year: "2020 – 2022",
    title: "Co-Founder & Product Lead",
    company: "Dataversity IT Pvt Ltd",
    description:
      "Co-founded a digital product services firm delivering scalable platforms across healthcare, edtech, fintech, retail, and internal automation domains. Led end-to-end product lifecycle from discovery to launch.",
    achievements: [
      "Delivered 15+ digital products across multiple industry verticals",
      "Reduced MVP launch cycles by ~30% using lean validation and rapid prototyping",
      "Built and managed a 30-member cross-functional delivery team",
      "Established standardized product discovery and delivery playbooks"
    ],
    icon: "LightBulbIcon"
  },

  {
    year: "2018 – 2019",
    title: "Founder & CEO",
    company: "LVM Genplus Pvt Ltd",
    description:
      "Founded an IT services startup delivering websites, CRMs, SEO platforms, and business automation solutions for SMB clients while building strong fundamentals in client delivery and business operations.",
    achievements: [
      "Delivered 20+ client projects across websites, CRM systems, and automation tools",
      "Built early productized service offerings for faster delivery cycles",
      "Strengthened business operations and revenue stability through digital transformation services"
    ],
    icon: "BuildingOfficeIcon"
  },

  {
    year: "2016 – 2018",
    title: "Engineer – Sales & Business Development",
    company: "Industrial & Enterprise Solutions Firms",
    description:
      "Built strong enterprise exposure in solution selling, account management, and stakeholder negotiations — forming the business foundation for future product leadership roles.",
    achievements: [
      "Generated ₹2.5+ Crore revenue managing enterprise and industrial client portfolios",
      "Handled complex stakeholder negotiations and enterprise client relationships",
      "Developed strong problem discovery and customer-centric solution mindset"
    ],
    icon: "BriefcaseIcon"
  }
];


const values = [
  {
    title: "Problem-First Product Thinking",
    description:
      "I start with real business and user problems — not features. From MVPs to scaling platforms, I focus on identifying the root problem, validating demand early, and building only what creates measurable value.",
    icon: "UserGroupIcon"
  },
  {
    title: "Data + Ground Reality Balance",
    description:
      "I combine analytics with on-ground execution insights. Metrics guide decisions, but customer conversations, sales feedback, and operational learnings ensure we build products that actually work in real environments.",
    icon: "ChartBarIcon"
  },
  {
    title: "Builder’s Leadership Style",
    description:
      "Having worked closely with engineers, designers, and sales teams, I lead with clarity and ownership. I believe in removing blockers, setting strong context, and empowering teams to execute independently.",
    icon: "UsersIcon"
  },
  {
    title: "Continuous Skill Evolution",
    description:
      "From traditional product delivery to AI-powered automation and GenAI tools, I actively upskill and experiment. Staying relevant is not optional — it’s part of my professional discipline.",
    icon: "AcademicCapIcon"
  },
  {
    title: "Radical Transparency",
    description:
      "Clear communication avoids chaos. I prioritize sharing context, aligning stakeholders early, documenting decisions, and creating visibility across roadmap, risks, and execution progress.",
    icon: "ChatBubbleLeftRightIcon"
  },
  {
    title: "Impact Over Activity",
    description:
      "Shipping features is easy. Creating business impact is harder. I measure success through adoption, retention, efficiency gains, and revenue contribution — not just task completion.",
    icon: "SparklesIcon"
  }
];



  const recognitions = [
  {
    type: "Award",
    title: "Product Manager of the Year",
    organization: "Tech Leadership Awards",
    year: "2023",
    description: "Recognized for exceptional product leadership and measurable business impact across multiple product initiatives.",
    icon: "TrophyIcon"
  },
  {
    type: "Speaking",
    title: "ProductCon Keynote Speaker",
    organization: "Product School",
    year: "2023",
    description: "Delivered keynote on 'Data-Driven Product Strategy' to audience of 500+ product professionals.",
    icon: "MicrophoneIcon"
  },
  {
    type: "Publication",
    title: "Featured in Product Management Today",
    organization: "PM Today Magazine",
    year: "2022",
    description: "In-depth interview on building high-performing product teams and scaling product operations.",
    icon: "NewspaperIcon"
  },
  {
    type: "Speaking",
    title: "Mind the Product Conference",
    organization: "Mind the Product",
    year: "2022",
    description: "Presented case study on reducing churn through strategic product improvements and user research.",
    icon: "PresentationChartLineIcon"
  }];

  const impacts = [
  {
    category: "Product Delivery",
    title: "25+ Client Products Delivered",
    metric: "Web, Mobile & Internal Tools",
    description: "Led delivery of digital platforms including business websites, CRMs, dashboards, mobile apps and internal operations tools across multiple industries.",
    icon: "RocketLaunchIcon"
  },
  {
    category: "AI & Automation",
    title: "Workflow Automation Implementations",
    metric: "40–60% Process Efficiency Gains",
    description: "Designed AI-powered automation pipelines for sales operations, marketing workflows and internal reporting to reduce manual effort and improve turnaround time.",
    icon: "CpuChipIcon"
  },
  {
    category: "0 → 1 Product Builds",
    title: "MVP to Production Launches",
    metric: "Idea to Market Execution",
    description: "Built and launched MVP products from scratch including SaaS tools, AI utilities and business platforms by aligning business goals with engineering execution.",
    icon: "LightBulbIcon"
  },
  {
    category: "Growth Enablement",
    title: "Revenue & Lead Growth Enablement",
    metric: "Marketing + Funnel Optimization",
    description: "Supported revenue growth initiatives through SEO, landing page optimization, funnel redesigns and performance-driven feature enhancements.",
    icon: "ArrowTrendingUpIcon"
  }
];


  const companies = [
  {
    name: "TechVision Inc.",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_118f27496-1764663826696.png",
    alt: "TechVision Inc. company logo featuring modern blue and white design"
  },
  {
    name: "GrowthLabs",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1dbe8a49b-1766576814555.png",
    alt: "GrowthLabs company logo with green gradient design"
  },
  {
    name: "StartupHub",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_11bf25dc7-1764654560201.png",
    alt: "StartupHub company logo featuring orange and black branding"
  },
  {
    name: "CodeCraft Solutions",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_194fefea7-1766609859668.png",
    alt: "CodeCraft Solutions company logo with purple tech-inspired design"
  },
  {
    name: "InnovateTech",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_129f86f22-1766575387767.png",
    alt: "InnovateTech company logo featuring red and white modern design"
  },
  {
    name: "DataDriven Co.",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_12816b444-1768491424719.png",
    alt: "DataDriven Co. company logo with blue analytics-themed design"
  }];


  const mentorshipPhilosophy = "I believe in paying it forward. Product management transformed my career, and I'm passionate about helping others discover and develop their product skills. My mentorship approach focuses on practical frameworks, real-world scenarios, and building confidence through hands-on experience.";

  const mentorshipApproaches = [
  {
    title: "Practical Framework Sharing",
    description: "I share the frameworks, templates, and methodologies that have proven effective in my career. From prioritization matrices to user research techniques, I provide actionable tools mentees can use immediately.",
    icon: "DocumentTextIcon"
  },
  {
    title: "Real-World Problem Solving",
    description: "We work through actual product challenges together. Whether it's crafting a product strategy, analyzing user data, or navigating stakeholder conflicts, I provide guidance on real scenarios.",
    icon: "PuzzlePieceIcon"
  },
  {
    title: "Career Development Guidance",
    description: "From breaking into product management to advancing to senior roles, I help mentees navigate their career paths. We discuss skill development, networking strategies, and interview preparation.",
    icon: "BriefcaseIcon"
  },
  {
    title: "Continuous Feedback Loop",
    description: "Growth happens through iteration. I provide regular, constructive feedback on product thinking, communication skills, and decision-making approaches to accelerate learning.",
    icon: "ArrowPathIcon"
  }];


  const mentorshipStats = {
    mentees: 50,
    hours: 200,
    companies: 25
  };

  const interests = [
  {
    title: "Hiking & Nature",
    description: "Finding clarity and inspiration on mountain trails. Some of my best product ideas have come during long hikes in the wilderness.",
    image: "https://images.unsplash.com/photo-1595618346475-0776771932d5",
    alt: "Scenic mountain hiking trail with evergreen trees and distant peaks under blue sky",
    icon: "MapIcon"
  },
  {
    title: "Photography",
    description: "Capturing moments and perspectives. Photography taught me to see details others miss—a skill that translates directly to product work.",
    image: "https://images.unsplash.com/photo-1600822327642-77e57106c351",
    alt: "Professional DSLR camera with telephoto lens on wooden surface with photography equipment",
    icon: "CameraIcon"
  },
  {
    title: "Coffee Culture",
    description: "Exploring specialty coffee and the craft behind every cup. The attention to detail in coffee-making mirrors the precision needed in product management.",
    image: "https://images.unsplash.com/photo-1514310807142-4d5133bf3d4f",
    alt: "Artisan coffee being poured into white ceramic cup with latte art on wooden table",
    icon: "BeakerIcon"
  }];


  return (
    <>
      <Header />
      <main className="pt-16">
        <AboutInteractive
          profile={profile}
          story={story}
          timeline={timeline}
          values={values}
          //recognitions={recognitions}
          companies={companies}
          mentorshipPhilosophy={mentorshipPhilosophy}
          mentorshipApproaches={mentorshipApproaches}
          mentorshipStats={mentorshipStats}
          interests={interests}
          impacts={impacts} />

      </main>
      <Footer />
    </>);

}