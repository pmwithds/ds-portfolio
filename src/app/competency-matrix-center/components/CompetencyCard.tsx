import Icon from '@/components/ui/AppIcon';

interface CompetencyCardProps {
  title: string;
  description: string;
  level: number;
  maxLevel: number;
  icon: string;
  category: string;
  examples: string[];
}

const CompetencyCard = ({ title, description, level, maxLevel, icon, category, examples }: CompetencyCardProps) => {
  const percentage = (level / maxLevel) * 100;
  
  return (
    <div className="bg-card rounded-lg p-6 shadow-subtle hover:shadow-elevated transition-smooth border border-border">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary bg-opacity-10 rounded-md">
            <Icon name={icon as any} size={24} className="text-white" />
          </div>
          <div>
            <h3 className="font-heading font-semibold text-lg text-foreground">{title}</h3>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{category}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-primary">{level}</div>
          <div className="text-xs text-muted-foreground">/ {maxLevel}</div>
        </div>
      </div>
      
      <p className="text-sm text-foreground opacity-90 mb-4">{description}</p>
      
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium text-muted-foreground">Proficiency Level</span>
          <span className="text-xs font-semibold text-primary">{percentage.toFixed(0)}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div 
            className="bg-primary h-full rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Key Applications:</span>
        <ul className="space-y-1">
          {examples.map((example, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm text-foreground opacity-80">
              <Icon name="CheckCircleIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
              <span>{example}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompetencyCard;