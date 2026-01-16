'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface HeatMapCell {
  skill: string;
  scale: string;
  level: number;
  description: string;
  frameworks: string[];
  category: string;
}

interface CompetencyHeatMapProps {
  data: HeatMapCell[];
}

const CompetencyHeatMap = ({ data }: CompetencyHeatMapProps) => {
  const [hoveredCell, setHoveredCell] = useState<HeatMapCell | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const skills = Array.from(new Set(data.map(cell => cell.skill)));
  const scales = ['0-1', '1-1000', '1000+'];

  const getColorClass = (level: number): string => {
    if (level >= 9) return 'bg-success';
    if (level >= 7) return 'bg-brand-green';
    if (level >= 5) return 'bg-warning';
    if (level >= 3) return 'bg-accent';
    return 'bg-muted';
  };

  const handleMouseEnter = (cell: HeatMapCell, event: React.MouseEvent) => {
    setHoveredCell(cell);
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredCell(null);
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-subtle border border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-heading font-semibold text-xl text-foreground">Competency Heat Map</h3>
          <p className="text-sm text-muted-foreground mt-1">Hover over cells to view detailed skill information</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-muted rounded"></div>
            <span className="text-xs text-muted-foreground">Beginner</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-warning rounded"></div>
            <span className="text-xs text-muted-foreground">Intermediate</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-success rounded"></div>
            <span className="text-xs text-muted-foreground">Expert</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-3 text-left font-semibold text-sm text-foreground border-b-2 border-border">
                Competency Area
              </th>
              {scales.map(scale => (
                <th key={scale} className="p-3 text-center font-semibold text-sm text-foreground border-b-2 border-border">
                  {scale}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {skills.map((skill, skillIndex) => (
              <tr key={skillIndex} className="hover:bg-muted transition-smooth">
                <td className="p-3 font-medium text-sm text-foreground border-b border-border">
                  {skill}
                </td>
                {scales.map((scale, scaleIndex) => {
                  const cell = data.find(c => c.skill === skill && c.scale === scale);
                  return (
                    <td 
                      key={scaleIndex} 
                      className="p-3 border-b border-border"
                      onMouseEnter={(e) => cell && handleMouseEnter(cell, e)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {cell && (
                        <div className={`w-full h-12 rounded-md ${getColorClass(cell.level)} cursor-pointer transition-smooth hover:opacity-80 flex items-center justify-center`}>
                          <span className="font-bold text-white text-lg">{cell.level}</span>
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {hoveredCell && (
        <div 
          className="fixed z-50 bg-popover border border-border rounded-lg shadow-elevated p-4 max-w-sm"
          style={{ 
            left: `${tooltipPosition.x + 20}px`, 
            top: `${tooltipPosition.y - 100}px`,
            pointerEvents: 'none'
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-sm text-foreground">{hoveredCell.skill}</h4>
            <span className="text-xs font-medium text-primary bg-primary bg-opacity-10 px-2 py-1 rounded">
              {hoveredCell.scale}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mb-3">{hoveredCell.description}</p>
          <div className="space-y-1">
            <span className="text-xs font-semibold text-foreground">Frameworks Used:</span>
            {hoveredCell.frameworks.map((framework, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <Icon name="CheckCircleIcon" size={12} className="text-success" />
                <span className="text-xs text-foreground">{framework}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CompetencyHeatMap;