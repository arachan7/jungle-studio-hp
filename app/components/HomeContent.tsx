'use client';

import Link from 'next/link';
import EditableText from '@/components/EditableText';
import EditableImage from '@/components/EditableImage';

export default function HomeContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[560px] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* EDITABLE:hero-img:start */}
        <EditableImage
          eid="hero-img"
          src="/hero.jpg"
          alt="ジャングルスタジオ フォトスタジオ 神奈川県厚木市"
          fill
          priority
          className="object-cover"
        />
        {/* EDITABLE:hero-img:end */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-4 flex flex-col items-center gap-6">
          <p className="text-white/80 tracking-[0.3em] text-sm font-light">JUNGLE STUDIO</p>
          {/* EDITABLE:hero-title:start */}
          <EditableText
            eid="hero-title"
            tag="h1"
            className="text-white text-3xl sm:text-5xl font-bold leading-tight"
            style={{ fontFamily: 'serif', textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}
          >
            {"大切な瞬間を、"}<br />{"一生の宝物に。"}
          </EditableText>
          {/* EDITABLE:hero-title:end */}
          {/* EDITABLE:hero-sub:start */}
          <EditableText
            eid="hero-sub"
            tag="p"
            className="text-white/85 text-sm sm:text-base max-w-md leading-relaxed"
          >
            {"神奈川県厚木市旭町のフォトスタジオ。"}<br />{"七五三・お宮参り・ニューボーンフォト"}<br />{"マタニティフォト・入園・卒園・入学・卒業"}<br />{"など、お子様の成長を唯一無二の写真で残します。"}
          </EditableText>
          {/* EDITABLE:hero-sub:end */}
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
          {/* EDITABLE:concept-title:start */}
          <EditableText
            eid="concept-title"
            tag="h2"
            className="text-2xl sm:text-3xl font-bold mb-6"
            style={{ fontFamily: 'serif' }}
          >
            {"いましか撮れない「可愛い」を"}<br />{"大切に記録します"}
          </EditableText>
          {/* EDITABLE:concept-title:end */}
          {/* EDITABLE:concept-body:start */}
          <EditableText
            eid="concept-body"
            tag="p"
            className="text-stone-600 leading-relaxed text-sm sm:text-base"
          >
            {"ジャングルスタジオは、神奈川県厚木市旭町に位置する"}<br />{"完全予約制のフォトスタジオです。"}<br />{"複数のスタジオセットと豊富な衣装から、"}<br />{"お子様一人ひとりに合った撮影をご提案。"}<br />{"プロカメラマンが自然な表情を引き出し、"}<br />{"家族の宝となる写真をお届けします。"}
          </EditableText>
          {/* EDITABLE:concept-body:end */}
        </div>
      </section>

      {/* Charm */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-amber-400 tracking-[0.4em] text-xs mb-4">CHARM</p>
          {/* EDITABLE:charm-title:start */}
          <EditableText
            eid="charm-title"
            tag="h2"
            className="text-2xl sm:text-3xl font-bold mb-8"
            style={{ fontFamily: 'serif' }}
          >
            {"思い出をもっと身近に"}
          </EditableText>
          {/* EDITABLE:charm-title:end */}
          {/* EDITABLE:charm-body:start */}
          <EditableText
            eid="charm-body"
            tag="p"
            className="text-stone-300 leading-loose text-sm sm:text-base"
          >
            {"思い出をより身近にするため、価格から見直しました。"}<br />{"手の届く価格で、クオリティには一切妥協しません。"}<br />{"データ枚数も豊富で、「選ぶ」ではなく「残す」形に。"}<br />{"七五三やバースデーなど、大切な一日をもっと気軽に。"}<br />{"【価格・クオリティ・満足度・体験】"}<br />{"それら全てを叶える新しいフォトスタジオです。"}
          </EditableText>
          {/* EDITABLE:charm-body:end */}
        </div>
      </section>

      {/* Plan Menu Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-amber-700 tracking-widest text-xs mb-3">PLAN</p>
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'serif' }}>料金プラン</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* EDITABLE:plan-shichigosan:start */}
            <Link href="/column/shichigosan" className="group block rounded-2xl overflow-hidden border border-stone-200 hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-40 overflow-hidden">
                <EditableImage eid="plan-shichigosan" src="/shichigosan.jpg" alt="七五三" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 bg-white">
                <p className="font-bold text-stone-800 text-sm mb-1">七五三</p>
                {/* EDITABLE:price-shichigosan:start */}
                <EditableText eid="price-shichigosan" tag="p" className="text-amber-700 font-bold text-sm">{"¥24,800〜"}</EditableText>
                {/* EDITABLE:price-shichigosan:end */}
              </div>
            </Link>
            {/* EDITABLE:plan-shichigosan:end */}
            {/* EDITABLE:plan-half-birthday:start */}
            <Link href="/column/half-birthday" className="group block rounded-2xl overflow-hidden border border-stone-200 hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-40 overflow-hidden">
                <EditableImage eid="plan-half-birthday" src="/half-birthday.jpg" alt="ハーフバースデー" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 bg-white">
                <p className="font-bold text-stone-800 text-sm mb-1">ハーフバースデー</p>
                {/* EDITABLE:price-half-birthday:start */}
                <EditableText eid="price-half-birthday" tag="p" className="text-amber-700 font-bold text-sm">{"¥29,800〜"}</EditableText>
                {/* EDITABLE:price-half-birthday:end */}
              </div>
            </Link>
            {/* EDITABLE:plan-half-birthday:end */}
            {/* EDITABLE:plan-omiyamairi:start */}
            <Link href="/column/omiyamairi" className="group block rounded-2xl overflow-hidden border border-stone-200 hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-40 overflow-hidden">
                <EditableImage eid="plan-omiyamairi" src="/omiyamairi.jpg" alt="お宮参り" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 bg-white">
                <p className="font-bold text-stone-800 text-sm mb-1">お宮参り</p>
                {/* EDITABLE:price-omiyamairi:start */}
                <EditableText eid="price-omiyamairi" tag="p" className="text-amber-700 font-bold text-sm">{"¥19,800〜"}</EditableText>
                {/* EDITABLE:price-omiyamairi:end */}
              </div>
            </Link>
            {/* EDITABLE:plan-omiyamairi:end */}
            {/* EDITABLE:plan-birthday:start */}
            <Link href="/column/birthday" className="group block rounded-2xl overflow-hidden border border-stone-200 hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-40 overflow-hidden">
                <EditableImage eid="plan-birthday" src="/birthday.jpg" alt="バースデー" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 bg-white">
                <p className="font-bold text-stone-800 text-sm mb-1">バースデー</p>
                {/* EDITABLE:price-birthday:start */}
                <EditableText eid="price-birthday" tag="p" className="text-amber-700 font-bold text-sm">{"¥29,800〜"}</EditableText>
                {/* EDITABLE:price-birthday:end */}
              </div>
            </Link>
            {/* EDITABLE:plan-birthday:end */}
            {/* EDITABLE:plan-nyuugaku:start */}
            <Link href="/column/nyuugaku" className="group block rounded-2xl overflow-hidden border border-stone-200 hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-40 overflow-hidden">
                <EditableImage eid="plan-nyuugaku" src="/nyuugaku.jpg" alt="卒入学" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 bg-white">
                <p className="font-bold text-stone-800 text-sm mb-1">卒入学</p>
                {/* EDITABLE:price-nyuugaku:start */}
                <EditableText eid="price-nyuugaku" tag="p" className="text-amber-700 font-bold text-sm">{"¥24,800〜"}</EditableText>
                {/* EDITABLE:price-nyuugaku:end */}
              </div>
            </Link>
            {/* EDITABLE:plan-nyuugaku:end */}
            {/* EDITABLE:plan-maternity:start */}
            <Link href="/column/maternity" className="group block rounded-2xl overflow-hidden border border-stone-200 hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-40 overflow-hidden">
                <EditableImage eid="plan-maternity" src="/maternity.jpg" alt="マタニティフォト" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 bg-white">
                <p className="font-bold text-stone-800 text-sm mb-1">マタニティフォト</p>
                {/* EDITABLE:price-maternity:start */}
                <EditableText eid="price-maternity" tag="p" className="text-amber-700 font-bold text-sm">{"¥15,000〜"}</EditableText>
                {/* EDITABLE:price-maternity:end */}
              </div>
            </Link>
            {/* EDITABLE:plan-maternity:end */}
            {/* EDITABLE:plan-newborn:start */}
            <Link href="/column/newborn" className="group block rounded-2xl overflow-hidden border border-stone-200 hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-40 overflow-hidden">
                <EditableImage eid="plan-newborn" src="/newborn.jpg" alt="ニューボーンフォト" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 bg-white">
                <p className="font-bold text-stone-800 text-sm mb-1">ニューボーンフォト</p>
                {/* EDITABLE:price-newborn:start */}
                <EditableText eid="price-newborn" tag="p" className="text-amber-700 font-bold text-sm">{"¥19,800〜"}</EditableText>
                {/* EDITABLE:price-newborn:end */}
              </div>
            </Link>
            {/* EDITABLE:plan-newborn:end */}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-amber-700 tracking-widest text-xs mb-3">NEWS</p>
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'serif' }}>最新のコラム</h2>
          </div>
          <Link href="/news/grand-open" className="group block bg-white rounded-2xl border border-stone-200 p-6 hover:shadow-xl transition-shadow duration-300">
            <p className="text-xs text-stone-400 tracking-widest mb-2">2026.04.19</p>
            <h3 className="text-lg font-bold text-stone-800 group-hover:text-amber-700 transition-colors mb-3" style={{ fontFamily: 'serif' }}>
              ジャングルスタジオ、まもなくオープンいたします
            </h3>
            <p className="text-sm text-stone-500 leading-relaxed line-clamp-3">
              この度、フォトスタジオ「ジャングルスタジオ」は、4月25日・26日のプレオープンを経て、4月29日にグランドオープンを迎える運びとなりました。オープン前のこの段階で、すでにプレオープンのご予約を20件以上頂戴しております。
            </p>
            <p className="text-amber-700 text-xs font-bold mt-4">続きを読む →</p>
          </Link>
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
                  <a
                    href="https://maps.google.com?q=%E3%80%92243-0014%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E5%8E%9A%E6%9C%A8%E5%B8%82%E6%97%AD%E7%94%BA%EF%BC%95%E4%B8%81%E7%9B%AE%EF%BC%94%EF%BC%93%E2%88%92%EF%BC%91%EF%BC%94%20%E3%83%91%E3%82%B9%E3%83%88%E3%83%A9%E3%83%AB%EF%BC%A1%EF%BC%B3%EF%BC%A1%EF%BC%A8%EF%BC%A9%20401-A%20%E3%82%B8%E3%83%A3%E3%83%B3%E3%82%B0%E3%83%AB%E3%82%B9%E3%82%BF%E3%82%B8%E3%82%AA&ftid=0x6019ab3543bb0eeb:0xbc84ac82e4efff73&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,47071704,94218641,94282134,94286869&g_st=ic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-xs text-amber-700 hover:text-amber-900 transition-colors font-medium"
                  >
                    📍 Google マップで開く →
                  </a>
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
            <div>
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
              <a
                href="https://maps.google.com?q=%E3%80%92243-0014%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E5%8E%9A%E6%9C%A8%E5%B8%82%E6%97%AD%E7%94%BA%EF%BC%95%E4%B8%81%E7%9B%AE%EF%BC%94%EF%BC%93%E2%88%92%EF%BC%91%EF%BC%94%20%E3%83%91%E3%82%B9%E3%83%88%E3%83%A9%E3%83%AB%EF%BC%A1%EF%BC%B3%EF%BC%A1%EF%BC%A8%EF%BC%A9%20401-A%20%E3%82%B8%E3%83%A3%E3%83%B3%E3%82%B0%E3%83%AB%E3%82%B9%E3%82%BF%E3%82%B8%E3%82%AA&ftid=0x6019ab3543bb0eeb:0xbc84ac82e4efff73&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,47071704,94218641,94282134,94286869&g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-amber-700 hover:bg-amber-800 text-white text-sm font-bold transition-colors shadow-md"
              >
                📍 Google マップで経路を確認する
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-900 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-stone-400 tracking-widest text-xs mb-4">RESERVATION</p>
          {/* EDITABLE:cta-title:start */}
          <EditableText
            eid="cta-title"
            tag="h2"
            className="text-white text-2xl sm:text-3xl font-bold mb-4"
            style={{ fontFamily: 'serif' }}
          >
            {"24時間いつでもご予約いただけます"}
          </EditableText>
          {/* EDITABLE:cta-title:end */}
          {/* EDITABLE:cta-body:start */}
          <EditableText
            eid="cta-body"
            tag="p"
            className="text-stone-400 text-sm mb-8 leading-relaxed"
          >
            {"お子様の記念日、家族の大切な瞬間を"}<br />{"ジャングルスタジオで最高の写真に残しましょう。"}
          </EditableText>
          {/* EDITABLE:cta-body:end */}
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
