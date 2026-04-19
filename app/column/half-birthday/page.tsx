import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'ハーフバースデーフォト完全ガイド｜厚木市フォトスタジオ JUNGLE STUDIO',
  description: 'ハーフバースデーの記念写真を神奈川県厚木市で撮るならジャングルスタジオ。生後6ヶ月の大切な瞬間をプロが撮影。¥29,800〜。24時間オンライン予約受付中。',
  keywords: ['ハーフバースデー', '写真', '厚木市', 'フォトスタジオ', 'ハーフバースデー撮影', '生後6ヶ月 記念写真', '半歳 写真', '神奈川 ハーフバースデー'],
  openGraph: {
    title: 'ハーフバースデーフォト完全ガイド｜厚木市フォトスタジオ JUNGLE STUDIO',
    description: '生後6ヶ月の記念をプロのスタジオ写真で。¥29,800〜、24時間予約受付。',
    url: 'https://www.junglestudiophoto.com/column/half-birthday',
  },
  alternates: { canonical: 'https://www.junglestudiophoto.com/column/half-birthday' },
};

export default function HalfBirthdayColumn() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-xs text-stone-400 mb-8">
        <Link href="/" className="hover:text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span>ハーフバースデー</span>
      </nav>

      <header className="mb-10">
        <p className="text-amber-700 text-xs tracking-widest mb-3">COLUMN / ハーフバースデー</p>
        <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ fontFamily: 'serif' }}>
          ハーフバースデーフォト完全ガイド｜<br className="sm:hidden" />生後6ヶ月の記念を最高の写真に
        </h1>
        <p className="text-stone-500 text-sm">神奈川県厚木市のフォトスタジオ「ジャングルスタジオ」が解説</p>
      </header>

      <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
        <Image
          src="/half-birthday.jpg"
          alt="ハーフバースデー フォトスタジオ 厚木市 生後6ヶ月 記念写真"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <div className="prose prose-stone max-w-none text-sm leading-relaxed space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>ハーフバースデーとは？</h2>
          <p className="text-stone-700">
            ハーフバースデーとは、赤ちゃんが生まれてちょうど半年（6ヶ月）を迎えるお祝いのことです。
            欧米から広まった文化で、日本でも「首が座り、表情が豊かになるこの時期を記念に残したい」と
            フォトスタジオでの撮影を選ぶご家族が急増しています。
          </p>
          <p className="text-stone-700 mt-3">
            生後6ヶ月の赤ちゃんは、寝返りができるようになり、笑顔もたくさん見せてくれる時期。
            まだ自分で動き回れないため、思い通りのポーズや構図で撮影しやすい絶好のタイミングです。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>ハーフバースデーをスタジオで撮るメリット</h2>
          <ul className="space-y-2 text-stone-700">
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>プロのライティングで肌のキメや表情を美しく撮影</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>数字の「6」バルーンや王冠など豊富な小物で演出</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>複数のスタジオセットで多彩なシーンが撮れる</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>親子写真・家族写真も同時に撮影可能</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>データを豊富にお渡しするので思い出を全部残せる</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>ジャングルスタジオのハーフバースデープラン</h2>
          <div className="bg-amber-50 rounded-2xl p-6 space-y-4">
            {[
              { name: 'エコノミープラン', price: '¥29,800', time: '約40分', data: '100枚保証', studios: '2スタジオ', costumes: '2着' },
              { name: 'プレミアムプラン', price: '¥36,800', time: '約60分', data: '150枚保証', studios: '3スタジオ', costumes: '3着' },
              { name: 'ビジネスプラン', price: '¥49,800', time: '約90分', data: '200枚保証', studios: '4スタジオ', costumes: '4着', extra: '特典：アルバム or アクリルスタンド' },
              { name: 'ファーストプラン', price: '¥66,000', time: '約90分', data: '200枚保証（即日納品）', studios: '選び放題', costumes: '4着＋家族', extra: '特典：アルバム＆アクリルスタンド' },
            ].map((p) => (
              <div key={p.name} className="bg-white rounded-xl p-4">
                <p className="font-bold text-stone-800 text-sm">{p.name}</p>
                <p className="text-xs text-stone-500">{p.time} / 衣装{p.costumes} / {p.studios} / {p.data} / 親子写真込み</p>
                {p.extra && <p className="text-xs text-amber-700 mt-1">★ {p.extra}</p>}
                <p className="text-xl font-bold text-amber-700 mt-2">{p.price}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>ハーフバースデー撮影の準備</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-stone-50 rounded-xl p-4">
              <p className="font-semibold text-stone-800 text-sm mb-2">赤ちゃんの準備</p>
              <ul className="text-xs text-stone-600 space-y-1">
                <li>・授乳・ミルクを済ませてから来店</li>
                <li>・おむつ・おしりふき持参</li>
                <li>・着替え・バスタオル</li>
                <li>・お気に入りのおもちゃ</li>
              </ul>
            </div>
            <div className="bg-stone-50 rounded-xl p-4">
              <p className="font-semibold text-stone-800 text-sm mb-2">撮影のコツ</p>
              <ul className="text-xs text-stone-600 space-y-1">
                <li>・ご機嫌な時間帯に予約を</li>
                <li>・いつもより少し早めに寝かせる</li>
                <li>・パパ・ママの服装も合わせて</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>よくある質問</h2>
          <div className="space-y-4">
            <FaqAccordion items={[
              { q: 'ハーフバースデーはいつ撮影するのがおすすめですか？', a: '生後6ヶ月前後が目安です。首がすわり、表情も豊かになる時期でねんね期の愛らしさが凝縮されています。±1〜2ヶ月前後でも全く問題ありません。' },
              { q: 'バースデー（1歳）はいつ撮影するのがおすすめですか？', a: 'つかまり立ちができるようになった頃がおすすめです。1歳前後になると人見知りが出ることもあるため、体調の良い日を選んでください。' },
              { q: 'ハーフバースデー・バースデープランは何着衣装を着られますか？', a: '2着〜4着以上撮影できます（レンタルまたはお持ち込み）。様々なプランがございます。' },
              { q: '家族・きょうだいと一緒に撮れますか？', a: 'どのプランでもご家族との撮影は対応しています。親2人、子1人がベースで、家族写真は付いていますが、兄弟だけの写真や、お子様1人増えて家族写真を撮る場合は別途3,000〜5,000円オプション費用がかかります。' },
              { q: '持ち込み衣装はOKですか？', a: 'はい、持ち込み衣装も対応しています。お気に入りの衣装でかわいい姿を残せます。' },
              { q: '撮影データはいつもらえますか？', a: '1週間以内にLINEまたはメールにてお渡しします。ファーストプランですと、翌日納品になります。即日納品オプションもございますので、メニュー表を参照ください。' },
            ]} />
          </div>
        </section>
      </div>

      <div className="mt-12 bg-stone-900 rounded-2xl p-8 text-center">
        <p className="text-white font-bold mb-2" style={{ fontFamily: 'serif' }}>ハーフバースデーのご予約はこちら</p>
        <p className="text-stone-400 text-xs mb-5">24時間オンライン予約受付 / 神奈川県厚木市</p>
        <a href="https://studio-app-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-reserve inline-block px-8 py-3 rounded-full text-sm">
          【24時間対応】ご予約はこちら
        </a>
      </div>
    </article>
  );
}
