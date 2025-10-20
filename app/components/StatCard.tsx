interface StatCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}

export function StatCard({ label, value, icon, trend, trendValue }: StatCardProps) {
  const trendColors = {
    up: 'var(--color-success)',
    down: 'var(--color-danger)',
    neutral: 'var(--color-text-muted)'
  };

  return (
    <div 
      className="p-4 rounded-lg border transition-all duration-200 hover:shadow-card"
      style={{ 
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)'
      }}
    >
      <div className="flex items-start justify-between mb-2">
        <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{label}</span>
        {icon && <div style={{ color: 'var(--color-accent)' }}>{icon}</div>}
      </div>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-bold">{value}</span>
        {trend && trendValue && (
          <span className="text-sm font-medium" style={{ color: trendColors[trend] }}>
            {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} {trendValue}
          </span>
        )}
      </div>
    </div>
  );
}
