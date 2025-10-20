# PatternForge - Master Chart Patterns

A gamified trading education Base Mini App that helps traders learn chart pattern recognition through interactive simulations and real-time alerts.

## Features

- 🎯 **Interactive Pattern Training** - Learn chart patterns through gamified drills
- 📊 **Real-Time Pattern Alerts** - Get notified when patterns form on your watchlist
- 🏆 **Social Leaderboard** - Compete with friends and earn achievement badges
- 💎 **Micro-Transactions** - Unlock premium features with $FORGE tokens
- 🔔 **Frame Notifications** - Receive alerts directly in Base Wallet

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **React**: React 19
- **Blockchain**: Base (via OnchainKit)
- **Social**: Farcaster (via MiniKit)
- **Styling**: Tailwind CSS with Coinbase theme
- **Charts**: TradingView Lightweight Charts

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your OnchainKit API key:
```
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_key_here
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Base Mini App Integration

PatternForge is built as a Base Mini App with:

- **Frame Actions**: Start drills, share alerts, unlock premium, view leaderboard
- **Social Primitives**: Co-creation loops, long-term rituals, identity playground
- **Notifications**: Real-time pattern alerts, achievement unlocks, streak reminders
- **Wallet Integration**: Seamless authentication and micro-transactions

## Project Structure

```
app/
├── components/        # Reusable UI components
├── page.tsx          # Dashboard (drills)
├── watchlist/        # Watchlist & alerts
├── leaderboard/      # Social leaderboard
├── alerts/           # Notification center
└── globals.css       # Coinbase theme styles

public/
└── .well-known/
    └── farcaster.json # Mini App manifest
```

## Design System

The app uses the **Coinbase theme**:
- Dark navy background (#0a1929)
- Light text (#e3f2fd)
- Coinbase blue accents (#0052ff)
- Subtle rounded borders
- Smooth transitions and hover effects

## License

MIT
