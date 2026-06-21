import type { Metadata } from 'next';
import FlowContent from './FlowContent';

export const metadata: Metadata = {
  title: 'ご利用の流れ｜厚木市フォトスタジオ JUNGLE STUDIO',
  description: 'ジャングルスタジオのご利用の流れをご紹介。ご予約から写真のお渡しまで、安心してお任せください。神奈川県厚木市のフォトスタジオ。',
  alternates: { canonical: 'https://www.junglestudiophoto.com/flow' },
};

export default function FlowPage() {
  return <FlowContent />;
}
