import type { Metadata } from 'next';
import ColumnContent from './ColumnContent';

export const metadata: Metadata = {
  title: 'ハーフバースデーフォト完全ガイド｜厚木市フォトスタジオ JUNGLE STUDIO',
  description: 'ハーフバースデーの記念写真を神奈川県厚木市で撮るならジャングルスタジオ。生後6ヶ月の大切な瞬間をプロが撮影。¥25,000〜。24時間オンライン予約受付中。',
  keywords: ['ハーフバースデー', '写真', '厚木市', 'フォトスタジオ', 'ハーフバースデー撮影', '生後6ヶ月 記念写真', '半歳 写真', '神奈川 ハーフバースデー'],
  openGraph: {
    title: 'ハーフバースデーフォト完全ガイド｜厚木市フォトスタジオ JUNGLE STUDIO',
    description: '生後6ヶ月の記念をプロのスタジオ写真で。¥25,000〜、24時間予約受付。',
    url: 'https://www.junglestudiophoto.com/column/half-birthday',
  },
  alternates: { canonical: 'https://www.junglestudiophoto.com/column/half-birthday' },
};

export default function HalfBirthdayColumn() {
  return <ColumnContent />;
}
