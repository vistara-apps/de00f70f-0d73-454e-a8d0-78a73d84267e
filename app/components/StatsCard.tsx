import { type ReactNode } from 'react';

interface StatsCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  max?: string;
  color: 'primary' | 'success' | 'warning' | 'accent';
}

export function StatsCard({ icon, label, value, max, color }: StatsCardProps) {
  const colorClasses = {
    primary: 'text-primary bg-primary/10',
    success: 'text-success bg-success/10',
    warning: 'text-warning bg-warning/10',
    accent: 'text-accent bg-accent/10',
  };

  return (
    <div className="bg-surface rounded-lg p-4 border border-border hover:border-primary/50 transition-colors">
      <div className="flex items-center gap-3 mb-2">
        <div className={`p-2 rounded-lg ${colorClasses[color]}`}>
          {icon}
        </div>
      </div>
      <p className="text-sm text-muted mb-1">{label}</p>
      <p className="text-2xl font-bold text-fg">
        {value}
        {max && <span className="text-sm text-muted font-normal">/{max}</span>}
      </p>
    </div>
  );
}
