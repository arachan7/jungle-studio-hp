import type { Metadata } from 'next';
import ColumnContent from './ColumnContent';

export const metadata: Metadata = {
  title: 'マタニティフォト完全ガイド｜厚木市フォトスタジオ JUNGLE STUDIO',
  description: 'マタニティフォトを神奈川県厚木市で撮るならジャングルスタジオ。妊娠中の美しい姿とお腹の大きさを最高の写真で残します。¥19,800〜。24時間オンライン予約受付中。',
  keywords: ['マタニティフォト', '厚木市', 'フォトスタジオ', 'マタニティ 写真', '妊婦 撮影', '妊娠 記念写真', 'マタニティ 神奈川', 'マタニティ 料金'],
  openGraph: {
    title: 'マタニティフォト完全ガイド｜厚木市フォトスタジオ JUNGLE STUDIO',
    description: '妊娠中の輝く姿を永遠に。¥19,800〜、24時間予約受付。',
    url: 'https://www.junglestudiophoto.com/column/maternity',
  },
  alternates: { canonical: 'https://www.junglestudiophoto.com/column/maternity' },
};

export default function MaternityColumn() {
  return <ColumnContent />;
}
