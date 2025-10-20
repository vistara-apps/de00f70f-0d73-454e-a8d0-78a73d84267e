'use client';

import { AppShell } from '../components/AppShell';
import { Trophy, Medal, Award, TrendingUp } from 'lucide-react';

export default function LeaderboardPage() {
  const mockLeaders = [
    { rank: 1, name: 'CryptoMaster', score: 1247, accuracy: 94, streak: 21, avatar: '🏆' },
    { rank: 2, name: 'ChartWizard', score: 1189, accuracy: 92, streak: 18, avatar: '🥈' },
    { rank: 3, name: 'PatternPro', score: 1156, accuracy: 91, streak: 15, avatar: '🥉' },
    { rank: 4, name: 'TradingNinja', score: 1098, accuracy: 89, streak: 12, avatar: '🥷' },
    { rank: 5, name: 'BullRunner', score: 1045, accuracy: 88, streak: 14, avatar: '🐂' },
    { rank: 6, name: 'BearHunter', score: 987, accuracy: 86, streak: 10, avatar: '🐻' },
    { rank: 7, name: 'SwingKing', score: 923, accuracy: 85, streak: 9, avatar: '👑' },
    { rank: 8, name: 'You', score: 847, accuracy: 87, streak: 7, avatar: '👤', isCurrentUser: true },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-5 h-5" style={{ color: '#FFD700' }} />;
      case 2:
        return <Medal className="w-5 h-5" style={{ color: '#C0C0C0' }} />;
      case 3:
        return <Medal className="w-5 h-5" style={{ color: '#CD7F32' }} />;
      default:
        return <Award className="w-5 h-5" style={{ color: 'var(--color-text-muted)' }} />;
    }
  };

  return (
    <AppShell>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold mb-1">Leaderboard</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>
            Top traders this week
          </p>
        </div>

        {/* Your Rank Card */}
        <div 
          className="p-6 rounded-lg border"
          style={{ 
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-accent)'
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="text-3xl">👤</div>
              <div>
                <div className="font-semibold">Your Rank</div>
                <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  #8 this week
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">847</div>
              <div className="text-sm" style={{ color: 'var(--color-success)' }}>+23 pts</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
            <div className="text-center">
              <div className="text-lg font-bold">87%</div>
              <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">7</div>
              <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Streak</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">127</div>
              <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Behind #7</div>
            </div>
          </div>
        </div>

        {/* Leaderboard List */}
        <div 
          className="rounded-lg border overflow-hidden"
          style={{ 
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)'
          }}
        >
          <div className="p-4 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <h3 className="font-semibold">Top Traders</h3>
          </div>
          <div className="divide-y" style={{ borderColor: 'var(--color-border)' }}>
            {mockLeaders.map((leader) => (
              <div
                key={leader.rank}
                className="p-4 flex items-center gap-4 transition-all duration-200"
                style={{
                  backgroundColor: leader.isCurrentUser ? 'rgba(0, 82, 255, 0.05)' : 'transparent'
                }}
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-8 text-center">
                    {getRankIcon(leader.rank)}
                  </div>
                  <div className="text-2xl">{leader.avatar}</div>
                  <div className="flex-1">
                    <div className="font-semibold flex items-center gap-2">
                      {leader.name}
                      {leader.isCurrentUser && (
                        <span 
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{ 
                            backgroundColor: 'rgba(0, 82, 255, 0.2)',
                            color: 'var(--color-accent)'
                          }}
                        >
                          You
                        </span>
                      )}
                    </div>
                    <div className="text-sm flex items-center gap-3" style={{ color: 'var(--color-text-muted)' }}>
                      <span>{leader.accuracy}% accuracy</span>
                      <span>•</span>
                      <span>{leader.streak} day streak</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold">{leader.score}</div>
                  <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>points</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Your Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Triangle Master', icon: '🔺', unlocked: true },
              { name: 'Flag Hunter', icon: '🚩', unlocked: true },
              { name: 'Pattern Pro', icon: '⭐', unlocked: false },
              { name: 'Streak Legend', icon: '🔥', unlocked: false },
            ].map((achievement, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border text-center transition-all duration-200"
                style={{
                  backgroundColor: achievement.unlocked ? 'var(--color-surface)' : 'transparent',
                  borderColor: achievement.unlocked ? 'var(--color-accent)' : 'var(--color-border)',
                  opacity: achievement.unlocked ? 1 : 0.5
                }}
              >
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <div className="text-sm font-medium">{achievement.name}</div>
                {achievement.unlocked && (
                  <div className="text-xs mt-1" style={{ color: 'var(--color-success)' }}>
                    Unlocked
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
