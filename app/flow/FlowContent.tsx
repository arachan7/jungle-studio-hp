'use client';

import Link from 'next/link';
import EditableText from '@/components/EditableText';
import EditableImage from '@/components/EditableImage';

export default function FlowContent() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-xs text-stone-400 mb-8">
        <Link href="/" className="hover:text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span>ご利用の流れ</span>
      </nav>

      {/* Hero */}
      <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-12">
        {/* EDITABLE:flow-hero:start */}
        <EditableImage
          eid="flow-hero"
          src="/flow-hero.jpg"
          alt="ジャングルスタジオ ご利用の流れ"
          fill
          className="object-cover"
          priority
        />
        {/* EDITABLE:flow-hero:end */}
      </div>

      {/* Steps */}
      <div className="space-y-10">
        {/* STEP 1 */}
        <div className="relative">
          <div className="absolute left-6 top-14 bottom-0 w-px bg-amber-200 -mb-10" />
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-lg" style={{ fontFamily: 'serif' }}>①</div>
            <div className="flex-1 pb-2">
              {/* EDITABLE:flow-step0-title:start */}
              <EditableText eid="flow-step0-title" tag="h2" className="text-lg font-bold text-stone-800 mb-3" style={{ fontFamily: 'serif' }}>{"撮影のご予約"}</EditableText>
              {/* EDITABLE:flow-step0-title:end */}
              {/* EDITABLE:flow-step0-body:start */}
              <EditableText eid="flow-step0-body" tag="p" className="text-sm text-stone-600 leading-relaxed whitespace-pre-line mb-3">{"WEBの予約フォームもしくはお電話や各種SNSのDMから。スタッフがお客様のご要望をお伺いします。"}<br />{"（撮影日の30日〜60日以上前までにWEB予約するとうれしい特典があります。詳しくはWEB予約ページのカレンダーにて記載があります。）"}</EditableText>
              {/* EDITABLE:flow-step0-body:end */}
              <a href="https://studio-app-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-amber-700 text-sm font-medium hover:underline mb-3">▶︎ WEB予約ページはこちら</a>
              {/* EDITABLE:flow-step0-caption:start */}
              <EditableText eid="flow-step0-caption" tag="p" className="text-xs text-stone-400 italic">{"はじめの一歩から、特別な一日がスタートします。"}</EditableText>
              {/* EDITABLE:flow-step0-caption:end */}
            </div>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="relative">
          <div className="absolute left-6 top-14 bottom-0 w-px bg-amber-200 -mb-10" />
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-lg" style={{ fontFamily: 'serif' }}>②</div>
            <div className="flex-1 pb-2">
              {/* EDITABLE:flow-step1-title:start */}
              <EditableText eid="flow-step1-title" tag="h2" className="text-lg font-bold text-stone-800 mb-3" style={{ fontFamily: 'serif' }}>{"衣装選び"}</EditableText>
              {/* EDITABLE:flow-step1-title:end */}
              {/* EDITABLE:flow-step1-body:start */}
              <EditableText eid="flow-step1-body" tag="p" className="text-sm text-stone-600 leading-relaxed whitespace-pre-line mb-3">{"撮影当日は、普段着でご来店ください。お持込の衣装がある場合は、着用の上ご来店いただいても構いません。衣装はデザイン・カラー・サイズを豊富にご用意しております。"}<br />{"※着用できる衣装の枚数はプランごとに違います。"}</EditableText>
              {/* EDITABLE:flow-step1-body:end */}
              {/* EDITABLE:flow-step1-caption:start */}
              <EditableText eid="flow-step1-caption" tag="p" className="text-xs text-stone-400 italic">{"どれにしようか迷う時間も、思い出のひとつになります。"}</EditableText>
              {/* EDITABLE:flow-step1-caption:end */}
            </div>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="relative">
          <div className="absolute left-6 top-14 bottom-0 w-px bg-amber-200 -mb-10" />
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-lg" style={{ fontFamily: 'serif' }}>③</div>
            <div className="flex-1 pb-2">
              {/* EDITABLE:flow-step2-title:start */}
              <EditableText eid="flow-step2-title" tag="h2" className="text-lg font-bold text-stone-800 mb-3" style={{ fontFamily: 'serif' }}>{"着付け・ヘアセット"}</EditableText>
              {/* EDITABLE:flow-step2-title:end */}
              {/* EDITABLE:flow-step2-body:start */}
              <EditableText eid="flow-step2-body" tag="p" className="text-sm text-stone-600 leading-relaxed whitespace-pre-line mb-3">{"お子様の着付けは全プランに含まれております。"}<br />{"七五三プランなど、ヘアセット付きのプランをご利用の場合は、ヘアセットもお任せください。"}<br />{"基本プランの着付けは無料です。"}</EditableText>
              {/* EDITABLE:flow-step2-body:end */}
              <Link href="/column/shichigosan" className="inline-flex items-center gap-1 text-amber-700 text-sm font-medium hover:underline mb-3">▶︎ 七五三のコラムはこちら</Link>
              {/* EDITABLE:flow-step2-caption:start */}
              <EditableText eid="flow-step2-caption" tag="p" className="text-xs text-stone-400 italic">{"少しずつ仕上がっていく姿に、お子様も思わず笑顔に。"}</EditableText>
              {/* EDITABLE:flow-step2-caption:end */}
            </div>
          </div>
        </div>

        {/* STEP 4 */}
        <div className="relative">
          <div className="absolute left-6 top-14 bottom-0 w-px bg-amber-200 -mb-10" />
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-lg" style={{ fontFamily: 'serif' }}>④</div>
            <div className="flex-1 pb-2">
              {/* EDITABLE:flow-step3-title:start */}
              <EditableText eid="flow-step3-title" tag="h2" className="text-lg font-bold text-stone-800 mb-3" style={{ fontFamily: 'serif' }}>{"撮影"}</EditableText>
              {/* EDITABLE:flow-step3-title:end */}
              {/* EDITABLE:flow-step3-body:start */}
              <EditableText eid="flow-step3-body" tag="p" className="text-sm text-stone-600 leading-relaxed whitespace-pre-line mb-3">{"お気に入りの表情で何ポーズでもお撮りします。カメラマンがやさしくリードしますので、緊張ぎみのお子さまも安心です。"}</EditableText>
              {/* EDITABLE:flow-step3-body:end */}
              {/* EDITABLE:flow-step3-caption:start */}
              <EditableText eid="flow-step3-caption" tag="p" className="text-xs text-stone-400 italic">{"その瞬間の「いちばん可愛い」を、しっかり残します。"}</EditableText>
              {/* EDITABLE:flow-step3-caption:end */}
            </div>
          </div>
        </div>

        {/* STEP 5 */}
        <div className="relative">
          <div className="absolute left-6 top-14 bottom-0 w-px bg-amber-200 -mb-10" />
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-lg" style={{ fontFamily: 'serif' }}>⑤</div>
            <div className="flex-1 pb-2">
              {/* EDITABLE:flow-step4-title:start */}
              <EditableText eid="flow-step4-title" tag="h2" className="text-lg font-bold text-stone-800 mb-3" style={{ fontFamily: 'serif' }}>{"写真選び"}</EditableText>
              {/* EDITABLE:flow-step4-title:end */}
              {/* EDITABLE:flow-step4-body:start */}
              <EditableText eid="flow-step4-body" tag="p" className="text-sm text-stone-600 leading-relaxed whitespace-pre-line mb-3">{"撮影されたお写真はその場でパソコンにて確認もいただけます。どんな写真があるかなど、その場で確認できます。"}</EditableText>
              {/* EDITABLE:flow-step4-body:end */}
              {/* EDITABLE:flow-step4-caption:start */}
              <EditableText eid="flow-step4-caption" tag="p" className="text-xs text-stone-400 italic">{"見返すたびに、思わず笑顔になる時間。"}</EditableText>
              {/* EDITABLE:flow-step4-caption:end */}
            </div>
          </div>
        </div>

        {/* STEP 6 */}
        <div className="relative">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-lg" style={{ fontFamily: 'serif' }}>⑥</div>
            <div className="flex-1 pb-2">
              {/* EDITABLE:flow-step5-title:start */}
              <EditableText eid="flow-step5-title" tag="h2" className="text-lg font-bold text-stone-800 mb-3" style={{ fontFamily: 'serif' }}>{"商品のお渡し"}</EditableText>
              {/* EDITABLE:flow-step5-title:end */}
              {/* EDITABLE:flow-step5-body:start */}
              <EditableText eid="flow-step5-body" tag="p" className="text-sm text-stone-600 leading-relaxed whitespace-pre-line mb-3">{"1週間以内に、公式LINEもしくはメールにて商品を納品いたします。ファーストプランは翌日納品となります。"}</EditableText>
              {/* EDITABLE:flow-step5-body:end */}
              {/* EDITABLE:flow-step5-caption:start */}
              <EditableText eid="flow-step5-caption" tag="p" className="text-xs text-stone-400 italic">{"楽しかった一日が、カタチになって届きます。"}</EditableText>
              {/* EDITABLE:flow-step5-caption:end */}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-14 bg-stone-900 rounded-2xl p-8 text-center">
        {/* EDITABLE:flow-cta-title:start */}
        <EditableText eid="flow-cta-title" tag="p" className="text-white font-bold mb-2 text-lg" style={{ fontFamily: 'serif' }}>{"24時間いつでもご予約いただけます"}</EditableText>
        {/* EDITABLE:flow-cta-title:end */}
        {/* EDITABLE:flow-cta-sub:start */}
        <EditableText eid="flow-cta-sub" tag="p" className="text-stone-400 text-xs mb-5">{"神奈川県厚木市 / 完全予約制"}</EditableText>
        {/* EDITABLE:flow-cta-sub:end */}
        <a href="https://studio-app-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-reserve inline-block px-8 py-3 rounded-full text-sm">
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
