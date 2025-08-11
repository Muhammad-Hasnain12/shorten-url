import { nanoid } from 'nanoid';

export interface ShortenedUrl {
  id: string;
  originalUrl: string;
  shortCode: string;
  clicks: number;
  createdAt: string;
  lastAccessed: string;
}

export interface UrlStats {
  totalUrls: number;
  totalClicks: number;
  mostPopular: ShortenedUrl | null;
}

// Generate a unique short code
export function generateShortCode(): string {
  return nanoid(6); // 6 characters for short codes
}

// Validate URL format
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// Ensure URL has protocol
export function normalizeUrl(url: string): string {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `https://${url}`;
  }
  return url;
}

// Local storage operations
export const UrlStorage = {
  // Get all shortened URLs
  getAll(): ShortenedUrl[] {
    if (typeof window === 'undefined') return [];
    
    try {
      const stored = localStorage.getItem('shortened-urls');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  },

  // Save a new shortened URL
  save(url: ShortenedUrl): void {
    if (typeof window === 'undefined') return;
    
    try {
      const urls = this.getAll();
      urls.push(url);
      localStorage.setItem('shortened-urls', JSON.stringify(urls));
    } catch (error) {
      console.error('Failed to save URL:', error);
    }
  },

  // Find URL by short code
  findByCode(shortCode: string): ShortenedUrl | null {
    const urls = this.getAll();
    return urls.find(url => url.shortCode === shortCode) || null;
  },

  // Increment click count
  incrementClicks(shortCode: string): void {
    if (typeof window === 'undefined') return;
    
    try {
      const urls = this.getAll();
      const urlIndex = urls.findIndex(url => url.shortCode === shortCode);
      
      if (urlIndex !== -1) {
        urls[urlIndex].clicks += 1;
        urls[urlIndex].lastAccessed = new Date().toISOString();
        localStorage.setItem('shortened-urls', JSON.stringify(urls));
      }
    } catch (error) {
      console.error('Failed to increment clicks:', error);
    }
  },

  // Delete a URL
  delete(shortCode: string): void {
    if (typeof window === 'undefined') return;
    
    try {
      const urls = this.getAll();
      const filteredUrls = urls.filter(url => url.shortCode !== shortCode);
      localStorage.setItem('shortened-urls', JSON.stringify(filteredUrls));
    } catch (error) {
      console.error('Failed to delete URL:', error);
    }
  },

  // Get statistics
  getStats(): UrlStats {
    const urls = this.getAll();
    const totalClicks = urls.reduce((sum, url) => sum + url.clicks, 0);
    const mostPopular = urls.reduce((max, url) => 
      url.clicks > (max?.clicks || 0) ? url : max, null as ShortenedUrl | null
    );

    return {
      totalUrls: urls.length,
      totalClicks,
      mostPopular
    };
  },

  // Clear all data
  clear(): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.removeItem('shortened-urls');
    } catch (error) {
      console.error('Failed to clear storage:', error);
    }
  }
};

// Copy text to clipboard
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const result = document.execCommand('copy');
      textArea.remove();
      return result;
    }
  } catch {
    return false;
  }
}

// Format date for display
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

  if (diffInHours < 1) {
    return 'Just now';
  } else if (diffInHours < 24) {
    return `${Math.floor(diffInHours)}h ago`;
  } else if (diffInHours < 168) {
    return `${Math.floor(diffInHours / 24)}d ago`;
  } else {
    return date.toLocaleDateString();
  }
}

// Generate QR code URL (using external service)
export function generateQRCodeUrl(url: string): string {
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
}
