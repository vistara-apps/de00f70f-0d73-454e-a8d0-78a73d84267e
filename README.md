# PatternForge - Base Mini App

Master chart patterns with AI-powered training and real-time alerts.

## Features

- **Interactive Pattern Training Simulator**: Practice pattern recognition with real historical chart data
- **Personalized Learning Path**: Tailored curriculum based on your trading style
- **Real-Time Pattern Alerts**: Get notified when patterns form on your watchlist
- **Social Leaderboard**: Compete with friends and earn achievement badges
- **AI Pattern Success Predictor**: Filter alerts by confidence score

## Tech Stack

- Next.js 15 with App Router
- React 19
- OnchainKit for Base integration
- TradingView Lightweight Charts
- Tailwind CSS with Coinbase theme
- TypeScript

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file with:

```
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_api_key_here
```

## Deployment

Deploy to Vercel or any Next.js-compatible platform.

## License

MIT
