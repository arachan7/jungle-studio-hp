import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'よくある質問｜厚木市フォトスタジオ JUNGLE STUDIO',
  description: 'ジャングルスタジオへのよくある質問をまとめています。予約・料金・衣装・撮影当日の流れなど。',
  alternates: { canonical: 'https://www.junglestudiophoto.com/faq' },
};

const FAQ_CATEGORIES = [
  {
    label: '七五三',
    href: '/column/shichigosan',
    items: [
      { q: '七五三の撮影はいつ頃がおすすめですか？', a: '七五三のお祝い本来の日は11月15日ですが、9月以降は大変混み合うためお早めのご予約をおすすめします。1月〜9月はオフシーズンとなり、お得な料金で撮影できます。前撮り・後撮りどちらも人気です。' },
      { q: '数え年・満年齢どちらで撮影すればいいですか？', a: 'どちらでも問題ありません。3歳は数え年だと着付けが大変な場合もあるため、お子様の体格や成長具合に合わせてお決めください。' },
      { q: '着物はレンタルできますか？持ち込みも可能ですか？', a: 'どちらも対応しています。持ち込みの場合はもし出来れば、「肩上げ」「半衿つけ」を事前に済ませた状態でお持ちください。' },
      { q: '着付け・ヘアセットはプランに含まれますか？', a: '七五三プランは、着付け・ヘアメイクがオプションで選べます。レンタル着付けヘアメ、持ち込み着付けヘアメ、何もなし　の３パターンで選べます。パパ・ママなど大人の方の着付けは別途オプション料金です。' },
    ],
  },
  {
    label: 'ハーフバースデー・バースデー',
    href: '/column/birthday',
    items: [
      { q: 'ハーフバースデーはいつ撮影するのがおすすめですか？', a: '生後6ヶ月前後が目安です。首がすわり、表情も豊かになる時期でねんね期の愛らしさが凝縮されています。±1〜2ヶ月前後でも全く問題ありません。' },
      { q: '誕生日当日でないといけませんか？', a: 'いいえ。お誕生日の前後で都合の良い日にご予約いただけます。' },
      { q: 'バルーンや小物などの持ち込みはできますか？', a: '無料で持ち込み可能です（名前ボード・バルーン・髪飾りなど）。溶けやすいチョコレートや飴など衣装を汚す可能性のあるものはご遠慮ください。' },
      { q: '家族・きょうだいと一緒に撮れますか？', a: 'どのプランでもご家族との撮影は対応しています。親2人、子1人がベースで、家族写真は付いていますが、兄弟だけの写真や、お子様1人増えて家族写真を撮る場合は別途3,000〜5,000円オプション費用がかかります。' },
    ],
  },
  {
    label: 'お宮参り',
    href: '/column/omiyamairi',
    items: [
      { q: 'お宮参りはいつ撮影するのがおすすめですか？', a: '伝統的には男の子は生後31〜32日目、女の子は生後32〜33日目とされていますが、現在は1ヶ月検診が終わった後、体調の良い日を選ぶご家族が多いです。100日祝いと一緒に撮影されるケースも増えています。' },
      { q: 'お宮参り用のお祝い着（産着）はレンタルできますか？', a: 'はい。お祝い着のレンタルがプランに含まれています。' },
      { q: '赤ちゃんが泣いてしまっても大丈夫ですか？', a: '大丈夫です。スタッフが一緒にあやしながら丁寧に撮影します。どうしても撮影が難しい場合は、別日に変更可能です。' },
    ],
  },
  {
    label: 'ニューボーンフォト',
    href: '/column/newborn',
    items: [
      { q: 'ニューボーンフォトはいつ撮影するのがおすすめですか？', a: '生後7〜14日以内がおすすめです。この時期は新生児特有の丸まった姿勢・柔らかさが残っており、後から振り返ると「この時期にしか撮れなかった」写真になります。' },
      { q: '安全面は大丈夫ですか？', a: '赤ちゃんの安全を最優先に撮影します。フラッシュを使わず自然光での撮影が基本。使用する布・衣装・タオルは毎回無添加洗剤で洗濯・消毒し、スタッフは手洗い・消毒・マスク着用で対応します。' },
      { q: '直前にキャンセルしたい場合はどうなりますか？', a: '前日・当日のキャンセルにはキャンセル料が発生する場合があります。詳しくはご予約フォームの1番下のキャンセルポリシーをご覧ください。' },
    ],
  },
  {
    label: 'マタニティフォト',
    href: '/column/maternity',
    items: [
      { q: 'マタニティフォトはいつ撮影するのがおすすめですか？', a: '妊娠7〜9ヶ月（妊娠28〜36週頃）がおすすめです。おなかが大きくふくらみ、かつ体調が比較的安定している時期です。' },
      { q: 'パパや上の子も一緒に撮れますか？', a: 'はい、ご家族での写真も撮影できます。どのプランでもご家族との撮影はOKです。' },
    ],
  },
  {
    label: '卒入学',
    href: '/column/nyuugaku',
    items: [
      { q: '入学・入園の撮影はいつ頃がおすすめですか？', a: '入学式・入園式の前後、2〜4月が最も人気の時期です。早めのご予約をおすすめします。' },
      { q: 'ランドセルや制服など持ち込みで撮影できますか？', a: 'はい。ご自身のランドセル・制服・体操服などお持ち込みいただいて撮影できます。' },
    ],
  },
];

export default function FaqPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-xs text-stone-400 mb-8">
        <Link href="/" className="hover:text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span>よくある質問</span>
      </nav>

      <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden mb-10">
        <Image
          src="/faq-hero.jpg"
          alt="よくある質問"
          fill
          className="object-cover"
          priority
        />
      </div>

      <header className="mb-12">
        <p className="text-amber-700 text-xs tracking-widest mb-3">FAQ</p>
        <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ fontFamily: 'serif' }}>
          よくある質問
        </h1>
        <p className="text-stone-500 text-sm">ご来店前によく寄せられるご質問をまとめました</p>
      </header>

      <div className="space-y-10">
        {FAQ_CATEGORIES.map((cat) => (
          <section key={cat.label}>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-bold text-stone-800" style={{ fontFamily: 'serif' }}>{cat.label}</h2>
              <Link href={cat.href} className="text-xs text-amber-600 hover:underline">詳しく見る →</Link>
            </div>
            <FaqAccordion items={cat.items} />
          </section>
        ))}
      </div>

      <div className="mt-14 bg-stone-900 rounded-2xl p-8 text-center">
        <p className="text-white font-bold mb-2 text-lg" style={{ fontFamily: 'serif' }}>
          その他のご質問はお気軽に
        </p>
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
