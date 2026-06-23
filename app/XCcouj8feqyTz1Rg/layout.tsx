import type { Metadata } from 'next';

export const metadata: Metadata = {
  manifest: '/manifest.json',
  icons: {
    apple: '/koala.jpg',
    icon: '/koala.jpg',
  },
};

export default function EditorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
