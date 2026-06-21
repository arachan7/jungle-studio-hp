import type { Metadata } from 'next';
import TipsContent from './TipsContent';

export const metadata: Metadata = {
  title: '撮影前に抑えておきたいポイント｜厚木市フォトスタジオ JUNGLE STUDIO',
  description: '撮影当日に最高の写真を残すために、事前に知っておきたいポイントをご紹介。体調管理・持ち物・スケジュール・衣装など。',
  alternates: { canonical: 'https://www.junglestudiophoto.com/tips' },
};

export default function TipsPage() {
  return <TipsContent />;
}
