import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from './components/HeroSection';
import RoleBasedNavigation from './components/RoleBasedNavigation';
import ImpactMetrics from './components/ImpactMetrics';
import CoreCompetencies from './components/CoreCompetencies';
import FeaturedCaseStudies from './components/FeaturedCaseStudies';
import TestimonialCarousel from './components/TestimonialCarousel';
import CTASection from './components/CTASection';

export const metadata: Metadata = {
  title: 'Strategic Landing Hub - PMPortfolio',
  description: 'Multi-dimensional introduction showcasing strategic product management expertise across 0-1 innovation, 1-1000 scaling, and 1000+ enterprise optimization with measurable impact and proven frameworks.',
};

export default function StrategicLandingHubPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <RoleBasedNavigation />
        <ImpactMetrics />
        <CoreCompetencies />
        <FeaturedCaseStudies />
        <TestimonialCarousel />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}