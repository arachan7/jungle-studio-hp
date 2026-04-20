import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'お問い合わせ｜厚木市のフォトスタジオ JUNGLE STUDIO',
  description: '神奈川県厚木市のフォトスタジオ「ジャングルスタジオ」へのお問い合わせはLINEまたはお電話で。24時間LINE受付、電話受付10時〜19時。',
  openGraph: {
    title: 'お問い合わせ｜JUNGLE STUDIO',
    description: 'LINEまたはお電話でお気軽にお問い合わせください。24時間LINE受付中。',
    url: 'https://www.junglestudiophoto.com/contact',
  },
  alternates: { canonical: 'https://www.junglestudiophoto.com/contact' },
};

export default function ContactPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-xs text-stone-400 mb-8">
        <Link href="/" className="hover:text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span>お問い合わせ</span>
      </nav>

      <header className="mb-10">
        <p className="text-amber-700 text-xs tracking-widest mb-3">CONTACT</p>
        <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ fontFamily: 'serif' }}>
          お問い合わせ
        </h1>
      </header>

      <div className="space-y-5">
        {/* LINE */}
        <div className="border border-stone-200 rounded-2xl p-6">
          <p className="text-xs text-stone-400 tracking-widest mb-1">LINE</p>
          <p className="text-lg font-bold text-stone-800 mb-4" style={{ fontFamily: 'serif' }}>公式LINEでのお問い合わせはこちら</p>
          <p className="text-sm text-stone-500 mb-1">対応時間：24時間可能</p>
          <p className="text-xs text-stone-400 mb-5">※ご返信は10時〜19時を中心に、順次対応させていただきます。時間外でも確認でき次第ご返信いたします。</p>
          <a
            href="https://lin.ee/8CBpUrL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#06C755] hover:bg-[#05b34c] text-white text-sm font-bold px-6 py-3 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            LINEで問い合わせる
          </a>
        </div>

        {/* 電話 */}
        <div className="border border-stone-200 rounded-2xl p-6">
          <p className="text-xs text-stone-400 tracking-widest mb-1">PHONE</p>
          <p className="text-lg font-bold text-stone-800 mb-4" style={{ fontFamily: 'serif' }}>電話はこちら</p>
          <p className="text-3xl font-bold text-amber-700 tracking-wider mb-2">070-3763-0878</p>
          <p className="text-sm text-stone-500 mb-5">対応時間：10時〜19時</p>
          <a
            href="tel:07037630878"
            className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white text-sm font-bold px-6 py-3 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            今すぐ電話する
          </a>
        </div>

        {/* オンライン予約 */}
        <div className="bg-stone-900 rounded-2xl p-6 text-center">
          <p className="text-white font-bold mb-2" style={{ fontFamily: 'serif' }}>ご予約はオンラインでも受付中</p>
          <p className="text-stone-400 text-xs mb-5">24時間いつでもご予約いただけます</p>
          <a
            href="https://studio-app-two.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-reserve inline-block px-8 py-3 rounded-full text-sm"
          >
            【24時間対応】ご予約はこちら
          </a>
        </div>
      </div>
    </article>
  );
}
