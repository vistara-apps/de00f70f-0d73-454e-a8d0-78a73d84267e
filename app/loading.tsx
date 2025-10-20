export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div 
          className="w-16 h-16 border-4 border-t-transparent rounded-full animate-spin mx-auto mb-4"
          style={{ borderColor: 'var(--color-accent)', borderTopColor: 'transparent' }}
        />
        <p style={{ color: 'var(--color-text-muted)' }}>Loading PatternForge...</p>
      </div>
    </div>
  );
}
