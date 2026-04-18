import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "JUNGLE STUDIO | 神奈川県厚木市のフォトスタジオ",
    template: "%s | JUNGLE STUDIO",
  },
  description: "神奈川県厚木市のフォトスタジオ「ジャングルスタジオ」。七五三・お宮参り・ニューボーンフォト・マタニティ・入園卒業など、お子様の大切な瞬間を高品質な写真で残します。24時間オンライン予約受付。",
  keywords: ["フォトスタジオ", "厚木市", "七五三", "お宮参り", "ニューボーンフォト", "マタニティフォト", "記念写真", "ジャングルスタジオ"],
  openGraph: {
    siteName: "JUNGLE STUDIO",
    locale: "ja_JP",
    type: "website",
    url: "https://www.junglestudiophoto.com",
  },
  alternates: {
    canonical: "https://www.junglestudiophoto.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
