import type { Metadata } from 'next';
import NewsContent from './NewsContent';

export const metadata: Metadata = {
  title: 'ジャングルスタジオ、まもなくオープンいたします｜JUNGLE STUDIO',
  description: '4月25日・26日のプレオープンを経て、4月29日にグランドオープンを迎えます。',
  alternates: { canonical: 'https://www.junglestudiophoto.com/news/grand-open' },
};

export default function GrandOpenPage() {
  return <NewsContent />;
}
