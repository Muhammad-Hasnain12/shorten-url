export type Theme = 'light' | 'dark' | 'system';

export interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'system';
  
  try {
    const stored = localStorage.getItem('theme');
    return (stored as Theme) || 'system';
  } catch {
    return 'system';
  }
}

export function setStoredTheme(theme: Theme): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem('theme', theme);
  } catch (error) {
    console.error('Failed to save theme preference:', error);
  }
}

export function getEffectiveTheme(theme: Theme): 'light' | 'dark' {
  if (theme === 'system') {
    return getSystemTheme();
  }
  return theme;
}

export function applyTheme(theme: Theme): void {
  const effectiveTheme = getEffectiveTheme(theme);
  const root = document.documentElement;
  
  root.classList.remove('light', 'dark');
  root.classList.add(effectiveTheme);
  
  // Update data attribute for CSS custom properties
  root.setAttribute('data-theme', effectiveTheme);
}
