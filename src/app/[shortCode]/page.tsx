'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { UrlStorage } from '@/lib/utils';

export default function ShortUrlRedirect() {
  const params = useParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const shortCode = params.shortCode as string;
    
    if (!shortCode) {
      setError('Invalid short code');
      setIsLoading(false);
      return;
    }

    // Find the URL in storage
    const shortenedUrl = UrlStorage.findByCode(shortCode);
    
    if (!shortenedUrl) {
      setError('URL not found');
      setIsLoading(false);
      return;
    }

    // Increment click count
    UrlStorage.incrementClicks(shortCode);

    // Redirect to the original URL
    try {
      window.location.href = shortenedUrl.originalUrl;
    } catch (err) {
      setError('Failed to redirect');
      setIsLoading(false);
    }
  }, [params]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-foreground mb-2">Redirecting...</h2>
          <p className="text-muted-foreground">Please wait while we redirect you to your destination.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2">Redirect Failed</h2>
          <p className="text-muted-foreground mb-6">{error}</p>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return null;
}
