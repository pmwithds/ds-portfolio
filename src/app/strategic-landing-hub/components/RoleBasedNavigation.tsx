'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { motion } from 'framer-motion';

interface NavigationCard {
  id: number;
  role: string;
  icon: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryActions: {
    label: string;
    href: string;
  }[];
  color: string;
}

const RoleBasedNavigation = () => {
  const [selectedRole, setSelectedRole] = useState<number | null>(null);

  const navigationCards: NavigationCard[] = [
    {
      id: 1,
      role: 'Hiring Manager',
      icon: 'BriefcaseIcon',
      description:
        'Review real-world product execution skills, delivery capability and applied experience across different product stages.',
      primaryAction: {
        label: 'View Competency Matrix',
        href: '/competency-matrix-center'
      },
      secondaryActions: [
        { label: 'Case Studies', href: '/case-study-theater' },
        { label: 'Download Resume', href: '#' }
      ],
      color: 'brand-blue'
    },
    {
      id: 2,
      role: 'Executive Recruiter',
      icon: 'UserGroupIcon',
      description:
        'Quick access to verified experience overview, resume profile and leadership competencies for candidate evaluation.',
      primaryAction: {
        label: 'Download Resume',
        href: '#'
      },
      secondaryActions: [
        { label: 'View Credentials', href: '#' },
        { label: 'Contact Direct', href: '#' }
      ],
      color: 'brand-green'
    },
    {
      id: 3,
      role: 'Fellow Product Manager',
      icon: 'AcademicCapIcon',
      description:
        'Explore practical frameworks, delivery methods and real product workflows used in real-world teams.',
      primaryAction: {
        label: 'Explore Frameworks',
        href: '/framework-methodology-center'
      },
      secondaryActions: [
        { label: 'Read Articles', href: '/thought-leadership-blog' },
        { label: 'PM Tools', href: '/pm-tools-sandbox' }
      ],
      color: 'brand-purple'
    },
    {
      id: 4,
      role: 'Startup Founder',
      icon: 'LightBulbIcon',
      description:
        'Learn how to validate ideas, build MVPs and scale early-stage products using proven execution patterns.',
      primaryAction: {
        label: 'View Case Studies',
        href: '/case-study-theater'
      },
      secondaryActions: [
        { label: 'Frameworks', href: '/framework-methodology-center' },
        { label: 'Collaborate', href: '#' }
      ],
      color: 'accent'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Choose Your Journey
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Select your role to explore the most relevant product experience, frameworks and execution insights.
          </p>
        </motion.div>

        {/* Cards */}
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
          {navigationCards.map((card) => (
            <motion.div
              key={card.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setSelectedRole(card.id)}
              onMouseLeave={() => setSelectedRole(null)}
              whileHover={{ y: -6 }}
              className={`bg-card rounded-xl p-6 border-2 transition-all cursor-pointer ${
                selectedRole === card.id
                  ? `border-${card.color} shadow-elevated`
                  : 'border-border hover:border-muted-foreground'
              }`}
            >

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 6, scale: 1.05 }}
                className={`w-14 h-14 bg-${card.color}/10 rounded-lg flex items-center justify-center mb-4`}
              >
                <Icon name={card.icon as any} size={26} className={`text-${card.color}`} />
              </motion.div>

              {/* Title */}
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                {card.role}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-6 min-h-[80px]">
                {card.description}
              </p>

              {/* Actions */}
              <div className="space-y-3">

                <Link
                  href={card.primaryAction.href}
                  className={`block w-full px-4 py-3 bg-${card.color} text-white rounded-lg font-semibold text-sm text-center hover:bg-opacity-90 transition`}
                >
                  {card.primaryAction.label}
                </Link>

                <div className="flex gap-2">
                  {card.secondaryActions.map((action, index) => (
                    <Link
                      key={index}
                      href={action.href}
                      className="flex-1 px-3 py-2 border border-border rounded-lg text-xs font-medium text-foreground text-center hover:bg-muted transition"
                    >
                      {action.label}
                    </Link>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default RoleBasedNavigation;
