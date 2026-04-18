import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'バースデーフォト完全ガイド｜厚木市フォトスタジオ JUNGLE STUDIO',
  description: 'バースデー・誕生日記念写真を神奈川県厚木市で撮るならジャングルスタジオ。1歳・2歳・3歳などお誕生日の特別な瞬間をプロが撮影。¥29,800〜。24時間オンライン予約受付中。',
  keywords: ['バースデーフォト', '誕生日 写真', '厚木市', 'フォトスタジオ', '1歳 記念写真', '誕生日撮影', 'スマッシュケーキ', '神奈川 バースデー'],
  openGraph: {
    title: 'バースデーフォト完全ガイド｜厚木市フォトスタジオ JUNGLE STUDIO',
    description: 'お誕生日の特別な瞬間をプロのスタジオ写真で。¥29,800〜、24時間予約受付。',
    url: 'https://www.junglestudiophoto.com/column/birthday',
  },
  alternates: { canonical: 'https://www.junglestudiophoto.com/column/birthday' },
};

export default function BirthdayColumn() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-xs text-stone-400 mb-8">
        <Link href="/" className="hover:text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span>バースデーフォト</span>
      </nav>

      <header className="mb-10">
        <p className="text-amber-700 text-xs tracking-widest mb-3">COLUMN / バースデー</p>
        <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ fontFamily: 'serif' }}>
          バースデーフォト完全ガイド｜<br className="sm:hidden" />お誕生日の特別な一日を写真に残す
        </h1>
        <p className="text-stone-500 text-sm">神奈川県厚木市のフォトスタジオ「ジャングルスタジオ」が解説</p>
      </header>

      <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85"
          alt="バースデーフォト 誕生日 記念写真 フォトスタジオ 厚木市"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="prose prose-stone max-w-none text-sm leading-relaxed space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>バースデーフォトとは？</h2>
          <p className="text-stone-700">
            バースデーフォトとは、お子様のお誕生日を記念して行うスタジオ撮影です。
            1歳・2歳・3歳など、毎年の成長を写真として残すことで、子どもが大きくなったときに
            「こんなに小さかったんだ」と振り返れる大切なアルバムになります。
          </p>
          <p className="text-stone-700 mt-3">
            特に1歳のバースデーフォトは「ファーストバースデー」として人気が高く、
            スマッシュケーキ撮影（ケーキをぐちゃぐちゃにする撮影）も定番になっています。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>ジャングルスタジオのバースデープラン</h2>
          <div className="bg-amber-50 rounded-2xl p-6 space-y-4">
            {[
              { name: 'エコノミープラン', price: '¥29,800', time: '約40分', data: '100枚保証', studios: '2スタジオ', costumes: '2着' },
              { name: 'プレミアムプラン', price: '¥36,800', time: '約60分', data: '150枚保証', studios: '3スタジオ', costumes: '3着' },
              { name: 'ビジネスプラン', price: '¥49,800', time: '約90分', data: '200枚保証', studios: '4スタジオ', costumes: '4着', extra: '特典：アルバム or アクリルスタンド' },
              { name: 'ファーストプラン', price: '¥66,000', time: '約90分', data: '200枚保証（即日納品）', studios: '選び放題', costumes: '4着＋家族', extra: '特典：アルバム＆アクリルスタンド' },
            ].map((p) => (
              <div key={p.name} className="bg-white rounded-xl p-4 flex justify-between items-start flex-wrap gap-2">
                <div>
                  <p className="font-bold text-stone-800 text-sm">{p.name}</p>
                  <p className="text-xs text-stone-500">{p.time} / 衣装{p.costumes} / {p.studios} / {p.data} / 親子写真込み</p>
                  {p.extra && <p className="text-xs text-amber-700 mt-1">★ {p.extra}</p>}
                </div>
                <p className="text-xl font-bold text-amber-700">{p.price}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>よくある質問</h2>
          <div className="space-y-4">
            {[
              { q: 'スマッシュケーキ撮影はできますか？', a: 'はい。ケーキの持ち込みは可能です。汚れても大丈夫なスタジオ環境を準備してお待ちしています。' },
              { q: '毎年撮影してもらえますか？', a: 'もちろんです。毎年ご来店いただくご家族も多く、成長記録として続けていただけます。' },
              { q: '兄弟姉妹も一緒に撮れますか？', a: '可能です。主役のお子様を中心に、ご家族みんなで撮影できます。' },
              { q: '衣装は何着着られますか？', a: 'プランによって異なります。エコノミーは2着、プレミアムは3着、ビジネス・ファーストは4着以上です。' },
            ].map((faq, i) => (
              <div key={i} className="border border-stone-200 rounded-xl overflow-hidden">
                <div className="bg-stone-50 px-5 py-3 font-semibold text-sm text-stone-800">Q. {faq.q}</div>
                <div className="px-5 py-3 text-sm text-stone-600">A. {faq.a}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-12 bg-stone-900 rounded-2xl p-8 text-center">
        <p className="text-white font-bold mb-2" style={{ fontFamily: 'serif' }}>バースデーフォトのご予約はこちら</p>
        <p className="text-stone-400 text-xs mb-5">24時間オンライン予約受付 / 神奈川県厚木市</p>
        <a href="https://studio-app-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-reserve inline-block px-8 py-3 rounded-full text-sm">
          【24時間対応】ご予約はこちら
        </a>
      </div>
    </article>
  );
}
