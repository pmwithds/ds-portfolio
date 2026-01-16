'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { motion } from 'framer-motion';

interface Competency {
  id: number;
  scale: string;
  title: string;
  icon: string;
  description: string;
  skills: string[];
  color: string;
}

const CoreCompetencies = () => {
  const competencies: Competency[] = [
    {
      id: 1,
      scale: '0-1',
      title: 'Innovation & Validation',
      icon: 'LightBulbIcon',
      description:
        'Hands-on experience building early-stage products through structured discovery, validation, and rapid experimentation.',
      skills: [
        'Customer Discovery Interviews',
        'MVP & Prototype Development',
        'Problem-Solution Fit Validation',
        'Early User Feedback Loops'
      ],
      color: 'brand-blue'
    },
    {
      id: 2,
      scale: '1-1000',
      title: 'Scaling & Growth',
      icon: 'RocketLaunchIcon',
      description:
        'Driving adoption and engagement through data-informed prioritization, experimentation, and continuous optimization.',
      skills: [
        'Growth Experiment Design',
        'A/B Testing & Funnel Analysis',
        'Feature Impact Prioritization',
        'Retention & Activation Optimization'
      ],
      color: 'brand-green'
    },
    {
      id: 3,
      scale: '1000+',
      title: 'Enterprise Optimization',
      icon: 'BuildingOfficeIcon',
      description:
        'Operating in complex environments by improving delivery systems, platform thinking, and cross-team execution.',
      skills: [
        'Platform & Ecosystem Strategy',
        'Technical Debt Prioritization',
        'Cross-functional Team Leadership',
        'Process & Delivery Optimization'
      ],
      color: 'brand-purple'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Scale-Based Product Expertise
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Practical product leadership experience across early-stage innovation, growth execution, and enterprise-scale optimization.
          </p>
        </motion.div>

        {/* CARDS GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="grid lg:grid-cols-3 gap-8 mb-12"
        >
          {competencies.map((competency) => (
            <motion.div
              key={competency.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-card rounded-xl p-8 border border-border hover:border-primary hover:shadow-elevated transition-all"
            >
              {/* Header Row */}
              <div className="flex items-center justify-between mb-6">
                <div
                  className={`w-16 h-16 bg-${competency.color}/10 rounded-xl flex items-center justify-center`}
                >
                  <Icon
                    name={competency.icon as any}
                    size={30}
                    className={`text-${competency.color}`}
                  />
                </div>

                <div
                  className={`px-3 py-1 bg-${competency.color}/10 rounded-full`}
                >
                  <span className="text-sm font-semibold text-foreground">
                    {competency.scale}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-2xl text-foreground mb-3">
                {competency.title}
              </h3>

              {/* Description */}
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                {competency.description}
              </p>

              {/* Skills */}
              <div className="space-y-2">
                {competency.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2"
                  >
                    <Icon
                      name="CheckCircleIcon"
                      size={18}
                      className={`text-${competency.color}`}
                    />
                    <span className="text-sm text-foreground">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/competency-matrix-center"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-base hover:bg-opacity-90 transition-smooth shadow-subtle"
          >
            <span>Explore Full Competency Matrix</span>
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default CoreCompetencies;
