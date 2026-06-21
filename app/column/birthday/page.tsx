import type { Metadata } from 'next';
import ColumnContent from './ColumnContent';

export const metadata: Metadata = {
  title: 'バースデーフォト完全ガイド｜厚木市フォトスタジオ JUNGLE STUDIO',
  description: 'バースデー・誕生日記念写真を神奈川県厚木市で撮るならジャングルスタジオ。1歳・2歳・3歳などお誕生日の特別な瞬間をプロが撮影。¥25,000〜。24時間オンライン予約受付中。',
  keywords: ['バースデーフォト', '誕生日 写真', '厚木市', 'フォトスタジオ', '1歳 記念写真', '誕生日撮影', 'スマッシュケーキ', '神奈川 バースデー'],
  openGraph: {
    title: 'バースデーフォト完全ガイド｜厚木市フォトスタジオ JUNGLE STUDIO',
    description: 'お誕生日の特別な瞬間をプロのスタジオ写真で。¥25,000〜、24時間予約受付。',
    url: 'https://www.junglestudiophoto.com/column/birthday',
  },
  alternates: { canonical: 'https://www.junglestudiophoto.com/column/birthday' },
};

export default function BirthdayColumn() {
  return <ColumnContent />;
}
