import { Clock, TrendingUp, Target } from 'lucide-react';

interface PatternCardProps {
  variant: 'drill' | 'alert' | 'leaderboard';
  title: string;
  subtitle?: string;
  imageUrl?: string;
  confidence?: number;
  entry?: string;
  target?: string;
  stop?: string;
  onAction?: () => void;
  actionLabel?: string;
}

export function PatternCard({
  variant,
  title,
  subtitle,
  imageUrl,
  confidence,
  entry,
  target,
  stop,
  onAction,
  actionLabel = 'Start'
}: PatternCardProps) {
  return (
    <div 
      className="rounded-lg border overflow-hidden transition-all duration-200 hover:shadow-card"
      style={{ 
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)'
      }}
    >
      {/* Image/Chart Preview */}
      {imageUrl && (
        <div className="aspect-video relative" style={{ backgroundColor: 'var(--color-bg)' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <TrendingUp className="w-16 h-16" style={{ color: 'var(--color-accent)', opacity: 0.3 }} />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-semibold text-lg mb-1">{title}</h3>
            {subtitle && (
              <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{subtitle}</p>
            )}
          </div>
          {confidence && (
            <div 
              className="px-3 py-1 rounded-full text-sm font-medium"
              style={{ 
                backgroundColor: 'rgba(0, 200, 83, 0.1)',
                color: 'var(--color-success)'
              }}
            >
              {confidence}%
            </div>
          )}
        </div>

        {/* Alert Details */}
        {variant === 'alert' && (
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div>
              <div className="text-xs mb-1" style={{ color: 'var(--color-text-muted)' }}>Entry</div>
              <div className="font-semibold text-sm">{entry}</div>
            </div>
            <div>
              <div className="text-xs mb-1" style={{ color: 'var(--color-text-muted)' }}>Target</div>
              <div className="font-semibold text-sm" style={{ color: 'var(--color-success)' }}>{target}</div>
            </div>
            <div>
              <div className="text-xs mb-1" style={{ color: 'var(--color-text-muted)' }}>Stop</div>
              <div className="font-semibold text-sm" style={{ color: 'var(--color-danger)' }}>{stop}</div>
            </div>
          </div>
        )}

        {/* Action Button */}
        {onAction && (
          <button
            onClick={onAction}
            className="w-full py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-glow"
            style={{ 
              backgroundColor: 'var(--color-accent)',
              color: 'white'
            }}
          >
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  );
}
