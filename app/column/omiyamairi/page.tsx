import type { Metadata } from 'next';
import ColumnContent from './ColumnContent';

export const metadata: Metadata = {
  title: 'お宮参りの記念写真ガイド｜厚木市フォトスタジオ JUNGLE STUDIO',
  description: 'お宮参りの記念写真を神奈川県厚木市で撮るならジャングルスタジオ。生後1ヶ月の赤ちゃんと家族の大切な瞬間をプロが撮影。¥25,000〜。24時間オンライン予約受付中。',
  keywords: ['お宮参り', '写真', '厚木市', 'フォトスタジオ', 'お宮参り撮影', '赤ちゃん 写真', 'お宮参り 料金', '生後1ヶ月 記念写真', '神奈川 お宮参り'],
  openGraph: {
    title: 'お宮参りの記念写真ガイド｜厚木市フォトスタジオ JUNGLE STUDIO',
    description: '生後1ヶ月の記念をプロのスタジオ写真で。¥25,000〜、24時間予約受付。',
    url: 'https://www.junglestudiophoto.com/column/omiyamairi',
  },
  alternates: { canonical: 'https://www.junglestudiophoto.com/column/omiyamairi' },
};

export default function OmiyamairColumn() {
  return <ColumnContent />;
}
