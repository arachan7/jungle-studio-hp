import type { Metadata } from 'next';

export const metadata: Metadata = {
  manifest: '/manifest.json',
  icons: {
    apple: '/koala.png',
    icon: '/koala.png',
  },
};

export default function EditorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
