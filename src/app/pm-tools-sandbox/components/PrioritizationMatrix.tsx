'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface PrioritizationMatrixProps {
  onClose: () => void;
}

interface Feature {
  id: number;
  name: string;
  reach: number;
  impact: number;
  confidence: number;
  effort: number;
}

export default function PrioritizationMatrix({ onClose }: PrioritizationMatrixProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [features, setFeatures] = useState<Feature[]>([
    { id: 1, name: 'User Authentication', reach: 1000, impact: 3, confidence: 100, effort: 5 },
    { id: 2, name: 'Push Notifications', reach: 800, impact: 2, confidence: 80, effort: 3 },
    { id: 3, name: 'Dark Mode', reach: 500, impact: 1, confidence: 90, effort: 2 }
  ]);
  const [newFeature, setNewFeature] = useState<Partial<Feature>>({
    name: '',
    reach: 0,
    impact: 0,
    confidence: 0,
    effort: 0
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="fixed inset-0 bg-foreground bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-background rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h2 className="font-heading font-bold text-2xl text-foreground">RICE Prioritization Matrix</h2>
          </div>
          <div className="p-6">Loading...</div>
        </div>
      </div>
    );
  }

  const calculateRICE = (feature: Feature): number => {
    if (feature.effort === 0) return 0;
    return (feature.reach * feature.impact * (feature.confidence / 100)) / feature.effort;
  };

  const sortedFeatures = [...features].sort((a, b) => calculateRICE(b) - calculateRICE(a));

  const addFeature = () => {
    if (newFeature.name && newFeature.reach && newFeature.impact && newFeature.confidence && newFeature.effort) {
      setFeatures([...features, { ...newFeature, id: features.length + 1 } as Feature]);
      setNewFeature({ name: '', reach: 0, impact: 0, confidence: 0, effort: 0 });
    }
  };

  const removeFeature = (id: number) => {
    setFeatures(features.filter(f => f.id !== id));
  };

  return (
    <div className="fixed inset-0 bg-foreground bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-border flex items-center justify-between sticky top-0 bg-background z-10">
          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground">RICE Prioritization Matrix</h2>
            <p className="text-sm text-muted-foreground mt-1">Reach × Impact × Confidence ÷ Effort</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-muted transition-smooth"
            aria-label="Close matrix"
          >
            <Icon name="XMarkIcon" size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Add Feature Form */}
          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="font-heading font-semibold text-lg text-foreground mb-4">Add New Feature</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">Feature Name</label>
                <input
                  type="text"
                  value={newFeature.name}
                  onChange={(e) => setNewFeature({ ...newFeature, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g., User Dashboard"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Reach</label>
                <input
                  type="number"
                  value={newFeature.reach || ''}
                  onChange={(e) => setNewFeature({ ...newFeature, reach: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="1000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Impact (1-3)</label>
                <input
                  type="number"
                  min="1"
                  max="3"
                  value={newFeature.impact || ''}
                  onChange={(e) => setNewFeature({ ...newFeature, impact: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="3"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Confidence (%)</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={newFeature.confidence || ''}
                  onChange={(e) => setNewFeature({ ...newFeature, confidence: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="80"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Effort (weeks)</label>
                <input
                  type="number"
                  value={newFeature.effort || ''}
                  onChange={(e) => setNewFeature({ ...newFeature, effort: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="4"
                />
              </div>
              <div className="md:col-span-4 flex items-end">
                <button
                  onClick={addFeature}
                  className="w-full px-6 py-2 rounded-md bg-primary text-primary-foreground hover:bg-opacity-90 transition-smooth"
                >
                  Add Feature
                </button>
              </div>
            </div>
          </div>

          {/* Features Table */}
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                      Rank
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                      Feature
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-semibold text-foreground uppercase tracking-wider">
                      Reach
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-semibold text-foreground uppercase tracking-wider">
                      Impact
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-semibold text-foreground uppercase tracking-wider">
                      Confidence
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-semibold text-foreground uppercase tracking-wider">
                      Effort
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-semibold text-foreground uppercase tracking-wider">
                      RICE Score
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-semibold text-foreground uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {sortedFeatures.map((feature, index) => {
                    const riceScore = calculateRICE(feature);
                    return (
                      <tr key={feature.id} className="hover:bg-muted transition-smooth">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            index === 0 ? 'bg-success text-white' :
                            index === 1 ? 'bg-warning text-white' :
                            index === 2 ? 'bg-error text-white': 'bg-muted text-foreground'
                          }`}>
                            {index + 1}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <p className="font-medium text-foreground">{feature.name}</p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-foreground">
                          {feature.reach.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-foreground">
                          {feature.impact}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-foreground">
                          {feature.confidence}%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-foreground">
                          {feature.effort}w
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <span className="font-bold text-lg text-primary">
                            {riceScore.toFixed(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <button
                            onClick={() => removeFeature(feature.id)}
                            className="p-2 rounded-md hover:bg-error hover:bg-opacity-10 transition-smooth"
                            aria-label="Remove feature"
                          >
                            <Icon name="TrashIcon" size={18} className="text-error" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Legend */}
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-semibold text-sm text-foreground mb-3">RICE Scoring Guide</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="font-medium text-foreground mb-1">Reach</p>
                <p className="text-muted-foreground">Number of users/customers affected per time period</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Impact</p>
                <p className="text-muted-foreground">1 = Minimal, 2 = Medium, 3 = Massive impact per user</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Confidence</p>
                <p className="text-muted-foreground">How confident are you in your estimates? (0-100%)</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Effort</p>
                <p className="text-muted-foreground">Total team-weeks required to complete the feature</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-md bg-primary text-primary-foreground hover:bg-opacity-90 transition-smooth"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}