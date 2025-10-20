'use client';

import { AppShell } from './components/AppShell';
import { StatCard } from './components/StatCard';
import { PatternCard } from './components/PatternCard';
import { ProgressBar } from './components/ProgressBar';
import { Target, Zap, Award, TrendingUp } from 'lucide-react';

export default function Home() {
  const mockPatterns = [
    {
      title: 'Head and Shoulders',
      subtitle: 'Reversal Pattern • Intermediate',
      confidence: 85,
    },
    {
      title: 'Bull Flag',
      subtitle: 'Continuation Pattern • Beginner',
      confidence: 92,
    },
    {
      title: 'Ascending Triangle',
      subtitle: 'Breakout Pattern • Intermediate',
      confidence: 78,
    },
  ];

  return (
    <AppShell>
      <div className="space-y-6 animate-fade-in">
        {/* Welcome Section */}
        <div 
          className="p-6 rounded-lg border"
          style={{ 
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)'
          }}
        >
          <h2 className="text-2xl font-bold mb-2">Welcome to PatternForge</h2>
          <p className="mb-4" style={{ color: 'var(--color-text-muted)' }}>
            Master chart patterns through gamified training and real-time alerts
          </p>
          <div className="flex gap-3">
            <button 
              className="flex-1 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-glow"
              style={{ 
                backgroundColor: 'var(--color-accent)',
                color: 'white'
              }}
            >
              Start Daily Drill
            </button>
            <button 
              className="px-6 py-3 rounded-lg font-medium border transition-all duration-200"
              style={{ 
                borderColor: 'var(--color-border)',
                color: 'var(--color-fg)'
              }}
            >
              Take Quiz
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            label="Skill Score"
            value="847"
            icon={<Award className="w-5 h-5" />}
            trend="up"
            trendValue="+23"
          />
          <StatCard
            label="Accuracy"
            value="87%"
            icon={<Target className="w-5 h-5" />}
            trend="up"
            trendValue="+5%"
          />
          <StatCard
            label="Streak"
            value="7 days"
            icon={<Zap className="w-5 h-5" />}
            trend="neutral"
          />
          <StatCard
            label="Drills Left"
            value="3/3"
            icon={<TrendingUp className="w-5 h-5" />}
          />
        </div>

        {/* Daily Progress */}
        <div 
          className="p-6 rounded-lg border"
          style={{ 
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)'
          }}
        >
          <h3 className="text-lg font-semibold mb-4">Today's Progress</h3>
          <div className="space-y-4">
            <ProgressBar
              label="Pattern Mastery"
              value={847}
              max={1000}
              variant="success"
            />
            <ProgressBar
              label="Weekly Goal"
              value={12}
              max={20}
              variant="default"
            />
          </div>
        </div>

        {/* Recommended Patterns */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Recommended Patterns</h3>
            <button 
              className="text-sm font-medium"
              style={{ color: 'var(--color-accent)' }}
            >
              View All →
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockPatterns.map((pattern, index) => (
              <PatternCard
                key={index}
                variant="drill"
                title={pattern.title}
                subtitle={pattern.subtitle}
                confidence={pattern.confidence}
                imageUrl="/chart-placeholder.png"
                onAction={() => console.log('Start drill:', pattern.title)}
                actionLabel="Start Drill"
              />
            ))}
          </div>
        </div>

        {/* Premium Unlock CTA */}
        <div 
          className="p-6 rounded-lg border relative overflow-hidden"
          style={{ 
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-accent)'
          }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20" style={{ backgroundColor: 'var(--color-accent)' }} />
          <div className="relative">
            <h3 className="text-xl font-bold mb-2">Unlock Unlimited Drills</h3>
            <p className="mb-4" style={{ color: 'var(--color-text-muted)' }}>
              Get unlimited pattern drills, real-time alerts, and premium features for 100 $FORGE tokens or $2.99/month
            </p>
            <button 
              className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-glow"
              style={{ 
                backgroundColor: 'var(--color-accent)',
                color: 'white'
              }}
            >
              Unlock Premium
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
