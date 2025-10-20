'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <p className="mb-6" style={{ color: 'var(--color-text-muted)' }}>
          We encountered an error while loading PatternForge. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-glow"
          style={{ 
            backgroundColor: 'var(--color-accent)',
            color: 'white'
          }}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
