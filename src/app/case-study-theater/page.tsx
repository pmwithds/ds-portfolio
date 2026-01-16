import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import CaseStudyTheaterInteractive from './components/CaseStudyTheaterInteractive';

export const metadata: Metadata = {
  title: 'Case Study Theater - PMPortfolio',
  description: 'Explore immersive product management case studies demonstrating strategic problem-solving, measurable impact, and proven frameworks across 0-1 innovations, scaling challenges, and enterprise optimizations.',
};

export default function CaseStudyTheaterPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-16">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
                Case Study Theater
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-6">
                Immersive problem-solving narratives demonstrating strategic thinking, measurable impact, and proven methodologies across the product lifecycle
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-primary-foreground bg-opacity-10 px-4 py-2 rounded-full">
                  <span className="font-semibold text-[#1a365d]">6 Case Studies</span>
                </div>
                <div className="flex items-center space-x-2 bg-primary-foreground bg-opacity-10 px-4 py-2 rounded-full">
                  <span className="font-semibold text-[#1a365d]">6 Industries</span>
                </div>
                <div className="flex items-center space-x-2 bg-primary-foreground bg-opacity-10 px-4 py-2 rounded-full">
                  <span className="font-semibold text-[#1a365d]">8+ Frameworks</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Content */}
        <CaseStudyTheaterInteractive />
      </main>
      <Footer />
    </>
  );
}