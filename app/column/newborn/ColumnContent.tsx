'use client';

import Link from 'next/link';
import EditableText from '@/components/EditableText';
import EditableImage from '@/components/EditableImage';
import EditableFaqAccordion from '@/components/EditableFaqAccordion';

export default function ColumnContent() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-xs text-stone-400 mb-8">
        <Link href="/" className="hover:text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span>ニューボーンフォト</span>
      </nav>

      <header className="mb-10">
        <p className="text-amber-700 text-xs tracking-widest mb-3">COLUMN / ニューボーンフォト</p>
        {/* EDITABLE:nb-title:start */}
        <EditableText eid="nb-title" tag="h1" className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ fontFamily: 'serif' }}>{"ニューボーンフォトとは｜生後2週間の奇跡を写真に残す理由"}</EditableText>
        {/* EDITABLE:nb-title:end */}
        {/* EDITABLE:nb-sub:start */}
        <EditableText eid="nb-sub" tag="p" className="text-stone-500 text-sm">{"神奈川県厚木市のフォトスタジオ「ジャングルスタジオ」が解説"}</EditableText>
        {/* EDITABLE:nb-sub:end */}
      </header>

      <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
        {/* EDITABLE:nb-hero:start */}
        <EditableImage eid="nb-hero" src="/newborn.jpg" alt="ニューボーンフォト 新生児撮影 フォトスタジオ 厚木市" fill className="object-cover" priority />
        {/* EDITABLE:nb-hero:end */}
      </div>

      <div className="prose prose-stone max-w-none text-sm leading-relaxed space-y-8">
        <section>
          {/* EDITABLE:nb-s0-h:start */}
          <EditableText eid="nb-s0-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"ニューボーンフォトとは"}</EditableText>
          {/* EDITABLE:nb-s0-h:end */}
          {/* EDITABLE:nb-s0-p0:start */}
          <EditableText eid="nb-s0-p0" tag="p" className="text-stone-700">{"ニューボーンフォト（Newborn Photo）とは、生後7日～14日以内、遅くとも30日以内の新生児を専門に撮影するフォトグラフィーです。この時期の赤ちゃんは、まるでお母さんのお腹の中にいるように丸まって眠る姿や、ふっくらとした頬、小さな手足が特徴的で、二度と戻らない「奇跡の姿」として人気が高まっています。"}</EditableText>
          {/* EDITABLE:nb-s0-p0:end */}
          {/* EDITABLE:nb-s0-p1:start */}
          <EditableText eid="nb-s0-p1" tag="p" className="text-stone-700 mt-3">{"欧米では古くから文化として根付いており、日本でも近年急速に広まっています。神奈川県厚木市のジャングルスタジオでも、多くのご家族がニューボーンフォトを撮影されています。"}</EditableText>
          {/* EDITABLE:nb-s0-p1:end */}
        </section>

        <section>
          {/* EDITABLE:nb-s1-h:start */}
          <EditableText eid="nb-s1-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"生後2週間以内に撮る理由"}</EditableText>
          {/* EDITABLE:nb-s1-h:end */}
          {/* EDITABLE:nb-s1-p0:start */}
          <EditableText eid="nb-s1-p0" tag="p" className="text-stone-700">{"ニューボーンフォトは生後14日（2週間）以内の撮影が理想とされています。その理由は："}</EditableText>
          {/* EDITABLE:nb-s1-p0:end */}
          <ul className="space-y-2 text-stone-700 mt-3">
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>{/* EDITABLE:nb-s1-i0:start */}<EditableText eid="nb-s1-i0" tag="span">{"子宮内で過ごしたポーズ（胎児ポーズ）が自然に取れる"}</EditableText>{/* EDITABLE:nb-s1-i0:end */}</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>{/* EDITABLE:nb-s1-i1:start */}<EditableText eid="nb-s1-i1" tag="span">{"長時間眠ることができるため、撮影がスムーズ"}</EditableText>{/* EDITABLE:nb-s1-i1:end */}</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>{/* EDITABLE:nb-s1-i2:start */}<EditableText eid="nb-s1-i2" tag="span">{"肌が最も柔らかくふっくらしている"}</EditableText>{/* EDITABLE:nb-s1-i2:end */}</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>{/* EDITABLE:nb-s1-i3:start */}<EditableText eid="nb-s1-i3" tag="span">{"生まれたままの姿が最もリアルに残せる"}</EditableText>{/* EDITABLE:nb-s1-i3:end */}</li>
          </ul>
          {/* EDITABLE:nb-s1-p1:start */}
          <EditableText eid="nb-s1-p1" tag="p" className="text-stone-700 mt-3">{"生後3ヶ月以降は首が座り始め、赤ちゃんの動きが活発になるため、安全で美しいニューボーンポーズが難しくなることがあります。"}</EditableText>
          {/* EDITABLE:nb-s1-p1:end */}
        </section>

        <section>
          {/* EDITABLE:nb-s2-h:start */}
          <EditableText eid="nb-s2-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"ジャングルスタジオのニューボーンフォトプラン"}</EditableText>
          {/* EDITABLE:nb-s2-h:end */}
          <div className="bg-amber-50 rounded-2xl p-6 space-y-4">
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                {/* EDITABLE:nb-plan0-name:start */}
                <EditableText eid="nb-plan0-name" tag="p" className="font-bold text-stone-800 text-sm">{"エコノミープラン"}</EditableText>
                {/* EDITABLE:nb-plan0-name:end */}
              </div>
              {/* EDITABLE:nb-plan0-detail:start */}
              <EditableText eid="nb-plan0-detail" tag="p" className="text-xs text-stone-500">{"約40分 / 衣装〜2着 / 2スタジオ〜 / 50枚保証"}</EditableText>
              {/* EDITABLE:nb-plan0-detail:end */}
              {/* EDITABLE:nb-plan0-price:start */}
              <EditableText eid="nb-plan0-price" tag="p" className="text-xl font-bold text-amber-700 mt-2">{"¥25,000〜"}</EditableText>
              {/* EDITABLE:nb-plan0-price:end */}
            </div>
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                {/* EDITABLE:nb-plan1-name:start */}
                <EditableText eid="nb-plan1-name" tag="p" className="font-bold text-stone-800 text-sm">{"プレミアムプラン"}</EditableText>
                {/* EDITABLE:nb-plan1-name:end */}
                <span className="text-[10px] font-extrabold bg-red-500 text-white px-2 py-0.5 rounded-full">⭐ 一番人気</span>
              </div>
              {/* EDITABLE:nb-plan1-detail:start */}
              <EditableText eid="nb-plan1-detail" tag="p" className="text-xs text-stone-500">{"約60分 / 衣装〜3着 / 3スタジオ〜 / 80枚保証"}</EditableText>
              {/* EDITABLE:nb-plan1-detail:end */}
              {/* EDITABLE:nb-plan1-price:start */}
              <EditableText eid="nb-plan1-price" tag="p" className="text-xl font-bold text-amber-700 mt-2">{"¥30,000〜"}</EditableText>
              {/* EDITABLE:nb-plan1-price:end */}
            </div>
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                {/* EDITABLE:nb-plan2-name:start */}
                <EditableText eid="nb-plan2-name" tag="p" className="font-bold text-stone-800 text-sm">{"ファーストプラン"}</EditableText>
                {/* EDITABLE:nb-plan2-name:end */}
              </div>
              {/* EDITABLE:nb-plan2-detail:start */}
              <EditableText eid="nb-plan2-detail" tag="p" className="text-xs text-stone-500">{"約90分 / 衣装〜4着 / 4スタジオ / 120枚保証"}</EditableText>
              {/* EDITABLE:nb-plan2-detail:end */}
              {/* EDITABLE:nb-plan2-price:start */}
              <EditableText eid="nb-plan2-price" tag="p" className="text-xl font-bold text-amber-700 mt-2">{"¥35,000〜"}</EditableText>
              {/* EDITABLE:nb-plan2-price:end */}
            </div>
            {/* EDITABLE:nb-s2-note:start */}
            <EditableText eid="nb-s2-note" tag="p" className="text-xs text-amber-700 font-medium">{"生後14日以内の撮影推奨"}</EditableText>
            {/* EDITABLE:nb-s2-note:end */}
          </div>
        </section>

        <section>
          {/* EDITABLE:nb-s3-h:start */}
          <EditableText eid="nb-s3-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"シンプルプランという選択肢"}</EditableText>
          {/* EDITABLE:nb-s3-h:end */}
          <div className="bg-stone-50 border-2 border-stone-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-red-500 text-white text-xs font-extrabold px-3 py-1 rounded-full">🎀 当日決めたい方に！</span>
            </div>
            <div className="bg-white rounded-xl p-4 mb-4">
              {/* EDITABLE:nb-simple-name:start */}
              <EditableText eid="nb-simple-name" tag="p" className="font-bold text-stone-800 text-sm mb-1">{"シンプルプラン"}</EditableText>
              {/* EDITABLE:nb-simple-name:end */}
              {/* EDITABLE:nb-simple-price:start */}
              <EditableText eid="nb-simple-price" tag="p" className="text-xl font-bold text-amber-700 mb-2">{"¥5,000〜"}</EditableText>
              {/* EDITABLE:nb-simple-price:end */}
              <div className="text-xs text-stone-500 space-y-1">
                {/* EDITABLE:nb-simple-d0:start */}
                <EditableText eid="nb-simple-d0" tag="p">{"撮影時間：約90〜120分"}</EditableText>
                {/* EDITABLE:nb-simple-d0:end */}
                {/* EDITABLE:nb-simple-d1:start */}
                <EditableText eid="nb-simple-d1" tag="p">{"衣装：1〜4着（主役のみ）"}</EditableText>
                {/* EDITABLE:nb-simple-d1:end */}
                {/* EDITABLE:nb-simple-d2:start */}
                <EditableText eid="nb-simple-d2" tag="p">{"スタジオ：3〜4スタジオ"}</EditableText>
                {/* EDITABLE:nb-simple-d2:end */}
                {/* EDITABLE:nb-simple-d3:start */}
                <EditableText eid="nb-simple-d3" tag="p">{"家族・兄弟写真：何人でも自由"}</EditableText>
                {/* EDITABLE:nb-simple-d3:end */}
                {/* EDITABLE:nb-simple-d4:start */}
                <EditableText eid="nb-simple-d4" tag="p">{"データ保証：0枚スタート（撮影後にご自身で選択）"}</EditableText>
                {/* EDITABLE:nb-simple-d4:end */}
                {/* EDITABLE:nb-simple-d5:start */}
                <EditableText eid="nb-simple-d5" tag="p">{"主役追加：+¥2,500/人"}</EditableText>
                {/* EDITABLE:nb-simple-d5:end */}
              </div>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 mb-4">
              {/* EDITABLE:nb-retouch-h:start */}
              <EditableText eid="nb-retouch-h" tag="p" className="font-semibold text-stone-800 text-sm mb-2">{"撮影後のデータ購入（当日選択）"}</EditableText>
              {/* EDITABLE:nb-retouch-h:end */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:nb-retouch0-label:start */}
                  <EditableText eid="nb-retouch0-label" tag="p" className="text-stone-500">{"美肌レタッチ 1枚"}</EditableText>
                  {/* EDITABLE:nb-retouch0-label:end */}
                  {/* EDITABLE:nb-retouch0-price:start */}
                  <EditableText eid="nb-retouch0-price" tag="p" className="font-bold text-stone-800">{"¥3,000"}</EditableText>
                  {/* EDITABLE:nb-retouch0-price:end */}
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:nb-retouch1-label:start */}
                  <EditableText eid="nb-retouch1-label" tag="p" className="text-stone-500">{"美肌レタッチ 10枚"}</EditableText>
                  {/* EDITABLE:nb-retouch1-label:end */}
                  {/* EDITABLE:nb-retouch1-price:start */}
                  <EditableText eid="nb-retouch1-price" tag="p" className="font-bold text-stone-800">{"¥25,000"}</EditableText>
                  {/* EDITABLE:nb-retouch1-price:end */}
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:nb-retouch2-label:start */}
                  <EditableText eid="nb-retouch2-label" tag="p" className="text-stone-500">{"美肌レタッチ 20枚"}</EditableText>
                  {/* EDITABLE:nb-retouch2-label:end */}
                  {/* EDITABLE:nb-retouch2-price:start */}
                  <EditableText eid="nb-retouch2-price" tag="p" className="font-bold text-stone-800">{"¥45,000"}</EditableText>
                  {/* EDITABLE:nb-retouch2-price:end */}
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:nb-retouch3-label:start */}
                  <EditableText eid="nb-retouch3-label" tag="p" className="text-stone-500">{"全データ（光レタッチのみ）"}</EditableText>
                  {/* EDITABLE:nb-retouch3-label:end */}
                  {/* EDITABLE:nb-retouch3-price:start */}
                  <EditableText eid="nb-retouch3-price" tag="p" className="font-bold text-stone-800">{"¥50,000"}</EditableText>
                  {/* EDITABLE:nb-retouch3-price:end */}
                </div>
              </div>
            </div>
            <div className="text-xs text-stone-600 space-y-1">
              {/* EDITABLE:nb-reco-h:start */}
              <EditableText eid="nb-reco-h" tag="p" className="font-semibold text-stone-700 mb-1">{"こんな方におすすめ"}</EditableText>
              {/* EDITABLE:nb-reco-h:end */}
              {/* EDITABLE:nb-reco0:start */}
              <EditableText eid="nb-reco0" tag="p">{"✓ データ枚数を当日の雰囲気で決めたい方"}</EditableText>
              {/* EDITABLE:nb-reco0:end */}
              {/* EDITABLE:nb-reco1:start */}
              <EditableText eid="nb-reco1" tag="p">{"✓ ご家族・きょうだい全員でたくさん撮りたい方"}</EditableText>
              {/* EDITABLE:nb-reco1:end */}
              {/* EDITABLE:nb-reco2:start */}
              <EditableText eid="nb-reco2" tag="p">{"✓ 予算を自分でコントロールしたい方"}</EditableText>
              {/* EDITABLE:nb-reco2:end */}
            </div>
          </div>
        </section>

        <section>
          {/* EDITABLE:nb-s4-h:start */}
          <EditableText eid="nb-s4-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"ニューボーンフォトの安全性について"}</EditableText>
          {/* EDITABLE:nb-s4-h:end */}
          {/* EDITABLE:nb-s4-p0:start */}
          <EditableText eid="nb-s4-p0" tag="p" className="text-stone-700">{"ニューボーンフォトはデリケートな新生児を扱うため、安全性が最優先です。ジャングルスタジオでは以下の安全基準を遵守しています："}</EditableText>
          {/* EDITABLE:nb-s4-p0:end */}
          <ul className="space-y-2 text-stone-700 mt-3">
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>{/* EDITABLE:nb-s4-i0:start */}<EditableText eid="nb-s4-i0" tag="span">{"無理なポーズは一切行わない"}</EditableText>{/* EDITABLE:nb-s4-i0:end */}</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>{/* EDITABLE:nb-s4-i1:start */}<EditableText eid="nb-s4-i1" tag="span">{"常に保護者の方に立ち会っていただく"}</EditableText>{/* EDITABLE:nb-s4-i1:end */}</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>{/* EDITABLE:nb-s4-i2:start */}<EditableText eid="nb-s4-i2" tag="span">{"赤ちゃんのペースに合わせてゆっくり進める"}</EditableText>{/* EDITABLE:nb-s4-i2:end */}</li>
          </ul>
        </section>

        <section>
          {/* EDITABLE:nb-s5-h:start */}
          <EditableText eid="nb-s5-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"よくある質問"}</EditableText>
          {/* EDITABLE:nb-s5-h:end */}
          <div className="space-y-4">
            <EditableFaqAccordion items={[
              {
                q: (<>{/* EDITABLE:nb-faq0-q:start */}<EditableText eid="nb-faq0-q" tag="span">{"ニューボーンフォトはいつ撮影するのがおすすめですか？"}</EditableText>{/* EDITABLE:nb-faq0-q:end */}</>),
                a: (<>{/* EDITABLE:nb-faq0-a:start */}<EditableText eid="nb-faq0-a" tag="span">{"生後7〜14日以内がおすすめです。この時期は新生児特有の丸まった姿勢・柔らかさが残っており、後から振り返ると「この時期にしか撮れなかった」写真になります。"}</EditableText>{/* EDITABLE:nb-faq0-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:nb-faq1-q:start */}<EditableText eid="nb-faq1-q" tag="span">{"スタジオ撮影ですか？自宅への出張撮影もできますか？"}</EditableText>{/* EDITABLE:nb-faq1-q:end */}</>),
                a: (<>{/* EDITABLE:nb-faq1-a:start */}<EditableText eid="nb-faq1-a" tag="span">{"スタジオ撮影もご自宅出張も対応しております。ご自宅出張ご希望の場合は事前にInstagramのDM（@Jungle_studio33）もしくは電話:070-3763-0878にてお問い合わせください。"}</EditableText>{/* EDITABLE:nb-faq1-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:nb-faq2-q:start */}<EditableText eid="nb-faq2-q" tag="span">{"安全面は大丈夫ですか？"}</EditableText>{/* EDITABLE:nb-faq2-q:end */}</>),
                a: (<>{/* EDITABLE:nb-faq2-a:start */}<EditableText eid="nb-faq2-a" tag="span">{"赤ちゃんの安全を最優先に撮影します。フラッシュを使わず自然光での撮影が基本。使用する布・衣装・タオルは毎回無添加洗剤で洗濯・消毒し、スタッフは手洗い・消毒・マスク着用で対応します。"}</EditableText>{/* EDITABLE:nb-faq2-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:nb-faq3-q:start */}<EditableText eid="nb-faq3-q" tag="span">{"無理なポーズ（頬杖・直立など）はさせますか？"}</EditableText>{/* EDITABLE:nb-faq3-q:end */}</>),
                a: (<>{/* EDITABLE:nb-faq3-a:start */}<EditableText eid="nb-faq3-a" tag="span">{"お腹の中にいた時に近い仰向けやうつ伏せポーズが基本です。無理のない体制での安全な撮影を行います。"}</EditableText>{/* EDITABLE:nb-faq3-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:nb-faq4-q:start */}<EditableText eid="nb-faq4-q" tag="span">{"何カットデータをもらえますか？"}</EditableText>{/* EDITABLE:nb-faq4-q:end */}</>),
                a: (<>{/* EDITABLE:nb-faq4-a:start */}<EditableText eid="nb-faq4-a" tag="span">{"プランにより異なります。エコノミープランは50枚、プレミアムプランは80枚、ファーストプランは120枚保証です。"}</EditableText>{/* EDITABLE:nb-faq4-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:nb-faq5-q:start */}<EditableText eid="nb-faq5-q" tag="span">{"直前にキャンセルしたい場合はどうなりますか？"}</EditableText>{/* EDITABLE:nb-faq5-q:end */}</>),
                a: (<>{/* EDITABLE:nb-faq5-a:start */}<EditableText eid="nb-faq5-a" tag="span">{"前日・当日のキャンセルにはキャンセル料が発生する場合があります。詳しくはご予約フォームの1番下のキャンセルポリシーをご覧ください。"}</EditableText>{/* EDITABLE:nb-faq5-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:nb-faq6-q:start */}<EditableText eid="nb-faq6-q" tag="span">{"スタッフが感染症にかかった場合はどうなりますか？"}</EditableText>{/* EDITABLE:nb-faq6-q:end */}</>),
                a: (<>{/* EDITABLE:nb-faq6-a:start */}<EditableText eid="nb-faq6-a" tag="span">{"スタッフや同居の家族が感染症にかかった場合は撮影の延期またはキャンセル対応します。その場合は全額返金いたします。"}</EditableText>{/* EDITABLE:nb-faq6-a:end */}</>),
              },
            ]} />
          </div>
        </section>
      </div>

      <div className="mt-12 bg-stone-900 rounded-2xl p-8 text-center">
        {/* EDITABLE:nb-cta-title:start */}
        <EditableText eid="nb-cta-title" tag="p" className="text-white font-bold mb-2" style={{ fontFamily: 'serif' }}>{"ニューボーンフォトのご予約はこちら"}</EditableText>
        {/* EDITABLE:nb-cta-title:end */}
        {/* EDITABLE:nb-cta-sub:start */}
        <EditableText eid="nb-cta-sub" tag="p" className="text-stone-400 text-xs mb-5">{"24時間オンライン予約受付 / 神奈川県厚木市"}</EditableText>
        {/* EDITABLE:nb-cta-sub:end */}
        <a href="https://studio-app-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-reserve inline-block px-8 py-3 rounded-full text-sm">
          【24時間対応】ご予約はこちら
        </a>
      </div>
    </article>
  );
}
