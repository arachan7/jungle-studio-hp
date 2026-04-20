import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FixedBottomNav from "@/components/FixedBottomNav";

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: "JUNGLE STUDIO | 神奈川県厚木市のフォトスタジオ",
    template: "%s | JUNGLE STUDIO",
  },
  description: "神奈川県厚木市のフォトスタジオ「ジャングルスタジオ」。七五三・お宮参り・ニューボーンフォト・マタニティ・入園卒業など、お子様の大切な瞬間を高品質な写真で残します。24時間オンライン予約受付。",
  keywords: ["フォトスタジオ", "厚木市", "七五三", "お宮参り", "ニューボーンフォト", "マタニティフォト", "記念写真", "ジャングルスタジオ", "厚木 写真館", "神奈川 フォトスタジオ"],
  openGraph: {
    siteName: "JUNGLE STUDIO",
    locale: "ja_JP",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ジャングルスタジオ",
  "alternateName": "JUNGLE STUDIO",
  "url": "https://www.junglestudiophoto.com",
  "telephone": "070-3763-0878",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "旭町5丁目43-14 パストラルASAHI 401-A",
    "addressLocality": "厚木市",
    "addressRegion": "神奈川県",
    "postalCode": "243-0014",
    "addressCountry": "JP",
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "10:00",
    "closes": "21:00",
  },
  "priceRange": "¥15,000〜",
  "description": "神奈川県厚木市のフォトスタジオ。七五三・お宮参り・ニューボーンフォト・マタニティ・入園卒業など、お子様の大切な瞬間をプロが撮影します。24時間オンライン予約受付。",
  "image": "https://www.junglestudiophoto.com/og-image.jpg",
  "sameAs": [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-16 pb-16">{children}</main>
        <Footer />
        <FixedBottomNav fontClassName={notoSansJP.className} />
      </body>
    </html>
  );
}
