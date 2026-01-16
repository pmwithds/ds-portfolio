import Icon from "@/components/ui/AppIcon";
interface Stat {
  label: string;
  value: string;
  icon: string;
}

interface StatsOverviewProps {
  stats: Stat[];
}

export default function StatsOverview({ stats }: StatsOverviewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-card rounded-xl shadow-subtle p-6 text-center hover:shadow-elevated transition-smooth"
        >
           {/* Icon */}
          <span className="flex justify-center mb-3">
            <div className="p-3 rounded-full bg-primary bg-opacity-10">
              <Icon
                name={stat.icon as any}
                size={22}
                className="text-white"
              />
            </div>
          </span>
          <div className="font-heading font-bold text-4xl text-primary mb-2">
            {stat.value}
          </div>
          <div className="text-sm text-muted-foreground font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}