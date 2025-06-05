'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="main-content" style={{ textAlign: 'center', paddingTop: '100px' }}>
      <h1 className="hero-title">Something went wrong!</h1>
      <p className="hero-desc">{error.message}</p>
      <button
        onClick={reset}
        className="resume-btn"
        style={{ marginTop: '20px' }}
      >
        Try again
      </button>
    </div>
  );
} 