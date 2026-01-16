import Icon from '@/components/ui/AppIcon';

interface Framework {
  name: string;
  description: string;
  icon: string;
  applications: string[];
  metrics: string;
}

interface FrameworkShowcaseProps {
  frameworks: Framework[];
}

const FrameworkShowcase = ({ frameworks }: FrameworkShowcaseProps) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-subtle border border-border">
      <div className="mb-6">
        <h3 className="font-heading font-semibold text-xl text-foreground mb-2">Strategic Frameworks & Methodologies</h3>
        <p className="text-sm text-muted-foreground">Proven frameworks applied across different product scales</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {frameworks.map((framework, index) => (
          <div key={index} className="bg-background rounded-lg p-5 border border-border hover:border-primary transition-smooth">
            <div className="flex items-start space-x-3 mb-4">
              <div className="p-2 bg-accent bg-opacity-10 rounded-md flex-shrink-0">
                <Icon name={framework.icon as any} size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-base text-foreground mb-1">{framework.name}</h4>
                <p className="text-xs text-muted-foreground">{framework.description}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-xs font-semibold text-foreground uppercase tracking-wide block mb-2">Applications:</span>
                <ul className="space-y-1">
                  {framework.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-foreground opacity-80">
                      <Icon name="ArrowRightIcon" size={12} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-border">
                <div className="flex items-center space-x-2">
                  <Icon name="ChartBarIcon" size={16} className="text-success" />
                  <span className="text-xs font-medium text-foreground">{framework.metrics}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrameworkShowcase;