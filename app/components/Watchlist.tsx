'use client';

import { useState } from 'react';
import { Plus, Search, TrendingUp, Bell, BellOff } from 'lucide-react';

interface WatchlistItem {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change: number;
  alertsEnabled: boolean;
}

export function Watchlist() {
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>([
    {
      id: '1',
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: 178.45,
      change: 2.34,
      alertsEnabled: true,
    },
    {
      id: '2',
      symbol: 'TSLA',
      name: 'Tesla Inc.',
      price: 242.67,
      change: -1.23,
      alertsEnabled: true,
    },
    {
      id: '3',
      symbol: 'BTC-USD',
      name: 'Bitcoin',
      price: 43250.00,
      change: 5.67,
      alertsEnabled: false,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const toggleAlerts = (id: string) => {
    setWatchlist(prev =>
      prev.map(item =>
        item.id === id ? { ...item, alertsEnabled: !item.alertsEnabled } : item
      )
    );
  };

  const maxFreeAssets = 5;
  const isLimitReached = watchlist.length >= maxFreeAssets;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-fg">Watchlist</h2>
          <p className="text-sm text-muted mt-1">
            {watchlist.length}/{maxFreeAssets} assets (Free tier)
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          disabled={isLimitReached}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus className="w-5 h-5" />
          Add Asset
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
        <input
          type="text"
          placeholder="Search watchlist..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-surface border border-border rounded-lg text-fg placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Watchlist Items */}
      <div className="space-y-3">
        {watchlist
          .filter(item =>
            item.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((item) => (
            <div
              key={item.id}
              className="bg-surface rounded-lg border border-border p-4 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-fg">{item.symbol}</h3>
                    <p className="text-sm text-muted">{item.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-lg font-semibold text-fg">
                      ${item.price.toFixed(2)}
                    </p>
                    <p
                      className={`text-sm font-medium ${
                        item.change >= 0 ? 'text-success' : 'text-danger'
                      }`}
                    >
                      {item.change >= 0 ? '+' : ''}
                      {item.change.toFixed(2)}%
                    </p>
                  </div>
                  <button
                    onClick={() => toggleAlerts(item.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      item.alertsEnabled
                        ? 'bg-primary/10 text-primary'
                        : 'bg-surface-hover text-muted hover:text-fg'
                    }`}
                  >
                    {item.alertsEnabled ? (
                      <Bell className="w-5 h-5" />
                    ) : (
                      <BellOff className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Upgrade Prompt */}
      {isLimitReached && (
        <div className="bg-warning/10 border border-warning/30 rounded-lg p-4">
          <p className="text-sm text-fg">
            <span className="font-semibold">Watchlist limit reached.</span> Upgrade to premium to monitor up to 50 assets and receive real-time pattern alerts.
          </p>
          <button className="mt-3 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            Upgrade Now
          </button>
        </div>
      )}
    </div>
  );
}
