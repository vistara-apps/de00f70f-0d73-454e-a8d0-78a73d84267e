interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  showPercentage?: boolean;
  variant?: 'default' | 'success' | 'warning' | 'danger';
}

export function ProgressBar({ 
  value, 
  max, 
  label, 
  showPercentage = true,
  variant = 'default' 
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);
  
  const variantColors = {
    default: 'var(--color-accent)',
    success: 'var(--color-success)',
    warning: 'var(--color-warning)',
    danger: 'var(--color-danger)'
  };

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex items-center justify-between mb-2">
          {label && <span className="text-sm font-medium">{label}</span>}
          {showPercentage && (
            <span className="text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div 
        className="w-full h-2 rounded-full overflow-hidden"
        style={{ backgroundColor: 'var(--color-border)' }}
      >
        <div
          className="h-full transition-all duration-300 rounded-full"
          style={{ 
            width: `${percentage}%`,
            backgroundColor: variantColors[variant]
          }}
        />
      </div>
    </div>
  );
}
