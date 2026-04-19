import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: '入園・卒園・入学・卒業の記念写真ガイド｜厚木市フォトスタジオ JUNGLE STUDIO',
  description: '入園・卒園・入学・卒業の記念写真を神奈川県厚木市で撮るならジャングルスタジオ。成長の節目をプロのスタジオ写真で残します。¥24,800〜。24時間オンライン予約受付中。',
  keywords: ['入学 記念写真', '卒業 写真', '入園 フォトスタジオ', '卒園 記念撮影', '厚木市 写真', '入学式 写真', '卒業式 フォト', '神奈川 入学写真'],
  openGraph: {
    title: '入園・卒園・入学・卒業記念写真｜厚木市フォトスタジオ JUNGLE STUDIO',
    description: '成長の節目をプロのスタジオ写真で。¥24,800〜、24時間予約受付。',
    url: 'https://www.junglestudiophoto.com/column/nyuugaku',
  },
  alternates: { canonical: 'https://www.junglestudiophoto.com/column/nyuugaku' },
};

export default function NyuugakuColumn() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-xs text-stone-400 mb-8">
        <Link href="/" className="hover:text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span>卒入学</span>
      </nav>

      <header className="mb-10">
        <p className="text-amber-700 text-xs tracking-widest mb-3">COLUMN / 卒入学</p>
        <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ fontFamily: 'serif' }}>
          入園・卒園・入学・卒業の記念写真ガイド｜<br className="sm:hidden" />成長の節目を最高の1枚に
        </h1>
        <p className="text-stone-500 text-sm">神奈川県厚木市のフォトスタジオ「ジャングルスタジオ」が解説</p>
      </header>

      <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
        <Image
          src="/nyuugaku.jpg"
          alt="入学 卒業 記念写真 フォトスタジオ 厚木市"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="prose prose-stone max-w-none text-sm leading-relaxed space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>なぜ入園・入学・卒業の記念写真が大切なのか</h2>
          <p className="text-stone-700">
            子どもの成長は驚くほど早く、幼稚園入園・小学校入学・中学校入学・高校入学・大学入学・
            それぞれの卒業式は一度きりの特別な節目です。
            当日の式場では慌ただしく、ゆっくり写真を撮る余裕がないことも多いため、
            事前にフォトスタジオで「前撮り」をするご家族が増えています。
          </p>
          <p className="text-stone-700 mt-3">
            プロのカメラマンによる撮影なら、子どもの晴れ姿を美しいライティングで、
            複数のシーンで記録することができます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>対応している節目一覧</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {['幼稚園・保育園 入園', '幼稚園・保育園 卒園', '小学校 入学', '小学校 卒業', '中学校 入学', '中学校 卒業', '高校 入学', '高校 卒業', '大学 入学・卒業'].map((item) => (
              <div key={item} className="bg-blue-50 rounded-xl p-3 text-center text-xs font-medium text-stone-700">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>ジャングルスタジオの卒入学プラン</h2>
          <div className="bg-amber-50 rounded-2xl p-6 space-y-4">
            {[
              { name: '卒入学エコノミープラン', price: '¥24,800', time: '約30〜40分', data: '50枚保証', studios: '2スタジオ' },
              { name: '卒入学プレミアムプラン', price: '¥31,800', time: '約60分', data: '75枚保証', studios: '3スタジオ' },
              { name: '卒入学ビジネスプラン', price: '¥44,800', time: '約90分', data: '100枚保証', studios: '4スタジオ', extra: '特典：アルバム or アクリルスタンド' },
              { name: '卒入学ファーストプラン', price: '¥61,000', time: '約90分', data: '150枚保証（翌日納品）', studios: '選び放題', extra: '特典：アルバム＆アクリルスタンド' },
            ].map((p) => (
              <div key={p.name} className="bg-white rounded-xl p-4">
                <p className="font-bold text-stone-800 text-sm">{p.name}</p>
                <p className="text-xs text-stone-500">{p.time} / {p.studios} / {p.data} / 親子写真込み</p>
                {p.extra && <p className="text-xs text-amber-700 mt-1">★ {p.extra}</p>}
                <p className="text-xl font-bold text-amber-700 mt-2">{p.price}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-stone-400 mt-2">主役2人以上の場合は追加料金あり（2人目＋¥20,000〜）</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>前撮り・後撮りのすすめ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-stone-50 rounded-xl p-4">
              <p className="font-semibold text-stone-800 text-sm mb-2">前撮りのメリット</p>
              <ul className="text-xs text-stone-600 space-y-1">
                <li>・式当日の慌ただしさがない</li>
                <li>・ヘアメイク・衣装に時間をかけられる</li>
                <li>・天候に左右されない</li>
                <li>・式の招待状に使える写真が手に入る</li>
              </ul>
            </div>
            <div className="bg-stone-50 rounded-xl p-4">
              <p className="font-semibold text-stone-800 text-sm mb-2">後撮りのメリット</p>
              <ul className="text-xs text-stone-600 space-y-1">
                <li>・式の余韻に浸りながら撮影できる</li>
                <li>・オフシーズンで予約が取りやすい</li>
                <li>・費用が抑えられる場合がある</li>
                <li>・成長した姿を記録できる</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>よくある質問</h2>
          <div className="space-y-4">
            <FaqAccordion items={[
              { q: '入学・入園の撮影はいつ頃がおすすめですか？', a: '入学式・入園式の前後、2〜4月が最も人気の時期です。早めのご予約をおすすめします。' },
              { q: 'ランドセルや制服など持ち込みで撮影できますか？', a: 'はい。ご自身のランドセル・制服・体操服などお持ち込みいただいて撮影できます。' },
              { q: '卒業袴の着付けはお願いできますか？', a: 'はい、卒業袴の着付け・ヘアメイクを別途オプションで承っているスタジオがあります。事前予約が必要です。' },
              { q: '入園・入学プランでは何着着られますか？', a: '基本1着ですが、時間が許す限りは撮影できます。' },
              { q: 'きょうだいの誕生日撮影と同日に入学撮影はできますか？', a: 'お子様の体力や撮影時間の制約があるため、事前にご相談ください。' },
              { q: '撮影時間はどのくらいですか？', a: 'ご来店からご退店まで約1時間〜2時間が目安です。それぞれのプランに時間目安が書いていますので、ご参考にしてください。' },
            ]} />
          </div>
        </section>
      </div>

      <div className="mt-12 bg-stone-900 rounded-2xl p-8 text-center">
        <p className="text-white font-bold mb-2" style={{ fontFamily: 'serif' }}>卒入学記念写真のご予約はこちら</p>
        <p className="text-stone-400 text-xs mb-5">24時間オンライン予約受付 / 神奈川県厚木市</p>
        <a
          href="https://studio-app-two.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-reserve inline-block px-8 py-3 rounded-full text-sm"
        >
          【24時間対応】ご予約はこちら
        </a>
      </div>
    </article>
  );
}
