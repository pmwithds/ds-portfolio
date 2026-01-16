'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface MetricsDashboardProps {
  onClose: () => void;
}

export default function MetricsDashboard({ onClose }: MetricsDashboardProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="fixed inset-0 bg-foreground bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-background rounded-lg w-full max-w-7xl max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h2 className="font-heading font-bold text-2xl text-foreground">Product Metrics Dashboard</h2>
          </div>
          <div className="p-6">Loading...</div>
        </div>
      </div>
    );
  }

  const userGrowthData = [
    { month: 'Jan', users: 1200, active: 980 },
    { month: 'Feb', users: 1800, active: 1450 },
    { month: 'Mar', users: 2400, active: 1920 },
    { month: 'Apr', users: 3200, active: 2560 },
    { month: 'May', users: 4100, active: 3280 },
    { month: 'Jun', users: 5300, active: 4240 }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 45000 },
    { month: 'Feb', revenue: 52000 },
    { month: 'Mar', revenue: 61000 },
    { month: 'Apr', revenue: 73000 },
    { month: 'May', revenue: 89000 },
    { month: 'Jun', revenue: 105000 }
  ];

  const featureAdoptionData = [
    { name: 'Dashboard', value: 85 },
    { name: 'Analytics', value: 72 },
    { name: 'Reports', value: 58 },
    { name: 'Integrations', value: 43 },
    { name: 'API', value: 31 }
  ];

  const COLORS = ['#1a365d', '#ed8936', '#2d3748', '#38a169', '#d69e2e'];

  const metrics = [
    { label: 'Total Users', value: '5,300', change: '+23%', trend: 'up', icon: 'UsersIcon' },
    { label: 'Active Users', value: '4,240', change: '+18%', trend: 'up', icon: 'UserGroupIcon' },
    { label: 'Monthly Revenue', value: '$105K', change: '+28%', trend: 'up', icon: 'CurrencyDollarIcon' },
    { label: 'Churn Rate', value: '2.3%', change: '-0.5%', trend: 'down', icon: 'ArrowTrendingDownIcon' }
  ];

  return (
    <div className="fixed inset-0 bg-foreground bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg w-full max-w-7xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-border flex items-center justify-between sticky top-0 bg-background z-10">
          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground">Product Metrics Dashboard</h2>
            <p className="text-sm text-muted-foreground mt-1">Real-time product performance analytics</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex bg-muted rounded-md p-1">
              {(['7d', '30d', '90d'] as const).map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-4 py-1 rounded text-sm font-medium transition-smooth ${
                    timeRange === range
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-muted transition-smooth"
              aria-label="Close dashboard"
            >
              <Icon name="XMarkIcon" size={24} />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-primary bg-opacity-10 rounded-lg">
                    <Icon name={metric.icon as any} size={24} className="text-primary" />
                  </div>
                  <span className={`text-sm font-semibold ${
                    metric.trend === 'up' ? 'text-success' : 'text-error'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                <p className="text-2xl font-bold text-foreground">{metric.value}</p>
              </div>
            ))}
          </div>

          {/* Charts Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* User Growth Chart */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4">User Growth</h3>
              <div className="w-full h-64" aria-label="User Growth Line Chart">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={userGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" stroke="#4a5568" />
                    <YAxis stroke="#4a5568" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#ffffff', 
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px'
                      }} 
                    />
                    <Legend />
                    <Line type="monotone" dataKey="users" stroke="#1a365d" strokeWidth={2} name="Total Users" />
                    <Line type="monotone" dataKey="active" stroke="#ed8936" strokeWidth={2} name="Active Users" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Revenue Chart */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4">Monthly Revenue</h3>
              <div className="w-full h-64" aria-label="Monthly Revenue Bar Chart">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" stroke="#4a5568" />
                    <YAxis stroke="#4a5568" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#ffffff', 
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px'
                      }}
                      formatter={(value: number) => `$${value.toLocaleString()}`}
                    />
                    <Bar dataKey="revenue" fill="#1a365d" name="Revenue" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Charts Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Feature Adoption */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4">Feature Adoption Rate</h3>
              <div className="w-full h-64" aria-label="Feature Adoption Pie Chart">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={featureAdoptionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {featureAdoptionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Key Insights */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4">Key Insights</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-success bg-opacity-10 rounded-lg flex-shrink-0">
                    <Icon name="ArrowTrendingUpIcon" size={20} className="text-success" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Strong User Growth</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      User base increased by 23% this month, exceeding quarterly targets by 8%.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-warning bg-opacity-10 rounded-lg flex-shrink-0">
                    <Icon name="ExclamationTriangleIcon" size={20} className="text-warning" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Feature Adoption Gap</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      API and Integrations features show lower adoption. Consider user education campaigns.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary bg-opacity-10 rounded-lg flex-shrink-0">
                    <Icon name="CurrencyDollarIcon" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Revenue Milestone</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Crossed $100K MRR threshold. On track for $1.5M ARR by year end.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-success bg-opacity-10 rounded-lg flex-shrink-0">
                    <Icon name="CheckCircleIcon" size={20} className="text-success" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Low Churn Rate</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Churn decreased to 2.3%, indicating strong product-market fit and user satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Export Options */}
          <div className="bg-muted rounded-lg p-4 flex items-center justify-between">
            <div>
              <p className="font-semibold text-foreground text-sm">Export Dashboard Data</p>
              <p className="text-xs text-muted-foreground mt-1">Download metrics and charts for presentations</p>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 rounded-md border border-border bg-background text-foreground hover:bg-muted transition-smooth text-sm font-medium">
                Export CSV
              </button>
              <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-opacity-90 transition-smooth text-sm font-medium">
                Export PDF
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-md bg-primary text-primary-foreground hover:bg-opacity-90 transition-smooth"
          >
            Close Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}