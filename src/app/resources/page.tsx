import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ResourcesInteractive from './components/ResourceInteractive';

export const metadata: Metadata = {
  title: 'Resources - ProductCraft',
  description: 'Access comprehensive product management resources including downloadable templates, frameworks, thought leadership articles, interactive calculators, and video walkthroughs to elevate your PM practice.',
};

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <ResourcesInteractive />
      <Footer />
    </>

  );
}