'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, Target, Award, BarChart3, Zap, Users } from 'lucide-react';
import { DrillSimulator } from './components/DrillSimulator';
import { Leaderboard } from './components/Leaderboard';
import { Watchlist } from './components/Watchlist';
import { StatsCard } from './components/StatsCard';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'drill' | 'watchlist' | 'leaderboard'>('drill');
  const [userStats, setUserStats] = useState({
    skillScore: 0,
    accuracyRate: 0,
    streakDays: 0,
    totalDrills: 0,
    drillsToday: 0,
  });

  useEffect(() => {
    // Simulate loading user stats
    setUserStats({
      skillScore: 0,
      accuracyRate: 0,
      streakDays: 0,
      totalDrills: 0,
      drillsToday: 0,
    });
  }, []);

  return (
    <main className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-border bg-surface">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-fg">PatternForge</h1>
                <p className="text-sm text-muted">Master chart patterns</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
              Connect Wallet
            </button>
          </div>
        </div>
      </header>

      {/* Stats Overview */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatsCard
            icon={<Target className="w-5 h-5" />}
            label="Skill Score"
            value={userStats.skillScore.toString()}
            max="1000"
            color="primary"
          />
          <StatsCard
            icon={<BarChart3 className="w-5 h-5" />}
            label="Accuracy"
            value={`${userStats.accuracyRate}%`}
            color="success"
          />
          <StatsCard
            icon={<Zap className="w-5 h-5" />}
            label="Streak"
            value={`${userStats.streakDays} days`}
            color="warning"
          />
          <StatsCard
            icon={<Award className="w-5 h-5" />}
            label="Total Drills"
            value={userStats.totalDrills.toString()}
            color="accent"
          />
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="flex gap-2 border-b border-border">
          <button
            onClick={() => setActiveTab('drill')}
            className={`px-6 py-3 font-medium transition-colors relative ${
              activeTab === 'drill'
                ? 'text-primary'
                : 'text-muted hover:text-fg'
            }`}
          >
            Training Drills
            {activeTab === 'drill' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('watchlist')}
            className={`px-6 py-3 font-medium transition-colors relative ${
              activeTab === 'watchlist'
                ? 'text-primary'
                : 'text-muted hover:text-fg'
            }`}
          >
            Watchlist
            {activeTab === 'watchlist' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('leaderboard')}
            className={`px-6 py-3 font-medium transition-colors relative ${
              activeTab === 'leaderboard'
                ? 'text-primary'
                : 'text-muted hover:text-fg'
            }`}
          >
            Leaderboard
            {activeTab === 'leaderboard' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        {activeTab === 'drill' && (
          <DrillSimulator
            drillsToday={userStats.drillsToday}
            onDrillComplete={(isCorrect) => {
              setUserStats(prev => ({
                ...prev,
                totalDrills: prev.totalDrills + 1,
                drillsToday: prev.drillsToday + 1,
                skillScore: prev.skillScore + (isCorrect ? 10 : -5),
                accuracyRate: Math.round(
                  ((prev.accuracyRate * prev.totalDrills) + (isCorrect ? 100 : 0)) / 
                  (prev.totalDrills + 1)
                ),
              }));
            }}
          />
        )}
        {activeTab === 'watchlist' && <Watchlist />}
        {activeTab === 'leaderboard' && <Leaderboard />}
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between text-sm text-muted">
            <p>© 2024 PatternForge. Built on Base.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-fg transition-colors">Docs</a>
              <a href="#" className="hover:text-fg transition-colors">Support</a>
              <a href="#" className="hover:text-fg transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
