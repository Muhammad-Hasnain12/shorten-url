'use client';

import { useState, useEffect } from 'react';
import { UrlStorage, ShortenedUrl, copyToClipboard, formatDate } from '@/lib/utils';

export default function UrlHistory() {
  const [urls, setUrls] = useState<ShortenedUrl[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    loadUrls();
    // Refresh URLs every 5 seconds to show updated click counts
    const interval = setInterval(loadUrls, 5000);
    return () => clearInterval(interval);
  }, []);

  const loadUrls = () => {
    const allUrls = UrlStorage.getAll();
    // Sort by creation date (newest first)
    setUrls(allUrls.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
  };

  const handleCopy = async (url: ShortenedUrl) => {
    const shortUrl = `${window.location.origin}/${url.shortCode}`;
    const success = await copyToClipboard(shortUrl);
    
    if (success) {
      setCopiedId(url.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const handleDelete = (shortCode: string) => {
    UrlStorage.delete(shortCode);
    loadUrls();
  };

  const handleClearAll = () => {
    if (confirm('Are you sure you want to delete all shortened URLs? This action cannot be undone.')) {
      UrlStorage.clear();
      loadUrls();
    }
  };

  if (urls.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-xl p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-card-foreground mb-2">No URLs Yet</h3>
          <p className="text-muted-foreground">
            Start by shortening your first URL above. Your shortened links will appear here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-card-foreground">URL History</h2>
        <button
          onClick={handleClearAll}
          className="px-4 py-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors text-sm"
        >
          Clear All
        </button>
      </div>

      <div className="grid gap-4">
        {urls.map((url) => (
          <div key={url.id} className="bg-card border border-border rounded-xl p-4 hover:shadow-lg transition-all">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              {/* URL Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-card-foreground truncate">
                    {url.originalUrl}
                  </h3>
                  <button
                    onClick={() => handleDelete(url.shortCode)}
                    className="text-muted-foreground hover:text-destructive transition-colors p-1 rounded hover:bg-destructive/10 flex-shrink-0"
                    title="Delete URL"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Short URL:</span>
                  <code className="bg-muted px-2 py-1 rounded text-primary font-mono">
                    {window.location.origin}/{url.shortCode}
                  </code>
                </div>
              </div>

              {/* Stats and Actions */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 flex-shrink-0">
                {/* Click Count */}
                <div className="flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-2.122 2.122L10.05 9.05" />
                  </svg>
                  <span className="font-semibold text-card-foreground">{url.clicks}</span>
                  <span className="text-muted-foreground">clicks</span>
                </div>

                {/* Created Date */}
                <div className="text-sm text-muted-foreground">
                  {formatDate(url.createdAt)}
                </div>

                {/* Copy Button */}
                <button
                  onClick={() => handleCopy(url)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                    copiedId === url.id
                      ? 'bg-green-600 text-white'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  {copiedId === url.id ? (
                    <>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy
                    </>
                  )}
                </button>

                {/* Test Link */}
                <a
                  href={`/${url.shortCode}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Test
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="bg-card border border-border rounded-xl p-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-primary">{urls.length}</div>
            <div className="text-sm text-muted-foreground">Total URLs</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">
              {urls.reduce((sum, url) => sum + url.clicks, 0)}
            </div>
            <div className="text-sm text-muted-foreground">Total Clicks</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">
              {urls.length > 0 ? Math.round(urls.reduce((sum, url) => sum + url.clicks, 0) / urls.length) : 0}
            </div>
            <div className="text-sm text-muted-foreground">Avg. Clicks</div>
          </div>
        </div>
      </div>
    </div>
  );
}
