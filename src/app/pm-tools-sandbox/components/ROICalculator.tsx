'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ROICalculatorProps {
  onClose: () => void;
}

export default function ROICalculator({ onClose }: ROICalculatorProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [investment, setInvestment] = useState<string>('100000');
  const [revenue, setRevenue] = useState<string>('250000');
  const [timeframe, setTimeframe] = useState<string>('12');
  const [costs, setCosts] = useState<string>('50000');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="fixed inset-0 bg-foreground bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-background rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h2 className="font-heading font-bold text-2xl text-foreground">ROI Calculator</h2>
          </div>
          <div className="p-6">Loading...</div>
        </div>
      </div>
    );
  }

  const investmentNum = parseFloat(investment) || 0;
  const revenueNum = parseFloat(revenue) || 0;
  const costsNum = parseFloat(costs) || 0;
  const timeframeNum = parseFloat(timeframe) || 1;

  const netProfit = revenueNum - costsNum;
  const roi = investmentNum > 0 ? ((netProfit - investmentNum) / investmentNum) * 100 : 0;
  const monthlyROI = timeframeNum > 0 ? roi / timeframeNum : 0;
  const paybackPeriod = netProfit > 0 ? (investmentNum / (netProfit / timeframeNum)) : 0;

  return (
    <div className="fixed inset-0 bg-foreground bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-border flex items-center justify-between sticky top-0 bg-background z-10">
          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground">ROI Calculator</h2>
            <p className="text-sm text-muted-foreground mt-1">Calculate return on investment for product initiatives</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-muted transition-smooth"
            aria-label="Close calculator"
          >
            <Icon name="XMarkIcon" size={24} />
          </button>
        </div>

        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Initial Investment ($)
              </label>
              <input
                type="number"
                value={investment}
                onChange={(e) => setInvestment(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="100000"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Expected Revenue ($)
              </label>
              <input
                type="number"
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="250000"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Operating Costs ($)
              </label>
              <input
                type="number"
                value={costs}
                onChange={(e) => setCosts(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="50000"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Timeframe (months)
              </label>
              <input
                type="number"
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="12"
              />
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-4">
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Total ROI</span>
                <Icon name="ChartBarIcon" size={20} className="text-primary" />
              </div>
              <p className={`text-3xl font-bold ${roi >= 0 ? 'text-success' : 'text-error'}`}>
                {roi.toFixed(2)}%
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Monthly ROI</span>
                <Icon name="CalendarIcon" size={20} className="text-primary" />
              </div>
              <p className={`text-3xl font-bold ${monthlyROI >= 0 ? 'text-success' : 'text-error'}`}>
                {monthlyROI.toFixed(2)}%
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Net Profit</span>
                <Icon name="CurrencyDollarIcon" size={20} className="text-primary" />
              </div>
              <p className={`text-3xl font-bold ${netProfit >= 0 ? 'text-success' : 'text-error'}`}>
                ${netProfit.toLocaleString()}
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Payback Period</span>
                <Icon name="ClockIcon" size={20} className="text-primary" />
              </div>
              <p className="text-3xl font-bold text-foreground">
                {paybackPeriod > 0 ? `${paybackPeriod.toFixed(1)} months` : 'N/A'}
              </p>
            </div>

            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-semibold text-sm text-foreground mb-2">Interpretation</h4>
              <p className="text-sm text-muted-foreground">
                {roi >= 50 && 'Excellent ROI! This investment shows strong potential for significant returns.'}
                {roi >= 20 && roi < 50 && 'Good ROI. This investment is likely to generate positive returns.'}
                {roi >= 0 && roi < 20 && 'Moderate ROI. Consider optimizing costs or revenue projections.'}
                {roi < 0 && 'Negative ROI. Review investment strategy and cost structure.'}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 border-t border-border flex justify-end space-x-3">
          <button
            onClick={() => {
              setInvestment('100000');
              setRevenue('250000');
              setCosts('50000');
              setTimeframe('12');
            }}
            className="px-6 py-2 rounded-md border border-border text-foreground hover:bg-muted transition-smooth"
          >
            Reset
          </button>
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