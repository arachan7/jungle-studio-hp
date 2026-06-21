import type { Metadata } from 'next';
import ColumnContent from './ColumnContent';

export const metadata: Metadata = {
  title: '入園・卒園・入学・卒業の記念写真ガイド｜厚木市フォトスタジオ JUNGLE STUDIO',
  description: '入園・卒園・入学・卒業の記念写真を神奈川県厚木市で撮るならジャングルスタジオ。成長の節目をプロのスタジオ写真で残します。¥25,000〜。24時間オンライン予約受付中。',
  keywords: ['入学 記念写真', '卒業 写真', '入園 フォトスタジオ', '卒園 記念撮影', '厚木市 写真', '入学式 写真', '卒業式 フォト', '神奈川 入学写真'],
  openGraph: {
    title: '入園・卒園・入学・卒業記念写真｜厚木市フォトスタジオ JUNGLE STUDIO',
    description: '成長の節目をプロのスタジオ写真で。¥25,000〜、24時間予約受付。',
    url: 'https://www.junglestudiophoto.com/column/nyuugaku',
  },
  alternates: { canonical: 'https://www.junglestudiophoto.com/column/nyuugaku' },
};

export default function NyuugakuColumn() {
  return <ColumnContent />;
}
