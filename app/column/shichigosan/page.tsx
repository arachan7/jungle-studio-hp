import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '七五三フォト完全ガイド｜厚木市のフォトスタジオ JUNGLE STUDIO',
  description: '七五三の記念写真を神奈川県厚木市で撮るなら「ジャングルスタジオ」。3歳・5歳・7歳の七五三写真の準備・衣装・当日の流れを完全解説。スタジオ撮影の料金は¥24,800〜。24時間オンライン予約。',
  keywords: ['七五三', '写真', '厚木市', 'フォトスタジオ', '七五三撮影', '七五三 神奈川', '七五三 料金', '3歳 七五三', '5歳 七五三', '7歳 七五三'],
  openGraph: {
    title: '七五三フォト完全ガイド｜厚木市フォトスタジオ JUNGLE STUDIO',
    description: '神奈川県厚木市で七五三の記念写真。¥24,800〜でプロのスタジオ撮影。24時間オンライン予約受付中。',
    url: 'https://www.junglestudiophoto.com/column/shichigosan',
  },
  alternates: { canonical: 'https://www.junglestudiophoto.com/column/shichigosan' },
};

export default function ShichigosanColumn() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-xs text-stone-400 mb-8">
        <Link href="/" className="hover:text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span>七五三フォト</span>
      </nav>

      <header className="mb-10">
        <p className="text-amber-700 text-xs tracking-widest mb-3">COLUMN / 七五三</p>
        <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ fontFamily: 'serif' }}>
          七五三フォト完全ガイド｜<br className="sm:hidden" />3歳・5歳・7歳の記念写真を残すために
        </h1>
        <p className="text-stone-500 text-sm">神奈川県厚木市のフォトスタジオ「ジャングルスタジオ」が解説</p>
      </header>

      <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
        <Image
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&q=85"
          alt="七五三 フォトスタジオ 厚木市 記念写真"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="prose prose-stone max-w-none text-sm leading-relaxed space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>七五三とは？その意味と由来</h2>
          <p className="text-stone-700">
            七五三（しちごさん）は、子どもの健やかな成長を祝う日本の伝統行事です。
            数え年または満年齢で、男の子は3歳と5歳、女の子は3歳と7歳にお祝いをするのが一般的とされています。
            11月15日が正式な七五三の日ですが、現在は10月〜12月にかけて神社や写真スタジオで広く行われています。
          </p>
          <p className="text-stone-700 mt-3">
            厚木市内でも、厚木神社や飯山白山森など人気のお参りスポットがあります。
            お参りの前後に、フォトスタジオで記念撮影をされるご家族が多くなっています。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>七五三の記念写真はスタジオで撮るメリット</h2>
          <ul className="space-y-2 text-stone-700">
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>天候に左右されず、常にベストな環境で撮影できる</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>豊富な衣装（着物・ドレス）の中から選べる</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>プロのカメラマンが子どもの自然な表情を引き出す</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>複数のスタジオセットで多彩なシーンが撮れる</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>親子写真・兄弟写真も同時に撮影可能</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>ジャングルスタジオの七五三プラン</h2>
          <div className="bg-amber-50 rounded-2xl p-6 space-y-4">
            {[
              { name: '七五三エコノミープラン', price: '¥24,800', time: '約30〜40分', data: '50枚保証', studios: '2スタジオ' },
              { name: '七五三プレミアムプラン', price: '¥31,800', time: '約60分', data: '75枚保証', studios: '3スタジオ' },
              { name: '七五三ビジネスプラン', price: '¥44,800', time: '約90分', data: '100枚保証', studios: '4スタジオ', extra: '特典：アルバム or アクリルスタンド' },
              { name: '七五三ファーストプラン', price: '¥61,000', time: '約90分', data: '150枚保証（翌日納品）', studios: '選び放題', extra: '特典：アルバム＆アクリルスタンド' },
            ].map((p) => (
              <div key={p.name} className="bg-white rounded-xl p-4 flex justify-between items-start flex-wrap gap-2">
                <div>
                  <p className="font-bold text-stone-800 text-sm">{p.name}</p>
                  <p className="text-xs text-stone-500">{p.time} / {p.studios} / {p.data}</p>
                  {p.extra && <p className="text-xs text-amber-700 mt-1">★ {p.extra}</p>}
                </div>
                <p className="text-xl font-bold text-amber-700">{p.price}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-stone-400 mt-2">すべて親子写真込み。主役2人以上は追加料金あり（2人目＋¥20,000〜）</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>七五三撮影の準備・当日の流れ</h2>
          <ol className="space-y-3 text-stone-700">
            <li className="flex gap-3"><span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>オンラインで予約（24時間受付）</li>
            <li className="flex gap-3"><span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>当日スタジオに来店・衣装選び</li>
            <li className="flex gap-3"><span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>ヘアメイク・着付け（衣装持ち込みも可）</li>
            <li className="flex gap-3"><span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>プロカメラマンによる撮影</li>
            <li className="flex gap-3"><span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">5</span>データ納品（プランにより即日〜翌日）</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>七五三撮影のよくある質問</h2>
          <div className="space-y-4">
            {[
              { q: '七五三の撮影はいつがベストですか？', a: '神社参拝に合わせて10月〜11月が最も人気ですが、早めの予約がおすすめです。前撮り・後撮りも対応しています。' },
              { q: '着物は持ち込めますか？', a: 'はい、衣装の持ち込みは可能です。持ち込みの場合も同じプラン料金で撮影いただけます。' },
              { q: '兄弟・姉妹と一緒に撮影できますか？', a: '可能です。主役2人の場合はツインプランも用意しています。七五三の主役が2人以上の場合は追加料金がかかります。' },
              { q: '子どもが泣いたり嫌がったりしても大丈夫ですか？', a: '慣れたカメラマンが時間をかけてリラックスさせながら撮影します。プレミアム以上のプランは時間に余裕があるためおすすめです。' },
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
        <p className="text-white font-bold mb-2" style={{ fontFamily: 'serif' }}>七五三の予約はこちら</p>
        <p className="text-stone-400 text-xs mb-5">24時間オンライン予約受付 / 神奈川県厚木市</p>
        <a
          href="https://studio-app-two.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-reserve inline-block px-8 py-3 rounded-full text-sm"
        >
          【24時間対応】予約はこちら
        </a>
      </div>
    </article>
  );
}
