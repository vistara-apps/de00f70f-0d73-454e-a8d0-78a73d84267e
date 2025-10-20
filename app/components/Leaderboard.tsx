'use client';

import { Trophy, Medal, Award, TrendingUp } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  fid: string;
  username: string;
  skillScore: number;
  accuracyRate: number;
  totalDrills: number;
  avatar: string;
}

export function Leaderboard() {
  const leaderboard: LeaderboardEntry[] = [
    {
      rank: 1,
      fid: '9152',
      username: 'PatternMaster',
      skillScore: 892,
      accuracyRate: 94,
      totalDrills: 247,
      avatar: '🏆',
    },
    {
      rank: 2,
      fid: '7834',
      username: 'ChartWizard',
      skillScore: 856,
      accuracyRate: 91,
      totalDrills: 203,
      avatar: '🥈',
    },
    {
      rank: 3,
      fid: '5621',
      username: 'TrendSpotter',
      skillScore: 823,
      accuracyRate: 89,
      totalDrills: 189,
      avatar: '🥉',
    },
    {
      rank: 4,
      fid: '4512',
      username: 'BullishBear',
      skillScore: 789,
      accuracyRate: 87,
      totalDrills: 176,
      avatar: '📈',
    },
    {
      rank: 5,
      fid: '3298',
      username: 'CryptoTrader',
      skillScore: 756,
      accuracyRate: 85,
      totalDrills: 164,
      avatar: '💎',
    },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-warning" />;
      case 2:
        return <Medal className="w-6 h-6 text-muted" />;
      case 3:
        return <Award className="w-6 h-6 text-warning/70" />;
      default:
        return <span className="text-lg font-bold text-muted">#{rank}</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-fg">Weekly Leaderboard</h2>
          <p className="text-sm text-muted mt-1">
            Top performers this week • Resets Sunday 8 PM
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-lg border border-border">
          <TrendingUp className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-fg">Live Rankings</span>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="bg-surface rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-bg border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-muted">
                  Rank
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-muted">
                  User
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-muted">
                  Skill Score
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-muted">
                  Accuracy
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-muted">
                  Total Drills
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {leaderboard.map((entry) => (
                <tr
                  key={entry.fid}
                  className="hover:bg-surface-hover transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center w-10">
                      {getRankIcon(entry.rank)}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-xl">
                        {entry.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-fg">{entry.username}</p>
                        <p className="text-sm text-muted">FID: {entry.fid}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-lg font-semibold text-primary">
                      {entry.skillScore}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-base font-medium text-success">
                      {entry.accuracyRate}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-base text-fg">{entry.totalDrills}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Your Rank */}
      <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold">#8</span>
            </div>
            <div>
              <p className="font-semibold text-fg">Your Rank</p>
              <p className="text-sm text-muted">127 points behind #7</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}
