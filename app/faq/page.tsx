import type { Metadata } from 'next';
import FaqContent from './FaqContent';

export const metadata: Metadata = {
  title: 'よくある質問｜厚木市フォトスタジオ JUNGLE STUDIO',
  description: 'ジャングルスタジオへのよくある質問をまとめています。予約・料金・衣装・撮影当日の流れなど。',
  alternates: { canonical: 'https://www.junglestudiophoto.com/faq' },
};

export default function FaqPage() {
  return <FaqContent />;
}
