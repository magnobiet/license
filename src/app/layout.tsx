import { ReactNode } from 'react';

import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />

      <body className="antialiased bg-slate-900 text-white">
        <div className="w-full h-screen flex">{children}</div>
      </body>
    </html>
  );
}
