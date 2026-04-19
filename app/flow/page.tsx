import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ご利用の流れ｜厚木市フォトスタジオ JUNGLE STUDIO',
  description: 'ジャングルスタジオのご利用の流れをご紹介。ご予約から写真のお渡しまで、安心してお任せください。神奈川県厚木市のフォトスタジオ。',
  alternates: { canonical: 'https://www.junglestudiophoto.com/flow' },
};

const STEPS = [
  {
    num: '①',
    title: '撮影のご予約',
    body: 'WEBの予約フォームもしくはお電話や各種SNSのDMから。スタッフがお客様のご要望をお伺いします。\n\n（撮影日の30日〜60日以上前までにWEB予約するとうれしい特典があります。詳しくはWEB予約ページのカレンダーにて記載があります。）',
    caption: 'はじめの一歩から、特別な一日がスタートします。',
    link: { label: 'WEB予約ページはこちら', href: 'https://studio-app-two.vercel.app/', external: true },
  },
  {
    num: '②',
    title: '衣装選び',
    body: '撮影当日は、普段着でご来店ください。お持込の衣装がある場合は、着用の上ご来店いただいても構いません。衣装はデザイン・カラー・サイズを豊富にご用意しております。\n\n※着用できる衣装の枚数はプランごとに違います。',
    caption: 'どれにしようか迷う時間も、思い出のひとつになります。',
  },
  {
    num: '③',
    title: '着付け・ヘアセット',
    body: 'お子様の着付けは全プランに含まれております。\n七五三プランなど、ヘアセット付きのプランをご利用の場合は、ヘアセットもお任せください。\n基本プランの着付けは無料です。',
    caption: '少しずつ仕上がっていく姿に、お子様も思わず笑顔に。',
    link: { label: '七五三のコラムはこちら', href: '/column/shichigosan', external: false },
  },
  {
    num: '④',
    title: '撮影',
    body: 'お気に入りの表情で何ポーズでもお撮りします。カメラマンがやさしくリードしますので、緊張ぎみのお子さまも安心です。',
    caption: 'その瞬間の「いちばん可愛い」を、しっかり残します。',
  },
  {
    num: '⑤',
    title: '写真選び',
    body: '撮影されたお写真はその場でパソコンにて確認もいただけます。どんな写真があるかなど、その場で確認できます。',
    caption: '見返すたびに、思わず笑顔になる時間。',
  },
  {
    num: '⑥',
    title: '商品のお渡し',
    body: '1週間以内に、公式LINEもしくはメールにて商品を納品いたします。プランやオプションにより、納品を即日や翌日など早める事も可能です。',
    caption: '楽しかった一日が、カタチになって届きます。',
  },
];

export default function FlowPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-xs text-stone-400 mb-8">
        <Link href="/" className="hover:text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span>ご利用の流れ</span>
      </nav>

      {/* Hero */}
      <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-12">
        <Image
          src="/flow-hero.jpg"
          alt="ジャングルスタジオ ご利用の流れ"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Steps */}
      <div className="space-y-10">
        {STEPS.map((step, i) => (
          <div key={i} className="relative">
            {/* connector line */}
            {i < STEPS.length - 1 && (
              <div className="absolute left-6 top-14 bottom-0 w-px bg-amber-200 -mb-10" />
            )}
            <div className="flex gap-4">
              {/* number badge */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-lg" style={{ fontFamily: 'serif' }}>
                {step.num}
              </div>

              <div className="flex-1 pb-2">
                <h2 className="text-lg font-bold text-stone-800 mb-3" style={{ fontFamily: 'serif' }}>
                  {step.title}
                </h2>
                <p className="text-sm text-stone-600 leading-relaxed whitespace-pre-line mb-3">
                  {step.body}
                </p>
                {step.link && (
                  step.link.external ? (
                    <a
                      href={step.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-amber-700 text-sm font-medium hover:underline mb-3"
                    >
                      ▶︎ {step.link.label}
                    </a>
                  ) : (
                    <Link
                      href={step.link.href}
                      className="inline-flex items-center gap-1 text-amber-700 text-sm font-medium hover:underline mb-3"
                    >
                      ▶︎ {step.link.label}
                    </Link>
                  )
                )}
                <p className="text-xs text-stone-400 italic">{step.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 bg-stone-900 rounded-2xl p-8 text-center">
        <p className="text-white font-bold mb-2 text-lg" style={{ fontFamily: 'serif' }}>
          24時間いつでもご予約いただけます
        </p>
        <p className="text-stone-400 text-xs mb-5">神奈川県厚木市 / 完全予約制</p>
        <a
          href="https://studio-app-two.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-reserve inline-block px-8 py-3 rounded-full text-sm"
        >
          【24時間対応】ご予約はこちら
        </a>
      </div>

      {/* Access */}
      <div className="mt-10 bg-white rounded-2xl p-8 border border-stone-200">
        <p className="text-xs text-stone-400 tracking-widest mb-4">ACCESS</p>
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="text-xs text-stone-400 mb-1">住所</dt>
            <dd className="text-stone-800 leading-relaxed">〒243-0014 神奈川県厚木市旭町5丁目43-14<br />パストラルASAHI 401-A</dd>
          </div>
          <div>
            <dt className="text-xs text-stone-400 mb-1">電話番号</dt>
            <dd><a href="tel:07037630878" className="text-stone-800 hover:text-amber-700">070-3763-0878</a></dd>
          </div>
          <div>
            <dt className="text-xs text-stone-400 mb-1">営業時間</dt>
            <dd className="text-stone-800">10:00〜21:00<span className="text-xs text-stone-500 ml-1">（最終入場 19:00）</span></dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
