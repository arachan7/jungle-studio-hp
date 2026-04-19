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
          src="/birthday.jpg"
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
              { q: '誕生日当日でないといけませんか？', a: 'いいえ。お誕生日の前後で都合の良い日にご予約いただけます。' },
              { q: '1歳の誕生日撮影でおすすめの時期は？', a: 'つかまり立ちができるようになった頃がおすすめです。人見知りが出やすい時期でもあるため、体調・機嫌の良い日を選んでください。' },
              { q: '誕生日プランでは何着着られますか？', a: '2着〜4着以上で、プランにより選べます。' },
              { q: 'スマッシュケーキはできますか？', a: '今の所対応していないですが、今後実装予定になります。' },
              { q: 'バルーンや小物などの持ち込みはできますか？', a: '無料で持ち込み可能です（名前ボード・バルーン・髪飾りなど）。溶けやすいチョコレートや飴など衣装を汚す可能性のあるものはご遠慮ください。' },
              { q: 'きょうだいをそれぞれ主役で撮影できますか？', a: '基本プランは主役のお子様1名分の内容です。それぞれのお子様のソロ撮影は有料オプションまたはツインプランをお選びください。' },
              { q: '家族・きょうだいとの写真も撮れますか？', a: 'どのプランでもご家族との撮影は対応しています。親2人、子1人がベースで、家族写真は付いています。ですが、兄弟だけの写真や、お子様1人増えて家族写真を撮る場合は別途3,000〜5,000円オプション費用がかかります。' },
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
