import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import BlogInteractive from './components/BlogInteractive';

export const metadata: Metadata = {
  title: 'Thought Leadership Blog - PMPortfolio',
  description: 'Industry insights, proven methodologies, and strategic frameworks demonstrating systematic thinking and measurable impact across the product lifecycle. From zero-to-one innovation to enterprise-scale optimization.',
};

export default function ThoughtLeadershipBlogPage() {
  return (
    <>
      <Header />
      <main>
        <BlogInteractive />
      </main>
      <Footer />
    </>
  );
}