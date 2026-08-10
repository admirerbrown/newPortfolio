import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Samuel Kyere | Integration & Systems Engineer',
  description: 'Technical portfolio for Samuel Kyere, a fintech systems engineer building data ops, webhook workflows, and localized AI infrastructure.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
