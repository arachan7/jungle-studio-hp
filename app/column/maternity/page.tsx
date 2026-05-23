import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'マタニティフォト完全ガイド｜厚木市フォトスタジオ JUNGLE STUDIO',
  description: 'マタニティフォトを神奈川県厚木市で撮るならジャングルスタジオ。妊娠中の美しい姿とお腹の大きさを最高の写真で残します。¥19,800〜。24時間オンライン予約受付中。',
  keywords: ['マタニティフォト', '厚木市', 'フォトスタジオ', 'マタニティ 写真', '妊婦 撮影', '妊娠 記念写真', 'マタニティ 神奈川', 'マタニティ 料金'],
  openGraph: {
    title: 'マタニティフォト完全ガイド｜厚木市フォトスタジオ JUNGLE STUDIO',
    description: '妊娠中の輝く姿を永遠に。¥19,800〜、24時間予約受付。',
    url: 'https://www.junglestudiophoto.com/column/maternity',
  },
  alternates: { canonical: 'https://www.junglestudiophoto.com/column/maternity' },
};

export default function MaternityColumn() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-xs text-stone-400 mb-8">
        <Link href="/" className="hover:text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span>マタニティフォト</span>
      </nav>

      <header className="mb-10">
        <p className="text-amber-700 text-xs tracking-widest mb-3">COLUMN / マタニティフォト</p>
        <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ fontFamily: 'serif' }}>
          マタニティフォト完全ガイド｜<br className="sm:hidden" />妊娠中の美しい姿を一生の思い出に
        </h1>
        <p className="text-stone-500 text-sm">神奈川県厚木市のフォトスタジオ「ジャングルスタジオ」が解説</p>
      </header>

      <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
        <Image
          src="/maternity.jpg"
          alt="マタニティフォト 妊婦 記念写真 フォトスタジオ 厚木市"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="prose prose-stone max-w-none text-sm leading-relaxed space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>マタニティフォトとは</h2>
          <p className="text-stone-700">
            マタニティフォトとは、妊娠中のお腹の大きさや、輝くようなママの姿を写真として残す撮影です。
            赤ちゃんがお腹の中にいる期間は約10ヶ月、そして二度と戻らない特別な時間です。
            「恥ずかしい」「体型が気になる」と感じる方も多いですが、撮影後は「撮っておいてよかった」と
            感じるお客様が圧倒的に多いのがマタニティフォトの特徴です。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>マタニティフォトを撮るベストな時期</h2>
          <div className="bg-amber-50 rounded-xl p-5">
            <p className="font-semibold text-stone-800 mb-2 text-sm">妊娠7〜9ヶ月（妊娠28〜36週頃）が最適</p>
            <ul className="text-sm text-stone-700 space-y-1">
              <li>・お腹が十分に大きく、丸みを帯びた美しいシルエットになる</li>
              <li>・体の動きがまだ比較的楽な時期</li>
              <li>・早産リスクが低い安定期</li>
              <li>・産前の体力が残っている</li>
            </ul>
          </div>
          <p className="text-stone-500 text-xs mt-2">※ 体調によって個人差があります。かかりつけ医にご相談の上でご予約ください。</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>ジャングルスタジオのマタニティフォトプラン</h2>
          <div className="bg-amber-50 rounded-2xl p-6">
            <div className="bg-white rounded-xl p-4 flex justify-between items-start flex-wrap gap-2">
              <div>
                <p className="font-bold text-stone-800 text-sm">マタニティフォト</p>
                <p className="text-xs text-stone-500">約30〜40分 / 1着 / 2スタジオ / 50枚保証</p>
                <p className="text-xs text-stone-400 mt-1">パートナー・上の子と一緒の撮影も可</p>
              </div>
              <p className="text-xl font-bold text-amber-700">¥19,800〜</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>シンプルプランという選択肢</h2>
          <div className="bg-stone-50 border-2 border-stone-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-red-500 text-white text-xs font-extrabold px-3 py-1 rounded-full">🎀 当日決めたい方に！</span>
            </div>
            <div className="bg-white rounded-xl p-4 mb-4">
              <p className="font-bold text-stone-800 text-sm mb-1">シンプルプラン</p>
              <p className="text-xl font-bold text-amber-700 mb-2">¥5,000〜</p>
              <div className="text-xs text-stone-500 space-y-1">
                <p>撮影時間：約90〜120分</p>
                <p>衣装：1〜4着（主役のみ）</p>
                <p>スタジオ：3〜4スタジオ</p>
                <p>家族・兄弟写真：何人でも自由</p>
                <p>データ保証：0枚スタート（撮影後にご自身で選択）</p>
                <p>主役追加：+¥2,500/人</p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 mb-4">
              <p className="font-semibold text-stone-800 text-sm mb-2">撮影後のデータ購入（当日選択）</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white rounded-lg p-2 text-center">
                  <p className="text-stone-500">美肌レタッチ 1枚</p>
                  <p className="font-bold text-stone-800">¥3,000</p>
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  <p className="text-stone-500">美肌レタッチ 10枚</p>
                  <p className="font-bold text-stone-800">¥25,000</p>
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  <p className="text-stone-500">美肌レタッチ 20枚</p>
                  <p className="font-bold text-stone-800">¥45,000</p>
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  <p className="text-stone-500">全データ（光レタッチのみ）</p>
                  <p className="font-bold text-stone-800">¥50,000</p>
                </div>
              </div>
            </div>
            <div className="text-xs text-stone-600 space-y-1">
              <p className="font-semibold text-stone-700 mb-1">こんな方におすすめ</p>
              <p>✓ データ枚数を当日の雰囲気で決めたい方</p>
              <p>✓ ご家族・きょうだい全員でたくさん撮りたい方</p>
              <p>✓ 予算を自分でコントロールしたい方</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>マタニティフォトの衣装・スタイリング</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-stone-50 rounded-xl p-4">
              <p className="font-semibold text-stone-800 text-sm mb-2">スタジオ衣装（1着含む）</p>
              <ul className="text-xs text-stone-600 space-y-1">
                <li>・マタニティドレス（白・ピンク等）</li>
                <li>・ウエストラインが見える衣装</li>
                <li>・カジュアル〜エレガントまで選択可</li>
              </ul>
            </div>
            <div className="bg-stone-50 rounded-xl p-4">
              <p className="font-semibold text-stone-800 text-sm mb-2">持ち込み衣装もOK</p>
              <ul className="text-xs text-stone-600 space-y-1">
                <li>・お気に入りのマタニティウェア</li>
                <li>・パートナーとのペアコーデ</li>
                <li>・上のお子様の衣装</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>よくある質問</h2>
          <div className="space-y-4">
            <FaqAccordion items={[
              { q: 'マタニティフォトはいつ撮影するのがおすすめですか？', a: '妊娠7〜9ヶ月（妊娠28〜36週頃）がおすすめです。おなかが大きくふくらみ、かつ体調が比較的安定している時期です。' },
              { q: '衣装はレンタルできますか？持ち込みでも大丈夫ですか？', a: '基本1着レンタルOKです。それ以上のレンタルや、持ち込み希望の方は事前にご相談ください。' },
              { q: 'パパや上の子も一緒に撮れますか？', a: 'はい、ご家族での写真も撮影できます。ご家族写真は+¥4,000のオプションで追加いただけます。' },
              { q: '撮影時間はどのくらいですか？', a: '撮影は約30分〜40分が目安です。' },
            ]} />
          </div>
        </section>
      </div>

      <div className="mt-12 bg-stone-900 rounded-2xl p-8 text-center">
        <p className="text-white font-bold mb-2" style={{ fontFamily: 'serif' }}>マタニティフォトのご予約はこちら</p>
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
