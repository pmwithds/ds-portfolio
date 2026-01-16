import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Icon from '@/components/ui/AppIcon';
import CompetencyMatrixInteractive from './components/CompetencyMatrixInteractive';

export const metadata: Metadata = {
  title: 'Competency Matrix Center - PMPortfolio',
  description: 'Comprehensive product management competencies across 0-1, 1-1000, and 1000+ product scales with detailed frameworks, methodologies, and measurable outcomes demonstrating strategic thinking and systematic impact.',
};

export default function CompetencyMatrixCenterPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="ChartBarSquareIcon" size={40} />
              <h1 className="font-heading font-bold text-4xl md:text-5xl">
                Competency Matrix Center
              </h1>
            </div>
            <p className="text-xl opacity-90 max-w-3xl mb-6">
              Comprehensive product management expertise across all product lifecycle stages—from zero-to-one innovations to enterprise-scale optimizations.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-primary-foreground bg-opacity-10 px-4 py-2 rounded-md">
                <Icon name="RocketLaunchIcon" size={20} className="text-[#1a365d]"/>
                <span className="font-semibold text-[#1a365d]">0-1 Scale: Zero-to-One Innovations</span>
              </div>
              <div className="flex items-center space-x-2 bg-primary-foreground bg-opacity-10 px-4 py-2 rounded-md">
                <Icon name="ChartBarSquareIcon" size={20} className="text-[#1a365d]"/>
                <span className="font-semibold text-[#1a365d]">1-1000 Scale: Growth & Scaling</span>
              </div>
              <div className="flex items-center space-x-2 bg-primary-foreground bg-opacity-10 px-4 py-2 rounded-md">
                <Icon name="BuildingOffice2Icon" size={20} className="text-[#1a365d]" />
                <span className="font-semibold text-[#1a365d]">1000+ Scale: Enterprise Optimization</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Core Competencies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-success mb-2">40</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Strategic Frameworks</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">3</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Product Scales</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-purple mb-2">18</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Skill Dimensions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Matrix Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <CompetencyMatrixInteractive />
          </div>
        </section>

        {/* Scale Definitions Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-8 text-center">
              Understanding Product Scales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-6 shadow-subtle border border-border">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-brand-red bg-opacity-10 rounded-md">
                    <Icon name="RocketLaunchIcon" size={32} className="text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground">0-1 Scale</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Zero-to-one product innovations focusing on discovery, validation, and initial market entry.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2 text-sm text-foreground">
                    <Icon name="CheckCircleIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span>Product-market fit validation</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-foreground">
                    <Icon name="CheckCircleIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span>MVP development & iteration</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-foreground">
                    <Icon name="CheckCircleIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span>Early customer acquisition</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-foreground">
                    <Icon name="CheckCircleIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span>Lean experimentation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-subtle border border-border">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-success bg-opacity-10 rounded-md">
                    <Icon name="ChartBarSquareIcon" size={32} className="text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground">1-1000 Scale</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Growth-stage products focusing on scaling user base, optimizing conversion, and building sustainable growth engines.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2 text-sm text-foreground">
                    <Icon name="CheckCircleIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span>Growth experimentation</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-foreground">
                    <Icon name="CheckCircleIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span>Conversion optimization</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-foreground">
                    <Icon name="CheckCircleIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span>Retention & engagement</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-foreground">
                    <Icon name="CheckCircleIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span>Scaling infrastructure</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-subtle border border-border">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-primary bg-opacity-10 rounded-md">
                    <Icon name="BuildingOffice2Icon" size={32} className="text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground">1000+ Scale</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Enterprise-level products focusing on optimization, platform thinking, and managing complex stakeholder ecosystems.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2 text-sm text-foreground">
                    <Icon name="CheckCircleIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span>Platform strategy</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-foreground">
                    <Icon name="CheckCircleIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span>Enterprise stakeholder management</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-foreground">
                    <Icon name="CheckCircleIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span>Performance optimization</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-foreground">
                    <Icon name="CheckCircleIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span>Ecosystem orchestration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
              See These Competencies in Action
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore detailed case studies demonstrating how these competencies drive measurable impact across different product scales.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/case-study-theater"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-opacity-90 transition-smooth inline-flex items-center space-x-2"
              >
                <Icon name="DocumentTextIcon" size={20} />
                <span>View Case Studies</span>
              </a>
              <a
                href="/framework-methodology-center"
                className="px-6 py-3 border-2 border-primary text-primary rounded-md font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth inline-flex items-center space-x-2"
              >
                <Icon name="CubeIcon" size={20} />
                <span>Explore Frameworks</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}