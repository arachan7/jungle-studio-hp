import type { Metadata } from 'next';
import ColumnContent from './ColumnContent';

export const metadata: Metadata = {
  title: '七五三フォト完全ガイド｜厚木市のフォトスタジオ JUNGLE STUDIO',
  description: '七五三の記念写真を神奈川県厚木市で撮るなら「ジャングルスタジオ」。3歳・5歳・7歳の七五三写真の準備・衣装・当日の流れを完全解説。スタジオ撮影の料金は¥25,000〜。24時間オンライン予約。',
  keywords: ['七五三', '写真', '厚木市', 'フォトスタジオ', '七五三撮影', '七五三 神奈川', '七五三 料金', '3歳 七五三', '5歳 七五三', '7歳 七五三'],
  openGraph: {
    title: '七五三フォト完全ガイド｜厚木市フォトスタジオ JUNGLE STUDIO',
    description: '神奈川県厚木市で七五三の記念写真。¥25,000〜でプロのスタジオ撮影。24時間オンライン予約受付中。',
    url: 'https://www.junglestudiophoto.com/column/shichigosan',
  },
  alternates: { canonical: 'https://www.junglestudiophoto.com/column/shichigosan' },
};

export default function ShichigosanColumn() {
  return <ColumnContent />;
}
