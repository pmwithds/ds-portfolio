'use client';

import React from 'react';
import HeroSection from './HeroSection';
import StorySection from './StorySection';
import TimelineSection from './TimelineSection';
import ValuesSection from './ValuesSection';
import ProductImpactSection from './ProductImpactSection';
import MentorshipSection from './MentorshipSection';
import PersonalSection from './PersonalSection';
import CTASection from './CTASection';

interface Profile {
  name: string;
  title: string;
  tagline: string;
  image: string;
  alt: string;
}

interface Story {
  title: string;
  paragraphs: string[];
}

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
  icon: string;
}

interface Value {
  title: string;
  description: string;
  icon: string;
}

interface ImpactItem {
  category: string;
  title: string;
  metric: string;
  description: string;
  icon: string;
}

interface Company {
  name: string;
  logo: string;
  alt: string;
}

interface MentorshipApproach {
  title: string;
  description: string;
  icon: string;
}

interface Interest {
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: string;
}

interface AboutInteractiveProps {
  profile: Profile;
  story: Story;
  timeline: TimelineItem[];
  values: Value[];
  impacts: ImpactItem[];
  companies: Company[];
  mentorshipPhilosophy: string;
  mentorshipApproaches: MentorshipApproach[];
  mentorshipStats: {
    mentees: number;
    hours: number;
    companies: number;
  };
  interests: Interest[];
}

const AboutInteractive: React.FC<AboutInteractiveProps> = ({
  profile,
  story,
  timeline,
  values,
  impacts,
  companies,
  mentorshipPhilosophy,
  mentorshipApproaches,
  mentorshipStats,
  interests,
}) => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection profile={profile} />
      <StorySection story={story} />
      <TimelineSection timeline={timeline} />
      <ValuesSection values={values} />

      {/* Product Impact replaces Recognition */}
      <ProductImpactSection impacts={impacts} companies={companies} />

      <MentorshipSection
        philosophy={mentorshipPhilosophy}
        approaches={mentorshipApproaches}
        stats={mentorshipStats}
      />

      <PersonalSection interests={interests} />
      <CTASection />
    </div>
  );
};

export default AboutInteractive;
