import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'お宮参りの記念写真ガイド｜厚木市フォトスタジオ JUNGLE STUDIO',
  description: 'お宮参りの記念写真を神奈川県厚木市で撮るならジャングルスタジオ。生後1ヶ月の赤ちゃんと家族の大切な瞬間をプロが撮影。¥19,800〜。24時間オンライン予約受付中。',
  keywords: ['お宮参り', '写真', '厚木市', 'フォトスタジオ', 'お宮参り撮影', '赤ちゃん 写真', 'お宮参り 料金', '生後1ヶ月 記念写真', '神奈川 お宮参り'],
  openGraph: {
    title: 'お宮参りの記念写真ガイド｜厚木市フォトスタジオ JUNGLE STUDIO',
    description: '生後1ヶ月の記念をプロのスタジオ写真で。¥19,800〜、24時間予約受付。',
    url: 'https://www.junglestudiophoto.com/column/omiyamairi',
  },
  alternates: { canonical: 'https://www.junglestudiophoto.com/column/omiyamairi' },
};

export default function OmiyamairColumn() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-xs text-stone-400 mb-8">
        <Link href="/" className="hover:text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span>お宮参り</span>
      </nav>

      <header className="mb-10">
        <p className="text-amber-700 text-xs tracking-widest mb-3">COLUMN / お宮参り</p>
        <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ fontFamily: 'serif' }}>
          お宮参りの記念写真ガイド｜<br className="sm:hidden" />生後1ヶ月の大切なお祝いを写真に残す
        </h1>
        <p className="text-stone-500 text-sm">神奈川県厚木市のフォトスタジオ「ジャングルスタジオ」が解説</p>
      </header>

      <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
        <Image
          src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=900&q=85"
          alt="お宮参り 記念写真 フォトスタジオ 厚木市"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="prose prose-stone max-w-none text-sm leading-relaxed space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>お宮参りとは？時期と意味</h2>
          <p className="text-stone-700">
            お宮参りは、赤ちゃんが無事に生まれたことを神様に感謝し、健やかな成長を祈願する日本の伝統行事です。
            一般的に男の子は生後31〜32日目、女の子は生後32〜33日目に行うとされていますが、
            現代では生後1ヶ月を目安に、家族の都合に合わせて行うご家庭が増えています。
          </p>
          <p className="text-stone-700 mt-3">
            厚木市周辺では、厚木神社・愛甲八幡宮などでお宮参りをされる方が多く、
            参拝の前後にフォトスタジオで記念撮影をするケースが人気です。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>お宮参り写真をスタジオで撮るポイント</h2>
          <ul className="space-y-2 text-stone-700">
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>生後1ヶ月の赤ちゃんは体温調節が未熟。快適な室内スタジオが安心</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>授乳室完備で赤ちゃんのペースに合わせた撮影が可能</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>白無垢・産着・洋装など豊富な衣装から選択可能</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>両家の祖父母も一緒に家族写真として残せる</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>参拝後の疲れを気にせずゆったり撮影できる</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>ジャングルスタジオのお宮参りプラン</h2>
          <div className="bg-amber-50 rounded-2xl p-6">
            <div className="bg-white rounded-xl p-4 flex justify-between items-start flex-wrap gap-2">
              <div>
                <p className="font-bold text-stone-800 text-sm">お宮参りプラン</p>
                <p className="text-xs text-stone-500">約30〜40分 / 2スタジオ / 50枚保証 / 親子写真込み</p>
                <p className="text-xs text-stone-400 mt-1">衣装持ち込みOK</p>
              </div>
              <p className="text-xl font-bold text-amber-700">¥19,800〜</p>
            </div>
            <p className="text-xs text-stone-400 mt-3">延長料金：15分ごとに¥3,300（税込）</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>お宮参り撮影の服装・準備リスト</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-stone-50 rounded-xl p-4">
              <p className="font-semibold text-stone-800 text-sm mb-2">赤ちゃんの準備</p>
              <ul className="text-xs text-stone-600 space-y-1">
                <li>□ 産着（スタジオでも用意可）</li>
                <li>□ 白いベビー服・肌着</li>
                <li>□ 授乳グッズ・ミルク</li>
                <li>□ おむつ・おしりふき</li>
                <li>□ おくるみ・バスタオル</li>
              </ul>
            </div>
            <div className="bg-stone-50 rounded-xl p-4">
              <p className="font-semibold text-stone-800 text-sm mb-2">パパ・ママ・祖父母の服装</p>
              <ul className="text-xs text-stone-600 space-y-1">
                <li>□ 訪問着・振袖・留袖</li>
                <li>□ セレモニースーツ・ワンピース</li>
                <li>□ 落ち着いた色合いの服装</li>
                <li>□ 動きやすい靴</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>よくある質問</h2>
          <div className="space-y-4">
            {[
              { q: '赤ちゃんが寝ていても大丈夫ですか？', a: '大丈夫です。眠っている赤ちゃんの柔らかい表情もとても素敵な写真になります。起きた瞬間の笑顔も逃さず撮影します。' },
              { q: '産着の持ち込みはできますか？', a: 'はい。家から持参いただいた産着での撮影も可能です。スタジオでもご用意しています。' },
              { q: '兄弟・家族全員で撮影できますか？', a: '可能です。上のお子様や両家祖父母を含めた家族写真も撮影します。' },
              { q: '撮影の所要時間はどれくらいですか？', a: '基本プランで約30〜40分です。赤ちゃんのペースに合わせて進めますので、余裕をもってお越しください。' },
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
        <p className="text-white font-bold mb-2" style={{ fontFamily: 'serif' }}>お宮参りのご予約はこちら</p>
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
