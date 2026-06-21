import type { Metadata } from 'next';
import ColumnContent from './ColumnContent';

export const metadata: Metadata = {
  title: 'ニューボーンフォトとは｜厚木市フォトスタジオ JUNGLE STUDIO',
  description: 'ニューボーンフォト（新生児撮影）を神奈川県厚木市で撮るならジャングルスタジオ。生後2週間以内の赤ちゃんの奇跡の瞬間をプロが撮影。¥25,000〜。24時間オンライン予約。',
  keywords: ['ニューボーンフォト', '新生児撮影', '厚木市', 'フォトスタジオ', 'ニューボーン 写真', '生後2週間 写真', '赤ちゃん スタジオ', '神奈川 ニューボーン'],
  openGraph: {
    title: 'ニューボーンフォトとは｜厚木市フォトスタジオ JUNGLE STUDIO',
    description: '生後2週間以内の奇跡の瞬間を。¥25,000〜、24時間予約受付。',
    url: 'https://www.junglestudiophoto.com/column/newborn',
  },
  alternates: { canonical: 'https://www.junglestudiophoto.com/column/newborn' },
};

export default function NewbornColumn() {
  return <ColumnContent />;
}
