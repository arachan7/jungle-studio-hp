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
        <span>七五三フォト</span>
      </nav>

      <header className="mb-10">
        <p className="text-amber-700 text-xs tracking-widest mb-3">COLUMN / 七五三</p>
        {/* EDITABLE:sg-title:start */}
        <EditableText eid="sg-title" tag="h1" className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ fontFamily: 'serif' }}>{"七五三フォト完全ガイド｜3歳・5歳・7歳の記念写真を残すために"}</EditableText>
        {/* EDITABLE:sg-title:end */}
        {/* EDITABLE:sg-sub:start */}
        <EditableText eid="sg-sub" tag="p" className="text-stone-500 text-sm">{"神奈川県厚木市のフォトスタジオ「ジャングルスタジオ」が解説"}</EditableText>
        {/* EDITABLE:sg-sub:end */}
      </header>

      <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
        {/* EDITABLE:sg-hero:start */}
        <EditableImage eid="sg-hero" src="/shichigosan.jpg" alt="七五三 フォトスタジオ 厚木市 記念写真" fill className="object-cover" priority />
        {/* EDITABLE:sg-hero:end */}
      </div>

      <div className="prose prose-stone max-w-none text-sm leading-relaxed space-y-8">
        <section>
          {/* EDITABLE:sg-s0-h:start */}
          <EditableText eid="sg-s0-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"七五三とは？その意味と由来"}</EditableText>
          {/* EDITABLE:sg-s0-h:end */}
          {/* EDITABLE:sg-s0-p0:start */}
          <EditableText eid="sg-s0-p0" tag="p" className="text-stone-700">{"七五三（しちごさん）は、子どもの健やかな成長を祝う日本の伝統行事です。数え年または満年齢で、男の子は3歳と5歳、女の子は3歳と7歳にお祝いをするのが一般的とされています。11月15日が正式な七五三の日ですが、現在は10月〜12月にかけて神社や写真スタジオで広く行われています。"}</EditableText>
          {/* EDITABLE:sg-s0-p0:end */}
          {/* EDITABLE:sg-s0-p1:start */}
          <EditableText eid="sg-s0-p1" tag="p" className="text-stone-700 mt-3">{"厚木市内でも、厚木神社や飯山白山森など人気のお参りスポットがあります。お参りの前後に、フォトスタジオで記念撮影をされるご家族が多くなっています。"}</EditableText>
          {/* EDITABLE:sg-s0-p1:end */}
        </section>

        <section>
          {/* EDITABLE:sg-s1-h:start */}
          <EditableText eid="sg-s1-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"七五三の記念写真をスタジオで撮るメリット"}</EditableText>
          {/* EDITABLE:sg-s1-h:end */}
          <ul className="space-y-2 text-stone-700">
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>{/* EDITABLE:sg-s1-i0:start */}<EditableText eid="sg-s1-i0" tag="span">{"天候に左右されず、常にベストな環境で撮影できる"}</EditableText>{/* EDITABLE:sg-s1-i0:end */}</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>{/* EDITABLE:sg-s1-i1:start */}<EditableText eid="sg-s1-i1" tag="span">{"豊富な衣装（着物・ドレス）の中から選べる"}</EditableText>{/* EDITABLE:sg-s1-i1:end */}</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>{/* EDITABLE:sg-s1-i2:start */}<EditableText eid="sg-s1-i2" tag="span">{"プロのカメラマンが子どもの自然な表情を引き出す"}</EditableText>{/* EDITABLE:sg-s1-i2:end */}</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>{/* EDITABLE:sg-s1-i3:start */}<EditableText eid="sg-s1-i3" tag="span">{"複数のスタジオセットで多彩なシーンが撮れる"}</EditableText>{/* EDITABLE:sg-s1-i3:end */}</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>{/* EDITABLE:sg-s1-i4:start */}<EditableText eid="sg-s1-i4" tag="span">{"親子写真・兄弟写真も同時に撮影可能"}</EditableText>{/* EDITABLE:sg-s1-i4:end */}</li>
          </ul>
        </section>

        <section>
          {/* EDITABLE:sg-s2-h:start */}
          <EditableText eid="sg-s2-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"ジャングルスタジオの七五三プラン"}</EditableText>
          {/* EDITABLE:sg-s2-h:end */}
          <div className="bg-amber-50 rounded-2xl p-6 space-y-4">
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                {/* EDITABLE:sg-plan0-name:start */}
                <EditableText eid="sg-plan0-name" tag="p" className="font-bold text-stone-800 text-sm">{"エコノミープラン"}</EditableText>
                {/* EDITABLE:sg-plan0-name:end */}
              </div>
              {/* EDITABLE:sg-plan0-detail:start */}
              <EditableText eid="sg-plan0-detail" tag="p" className="text-xs text-stone-500">{"約40分 / 衣装1着 / 2スタジオ〜 / 50枚保証"}</EditableText>
              {/* EDITABLE:sg-plan0-detail:end */}
              {/* EDITABLE:sg-plan0-price:start */}
              <EditableText eid="sg-plan0-price" tag="p" className="text-xl font-bold text-amber-700 mt-2">{"¥25,000〜"}</EditableText>
              {/* EDITABLE:sg-plan0-price:end */}
              <p className="text-xs text-stone-500 mt-2">
                ヘアメイク・衣装レンタルする場合は別途オプションで＋5,000円になります。
              </p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                {/* EDITABLE:sg-plan1-name:start */}
                <EditableText eid="sg-plan1-name" tag="p" className="font-bold text-stone-800 text-sm">{"プレミアムプラン"}</EditableText>
                {/* EDITABLE:sg-plan1-name:end */}
                <span className="text-[10px] font-extrabold bg-red-500 text-white px-2 py-0.5 rounded-full">⭐ 一番人気</span>
              </div>
              {/* EDITABLE:sg-plan1-detail:start */}
              <EditableText eid="sg-plan1-detail" tag="p" className="text-xs text-stone-500">{"約60分 / 衣装1着〜 / 3スタジオ〜 / 80枚保証"}</EditableText>
              {/* EDITABLE:sg-plan1-detail:end */}
              {/* EDITABLE:sg-plan1-price:start */}
              <EditableText eid="sg-plan1-price" tag="p" className="text-xl font-bold text-amber-700 mt-2">{"¥30,000〜"}</EditableText>
              {/* EDITABLE:sg-plan1-price:end */}
            </div>
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                {/* EDITABLE:sg-plan2-name:start */}
                <EditableText eid="sg-plan2-name" tag="p" className="font-bold text-stone-800 text-sm">{"ファーストプラン"}</EditableText>
                {/* EDITABLE:sg-plan2-name:end */}
              </div>
              {/* EDITABLE:sg-plan2-detail:start */}
              <EditableText eid="sg-plan2-detail" tag="p" className="text-xs text-stone-500">{"約90分 / 衣装1着〜 / 4スタジオ / 120枚保証"}</EditableText>
              {/* EDITABLE:sg-plan2-detail:end */}
              {/* EDITABLE:sg-plan2-price:start */}
              <EditableText eid="sg-plan2-price" tag="p" className="text-xl font-bold text-amber-700 mt-2">{"¥35,000〜"}</EditableText>
              {/* EDITABLE:sg-plan2-price:end */}
            </div>
          </div>
          {/* EDITABLE:sg-s2-note:start */}
          <EditableText eid="sg-s2-note" tag="p" className="text-xs text-stone-400 mt-2">{"主役2人以上は2人目からプラン料金の50%で追加可能"}</EditableText>
          {/* EDITABLE:sg-s2-note:end */}
        </section>

        <section>
          {/* EDITABLE:sg-s3-h:start */}
          <EditableText eid="sg-s3-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"シンプルプランという選択肢"}</EditableText>
          {/* EDITABLE:sg-s3-h:end */}
          <div className="bg-stone-50 border-2 border-stone-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-red-500 text-white text-xs font-extrabold px-3 py-1 rounded-full">🎀 当日決めたい方に！</span>
            </div>
            <div className="bg-white rounded-xl p-4 mb-4">
              {/* EDITABLE:sg-simple-name:start */}
              <EditableText eid="sg-simple-name" tag="p" className="font-bold text-stone-800 text-sm mb-1">{"シンプルプラン"}</EditableText>
              {/* EDITABLE:sg-simple-name:end */}
              {/* EDITABLE:sg-simple-price:start */}
              <EditableText eid="sg-simple-price" tag="p" className="text-xl font-bold text-amber-700 mb-2">{"¥5,000〜"}</EditableText>
              {/* EDITABLE:sg-simple-price:end */}
              <div className="text-xs text-stone-500 space-y-1">
                {/* EDITABLE:sg-simple-d0:start */}
                <EditableText eid="sg-simple-d0" tag="p">{"撮影時間：約90〜120分"}</EditableText>
                {/* EDITABLE:sg-simple-d0:end */}
                {/* EDITABLE:sg-simple-d1:start */}
                <EditableText eid="sg-simple-d1" tag="p">{"衣装：1〜4着（主役のみ）"}</EditableText>
                {/* EDITABLE:sg-simple-d1:end */}
                {/* EDITABLE:sg-simple-d2:start */}
                <EditableText eid="sg-simple-d2" tag="p">{"スタジオ：3〜4スタジオ"}</EditableText>
                {/* EDITABLE:sg-simple-d2:end */}
                {/* EDITABLE:sg-simple-d3:start */}
                <EditableText eid="sg-simple-d3" tag="p">{"家族・兄弟写真：何人でも自由"}</EditableText>
                {/* EDITABLE:sg-simple-d3:end */}
                {/* EDITABLE:sg-simple-d4:start */}
                <EditableText eid="sg-simple-d4" tag="p">{"データ保証：0枚スタート（撮影後にご自身で選択）"}</EditableText>
                {/* EDITABLE:sg-simple-d4:end */}
                {/* EDITABLE:sg-simple-d5:start */}
                <EditableText eid="sg-simple-d5" tag="p">{"主役追加：+¥2,500/人"}</EditableText>
                {/* EDITABLE:sg-simple-d5:end */}
              </div>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 mb-4">
              {/* EDITABLE:sg-retouch-h:start */}
              <EditableText eid="sg-retouch-h" tag="p" className="font-semibold text-stone-800 text-sm mb-2">{"撮影後のデータ購入（当日選択）"}</EditableText>
              {/* EDITABLE:sg-retouch-h:end */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:sg-retouch0-label:start */}
                  <EditableText eid="sg-retouch0-label" tag="p" className="text-stone-500">{"美肌レタッチ 1枚"}</EditableText>
                  {/* EDITABLE:sg-retouch0-label:end */}
                  {/* EDITABLE:sg-retouch0-price:start */}
                  <EditableText eid="sg-retouch0-price" tag="p" className="font-bold text-stone-800">{"¥3,000"}</EditableText>
                  {/* EDITABLE:sg-retouch0-price:end */}
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:sg-retouch1-label:start */}
                  <EditableText eid="sg-retouch1-label" tag="p" className="text-stone-500">{"美肌レタッチ 10枚"}</EditableText>
                  {/* EDITABLE:sg-retouch1-label:end */}
                  {/* EDITABLE:sg-retouch1-price:start */}
                  <EditableText eid="sg-retouch1-price" tag="p" className="font-bold text-stone-800">{"¥25,000"}</EditableText>
                  {/* EDITABLE:sg-retouch1-price:end */}
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:sg-retouch2-label:start */}
                  <EditableText eid="sg-retouch2-label" tag="p" className="text-stone-500">{"美肌レタッチ 20枚"}</EditableText>
                  {/* EDITABLE:sg-retouch2-label:end */}
                  {/* EDITABLE:sg-retouch2-price:start */}
                  <EditableText eid="sg-retouch2-price" tag="p" className="font-bold text-stone-800">{"¥45,000"}</EditableText>
                  {/* EDITABLE:sg-retouch2-price:end */}
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:sg-retouch3-label:start */}
                  <EditableText eid="sg-retouch3-label" tag="p" className="text-stone-500">{"全データ（光レタッチのみ）"}</EditableText>
                  {/* EDITABLE:sg-retouch3-label:end */}
                  {/* EDITABLE:sg-retouch3-price:start */}
                  <EditableText eid="sg-retouch3-price" tag="p" className="font-bold text-stone-800">{"¥50,000"}</EditableText>
                  {/* EDITABLE:sg-retouch3-price:end */}
                </div>
              </div>
            </div>
            <div className="text-xs text-stone-600 space-y-1">
              {/* EDITABLE:sg-reco-h:start */}
              <EditableText eid="sg-reco-h" tag="p" className="font-semibold text-stone-700 mb-1">{"こんな方におすすめ"}</EditableText>
              {/* EDITABLE:sg-reco-h:end */}
              {/* EDITABLE:sg-reco0:start */}
              <EditableText eid="sg-reco0" tag="p">{"✓ データ枚数を当日の雰囲気で決めたい方"}</EditableText>
              {/* EDITABLE:sg-reco0:end */}
              {/* EDITABLE:sg-reco1:start */}
              <EditableText eid="sg-reco1" tag="p">{"✓ ご家族・きょうだい全員でたくさん撮りたい方"}</EditableText>
              {/* EDITABLE:sg-reco1:end */}
              {/* EDITABLE:sg-reco2:start */}
              <EditableText eid="sg-reco2" tag="p">{"✓ 予算を自分でコントロールしたい方"}</EditableText>
              {/* EDITABLE:sg-reco2:end */}
            </div>
          </div>
        </section>

        <section>
          {/* EDITABLE:sg-s4-h:start */}
          <EditableText eid="sg-s4-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"七五三撮影の準備・当日の流れ"}</EditableText>
          {/* EDITABLE:sg-s4-h:end */}
          <ol className="space-y-3 text-stone-700">
            <li className="flex gap-3"><span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>{/* EDITABLE:sg-s4-i0:start */}<EditableText eid="sg-s4-i0" tag="span">{"オンラインで予約（24時間受付）"}</EditableText>{/* EDITABLE:sg-s4-i0:end */}</li>
            <li className="flex gap-3"><span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>{/* EDITABLE:sg-s4-i1:start */}<EditableText eid="sg-s4-i1" tag="span">{"当日スタジオに来店・衣装選び"}</EditableText>{/* EDITABLE:sg-s4-i1:end */}</li>
            <li className="flex gap-3"><span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>{/* EDITABLE:sg-s4-i2:start */}<EditableText eid="sg-s4-i2" tag="span">{"ヘアメイク・着付け（衣装持ち込みも可）"}</EditableText>{/* EDITABLE:sg-s4-i2:end */}</li>
            <li className="flex gap-3"><span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>{/* EDITABLE:sg-s4-i3:start */}<EditableText eid="sg-s4-i3" tag="span">{"プロカメラマンによる撮影"}</EditableText>{/* EDITABLE:sg-s4-i3:end */}</li>
            <li className="flex gap-3"><span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">5</span>{/* EDITABLE:sg-s4-i4:start */}<EditableText eid="sg-s4-i4" tag="span">{"データ納品（翌日〜1週間以内）"}</EditableText>{/* EDITABLE:sg-s4-i4:end */}</li>
          </ol>
        </section>

        <section>
          {/* EDITABLE:sg-s5-h:start */}
          <EditableText eid="sg-s5-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"七五三撮影のよくある質問"}</EditableText>
          {/* EDITABLE:sg-s5-h:end */}
          <EditableFaqAccordion items={[
            {
              q: (<>{/* EDITABLE:sg-faq0-q:start */}<EditableText eid="sg-faq0-q" tag="span">{"七五三の撮影はいつ頃がおすすめですか？"}</EditableText>{/* EDITABLE:sg-faq0-q:end */}</>),
              a: (<>{/* EDITABLE:sg-faq0-a:start */}<EditableText eid="sg-faq0-a" tag="span">{"七五三のお祝い本来の日は11月15日ですが、9月以降は大変混み合うためお早めのご予約をおすすめします。1月〜9月はオフシーズンとなり、お得な料金で撮影できます。前撮り・後撮りどちらも人気です。"}</EditableText>{/* EDITABLE:sg-faq0-a:end */}</>),
            },
            {
              q: (<>{/* EDITABLE:sg-faq1-q:start */}<EditableText eid="sg-faq1-q" tag="span">{"数え年・満年齢どちらで撮影すればいいですか？"}</EditableText>{/* EDITABLE:sg-faq1-q:end */}</>),
              a: (<>{/* EDITABLE:sg-faq1-a:start */}<EditableText eid="sg-faq1-a" tag="span">{"どちらでも問題ありません。3歳は数え年だと着付けが大変な場合もあるため、お子様の体格や成長具合に合わせてお決めください。"}</EditableText>{/* EDITABLE:sg-faq1-a:end */}</>),
            },
            {
              q: (<>{/* EDITABLE:sg-faq2-q:start */}<EditableText eid="sg-faq2-q" tag="span">{"きょうだい写真や家族写真も撮れますか？"}</EditableText>{/* EDITABLE:sg-faq2-q:end */}</>),
              a: (<>{/* EDITABLE:sg-faq2-a:start */}<EditableText eid="sg-faq2-a" tag="span">{"はい。七五三メインのお子様の主役写真に加え、ごきょうだいやご家族との写真も撮影できます。お子様2人以上を主役で撮影したい場合は有料オプションになります。"}</EditableText>{/* EDITABLE:sg-faq2-a:end */}</>),
            },
            {
              q: (<>{/* EDITABLE:sg-faq3-q:start */}<EditableText eid="sg-faq3-q" tag="span">{"いとこ同士・友達同士での撮影はできますか？"}</EditableText>{/* EDITABLE:sg-faq3-q:end */}</>),
              a: (<>{/* EDITABLE:sg-faq3-a:start */}<EditableText eid="sg-faq3-a" tag="span">{"可能です。その場合は家族ごとに料金が発生します（七五三プラン×人数分）。ご予約フォームより入力して分からない場合は、事前にご相談ください。"}</EditableText>{/* EDITABLE:sg-faq3-a:end */}</>),
            },
            {
              q: (<>{/* EDITABLE:sg-faq4-q:start */}<EditableText eid="sg-faq4-q" tag="span">{"着物はレンタルできますか？持ち込みも可能ですか？"}</EditableText>{/* EDITABLE:sg-faq4-q:end */}</>),
              a: (<>{/* EDITABLE:sg-faq4-a:start */}<EditableText eid="sg-faq4-a" tag="span">{"どちらも対応しています。持ち込みの場合はもし出来れば、「肩上げ」「半衿つけ」を事前に済ませた状態でお持ちください。"}</EditableText>{/* EDITABLE:sg-faq4-a:end */}</>),
            },
            {
              q: (<>{/* EDITABLE:sg-faq5-q:start */}<EditableText eid="sg-faq5-q" tag="span">{"きょうだいの着物・衣装もレンタルできますか？"}</EditableText>{/* EDITABLE:sg-faq5-q:end */}</>),
              a: (<>{/* EDITABLE:sg-faq5-a:start */}<EditableText eid="sg-faq5-a" tag="span">{"はい、ごきょうだいの衣装もレンタル可能です。"}</EditableText>{/* EDITABLE:sg-faq5-a:end */}</>),
            },
            {
              q: (<>{/* EDITABLE:sg-faq6-q:start */}<EditableText eid="sg-faq6-q" tag="span">{"着付け・ヘアセットはプランに含まれますか？"}</EditableText>{/* EDITABLE:sg-faq6-q:end */}</>),
              a: (<>{/* EDITABLE:sg-faq6-a:start */}<EditableText eid="sg-faq6-a" tag="span">{"七五三プランは、着付け・ヘアメイクがオプションで選べます。レンタル着付けヘアメ、持ち込み着付けヘアメ、何もなし　の３パターンで選べます。パパ・ママなど大人の方の着付けは別途オプション料金です。"}</EditableText>{/* EDITABLE:sg-faq6-a:end */}</>),
            },
            {
              q: (<>{/* EDITABLE:sg-faq7-q:start */}<EditableText eid="sg-faq7-q" tag="span">{"七五三のお子様に簡単なメイクはしてもらえますか？"}</EditableText>{/* EDITABLE:sg-faq7-q:end */}</>),
              a: (<>{/* EDITABLE:sg-faq7-a:start */}<EditableText eid="sg-faq7-a" tag="span">{"簡単なチーク・リップのみの施術に対応しています。化粧品のアレルギーなどがある場合はお申し付けくださいませ。"}</EditableText>{/* EDITABLE:sg-faq7-a:end */}</>),
            },
            {
              q: (<>{/* EDITABLE:sg-faq8-q:start */}<EditableText eid="sg-faq8-q" tag="span">{"神社でのロケーション撮影もできますか？"}</EditableText>{/* EDITABLE:sg-faq8-q:end */}</>),
              a: (<>{/* EDITABLE:sg-faq8-a:start */}<EditableText eid="sg-faq8-a" tag="span">{"今後実装予定です。"}</EditableText>{/* EDITABLE:sg-faq8-a:end */}</>),
            },
            {
              q: (<>{/* EDITABLE:sg-faq9-q:start */}<EditableText eid="sg-faq9-q" tag="span">{"自宅でお支度をしてから行ってもいいですか？"}</EditableText>{/* EDITABLE:sg-faq9-q:end */}</>),
              a: (<>{/* EDITABLE:sg-faq9-a:start */}<EditableText eid="sg-faq9-a" tag="span">{"はい。ご自宅でお支度済みでのご来店も可能です。着付け・ヘアセット料金が無くなり、お安くご案内に出来ます。"}</EditableText>{/* EDITABLE:sg-faq9-a:end */}</>),
            },
            {
              q: (<>{/* EDITABLE:sg-faq10-q:start */}<EditableText eid="sg-faq10-q" tag="span">{"七五三と同日に別のきょうだいのお宮参りや誕生日撮影もできますか？"}</EditableText>{/* EDITABLE:sg-faq10-q:end */}</>),
              a: (<>{/* EDITABLE:sg-faq10-a:start */}<EditableText eid="sg-faq10-a" tag="span">{"七五三が主役となるため、赤ちゃんや他のお子様のコンディション管理が難しくなるケースもあります。希望の場合は事前にご相談ください。"}</EditableText>{/* EDITABLE:sg-faq10-a:end */}</>),
            },
            {
              q: (<>{/* EDITABLE:sg-faq11-q:start */}<EditableText eid="sg-faq11-q" tag="span">{"撮影はしないで七五三の着物だけ借りられますか？"}</EditableText>{/* EDITABLE:sg-faq11-q:end */}</>),
              a: (<>{/* EDITABLE:sg-faq11-a:start */}<EditableText eid="sg-faq11-a" tag="span">{"基本対応していないですが、相談次第になります。"}</EditableText>{/* EDITABLE:sg-faq11-a:end */}</>),
            },
          ]} />
        </section>
      </div>

      <div className="mt-12 bg-stone-900 rounded-2xl p-8 text-center">
        {/* EDITABLE:sg-cta-title:start */}
        <EditableText eid="sg-cta-title" tag="p" className="text-white font-bold mb-2" style={{ fontFamily: 'serif' }}>{"七五三のご予約はこちら"}</EditableText>
        {/* EDITABLE:sg-cta-title:end */}
        {/* EDITABLE:sg-cta-sub:start */}
        <EditableText eid="sg-cta-sub" tag="p" className="text-stone-400 text-xs mb-5">{"24時間オンライン予約受付 / 神奈川県厚木市"}</EditableText>
        {/* EDITABLE:sg-cta-sub:end */}
        <a href="https://studio-app-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-reserve inline-block px-8 py-3 rounded-full text-sm">
          【24時間対応】ご予約はこちら
        </a>
      </div>
    </article>
  );
}
