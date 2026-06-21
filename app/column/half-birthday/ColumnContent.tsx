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
        <span>ハーフバースデー</span>
      </nav>

      <header className="mb-10">
        <p className="text-amber-700 text-xs tracking-widest mb-3">COLUMN / ハーフバースデー</p>
        {/* EDITABLE:hb-title:start */}
        <EditableText eid="hb-title" tag="h1" className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ fontFamily: 'serif' }}>{"ハーフバースデーフォト完全ガイド｜生後6ヶ月の記念を最高の写真に"}</EditableText>
        {/* EDITABLE:hb-title:end */}
        {/* EDITABLE:hb-sub:start */}
        <EditableText eid="hb-sub" tag="p" className="text-stone-500 text-sm">{"神奈川県厚木市のフォトスタジオ「ジャングルスタジオ」が解説"}</EditableText>
        {/* EDITABLE:hb-sub:end */}
      </header>

      <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
        {/* EDITABLE:hb-hero:start */}
        <EditableImage eid="hb-hero" src="/half-birthday.jpg" alt="ハーフバースデー フォトスタジオ 厚木市 生後6ヶ月 記念写真" fill className="object-cover object-top" priority />
        {/* EDITABLE:hb-hero:end */}
      </div>

      <div className="prose prose-stone max-w-none text-sm leading-relaxed space-y-8">
        <section>
          {/* EDITABLE:hb-s0-h:start */}
          <EditableText eid="hb-s0-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"ハーフバースデーとは？"}</EditableText>
          {/* EDITABLE:hb-s0-h:end */}
          {/* EDITABLE:hb-s0-p0:start */}
          <EditableText eid="hb-s0-p0" tag="p" className="text-stone-700">{"ハーフバースデーとは、赤ちゃんが生まれてちょうど半年（6ヶ月）を迎えるお祝いのことです。欧米から広まった文化で、日本でも「首が座り、表情が豊かになるこの時期を記念に残したい」とフォトスタジオでの撮影を選ぶご家族が急増しています。"}</EditableText>
          {/* EDITABLE:hb-s0-p0:end */}
          {/* EDITABLE:hb-s0-p1:start */}
          <EditableText eid="hb-s0-p1" tag="p" className="text-stone-700 mt-3">{"生後6ヶ月の赤ちゃんは、寝返りができるようになり、笑顔もたくさん見せてくれる時期。まだ自分で動き回れないため、思い通りのポーズや構図で撮影しやすい絶好のタイミングです。"}</EditableText>
          {/* EDITABLE:hb-s0-p1:end */}
        </section>

        <section>
          {/* EDITABLE:hb-s1-h:start */}
          <EditableText eid="hb-s1-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"ハーフバースデーをスタジオで撮るメリット"}</EditableText>
          {/* EDITABLE:hb-s1-h:end */}
          <ul className="space-y-2 text-stone-700">
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>{/* EDITABLE:hb-s1-i0:start */}<EditableText eid="hb-s1-i0" tag="span">{"プロのライティングで肌のキメや表情を美しく撮影"}</EditableText>{/* EDITABLE:hb-s1-i0:end */}</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>{/* EDITABLE:hb-s1-i1:start */}<EditableText eid="hb-s1-i1" tag="span">{"数字の「6」バルーンや王冠など豊富な小物で演出"}</EditableText>{/* EDITABLE:hb-s1-i1:end */}</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>{/* EDITABLE:hb-s1-i2:start */}<EditableText eid="hb-s1-i2" tag="span">{"複数のスタジオセットで多彩なシーンが撮れる"}</EditableText>{/* EDITABLE:hb-s1-i2:end */}</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>{/* EDITABLE:hb-s1-i3:start */}<EditableText eid="hb-s1-i3" tag="span">{"親子写真・家族写真も同時に撮影可能"}</EditableText>{/* EDITABLE:hb-s1-i3:end */}</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>{/* EDITABLE:hb-s1-i4:start */}<EditableText eid="hb-s1-i4" tag="span">{"データを豊富にお渡しするので思い出を全部残せる"}</EditableText>{/* EDITABLE:hb-s1-i4:end */}</li>
          </ul>
        </section>

        <section>
          {/* EDITABLE:hb-s2-h:start */}
          <EditableText eid="hb-s2-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"ジャングルスタジオのハーフバースデープラン"}</EditableText>
          {/* EDITABLE:hb-s2-h:end */}
          <div className="bg-amber-50 rounded-2xl p-6 space-y-4">
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                {/* EDITABLE:hb-plan0-name:start */}
                <EditableText eid="hb-plan0-name" tag="p" className="font-bold text-stone-800 text-sm">{"エコノミープラン"}</EditableText>
                {/* EDITABLE:hb-plan0-name:end */}
              </div>
              {/* EDITABLE:hb-plan0-detail:start */}
              <EditableText eid="hb-plan0-detail" tag="p" className="text-xs text-stone-500">{"約40分 / 衣装〜2着 / 2スタジオ〜 / 50枚保証"}</EditableText>
              {/* EDITABLE:hb-plan0-detail:end */}
              {/* EDITABLE:hb-plan0-price:start */}
              <EditableText eid="hb-plan0-price" tag="p" className="text-xl font-bold text-amber-700 mt-2">{"¥25,000〜"}</EditableText>
              {/* EDITABLE:hb-plan0-price:end */}
            </div>
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                {/* EDITABLE:hb-plan1-name:start */}
                <EditableText eid="hb-plan1-name" tag="p" className="font-bold text-stone-800 text-sm">{"プレミアムプラン"}</EditableText>
                {/* EDITABLE:hb-plan1-name:end */}
                <span className="text-[10px] font-extrabold bg-red-500 text-white px-2 py-0.5 rounded-full">⭐ 一番人気</span>
              </div>
              {/* EDITABLE:hb-plan1-detail:start */}
              <EditableText eid="hb-plan1-detail" tag="p" className="text-xs text-stone-500">{"約60分 / 衣装〜3着 / 3スタジオ〜 / 80枚保証"}</EditableText>
              {/* EDITABLE:hb-plan1-detail:end */}
              {/* EDITABLE:hb-plan1-price:start */}
              <EditableText eid="hb-plan1-price" tag="p" className="text-xl font-bold text-amber-700 mt-2">{"¥30,000〜"}</EditableText>
              {/* EDITABLE:hb-plan1-price:end */}
            </div>
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                {/* EDITABLE:hb-plan2-name:start */}
                <EditableText eid="hb-plan2-name" tag="p" className="font-bold text-stone-800 text-sm">{"ファーストプラン"}</EditableText>
                {/* EDITABLE:hb-plan2-name:end */}
              </div>
              {/* EDITABLE:hb-plan2-detail:start */}
              <EditableText eid="hb-plan2-detail" tag="p" className="text-xs text-stone-500">{"約90分 / 衣装〜4着 / 4スタジオ / 120枚保証"}</EditableText>
              {/* EDITABLE:hb-plan2-detail:end */}
              {/* EDITABLE:hb-plan2-price:start */}
              <EditableText eid="hb-plan2-price" tag="p" className="text-xl font-bold text-amber-700 mt-2">{"¥35,000〜"}</EditableText>
              {/* EDITABLE:hb-plan2-price:end */}
            </div>
          </div>
        </section>

        <section>
          {/* EDITABLE:hb-s3-h:start */}
          <EditableText eid="hb-s3-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"シンプルプランという選択肢"}</EditableText>
          {/* EDITABLE:hb-s3-h:end */}
          <div className="bg-stone-50 border-2 border-stone-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-red-500 text-white text-xs font-extrabold px-3 py-1 rounded-full">🎀 当日決めたい方に！</span>
            </div>
            <div className="bg-white rounded-xl p-4 mb-4">
              {/* EDITABLE:hb-simple-name:start */}
              <EditableText eid="hb-simple-name" tag="p" className="font-bold text-stone-800 text-sm mb-1">{"シンプルプラン"}</EditableText>
              {/* EDITABLE:hb-simple-name:end */}
              {/* EDITABLE:hb-simple-price:start */}
              <EditableText eid="hb-simple-price" tag="p" className="text-xl font-bold text-amber-700 mb-2">{"¥5,000〜"}</EditableText>
              {/* EDITABLE:hb-simple-price:end */}
              <div className="text-xs text-stone-500 space-y-1">
                {/* EDITABLE:hb-simple-d0:start */}
                <EditableText eid="hb-simple-d0" tag="p">{"撮影時間：約90〜120分"}</EditableText>
                {/* EDITABLE:hb-simple-d0:end */}
                {/* EDITABLE:hb-simple-d1:start */}
                <EditableText eid="hb-simple-d1" tag="p">{"衣装：1〜4着（主役のみ）"}</EditableText>
                {/* EDITABLE:hb-simple-d1:end */}
                {/* EDITABLE:hb-simple-d2:start */}
                <EditableText eid="hb-simple-d2" tag="p">{"スタジオ：3〜4スタジオ"}</EditableText>
                {/* EDITABLE:hb-simple-d2:end */}
                {/* EDITABLE:hb-simple-d3:start */}
                <EditableText eid="hb-simple-d3" tag="p">{"家族・兄弟写真：何人でも自由"}</EditableText>
                {/* EDITABLE:hb-simple-d3:end */}
                {/* EDITABLE:hb-simple-d4:start */}
                <EditableText eid="hb-simple-d4" tag="p">{"データ保証：0枚スタート（撮影後にご自身で選択）"}</EditableText>
                {/* EDITABLE:hb-simple-d4:end */}
                {/* EDITABLE:hb-simple-d5:start */}
                <EditableText eid="hb-simple-d5" tag="p">{"主役追加：+¥2,500/人"}</EditableText>
                {/* EDITABLE:hb-simple-d5:end */}
              </div>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 mb-4">
              {/* EDITABLE:hb-retouch-h:start */}
              <EditableText eid="hb-retouch-h" tag="p" className="font-semibold text-stone-800 text-sm mb-2">{"撮影後のデータ購入（当日選択）"}</EditableText>
              {/* EDITABLE:hb-retouch-h:end */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:hb-retouch0-label:start */}
                  <EditableText eid="hb-retouch0-label" tag="p" className="text-stone-500">{"美肌レタッチ 1枚"}</EditableText>
                  {/* EDITABLE:hb-retouch0-label:end */}
                  {/* EDITABLE:hb-retouch0-price:start */}
                  <EditableText eid="hb-retouch0-price" tag="p" className="font-bold text-stone-800">{"¥3,000"}</EditableText>
                  {/* EDITABLE:hb-retouch0-price:end */}
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:hb-retouch1-label:start */}
                  <EditableText eid="hb-retouch1-label" tag="p" className="text-stone-500">{"美肌レタッチ 10枚"}</EditableText>
                  {/* EDITABLE:hb-retouch1-label:end */}
                  {/* EDITABLE:hb-retouch1-price:start */}
                  <EditableText eid="hb-retouch1-price" tag="p" className="font-bold text-stone-800">{"¥25,000"}</EditableText>
                  {/* EDITABLE:hb-retouch1-price:end */}
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:hb-retouch2-label:start */}
                  <EditableText eid="hb-retouch2-label" tag="p" className="text-stone-500">{"美肌レタッチ 20枚"}</EditableText>
                  {/* EDITABLE:hb-retouch2-label:end */}
                  {/* EDITABLE:hb-retouch2-price:start */}
                  <EditableText eid="hb-retouch2-price" tag="p" className="font-bold text-stone-800">{"¥45,000"}</EditableText>
                  {/* EDITABLE:hb-retouch2-price:end */}
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:hb-retouch3-label:start */}
                  <EditableText eid="hb-retouch3-label" tag="p" className="text-stone-500">{"全データ（光レタッチのみ）"}</EditableText>
                  {/* EDITABLE:hb-retouch3-label:end */}
                  {/* EDITABLE:hb-retouch3-price:start */}
                  <EditableText eid="hb-retouch3-price" tag="p" className="font-bold text-stone-800">{"¥50,000"}</EditableText>
                  {/* EDITABLE:hb-retouch3-price:end */}
                </div>
              </div>
            </div>
            <div className="text-xs text-stone-600 space-y-1">
              {/* EDITABLE:hb-reco-h:start */}
              <EditableText eid="hb-reco-h" tag="p" className="font-semibold text-stone-700 mb-1">{"こんな方におすすめ"}</EditableText>
              {/* EDITABLE:hb-reco-h:end */}
              {/* EDITABLE:hb-reco0:start */}
              <EditableText eid="hb-reco0" tag="p">{"✓ データ枚数を当日の雰囲気で決めたい方"}</EditableText>
              {/* EDITABLE:hb-reco0:end */}
              {/* EDITABLE:hb-reco1:start */}
              <EditableText eid="hb-reco1" tag="p">{"✓ ご家族・きょうだい全員でたくさん撮りたい方"}</EditableText>
              {/* EDITABLE:hb-reco1:end */}
              {/* EDITABLE:hb-reco2:start */}
              <EditableText eid="hb-reco2" tag="p">{"✓ 予算を自分でコントロールしたい方"}</EditableText>
              {/* EDITABLE:hb-reco2:end */}
            </div>
          </div>
        </section>

        <section>
          {/* EDITABLE:hb-s4-h:start */}
          <EditableText eid="hb-s4-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"ハーフバースデー撮影の準備"}</EditableText>
          {/* EDITABLE:hb-s4-h:end */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-stone-50 rounded-xl p-4">
              {/* EDITABLE:hb-prep0-h:start */}
              <EditableText eid="hb-prep0-h" tag="p" className="font-semibold text-stone-800 text-sm mb-2">{"赤ちゃんの準備"}</EditableText>
              {/* EDITABLE:hb-prep0-h:end */}
              <ul className="text-xs text-stone-600 space-y-1">
                {/* EDITABLE:hb-prep0-i0:start */}
                <EditableText eid="hb-prep0-i0" tag="li">{"・授乳・ミルクを済ませてから来店"}</EditableText>
                {/* EDITABLE:hb-prep0-i0:end */}
                {/* EDITABLE:hb-prep0-i1:start */}
                <EditableText eid="hb-prep0-i1" tag="li">{"・おむつ・おしりふき持参"}</EditableText>
                {/* EDITABLE:hb-prep0-i1:end */}
                {/* EDITABLE:hb-prep0-i2:start */}
                <EditableText eid="hb-prep0-i2" tag="li">{"・着替え・バスタオル"}</EditableText>
                {/* EDITABLE:hb-prep0-i2:end */}
                {/* EDITABLE:hb-prep0-i3:start */}
                <EditableText eid="hb-prep0-i3" tag="li">{"・お気に入りのおもちゃ"}</EditableText>
                {/* EDITABLE:hb-prep0-i3:end */}
              </ul>
            </div>
            <div className="bg-stone-50 rounded-xl p-4">
              {/* EDITABLE:hb-prep1-h:start */}
              <EditableText eid="hb-prep1-h" tag="p" className="font-semibold text-stone-800 text-sm mb-2">{"撮影のコツ"}</EditableText>
              {/* EDITABLE:hb-prep1-h:end */}
              <ul className="text-xs text-stone-600 space-y-1">
                {/* EDITABLE:hb-prep1-i0:start */}
                <EditableText eid="hb-prep1-i0" tag="li">{"・ご機嫌な時間帯に予約を"}</EditableText>
                {/* EDITABLE:hb-prep1-i0:end */}
                {/* EDITABLE:hb-prep1-i1:start */}
                <EditableText eid="hb-prep1-i1" tag="li">{"・いつもより少し早めに寝かせる"}</EditableText>
                {/* EDITABLE:hb-prep1-i1:end */}
                {/* EDITABLE:hb-prep1-i2:start */}
                <EditableText eid="hb-prep1-i2" tag="li">{"・パパ・ママの服装も合わせて"}</EditableText>
                {/* EDITABLE:hb-prep1-i2:end */}
              </ul>
            </div>
          </div>
        </section>

        <section>
          {/* EDITABLE:hb-s5-h:start */}
          <EditableText eid="hb-s5-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"よくある質問"}</EditableText>
          {/* EDITABLE:hb-s5-h:end */}
          <div className="space-y-4">
            <EditableFaqAccordion items={[
              {
                q: (<>{/* EDITABLE:hb-faq0-q:start */}<EditableText eid="hb-faq0-q" tag="span">{"ハーフバースデーはいつ撮影するのがおすすめですか？"}</EditableText>{/* EDITABLE:hb-faq0-q:end */}</>),
                a: (<>{/* EDITABLE:hb-faq0-a:start */}<EditableText eid="hb-faq0-a" tag="span">{"生後6ヶ月前後が目安です。首がすわり、表情も豊かになる時期でねんね期の愛らしさが凝縮されています。±1〜2ヶ月前後でも全く問題ありません。"}</EditableText>{/* EDITABLE:hb-faq0-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:hb-faq1-q:start */}<EditableText eid="hb-faq1-q" tag="span">{"バースデー（1歳）はいつ撮影するのがおすすめですか？"}</EditableText>{/* EDITABLE:hb-faq1-q:end */}</>),
                a: (<>{/* EDITABLE:hb-faq1-a:start */}<EditableText eid="hb-faq1-a" tag="span">{"つかまり立ちができるようになった頃がおすすめです。1歳前後になると人見知りが出ることもあるため、体調の良い日を選んでください。"}</EditableText>{/* EDITABLE:hb-faq1-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:hb-faq2-q:start */}<EditableText eid="hb-faq2-q" tag="span">{"ハーフバースデー・バースデープランは何着衣装を着られますか？"}</EditableText>{/* EDITABLE:hb-faq2-q:end */}</>),
                a: (<>{/* EDITABLE:hb-faq2-a:start */}<EditableText eid="hb-faq2-a" tag="span">{"エコノミープランは〜2着、プレミアムプランは〜3着、ファーストプランは〜4着です（レンタルまたはお持ち込み）。"}</EditableText>{/* EDITABLE:hb-faq2-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:hb-faq3-q:start */}<EditableText eid="hb-faq3-q" tag="span">{"家族・きょうだいと一緒に撮れますか？"}</EditableText>{/* EDITABLE:hb-faq3-q:end */}</>),
                a: (<>{/* EDITABLE:hb-faq3-a:start */}<EditableText eid="hb-faq3-a" tag="span">{"どのプランでもご家族との撮影は対応しています。ご家族写真は+¥4,000のオプションで追加いただけます。"}</EditableText>{/* EDITABLE:hb-faq3-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:hb-faq4-q:start */}<EditableText eid="hb-faq4-q" tag="span">{"持ち込み衣装はOKですか？"}</EditableText>{/* EDITABLE:hb-faq4-q:end */}</>),
                a: (<>{/* EDITABLE:hb-faq4-a:start */}<EditableText eid="hb-faq4-a" tag="span">{"はい、持ち込み衣装も対応しています。お気に入りの衣装でかわいい姿を残せます。"}</EditableText>{/* EDITABLE:hb-faq4-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:hb-faq5-q:start */}<EditableText eid="hb-faq5-q" tag="span">{"撮影データはいつもらえますか？"}</EditableText>{/* EDITABLE:hb-faq5-q:end */}</>),
                a: (<>{/* EDITABLE:hb-faq5-a:start */}<EditableText eid="hb-faq5-a" tag="span">{"1週間以内にLINEまたはメールにてお渡しします。"}</EditableText>{/* EDITABLE:hb-faq5-a:end */}</>),
              },
            ]} />
          </div>
        </section>
      </div>

      <div className="mt-12 bg-stone-900 rounded-2xl p-8 text-center">
        {/* EDITABLE:hb-cta-title:start */}
        <EditableText eid="hb-cta-title" tag="p" className="text-white font-bold mb-2" style={{ fontFamily: 'serif' }}>{"ハーフバースデーのご予約はこちら"}</EditableText>
        {/* EDITABLE:hb-cta-title:end */}
        {/* EDITABLE:hb-cta-sub:start */}
        <EditableText eid="hb-cta-sub" tag="p" className="text-stone-400 text-xs mb-5">{"24時間オンライン予約受付 / 神奈川県厚木市"}</EditableText>
        {/* EDITABLE:hb-cta-sub:end */}
        <a href="https://studio-app-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-reserve inline-block px-8 py-3 rounded-full text-sm">
          【24時間対応】ご予約はこちら
        </a>
      </div>
    </article>
  );
}
