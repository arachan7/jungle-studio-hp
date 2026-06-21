import type { Metadata } from 'next';
import HomeContent from './components/HomeContent';

export const metadata: Metadata = {
  title: 'JUNGLE STUDIO | 神奈川県厚木市のフォトスタジオ',
  description: '神奈川県厚木市のフォトスタジオ「ジャングルスタジオ」。七五三・お宮参り・ニューボーンフォト・マタニティ・入園卒業など、お子様の大切な瞬間を最高の写真で残します。24時間オンライン予約受付中。',
};

export default function HomePage() {
  return <HomeContent />;
}
