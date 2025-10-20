'use client';

import { AppShell } from '../components/AppShell';
import { Bell, BellOff, Settings2 } from 'lucide-react';

export default function AlertsPage() {
  const mockNotifications = [
    {
      id: 1,
      type: 'pattern',
      title: 'Head and Shoulders forming on AAPL',
      message: '78% confidence • Entry: $152.30',
      time: '2 hours ago',
      read: false,
    },
    {
      id: 2,
      type: 'achievement',
      title: 'Achievement Unlocked!',
      message: 'You earned Triangle Master badge',
      time: '5 hours ago',
      read: false,
    },
    {
      id: 3,
      type: 'streak',
      title: 'Keep your streak alive!',
      message: 'Complete today\'s drill to maintain your 7-day streak',
      time: '1 day ago',
      read: true,
    },
    {
      id: 4,
      type: 'leaderboard',
      title: 'You moved up!',
      message: 'You\'re now #8 this week. 127 points behind #7',
      time: '2 days ago',
      read: true,
    },
  ];

  const getNotificationIcon = (type: string) => {
    const iconClass = "w-5 h-5";
    switch (type) {
      case 'pattern':
        return <Bell className={iconClass} style={{ color: 'var(--color-accent)' }} />;
      case 'achievement':
        return <Bell className={iconClass} style={{ color: 'var(--color-success)' }} />;
      case 'streak':
        return <Bell className={iconClass} style={{ color: 'var(--color-warning)' }} />;
      case 'leaderboard':
        return <Bell className={iconClass} style={{ color: 'var(--color-primary)' }} />;
      default:
        return <Bell className={iconClass} />;
    }
  };

  return (
    <AppShell>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-1">Notifications</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Stay updated with pattern alerts and achievements
            </p>
          </div>
          <button 
            className="p-3 rounded-lg border transition-all duration-200"
            style={{ 
              borderColor: 'var(--color-border)',
              color: 'var(--color-fg)'
            }}
          >
            <Settings2 className="w-5 h-5" />
          </button>
        </div>

        {/* Notification Settings */}
        <div 
          className="p-6 rounded-lg border"
          style={{ 
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)'
          }}
        >
          <h3 className="font-semibold mb-4">Notification Preferences</h3>
          <div className="space-y-3">
            {[
              { label: 'Pattern Alerts', enabled: true },
              { label: 'Achievement Unlocks', enabled: true },
              { label: 'Daily Streak Reminders', enabled: true },
              { label: 'Leaderboard Updates', enabled: false },
            ].map((pref, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm">{pref.label}</span>
                <button
                  className="relative w-12 h-6 rounded-full transition-all duration-200"
                  style={{
                    backgroundColor: pref.enabled ? 'var(--color-accent)' : 'var(--color-border)'
                  }}
                >
                  <div
                    className="absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-200"
                    style={{
                      left: pref.enabled ? '28px' : '4px'
                    }}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications List */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Recent Notifications</h3>
            <button 
              className="text-sm font-medium"
              style={{ color: 'var(--color-accent)' }}
            >
              Mark all as read
            </button>
          </div>
          <div className="space-y-3">
            {mockNotifications.map((notification) => (
              <div
                key={notification.id}
                className="p-4 rounded-lg border transition-all duration-200 hover:shadow-card cursor-pointer"
                style={{
                  backgroundColor: notification.read ? 'transparent' : 'rgba(0, 82, 255, 0.05)',
                  borderColor: notification.read ? 'var(--color-border)' : 'var(--color-accent)',
                  opacity: notification.read ? 0.7 : 1
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1">{notification.title}</div>
                    <div className="text-sm mb-2" style={{ color: 'var(--color-text-muted)' }}>
                      {notification.message}
                    </div>
                    <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                      {notification.time}
                    </div>
                  </div>
                  {!notification.read && (
                    <div 
                      className="w-2 h-2 rounded-full mt-2"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Save Frame Prompt */}
        <div 
          className="p-6 rounded-lg border"
          style={{ 
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-accent)'
          }}
        >
          <div className="flex items-start gap-4">
            <Bell className="w-6 h-6 mt-1" style={{ color: 'var(--color-accent)' }} />
            <div className="flex-1">
              <h3 className="font-semibold mb-2">Enable Push Notifications</h3>
              <p className="text-sm mb-4" style={{ color: 'var(--color-text-muted)' }}>
                Save PatternForge to get instant alerts when patterns form on your watchlist. Notifications deliver directly to Base Wallet as frames.
              </p>
              <button 
                className="w-full py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-glow"
                style={{ 
                  backgroundColor: 'var(--color-accent)',
                  color: 'white'
                }}
              >
                Save Frame & Enable Alerts
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
