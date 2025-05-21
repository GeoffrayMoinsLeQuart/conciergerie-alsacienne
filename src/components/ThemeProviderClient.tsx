// src/components/ThemeProviderClient.tsx
'use client';

import { ThemeProvider } from 'next-themes';

export default function ThemeProviderClient({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider 
      enableSystem={false} 
      attribute="class" 
      defaultTheme="light"
      storageKey="theme"
    >
      {children}
    </ThemeProvider>
  );
}
