import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ニューボーンフォトとは｜厚木市フォトスタジオ JUNGLE STUDIO',
  description: 'ニューボーンフォト（新生児撮影）を神奈川県厚木市で撮るならジャングルスタジオ。生後2週間以内の赤ちゃんの奇跡の瞬間をプロが撮影。¥19,800〜。24時間オンライン予約。',
  keywords: ['ニューボーンフォト', '新生児撮影', '厚木市', 'フォトスタジオ', 'ニューボーン 写真', '生後2週間 写真', '赤ちゃん スタジオ', '神奈川 ニューボーン'],
  openGraph: {
    title: 'ニューボーンフォトとは｜厚木市フォトスタジオ JUNGLE STUDIO',
    description: '生後2週間以内の奇跡の瞬間を。¥19,800〜、24時間予約受付。',
    url: 'https://www.junglestudiophoto.com/column/newborn',
  },
  alternates: { canonical: 'https://www.junglestudiophoto.com/column/newborn' },
};

export default function NewbornColumn() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-xs text-stone-400 mb-8">
        <Link href="/" className="hover:text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span>ニューボーンフォト</span>
      </nav>

      <header className="mb-10">
        <p className="text-amber-700 text-xs tracking-widest mb-3">COLUMN / ニューボーンフォト</p>
        <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ fontFamily: 'serif' }}>
          ニューボーンフォトとは｜<br className="sm:hidden" />生後2週間の奇跡を写真に残す理由
        </h1>
        <p className="text-stone-500 text-sm">神奈川県厚木市のフォトスタジオ「ジャングルスタジオ」が解説</p>
      </header>

      <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
        <Image
          src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=900&q=85"
          alt="ニューボーンフォト 新生児撮影 フォトスタジオ 厚木市"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="prose prose-stone max-w-none text-sm leading-relaxed space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>ニューボーンフォトとは</h2>
          <p className="text-stone-700">
            ニューボーンフォト（Newborn Photo）とは、生後2〜3週間以内の新生児を専門に撮影するフォトグラフィーです。
            この時期の赤ちゃんは、まるでお母さんのお腹の中にいるように丸まって眠る姿や、
            ふっくらとした頬、小さな手足が特徴的で、二度と戻らない「奇跡の姿」として人気が高まっています。
          </p>
          <p className="text-stone-700 mt-3">
            欧米では古くから文化として根付いており、日本でも近年急速に広まっています。
            神奈川県厚木市のジャングルスタジオでも、多くのご家族がニューボーンフォトを撮影されています。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>生後2週間以内に撮る理由</h2>
          <p className="text-stone-700">
            ニューボーンフォトは生後14日（2週間）以内の撮影が理想とされています。その理由は：
          </p>
          <ul className="space-y-2 text-stone-700 mt-3">
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>子宮内で過ごしたポーズ（胎児ポーズ）が自然に取れる</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>長時間眠ることができるため、撮影がスムーズ</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>肌が最も柔らかくふっくらしている</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>生まれたままの姿が最もリアルに残せる</li>
          </ul>
          <p className="text-stone-700 mt-3">
            生後3〜4週間以降は首が座り始め、赤ちゃんの動きが活発になるため、
            安全で美しいニューボーンポーズが難しくなります。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>ジャングルスタジオのニューボーンフォトプラン</h2>
          <div className="bg-amber-50 rounded-2xl p-6">
            <div className="bg-white rounded-xl p-4 flex justify-between items-start flex-wrap gap-2">
              <div>
                <p className="font-bold text-stone-800 text-sm">ニューボーンフォト</p>
                <p className="text-xs text-stone-500">約30〜40分 / 1着 / 2スタジオ / 50枚保証 / 親子写真込み</p>
                <p className="text-xs text-amber-700 mt-1">生後14日以内の撮影推奨</p>
              </div>
              <p className="text-xl font-bold text-amber-700">¥19,800〜</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>ニューボーンフォトの安全性について</h2>
          <p className="text-stone-700">
            ニューボーンフォトはデリケートな新生児を扱うため、安全性が最優先です。
            ジャングルスタジオでは以下の安全基準を遵守しています：
          </p>
          <ul className="space-y-2 text-stone-700 mt-3">
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>室温を28〜30℃に調整し、赤ちゃんが快適な環境を維持</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>無理なポーズは一切行わない</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>常に保護者の方に立ち会っていただく</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>赤ちゃんのペースに合わせてゆっくり進める</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>よくある質問</h2>
          <div className="space-y-4">
            {[
              { q: 'ニューボーンフォトはいつ撮影するのがおすすめですか？', a: '生後7〜14日以内がおすすめです。この時期は新生児特有の丸まった姿勢・柔らかさが残っており、後から振り返ると「この時期にしか撮れなかった」写真になります。' },
              { q: 'スタジオ撮影ですか？自宅への出張撮影もできますか？', a: '基本はスタジオ撮影になります。自宅への出張は今後予定しております。' },
              { q: '安全面は大丈夫ですか？', a: '赤ちゃんの安全を最優先に撮影します。フラッシュを使わず自然光での撮影が基本。使用する布・衣装・タオルは毎回無添加洗剤で洗濯・消毒し、スタッフは手洗い・消毒・マスク着用で対応します。' },
              { q: '無理なポーズ（頬杖・直立など）はさせますか？', a: 'お腹の中にいた時に近い仰向けやうつ伏せポーズが基本です。無理のない体制での安全な撮影を行います。' },
              { q: '何カットデータをもらえますか？', a: '基本が50枚データ保証です。' },
              { q: '直前にキャンセルしたい場合はどうなりますか？', a: '前日・当日のキャンセルにはキャンセル料が発生する場合があります。詳しくはご予約フォームの1番下のキャンセルポリシーをご覧ください。' },
              { q: 'スタッフが感染症にかかった場合はどうなりますか？', a: 'スタッフや同居の家族が感染症にかかった場合は撮影の延期またはキャンセル対応します。その場合は全額返金が基本です。' },
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
        <p className="text-white font-bold mb-2" style={{ fontFamily: 'serif' }}>ニューボーンフォトのご予約はこちら</p>
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
