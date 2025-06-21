'use client';

import { ThemeProvider } from '../contexts/theme-context';
import ThemeToggle from './theme-toggle';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ThemeToggle />
      {children}
    </ThemeProvider>
  );
} 