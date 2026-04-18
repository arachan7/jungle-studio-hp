import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JUNGLE STUDIO | 神奈川県厚木市のフォトスタジオ',
  description: '神奈川県厚木市のフォトスタジオ「ジャングルスタジオ」。七五三・お宮参り・ニューボーンフォト・マタニティ・入園卒業など、お子様の大切な瞬間を最高の写真で残します。24時間オンライン予約受付中。',
};

const PLAN_CATEGORIES = [
  {
    id: 'base',
    title: 'ハーフバースデー・バースデー・記念写真',
    subtitle: '定番4プラン',
    color: 'from-amber-50 to-stone-50',
    plans: [
      { name: 'エコノミープラン', price: '¥29,800', time: '約40分', costumes: '2着', studios: '2スタジオ', data: '100枚保証', bonus: '親子写真込み' },
      { name: 'プレミアムプラン', price: '¥36,800', time: '約60分', costumes: '3着', studios: '3スタジオ', data: '150枚保証', bonus: '親子写真込み' },
      { name: 'ビジネスプラン', price: '¥49,800', time: '約90分', costumes: '4着', studios: '4スタジオ', data: '200枚保証', bonus: '親子写真込み', extra: '特典：アルバム or アクリルスタンド' },
      { name: 'ファーストプラン', price: '¥66,000', time: '約90分', costumes: '4着＋家族', studios: '選び放題', data: '200枚保証（即日納品）', bonus: '親子写真込み', extra: '特典：アルバム＆アクリルスタンド' },
    ],
  },
  {
    id: 'twin',
    title: '兄弟・姉妹の専用プラン（主役2人）',
    subtitle: 'ツインプラン',
    color: 'from-rose-50 to-stone-50',
    plans: [
      { name: 'ツインエコノミープラン', price: '¥44,800', time: '約60分', costumes: '2着ずつ', studios: '2スタジオ', data: '合計120枚保証', bonus: '兄弟写真・親子写真込み' },
      { name: 'ツインプレミアムプラン', price: '¥51,800', time: '約90分', costumes: '3着ずつ', studios: '3スタジオ', data: '合計170枚保証', bonus: '兄弟写真・親子写真込み' },
      { name: 'ツインビジネスプラン', price: '¥64,800', time: '約120分', costumes: '4着ずつ', studios: '4スタジオ', data: '合計220枚保証', bonus: '兄弟写真・親子写真込み', extra: '特典：アルバム＆アクリルスタンド' },
      { name: 'ツインファーストプラン', price: '¥92,000', time: '約120分', costumes: '4着ずつ＋数着', studios: '選び放題', data: '合計220枚保証（即日納品）', bonus: '兄弟写真・親子写真込み', extra: '特典：アルバム＆アクリルスタンド' },
    ],
  },
  {
    id: 'shichigosan',
    title: '七五三',
    subtitle: '七五三専用プラン',
    color: 'from-purple-50 to-stone-50',
    plans: [
      { name: '七五三エコノミープラン', price: '¥24,800', time: '約30〜40分', costumes: '1着', studios: '2スタジオ', data: '50枚保証', bonus: '親子写真込み' },
      { name: '七五三プレミアムプラン', price: '¥31,800', time: '約60分', costumes: '1着', studios: '3スタジオ', data: '75枚保証', bonus: '親子写真込み' },
      { name: '七五三ビジネスプラン', price: '¥44,800', time: '約90分', costumes: '1着', studios: '4スタジオ', data: '100枚保証', bonus: '親子写真込み', extra: '特典：アルバム or アクリルスタンド' },
      { name: '七五三ファーストプラン', price: '¥61,000', time: '約90分', costumes: '4着保証＋数着', studios: '選び放題', data: '150枚保証（翌日納品）', bonus: '親子写真込み', extra: '特典：アルバム＆アクリルスタンド' },
    ],
  },
  {
    id: 'nyuugaku',
    title: '入園・卒園・入学・卒業',
    subtitle: '入学卒業専用プラン',
    color: 'from-blue-50 to-stone-50',
    plans: [
      { name: '入学・卒業エコノミープラン', price: '¥24,800', time: '約30〜40分', costumes: '1着', studios: '2スタジオ', data: '50枚保証', bonus: '親子写真込み' },
      { name: '入学・卒業プレミアムプラン', price: '¥31,800', time: '約60分', costumes: '1着', studios: '3スタジオ', data: '75枚保証', bonus: '親子写真込み' },
      { name: '入学・卒業ビジネスプラン', price: '¥44,800', time: '約90分', costumes: '1着', studios: '4スタジオ', data: '100枚保証', bonus: '親子写真込み', extra: '特典：アルバム or アクリルスタンド' },
      { name: '入学・卒業ファーストプラン', price: '¥61,000', time: '約90分', costumes: '4着保証＋数着', studios: '選び放題', data: '150枚保証（翌日納品）', bonus: '親子写真込み', extra: '特典：アルバム＆アクリルスタンド' },
    ],
  },
  {
    id: 'newborn',
    title: 'ニューボーンフォト・お宮参り',
    subtitle: '生まれたての記念に',
    color: 'from-green-50 to-stone-50',
    plans: [
      { name: 'ニューボーンフォト', price: '¥19,800〜', time: '約30〜40分', costumes: '1着', studios: '2スタジオ', data: '50枚保証', bonus: '親子写真込み' },
      { name: 'お宮参り', price: '¥19,800〜', time: '約30〜40分', costumes: '1着', studios: '2スタジオ', data: '50枚保証', bonus: '親子写真込み' },
    ],
  },
  {
    id: 'maternity',
    title: 'マタニティフォト',
    subtitle: '妊娠中の美しい姿を永遠に',
    color: 'from-pink-50 to-stone-50',
    plans: [
      { name: 'マタニティフォト', price: '¥15,000〜', time: '約30〜40分', costumes: '1着', studios: '2スタジオ', data: '50枚保証', bonus: '親子写真込み' },
    ],
  },
];

const COLUMNS = [
  {
    href: '/column/shichigosan',
    title: '七五三フォト完全ガイド',
    desc: '3歳・5歳・7歳のお祝いを最高の写真で残す方法',
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
  },
  {
    href: '/column/omiyamairi',
    title: 'お宮参りの記念写真',
    desc: '生後1ヶ月の大切なお祝いを家族の宝に',
    img: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=80',
  },
  {
    href: '/column/newborn',
    title: 'ニューボーンフォトとは',
    desc: '生後2週間以内の奇跡の瞬間を写真に',
    img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=80',
  },
  {
    href: '/column/maternity',
    title: 'マタニティフォトの魅力',
    desc: '妊娠中の輝く姿を一生の思い出に',
    img: 'https://images.unsplash.com/photo-1519127051966-edeab5d5ab81?w=600&q=80',
  },
  {
    href: '/column/nyuugaku',
    title: '入園・入学・卒業記念写真',
    desc: '成長の節目を美しいスタジオ写真で残す',
    img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[560px] flex flex-col items-center justify-center text-center overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="ジャングルスタジオ フォトスタジオ 神奈川県厚木市"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-4 flex flex-col items-center gap-6">
          <p className="text-white/80 tracking-[0.3em] text-sm font-light">JUNGLE STUDIO</p>
          <h1
            className="text-white text-3xl sm:text-5xl font-bold leading-tight"
            style={{ fontFamily: 'serif', textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}
          >
            大切な瞬間を、<br />一生の宝物に。
          </h1>
          <p className="text-white/85 text-sm sm:text-base max-w-md leading-relaxed">
            神奈川県厚木市旭町のフォトスタジオ。<br />
            七五三・お宮参り・ニューボーンフォト<br />
            マタニティフォト・入園・卒園・入学・卒業<br />
            など、お子様の成長を唯一無二の写真で残します。
          </p>
          <a
            href="https://studio-app-two.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-reserve px-8 py-4 rounded-full text-base mt-2"
          >
            【24時間対応】ご予約はこちら
          </a>
        </div>
      </section>

      {/* Concept */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-amber-700 tracking-widest text-xs mb-4">CONCEPT</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ fontFamily: 'serif' }}>
            いましか撮れない「可愛い」を<br />大切に記録します
          </h2>
          <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
            ジャングルスタジオは、神奈川県厚木市旭町に位置する<br />
            完全予約制のフォトスタジオです。<br />
            複数のスタジオセットと豊富な衣装から、<br />
            お子様一人ひとりに合った撮影をご提案。<br />
            プロカメラマンが自然な表情を引き出し、<br />
            家族の宝となる写真をお届けします。
          </p>
        </div>
      </section>

      {/* Charm */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-amber-400 tracking-[0.4em] text-xs mb-4">CHARM</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8" style={{ fontFamily: 'serif' }}>
            思い出をもっと身近に
          </h2>
          <p className="text-stone-300 leading-loose text-sm sm:text-base">
            思い出をより身近にするため、価格から見直しました。<br />
            手の届く価格で、クオリティには一切妥協しません。<br />
            データ枚数も豊富で、「選ぶ」ではなく「残す」形に。<br />
            七五三やバースデーなど、大切な一日をもっと気軽に。<br />
            <span className="text-amber-400 font-semibold">【価格・クオリティ・満足度・体験】</span><br />
            それら全てを叶える新しいフォトスタジオです。
          </p>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-amber-700 tracking-widest text-xs mb-4">PLAN &amp; PRICE</p>
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'serif' }}>
              プラン・料金
            </h2>
          </div>

          {PLAN_CATEGORIES.map((cat) => (
            <div key={cat.id} className="mb-16">
              <div className={`bg-gradient-to-r ${cat.color} rounded-2xl p-6 mb-6`}>
                <p className="text-xs text-stone-400 tracking-widest mb-1">{cat.subtitle}</p>
                <h3 className="text-xl font-bold text-stone-800" style={{ fontFamily: 'serif' }}>
                  {cat.title}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cat.plans.map((plan) => (
                  <div key={plan.name} className="plan-card rounded-xl p-5">
                    <h4 className="font-bold text-stone-800 mb-1 text-sm">{plan.name}</h4>
                    <p className="text-2xl font-bold text-amber-700 mb-3">{plan.price}</p>
                    <ul className="text-xs text-stone-600 space-y-1.5">
                      <li className="flex gap-2"><span className="text-amber-600">✓</span>{plan.time}</li>
                      <li className="flex gap-2"><span className="text-amber-600">✓</span>衣装 {plan.costumes}</li>
                      <li className="flex gap-2"><span className="text-amber-600">✓</span>{plan.studios}</li>
                      <li className="flex gap-2"><span className="text-amber-600">✓</span>{plan.data}</li>
                      <li className="flex gap-2"><span className="text-amber-600">✓</span>{plan.bonus}</li>
                      {plan.extra && (
                        <li className="flex gap-2 text-amber-700 font-medium">
                          <span>★</span>{plan.extra}
                        </li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center mt-8">
            <a
              href="https://studio-app-two.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-reserve inline-block px-10 py-4 rounded-full text-base"
            >
              【24時間対応】ご予約はこちら
            </a>
            <p className="text-xs text-stone-400 mt-3">延長料金：15分ごとに ¥3,300（税込）</p>
          </div>
        </div>
      </section>

      {/* Column */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-amber-700 tracking-widest text-xs mb-4">COLUMN</p>
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'serif' }}>
              撮影メニューについて知る
            </h2>
            <p className="text-stone-500 text-sm mt-3">
              各撮影メニューの特徴・準備方法・よくある質問をご紹介します
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COLUMNS.map((col) => (
              <Link
                key={col.href}
                href={col.href}
                className="group block rounded-2xl overflow-hidden border border-stone-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={col.img}
                    alt={col.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-stone-800 mb-1 text-sm">{col.title}</h3>
                  <p className="text-stone-500 text-xs leading-relaxed">{col.desc}</p>
                  <p className="text-amber-700 text-xs mt-3 font-medium">詳しく読む →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Access */}
      <section id="access" className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-amber-700 tracking-widest text-xs mb-4">ACCESS</p>
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'serif' }}>
              アクセス
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="bg-white rounded-2xl p-8 border border-stone-200">
              <dl className="space-y-5 text-sm">
                <div>
                  <dt className="text-xs text-stone-400 tracking-widest mb-1">住所</dt>
                  <dd className="text-stone-800 leading-relaxed">
                    〒243-0014<br />
                    神奈川県厚木市旭町5丁目43-14<br />
                    パストラルASAHI 401-A
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-stone-400 tracking-widest mb-1">電話番号</dt>
                  <dd>
                    <a href="tel:07037630878" className="text-stone-800 hover:text-amber-700 transition-colors">
                      070-3763-0878
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-stone-400 tracking-widest mb-1">営業時間</dt>
                  <dd className="text-stone-800">
                    10:00〜21:00<br />
                    <span className="text-xs text-stone-500">（最終入場 19:00）</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-stone-400 tracking-widest mb-1">予約</dt>
                  <dd className="text-stone-800">24時間オンライン予約受付中</dd>
                </div>
              </dl>
              <a
                href="https://studio-app-two.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-reserve mt-6 block text-center px-6 py-3 rounded-full text-sm"
              >
                予約する
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.8!2d139.3629!3d35.4372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185cbde8f38f17%3A0x0!2z5paH5ZKHXODH5Yy65peF55S677yV5LiB55uu77yU77yT4oiS77yR77yE!5e0!3m2!1sja!2sjp!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ジャングルスタジオ アクセスマップ"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-900 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-stone-400 tracking-widest text-xs mb-4">RESERVATION</p>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4" style={{ fontFamily: 'serif' }}>
            24時間いつでもご予約いただけます
          </h2>
          <p className="text-stone-400 text-sm mb-8 leading-relaxed">
            お子様の記念日、家族の大切な瞬間を<br />
            ジャングルスタジオで最高の写真に残しましょう。
          </p>
          <a
            href="https://studio-app-two.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-reserve inline-block px-12 py-4 rounded-full text-base"
          >
            【24時間対応】ご予約はこちら
          </a>
        </div>
      </section>
    </>
  );
}
