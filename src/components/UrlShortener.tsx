'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  generateShortCode, 
  isValidUrl, 
  normalizeUrl, 
  UrlStorage, 
  ShortenedUrl,
  copyToClipboard,
  generateQRCodeUrl
} from '@/lib/utils';

export default function UrlShortener() {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState<ShortenedUrl | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setShortenedUrl(null);

    if (!url.trim()) {
      setError('Please enter a URL');
      return;
    }

    if (!isValidUrl(normalizeUrl(url))) {
      setError('Please enter a valid URL');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate a small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500));

      const normalizedUrl = normalizeUrl(url);
      const shortCode = generateShortCode();
      
      const newShortenedUrl: ShortenedUrl = {
        id: shortCode,
        originalUrl: normalizedUrl,
        shortCode,
        clicks: 0,
        createdAt: new Date().toISOString(),
        lastAccessed: new Date().toISOString()
      };

      UrlStorage.save(newShortenedUrl);
      setShortenedUrl(newShortenedUrl);
      setUrl('');
    } catch {
      setError('Failed to create shortened URL. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!shortenedUrl) return;
    
    const shortUrl = `${window.location.origin}/${shortenedUrl.shortCode}`;
    const success = await copyToClipboard(shortUrl);
    
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDelete = () => {
    if (!shortenedUrl) return;
    
    UrlStorage.delete(shortenedUrl.shortCode);
    setShortenedUrl(null);
    setShowQR(false);
  };

  const getShortUrl = () => {
    if (!shortenedUrl) return '';
    return `${window.location.origin}/${shortenedUrl.shortCode}`;
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Main Form */}
      <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          URL Shortener
        </h1>
        <p className="text-muted-foreground text-center mb-6">
          Transform long URLs into short, shareable links instantly
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste your long URL here..."
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !url.trim()}
              className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Shortening...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  Shorten
                </>
              )}
            </button>
          </div>
          
          {error && (
            <div className="text-destructive text-sm bg-destructive/10 border border-destructive/20 rounded-lg p-3">
              {error}
            </div>
          )}
        </form>
      </div>

      {/* Result Display */}
      {shortenedUrl && (
        <div className="bg-card border border-border rounded-xl p-6 shadow-lg space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-card-foreground">Your Shortened URL</h3>
            <button
              onClick={handleDelete}
              className="text-muted-foreground hover:text-destructive transition-colors p-2 rounded-lg hover:bg-destructive/10"
              title="Delete URL"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={getShortUrl()}
                readOnly
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-muted text-foreground font-mono text-sm"
              />
              <button
                onClick={handleCopy}
                className={`px-6 py-3 font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
                  copied 
                    ? 'bg-green-600 text-white' 
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {copied ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy
                  </>
                )}
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowQR(!showQR)}
                className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V6a1 1 0 00-1-1H5a1 1 0 00-1 1v1a1 1 0 001 1zm12 0h2a1 1 0 001-1V6a1 1 0 00-1-1h-2a1 1 0 00-1 1v1a1 1 0 001 1zM5 20h2a1 1 0 001-1v-1a1 1 0 00-1-1H5a1 1 0 00-1 1v1a1 1 0 001 1z" />
                </svg>
                {showQR ? 'Hide QR' : 'Show QR'}
              </button>
              
              <a
                href={getShortUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Test Link
              </a>
            </div>
          </div>

          {/* QR Code */}
          {showQR && (
            <div className="pt-4 border-t border-border">
              <div className="flex flex-col items-center space-y-3">
                <Image
                  src={generateQRCodeUrl(getShortUrl())}
                  alt="QR Code"
                  width={128}
                  height={128}
                  className="border border-border rounded-lg"
                />
                <p className="text-sm text-muted-foreground text-center">
                  Scan to open the shortened URL
                </p>
              </div>
            </div>
          )}

          {/* URL Info */}
          <div className="pt-4 border-t border-border">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Original URL:</span>
                <p className="text-foreground truncate" title={shortenedUrl.originalUrl}>
                  {shortenedUrl.originalUrl}
                </p>
              </div>
              <div>
                <span className="text-muted-foreground">Created:</span>
                <p className="text-foreground">
                  {new Date(shortenedUrl.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
