'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import { motion } from 'framer-motion';

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  scale: string;
  image: string;
  alt: string;
  challenge: string;
  impact: string[];
  tags: string[];
}

const FeaturedCaseStudies = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'SME Lending Platform MVP Launch',
      category: '0–1 Innovation',
      scale: '0 → 15K Active Users',
      image:
        'https://img.rocket.new/generatedImages/rocket_gen_img_1eff135a3-1766601351747.png',
      alt: 'Mobile fintech application showing loan dashboard and transaction interface',
      challenge:
        'Design and launch a compliant lending MVP while validating demand with small business owners.',
      impact: [
        '15K+ verified users onboarded in first 8 months',
        'Reduced onboarding drop-offs by 32%',
        'Achieved early product-market validation'
      ],
      tags: ['FinTech', 'MVP', 'Discovery']
    },
    {
      id: 2,
      title: 'B2B SaaS Analytics Platform Optimization',
      category: '1–1000 Scaling',
      scale: '8K → 45K Monthly Users',
      image:
        'https://img.rocket.new/generatedImages/rocket_gen_img_1e0209a6b-1764676409002.png',
      alt: 'SaaS analytics dashboard showing charts, KPIs and performance metrics',
      challenge:
        'Improve engagement and reduce churn by redesigning reporting workflows and dashboard usability.',
      impact: [
        '28% increase in feature adoption',
        '21% reduction in churn within 2 quarters',
        'Improved report generation speed by 3x'
      ],
      tags: ['SaaS', 'Analytics', 'Growth']
    },
    {
      id: 3,
      title: 'Enterprise CRM Workflow Modernization',
      category: '1000+ Enterprise',
      scale: '120K+ Internal Users',
      image:
        'https://img.rocket.new/generatedImages/rocket_gen_img_1a0b7563b-1765794380085.png',
      alt: 'Enterprise team collaborating in meeting room with CRM dashboards on screens',
      challenge:
        'Modernize legacy CRM workflows while maintaining operational continuity across multiple departments.',
      impact: [
        'Reduced manual processing time by 35%',
        'Improved system performance reliability',
        'Enabled phased rollout without business disruption'
      ],
      tags: ['Enterprise', 'CRM', 'Process']
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="DocumentTextIcon" size={18} className="text-primary" />
            <span className="text-sm font-medium text-primary">
              Featured Work
            </span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Case Studies That Demonstrate Execution
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real-world product initiatives showing structured problem solving, delivery ownership, and measurable business outcomes.
          </p>
        </motion.div>

        {/* CASE STUDIES GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid lg:grid-cols-3 gap-8 mb-12"
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-background rounded-xl overflow-hidden border border-border hover:border-primary hover:shadow-elevated transition-all group"
            >
              {/* IMAGE */}
              <div className="relative h-48 overflow-hidden">
                <AppImage
                  src={study.image}
                  alt={study.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-semibold">
                    {study.category}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Icon
                    name="ChartBarIcon"
                    size={16}
                    className="text-brand-green"
                  />
                  <span className="text-sm font-semibold text-brand-green">
                    {study.scale}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-smooth">
                  {study.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  <span className="font-semibold text-foreground">
                    Challenge:
                  </span>{' '}
                  {study.challenge}
                </p>

                <div className="space-y-2 mb-4">
                  {study.impact.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-2"
                    >
                      <Icon
                        name="CheckCircleIcon"
                        size={16}
                        className="text-brand-green mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm text-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-muted rounded text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/case-study-theater"
                  className="inline-flex items-center space-x-2 text-primary font-semibold text-sm hover:text-accent transition-smooth"
                >
                  <span>Read Full Case Study</span>
                  <Icon name="ArrowRightIcon" size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/case-study-theater"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold text-base hover:bg-opacity-90 transition-smooth shadow-subtle"
          >
            <span>View All Case Studies</span>
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedCaseStudies;
