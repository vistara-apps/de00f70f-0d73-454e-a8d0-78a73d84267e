'use client';

import { useState, useEffect, useRef } from 'react';
import { Clock, CheckCircle2, XCircle, TrendingUp, Lock } from 'lucide-react';
import { createChart, ColorType } from 'lightweight-charts';

interface DrillSimulatorProps {
  drillsToday: number;
  onDrillComplete: (isCorrect: boolean) => void;
}

const PATTERNS = [
  { id: 1, name: 'Head and Shoulders', category: 'reversal' },
  { id: 2, name: 'Double Bottom', category: 'reversal' },
  { id: 3, name: 'Ascending Triangle', category: 'continuation' },
  { id: 4, name: 'Bull Flag', category: 'continuation' },
  { id: 5, name: 'Cup and Handle', category: 'continuation' },
  { id: 6, name: 'Falling Wedge', category: 'reversal' },
  { id: 7, name: 'Rising Wedge', category: 'reversal' },
  { id: 8, name: 'Symmetrical Triangle', category: 'bilateral' },
];

export function DrillSimulator({ drillsToday, onDrillComplete }: DrillSimulatorProps) {
  const [currentPattern, setCurrentPattern] = useState(PATTERNS[0]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const chartContainerRef = useRef<HTMLDivElement>(null);

  const maxFreeDrills = 3;
  const isLocked = drillsToday >= maxFreeDrills;

  useEffect(() => {
    if (!chartContainerRef.current || isLocked) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: 'hsl(220, 26%, 18%)' },
        textColor: 'hsl(210, 40%, 98%)',
      },
      width: chartContainerRef.current.clientWidth,
      height: 400,
      grid: {
        vertLines: { color: 'hsl(220, 26%, 25%)' },
        horzLines: { color: 'hsl(220, 26%, 25%)' },
      },
    });

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: 'hsl(142, 76%, 36%)',
      downColor: 'hsl(0, 84%, 60%)',
      borderVisible: false,
      wickUpColor: 'hsl(142, 76%, 36%)',
      wickDownColor: 'hsl(0, 84%, 60%)',
    });

    // Generate sample candlestick data
    const data = [];
    let basePrice = 100;
    for (let i = 0; i < 50; i++) {
      const change = (Math.random() - 0.5) * 4;
      basePrice += change;
      const open = basePrice;
      const close = basePrice + (Math.random() - 0.5) * 3;
      const high = Math.max(open, close) + Math.random() * 2;
      const low = Math.min(open, close) - Math.random() * 2;
      
      data.push({
        time: Date.now() / 1000 - (50 - i) * 86400,
        open,
        high,
        low,
        close,
      });
    }

    candlestickSeries.setData(data);
    chart.timeScale().fitContent();

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [isLocked]);

  useEffect(() => {
    if (!isActive || showResult) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsActive(false);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, showResult]);

  const startDrill = () => {
    if (isLocked) return;
    
    const randomPattern = PATTERNS[Math.floor(Math.random() * PATTERNS.length)];
    setCurrentPattern(randomPattern);
    setSelectedAnswer(null);
    setShowResult(false);
    setTimeLeft(60);
    setIsActive(true);
  };

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    
    const isCorrect = selectedAnswer === currentPattern.name;
    setShowResult(true);
    setIsActive(false);
    onDrillComplete(isCorrect);
  };

  if (isLocked) {
    return (
      <div className="bg-surface rounded-lg border border-border p-8 text-center">
        <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Lock className="w-8 h-8 text-warning" />
        </div>
        <h3 className="text-xl font-bold text-fg mb-2">Free Drills Exhausted</h3>
        <p className="text-muted mb-6">
          You've completed {drillsToday}/{maxFreeDrills} free drills today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
            Unlock Unlimited - $2.99/month
          </button>
          <button className="px-6 py-3 bg-surface-hover text-fg rounded-lg font-medium hover:bg-border transition-colors border border-border">
            Buy Drill Pack - 100 $FORGE
          </button>
        </div>
      </div>
    );
  }

  if (!isActive && !showResult) {
    return (
      <div className="bg-surface rounded-lg border border-border p-8 text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <TrendingUp className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-fg mb-2">Ready to Train?</h3>
        <p className="text-muted mb-6">
          Test your pattern recognition skills with real historical chart data.
          <br />
          Free drills today: {drillsToday}/{maxFreeDrills}
        </p>
        <button
          onClick={startDrill}
          className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Start Drill
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Timer and Progress */}
      <div className="bg-surface rounded-lg border border-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-lg font-semibold text-fg">{timeLeft}s</span>
          </div>
          <div className="text-sm text-muted">
            Drill {drillsToday + 1}/{maxFreeDrills}
          </div>
        </div>
        <div className="mt-3 h-2 bg-bg rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${(timeLeft / 60) * 100}%` }}
          />
        </div>
      </div>

      {/* Chart */}
      <div className="bg-surface rounded-lg border border-border p-4">
        <h3 className="text-lg font-semibold text-fg mb-4">
          Identify the Pattern
        </h3>
        <div ref={chartContainerRef} className="w-full" />
      </div>

      {/* Answer Selection */}
      {!showResult ? (
        <div className="bg-surface rounded-lg border border-border p-6">
          <h4 className="text-base font-semibold text-fg mb-4">
            Select the pattern you see:
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {PATTERNS.map((pattern) => (
              <button
                key={pattern.id}
                onClick={() => setSelectedAnswer(pattern.name)}
                className={`p-3 rounded-lg border transition-all ${
                  selectedAnswer === pattern.name
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border bg-bg text-fg hover:border-primary/50'
                }`}
              >
                <span className="text-sm font-medium">{pattern.name}</span>
              </button>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            disabled={!selectedAnswer}
            className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Answer
          </button>
        </div>
      ) : (
        <div className="bg-surface rounded-lg border border-border p-6">
          <div className="flex items-center gap-3 mb-4">
            {selectedAnswer === currentPattern.name ? (
              <>
                <CheckCircle2 className="w-8 h-8 text-success" />
                <div>
                  <h4 className="text-lg font-bold text-success">Correct!</h4>
                  <p className="text-sm text-muted">+10 skill points</p>
                </div>
              </>
            ) : (
              <>
                <XCircle className="w-8 h-8 text-danger" />
                <div>
                  <h4 className="text-lg font-bold text-danger">Incorrect</h4>
                  <p className="text-sm text-muted">-5 skill points</p>
                </div>
              </>
            )}
          </div>
          <div className="bg-bg rounded-lg p-4 mb-4">
            <p className="text-sm text-muted mb-2">Correct Answer:</p>
            <p className="text-base font-semibold text-fg">{currentPattern.name}</p>
            <p className="text-sm text-muted mt-1">
              Category: {currentPattern.category}
            </p>
          </div>
          <button
            onClick={startDrill}
            className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Next Drill
          </button>
        </div>
      )}
    </div>
  );
}
