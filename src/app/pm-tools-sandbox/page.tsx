import type { Metadata } from 'next';
import PMToolsInteractive from './components/PMToolsInteractive';

export const metadata: Metadata = {
  title: 'PM Tools Sandbox - PMPortfolio',
  description: 'Interactive calculators and framework demonstrations providing hands-on experience with product management methodologies and strategic tools through immersive, functional demonstrations.',
};

export default function PMToolsSandboxPage() {
  return <PMToolsInteractive />;
}