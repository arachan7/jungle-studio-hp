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
        <span>お宮参り</span>
      </nav>

      <header className="mb-10">
        <p className="text-amber-700 text-xs tracking-widest mb-3">COLUMN / お宮参り</p>
        {/* EDITABLE:om-title:start */}
        <EditableText eid="om-title" tag="h1" className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ fontFamily: 'serif' }}>{"お宮参りの記念写真ガイド｜生後1ヶ月の大切なお祝いを写真に残す"}</EditableText>
        {/* EDITABLE:om-title:end */}
        {/* EDITABLE:om-sub:start */}
        <EditableText eid="om-sub" tag="p" className="text-stone-500 text-sm">{"神奈川県厚木市のフォトスタジオ「ジャングルスタジオ」が解説"}</EditableText>
        {/* EDITABLE:om-sub:end */}
      </header>

      <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
        {/* EDITABLE:om-hero:start */}
        <EditableImage eid="om-hero" src="/omiyamairi.jpg" alt="お宮参り 記念写真 フォトスタジオ 厚木市" fill className="object-cover" priority />
        {/* EDITABLE:om-hero:end */}
      </div>

      <div className="prose prose-stone max-w-none text-sm leading-relaxed space-y-8">
        <section>
          {/* EDITABLE:om-s0-h:start */}
          <EditableText eid="om-s0-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"お宮参りとは？時期と意味"}</EditableText>
          {/* EDITABLE:om-s0-h:end */}
          {/* EDITABLE:om-s0-p0:start */}
          <EditableText eid="om-s0-p0" tag="p" className="text-stone-700">{"お宮参りは、赤ちゃんが無事に生まれたことを神様に感謝し、健やかな成長を祈願する日本の伝統行事です。一般的に男の子は生後31〜32日目、女の子は生後32〜33日目に行うとされていますが、現代では生後1ヶ月を目安に、家族の都合に合わせて行うご家庭が増えています。"}</EditableText>
          {/* EDITABLE:om-s0-p0:end */}
          {/* EDITABLE:om-s0-p1:start */}
          <EditableText eid="om-s0-p1" tag="p" className="text-stone-700 mt-3">{"厚木市周辺では、厚木神社・愛甲八幡宮・寒川神社などでお宮参りをされる方が多く、参拝の前後にフォトスタジオで記念撮影をするケースが人気です。"}</EditableText>
          {/* EDITABLE:om-s0-p1:end */}
        </section>

        <section>
          {/* EDITABLE:om-s1-h:start */}
          <EditableText eid="om-s1-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"お宮参り写真をスタジオで撮るポイント"}</EditableText>
          {/* EDITABLE:om-s1-h:end */}
          <ul className="space-y-2 text-stone-700">
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>{/* EDITABLE:om-s1-i0:start */}<EditableText eid="om-s1-i0" tag="span">{"生後1ヶ月の赤ちゃんは体温調節が未熟。快適な室内スタジオが安心"}</EditableText>{/* EDITABLE:om-s1-i0:end */}</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>{/* EDITABLE:om-s1-i1:start */}<EditableText eid="om-s1-i1" tag="span">{"授乳室完備で赤ちゃんのペースに合わせた撮影が可能"}</EditableText>{/* EDITABLE:om-s1-i1:end */}</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>{/* EDITABLE:om-s1-i2:start */}<EditableText eid="om-s1-i2" tag="span">{"豊富な衣装から選択可能"}</EditableText>{/* EDITABLE:om-s1-i2:end */}</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>{/* EDITABLE:om-s1-i3:start */}<EditableText eid="om-s1-i3" tag="span">{"両家の祖父母も一緒に家族写真として残せる"}</EditableText>{/* EDITABLE:om-s1-i3:end */}</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>{/* EDITABLE:om-s1-i4:start */}<EditableText eid="om-s1-i4" tag="span">{"参拝後の疲れを気にせずゆったり撮影できる"}</EditableText>{/* EDITABLE:om-s1-i4:end */}</li>
          </ul>
        </section>

        <section>
          {/* EDITABLE:om-s2-h:start */}
          <EditableText eid="om-s2-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"ジャングルスタジオのお宮参りプラン"}</EditableText>
          {/* EDITABLE:om-s2-h:end */}
          <div className="bg-amber-50 rounded-2xl p-6 space-y-4">
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                {/* EDITABLE:om-plan0-name:start */}
                <EditableText eid="om-plan0-name" tag="p" className="font-bold text-stone-800 text-sm">{"エコノミープラン"}</EditableText>
                {/* EDITABLE:om-plan0-name:end */}
              </div>
              {/* EDITABLE:om-plan0-detail:start */}
              <EditableText eid="om-plan0-detail" tag="p" className="text-xs text-stone-500">{"約40分 / 衣装〜2着 / 2スタジオ〜 / 50枚保証"}</EditableText>
              {/* EDITABLE:om-plan0-detail:end */}
              {/* EDITABLE:om-plan0-price:start */}
              <EditableText eid="om-plan0-price" tag="p" className="text-xl font-bold text-amber-700 mt-2">{"¥25,000〜"}</EditableText>
              {/* EDITABLE:om-plan0-price:end */}
            </div>
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                {/* EDITABLE:om-plan1-name:start */}
                <EditableText eid="om-plan1-name" tag="p" className="font-bold text-stone-800 text-sm">{"プレミアムプラン"}</EditableText>
                {/* EDITABLE:om-plan1-name:end */}
                <span className="text-[10px] font-extrabold bg-red-500 text-white px-2 py-0.5 rounded-full">⭐ 一番人気</span>
              </div>
              {/* EDITABLE:om-plan1-detail:start */}
              <EditableText eid="om-plan1-detail" tag="p" className="text-xs text-stone-500">{"約60分 / 衣装〜3着 / 3スタジオ〜 / 80枚保証"}</EditableText>
              {/* EDITABLE:om-plan1-detail:end */}
              {/* EDITABLE:om-plan1-price:start */}
              <EditableText eid="om-plan1-price" tag="p" className="text-xl font-bold text-amber-700 mt-2">{"¥30,000〜"}</EditableText>
              {/* EDITABLE:om-plan1-price:end */}
            </div>
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                {/* EDITABLE:om-plan2-name:start */}
                <EditableText eid="om-plan2-name" tag="p" className="font-bold text-stone-800 text-sm">{"ファーストプラン"}</EditableText>
                {/* EDITABLE:om-plan2-name:end */}
              </div>
              {/* EDITABLE:om-plan2-detail:start */}
              <EditableText eid="om-plan2-detail" tag="p" className="text-xs text-stone-500">{"約90分 / 衣装〜4着 / 4スタジオ / 120枚保証"}</EditableText>
              {/* EDITABLE:om-plan2-detail:end */}
              {/* EDITABLE:om-plan2-price:start */}
              <EditableText eid="om-plan2-price" tag="p" className="text-xl font-bold text-amber-700 mt-2">{"¥35,000〜"}</EditableText>
              {/* EDITABLE:om-plan2-price:end */}
            </div>
            {/* EDITABLE:om-s2-note:start */}
            <EditableText eid="om-s2-note" tag="p" className="text-xs text-stone-400">{"延長料金：15分ごとに¥3,300（税込）"}</EditableText>
            {/* EDITABLE:om-s2-note:end */}
          </div>
        </section>

        <section>
          {/* EDITABLE:om-s3-h:start */}
          <EditableText eid="om-s3-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"シンプルプランという選択肢"}</EditableText>
          {/* EDITABLE:om-s3-h:end */}
          <div className="bg-stone-50 border-2 border-stone-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-red-500 text-white text-xs font-extrabold px-3 py-1 rounded-full">🎀 当日決めたい方に！</span>
            </div>
            <div className="bg-white rounded-xl p-4 mb-4">
              {/* EDITABLE:om-simple-name:start */}
              <EditableText eid="om-simple-name" tag="p" className="font-bold text-stone-800 text-sm mb-1">{"シンプルプラン"}</EditableText>
              {/* EDITABLE:om-simple-name:end */}
              {/* EDITABLE:om-simple-price:start */}
              <EditableText eid="om-simple-price" tag="p" className="text-xl font-bold text-amber-700 mb-2">{"¥5,000〜"}</EditableText>
              {/* EDITABLE:om-simple-price:end */}
              <div className="text-xs text-stone-500 space-y-1">
                {/* EDITABLE:om-simple-d0:start */}
                <EditableText eid="om-simple-d0" tag="p">{"撮影時間：約90〜120分"}</EditableText>
                {/* EDITABLE:om-simple-d0:end */}
                {/* EDITABLE:om-simple-d1:start */}
                <EditableText eid="om-simple-d1" tag="p">{"衣装：1〜4着（主役のみ）"}</EditableText>
                {/* EDITABLE:om-simple-d1:end */}
                {/* EDITABLE:om-simple-d2:start */}
                <EditableText eid="om-simple-d2" tag="p">{"スタジオ：3〜4スタジオ"}</EditableText>
                {/* EDITABLE:om-simple-d2:end */}
                {/* EDITABLE:om-simple-d3:start */}
                <EditableText eid="om-simple-d3" tag="p">{"家族・兄弟写真：何人でも自由"}</EditableText>
                {/* EDITABLE:om-simple-d3:end */}
                {/* EDITABLE:om-simple-d4:start */}
                <EditableText eid="om-simple-d4" tag="p">{"データ保証：0枚スタート（撮影後にご自身で選択）"}</EditableText>
                {/* EDITABLE:om-simple-d4:end */}
                {/* EDITABLE:om-simple-d5:start */}
                <EditableText eid="om-simple-d5" tag="p">{"主役追加：+¥2,500/人"}</EditableText>
                {/* EDITABLE:om-simple-d5:end */}
              </div>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 mb-4">
              {/* EDITABLE:om-retouch-h:start */}
              <EditableText eid="om-retouch-h" tag="p" className="font-semibold text-stone-800 text-sm mb-2">{"撮影後のデータ購入（当日選択）"}</EditableText>
              {/* EDITABLE:om-retouch-h:end */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:om-retouch0-label:start */}
                  <EditableText eid="om-retouch0-label" tag="p" className="text-stone-500">{"美肌レタッチ 1枚"}</EditableText>
                  {/* EDITABLE:om-retouch0-label:end */}
                  {/* EDITABLE:om-retouch0-price:start */}
                  <EditableText eid="om-retouch0-price" tag="p" className="font-bold text-stone-800">{"¥3,000"}</EditableText>
                  {/* EDITABLE:om-retouch0-price:end */}
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:om-retouch1-label:start */}
                  <EditableText eid="om-retouch1-label" tag="p" className="text-stone-500">{"美肌レタッチ 10枚"}</EditableText>
                  {/* EDITABLE:om-retouch1-label:end */}
                  {/* EDITABLE:om-retouch1-price:start */}
                  <EditableText eid="om-retouch1-price" tag="p" className="font-bold text-stone-800">{"¥25,000"}</EditableText>
                  {/* EDITABLE:om-retouch1-price:end */}
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:om-retouch2-label:start */}
                  <EditableText eid="om-retouch2-label" tag="p" className="text-stone-500">{"美肌レタッチ 20枚"}</EditableText>
                  {/* EDITABLE:om-retouch2-label:end */}
                  {/* EDITABLE:om-retouch2-price:start */}
                  <EditableText eid="om-retouch2-price" tag="p" className="font-bold text-stone-800">{"¥45,000"}</EditableText>
                  {/* EDITABLE:om-retouch2-price:end */}
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:om-retouch3-label:start */}
                  <EditableText eid="om-retouch3-label" tag="p" className="text-stone-500">{"全データ（光レタッチのみ）"}</EditableText>
                  {/* EDITABLE:om-retouch3-label:end */}
                  {/* EDITABLE:om-retouch3-price:start */}
                  <EditableText eid="om-retouch3-price" tag="p" className="font-bold text-stone-800">{"¥50,000"}</EditableText>
                  {/* EDITABLE:om-retouch3-price:end */}
                </div>
              </div>
            </div>
            <div className="text-xs text-stone-600 space-y-1">
              {/* EDITABLE:om-reco-h:start */}
              <EditableText eid="om-reco-h" tag="p" className="font-semibold text-stone-700 mb-1">{"こんな方におすすめ"}</EditableText>
              {/* EDITABLE:om-reco-h:end */}
              {/* EDITABLE:om-reco0:start */}
              <EditableText eid="om-reco0" tag="p">{"✓ データ枚数を当日の雰囲気で決めたい方"}</EditableText>
              {/* EDITABLE:om-reco0:end */}
              {/* EDITABLE:om-reco1:start */}
              <EditableText eid="om-reco1" tag="p">{"✓ ご家族・きょうだい全員でたくさん撮りたい方"}</EditableText>
              {/* EDITABLE:om-reco1:end */}
              {/* EDITABLE:om-reco2:start */}
              <EditableText eid="om-reco2" tag="p">{"✓ 予算を自分でコントロールしたい方"}</EditableText>
              {/* EDITABLE:om-reco2:end */}
            </div>
          </div>
        </section>

        <section>
          {/* EDITABLE:om-s4-h:start */}
          <EditableText eid="om-s4-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"お宮参り撮影の服装・準備リスト"}</EditableText>
          {/* EDITABLE:om-s4-h:end */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-stone-50 rounded-xl p-4">
              {/* EDITABLE:om-list0-title:start */}
              <EditableText eid="om-list0-title" tag="p" className="font-semibold text-stone-800 text-sm mb-2">{"赤ちゃんの準備"}</EditableText>
              {/* EDITABLE:om-list0-title:end */}
              <ul className="text-xs text-stone-600 space-y-1">
                {/* EDITABLE:om-list0-i0:start */}<EditableText eid="om-list0-i0" tag="li">{"□ 産着（スタジオでも用意可）"}</EditableText>{/* EDITABLE:om-list0-i0:end */}
                {/* EDITABLE:om-list0-i1:start */}<EditableText eid="om-list0-i1" tag="li">{"□ 白いベビー服・肌着"}</EditableText>{/* EDITABLE:om-list0-i1:end */}
                {/* EDITABLE:om-list0-i2:start */}<EditableText eid="om-list0-i2" tag="li">{"□ 授乳グッズ・ミルク"}</EditableText>{/* EDITABLE:om-list0-i2:end */}
                {/* EDITABLE:om-list0-i3:start */}<EditableText eid="om-list0-i3" tag="li">{"□ おむつ・おしりふき"}</EditableText>{/* EDITABLE:om-list0-i3:end */}
                {/* EDITABLE:om-list0-i4:start */}<EditableText eid="om-list0-i4" tag="li">{"□ おくるみ・バスタオル"}</EditableText>{/* EDITABLE:om-list0-i4:end */}
              </ul>
            </div>
            <div className="bg-stone-50 rounded-xl p-4">
              {/* EDITABLE:om-list1-title:start */}
              <EditableText eid="om-list1-title" tag="p" className="font-semibold text-stone-800 text-sm mb-2">{"パパ・ママ・祖父母の服装"}</EditableText>
              {/* EDITABLE:om-list1-title:end */}
              <ul className="text-xs text-stone-600 space-y-1">
                {/* EDITABLE:om-list1-i0:start */}<EditableText eid="om-list1-i0" tag="li">{"□ 訪問着・振袖・留袖"}</EditableText>{/* EDITABLE:om-list1-i0:end */}
                {/* EDITABLE:om-list1-i1:start */}<EditableText eid="om-list1-i1" tag="li">{"□ セレモニースーツ・ワンピース"}</EditableText>{/* EDITABLE:om-list1-i1:end */}
                {/* EDITABLE:om-list1-i2:start */}<EditableText eid="om-list1-i2" tag="li">{"□ 落ち着いた色合いの服装"}</EditableText>{/* EDITABLE:om-list1-i2:end */}
                {/* EDITABLE:om-list1-i3:start */}<EditableText eid="om-list1-i3" tag="li">{"□ 動きやすい靴"}</EditableText>{/* EDITABLE:om-list1-i3:end */}
              </ul>
            </div>
          </div>
        </section>

        <section>
          {/* EDITABLE:om-s5-h:start */}
          <EditableText eid="om-s5-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"よくある質問"}</EditableText>
          {/* EDITABLE:om-s5-h:end */}
          <div className="space-y-4">
            <EditableFaqAccordion items={[
              {
                q: (<>{/* EDITABLE:om-faq0-q:start */}<EditableText eid="om-faq0-q" tag="span">{"お宮参りはいつ撮影するのがおすすめですか？"}</EditableText>{/* EDITABLE:om-faq0-q:end */}</>),
                a: (<>{/* EDITABLE:om-faq0-a:start */}<EditableText eid="om-faq0-a" tag="span">{"伝統的には男の子は生後31〜32日目、女の子は生後32〜33日目とされていますが、現在は1ヶ月検診が終わった後、体調の良い日を選ぶご家族が多いです。100日祝いと一緒に撮影されるケースも増えています。"}</EditableText>{/* EDITABLE:om-faq0-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:om-faq1-q:start */}<EditableText eid="om-faq1-q" tag="span">{"お宮参り用のお祝い着（産着）はレンタルできますか？"}</EditableText>{/* EDITABLE:om-faq1-q:end */}</>),
                a: (<>{/* EDITABLE:om-faq1-a:start */}<EditableText eid="om-faq1-a" tag="span">{"はい。お祝い着のレンタルがプランに含まれています。"}</EditableText>{/* EDITABLE:om-faq1-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:om-faq2-q:start */}<EditableText eid="om-faq2-q" tag="span">{"神社でのロケーション撮影もできますか？"}</EditableText>{/* EDITABLE:om-faq2-q:end */}</>),
                a: (<>{/* EDITABLE:om-faq2-a:start */}<EditableText eid="om-faq2-a" tag="span">{"今はロケーション撮影不可ですが、今後実装予定です。"}</EditableText>{/* EDITABLE:om-faq2-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:om-faq3-q:start */}<EditableText eid="om-faq3-q" tag="span">{"百日祝いと一緒に撮影できますか？"}</EditableText>{/* EDITABLE:om-faq3-q:end */}</>),
                a: (<>{/* EDITABLE:om-faq3-a:start */}<EditableText eid="om-faq3-a" tag="span">{"はい、お宮参り・百日祝いを同日にまとめて撮影できますので、店頭またはご予約フォームにてお伝えください。"}</EditableText>{/* EDITABLE:om-faq3-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:om-faq4-q:start */}<EditableText eid="om-faq4-q" tag="span">{"授乳・おむつ替えのスペースはありますか？"}</EditableText>{/* EDITABLE:om-faq4-q:end */}</>),
                a: (<>{/* EDITABLE:om-faq4-a:start */}<EditableText eid="om-faq4-a" tag="span">{"専用スペースではないものの、お着替えスペースなどで対応可能です。当日スタッフへお申し付けください。"}</EditableText>{/* EDITABLE:om-faq4-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:om-faq5-q:start */}<EditableText eid="om-faq5-q" tag="span">{"赤ちゃんが泣いてしまっても大丈夫ですか？"}</EditableText>{/* EDITABLE:om-faq5-q:end */}</>),
                a: (<>{/* EDITABLE:om-faq5-a:start */}<EditableText eid="om-faq5-a" tag="span">{"大丈夫です。泣いてしまうのもその子のありのままの姿です。スタッフが一緒にあやしながら丁寧に撮影します。泣いてしまってどうしても撮影が難しい場合は、別日に変更可能です。"}</EditableText>{/* EDITABLE:om-faq5-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:om-faq6-q:start */}<EditableText eid="om-faq6-q" tag="span">{"家族・祖父母も一緒に写真に入れますか？"}</EditableText>{/* EDITABLE:om-faq6-q:end */}</>),
                a: (<>{/* EDITABLE:om-faq6-a:start */}<EditableText eid="om-faq6-a" tag="span">{"はい、+¥4,000の家族写真オプションを追加で、ご家族揃っての写真も撮影できます。人数が多くなる場合はスタジオ内に入りきれないこともあるため、事前にご相談ください。"}</EditableText>{/* EDITABLE:om-faq6-a:end */}</>),
              },
            ]} />
          </div>
        </section>
      </div>

      <div className="mt-12 bg-stone-900 rounded-2xl p-8 text-center">
        {/* EDITABLE:om-cta-title:start */}
        <EditableText eid="om-cta-title" tag="p" className="text-white font-bold mb-2" style={{ fontFamily: 'serif' }}>{"お宮参りのご予約はこちら"}</EditableText>
        {/* EDITABLE:om-cta-title:end */}
        {/* EDITABLE:om-cta-sub:start */}
        <EditableText eid="om-cta-sub" tag="p" className="text-stone-400 text-xs mb-5">{"24時間オンライン予約受付 / 神奈川県厚木市"}</EditableText>
        {/* EDITABLE:om-cta-sub:end */}
        <a href="https://studio-app-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-reserve inline-block px-8 py-3 rounded-full text-sm">
          【24時間対応】ご予約はこちら
        </a>
      </div>
    </article>
  );
}
