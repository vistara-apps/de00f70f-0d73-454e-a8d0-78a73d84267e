'use client';

import { ReactNode } from 'react';
import { TrendingUp, Target, Trophy, Bell } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: TrendingUp, label: 'Drills' },
    { href: '/watchlist', icon: Target, label: 'Watchlist' },
    { href: '/leaderboard', icon: Trophy, label: 'Leaderboard' },
    { href: '/alerts', icon: Bell, label: 'Alerts' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--color-accent)' }}>
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">PatternForge</h1>
              <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Master Chart Patterns</p>
            </div>
          </div>
          <button 
            className="px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200"
            style={{ 
              backgroundColor: 'var(--color-accent)',
              color: 'white'
            }}
          >
            Connect Wallet
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="sticky bottom-0 border-t" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-around h-16">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-200"
                  style={{
                    color: isActive ? 'var(--color-accent)' : 'var(--color-text-muted)',
                    backgroundColor: isActive ? 'rgba(0, 82, 255, 0.1)' : 'transparent'
                  }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
