'use client';

import Icon from '@/components/ui/AppIcon';
import { motion } from 'framer-motion';

interface Metric {
  id: number;
  icon: string;
  value: string;
  label: string;
  description: string;
  color: string;
}

const ImpactMetrics = () => {
  const metrics: Metric[] = [
    {
      id: 1,
      icon: 'ChartBarIcon',
      value: '$15M+',
      label: 'Revenue Influence',
      description:
        'Contributed to revenue-driving initiatives through feature launches, pricing experiments, and product-led growth improvements.',
      color: 'brand-blue'
    },
    {
      id: 2,
      icon: 'UserGroupIcon',
      value: '500K+',
      label: 'Users Impacted',
      description:
        'Worked on products and internal platforms serving large active user bases across B2B and B2C environments.',
      color: 'brand-green'
    },
    {
      id: 3,
      icon: 'RocketLaunchIcon',
      value: '18+',
      label: 'Releases & Major Features',
      description:
        'Led and supported MVP launches, feature rollouts, and continuous improvement cycles across multiple products.',
      color: 'brand-purple'
    },
    {
      id: 4,
      icon: 'TrophyIcon',
      value: '25-30%',
      label: 'Delivery Efficiency Gain',
      description:
        'Improved team delivery velocity and execution quality through better sprint planning, tooling adoption, and workflow optimization.',
      color: 'accent'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >

          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="SparklesIcon" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">
              Product Delivery Outcomes
            </span>
          </div>

          {/* Title */}
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Strategic Impact Through Execution & Delivery
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Outcome-focused results from building, scaling, and optimizing real-world products across cross-functional teams and diverse business environments.
          </p>

        </motion.div>

        {/* METRICS GRID */}
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
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.id}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-background rounded-xl p-6 border border-border hover:border-primary hover:shadow-elevated transition-all"
            >

              {/* Icon Container */}
              <div
                className={`w-16 h-16 bg-${metric.color}/10 rounded-xl flex items-center justify-center mb-4`}
              >
                <Icon
                  name={metric.icon as any}
                  size={28}
                  className={`text-${metric.color}`}
                />
              </div>

              {/* Metric Value */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={`font-heading font-bold text-4xl text-${metric.color} mb-2`}
              >
                {metric.value}
              </motion.div>

              {/* Label */}
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {metric.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {metric.description}
              </p>

            </motion.div>
          ))}
        </motion.div>

        {/* FOOTNOTE TRUST LINE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-xs text-muted-foreground mt-10 text-center"
        >
          Metrics represent cumulative contributions across multiple projects, roles, and delivery teams.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Want to see how these outcomes were achieved?
          </p>

          <a
            href="/case-study-theater"
            className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-accent transition-smooth"
          >
            <span>View Delivery Case Studies</span>
            <Icon name="ArrowRightIcon" size={20} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ImpactMetrics;
