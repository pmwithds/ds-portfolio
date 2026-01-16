import type { Metadata } from 'next';
import FrameworkMethodologyInteractive from './components/FrameworkMethodologyInteractive';

export const metadata: Metadata = {
  title: 'Framework Methodology Center - PMPortfolio',
  description: 'Explore interactive PM frameworks library with real-world applications showcasing strategic thinking through proven methodologies across product lifecycle stages.',
};

export default function FrameworkMethodologyCenterPage() {
  return <FrameworkMethodologyInteractive />;
}