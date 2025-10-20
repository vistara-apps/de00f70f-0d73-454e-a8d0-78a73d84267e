'use client';

import { AppShell } from '../components/AppShell';
import { PatternCard } from '../components/PatternCard';
import { Plus, Search } from 'lucide-react';

export default function WatchlistPage() {
  const mockAlerts = [
    {
      title: 'AAPL - Head and Shoulders',
      subtitle: 'Apple Inc. • 2 hours ago',
      confidence: 85,
      entry: '$152.30',
      target: '$168.50',
      stop: '$148.20',
    },
    {
      title: 'BTC-USD - Bull Flag',
      subtitle: 'Bitcoin • 5 hours ago',
      confidence: 92,
      entry: '$43,250',
      target: '$48,900',
      stop: '$41,800',
    },
    {
      title: 'TSLA - Ascending Triangle',
      subtitle: 'Tesla Inc. • 1 day ago',
      confidence: 78,
      entry: '$238.45',
      target: '$265.20',
      stop: '$232.10',
    },
  ];

  return (
    <AppShell>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-1">Watchlist</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Monitor patterns on your favorite assets
            </p>
          </div>
          <button 
            className="p-3 rounded-lg transition-all duration-200"
            style={{ 
              backgroundColor: 'var(--color-accent)',
              color: 'white'
            }}
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" 
            style={{ color: 'var(--color-text-muted)' }}
          />
          <input
            type="text"
            placeholder="Search stocks or crypto..."
            className="w-full pl-12 pr-4 py-3 rounded-lg border outline-none transition-all duration-200"
            style={{ 
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
              color: 'var(--color-fg)'
            }}
          />
        </div>

        {/* Stats */}
        <div 
          className="p-4 rounded-lg border"
          style={{ 
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)'
          }}
        >
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">5</div>
              <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Assets</div>
            </div>
            <div>
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Active Alerts</div>
            </div>
            <div>
              <div className="text-2xl font-bold">87%</div>
              <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Success Rate</div>
            </div>
          </div>
        </div>

        {/* Pattern Alerts */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Pattern Alerts</h3>
          <div className="space-y-4">
            {mockAlerts.map((alert, index) => (
              <PatternCard
                key={index}
                variant="alert"
                title={alert.title}
                subtitle={alert.subtitle}
                confidence={alert.confidence}
                entry={alert.entry}
                target={alert.target}
                stop={alert.stop}
                imageUrl="/chart-placeholder.png"
                onAction={() => console.log('View alert:', alert.title)}
                actionLabel="Share to Feed"
              />
            ))}
          </div>
        </div>

        {/* Enable Alerts CTA */}
        <div 
          className="p-6 rounded-lg border"
          style={{ 
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-accent)'
          }}
        >
          <h3 className="text-lg font-semibold mb-2">Enable Real-Time Alerts</h3>
          <p className="mb-4" style={{ color: 'var(--color-text-muted)' }}>
            Get instant notifications when patterns form on your watchlist. 50 $FORGE tokens for 7 days.
          </p>
          <button 
            className="w-full py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-glow"
            style={{ 
              backgroundColor: 'var(--color-accent)',
              color: 'white'
            }}
          >
            Enable Alerts
          </button>
        </div>
      </div>
    </AppShell>
  );
}
