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
        <span>卒入学</span>
      </nav>

      <header className="mb-10">
        <p className="text-amber-700 text-xs tracking-widest mb-3">COLUMN / 卒入学</p>
        {/* EDITABLE:ny-title:start */}
        <EditableText eid="ny-title" tag="h1" className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ fontFamily: 'serif' }}>{"入園・卒園・入学・卒業の記念写真ガイド｜成長の節目を最高の1枚に"}</EditableText>
        {/* EDITABLE:ny-title:end */}
        {/* EDITABLE:ny-sub:start */}
        <EditableText eid="ny-sub" tag="p" className="text-stone-500 text-sm">{"神奈川県厚木市のフォトスタジオ「ジャングルスタジオ」が解説"}</EditableText>
        {/* EDITABLE:ny-sub:end */}
      </header>

      <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
        {/* EDITABLE:ny-hero:start */}
        <EditableImage eid="ny-hero" src="/nyuugaku.jpg" alt="入学 卒業 記念写真 フォトスタジオ 厚木市" fill className="object-cover" priority />
        {/* EDITABLE:ny-hero:end */}
      </div>

      <div className="prose prose-stone max-w-none text-sm leading-relaxed space-y-8">
        <section>
          {/* EDITABLE:ny-s0-h:start */}
          <EditableText eid="ny-s0-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"なぜ入園・入学・卒業の記念写真が大切なのか"}</EditableText>
          {/* EDITABLE:ny-s0-h:end */}
          {/* EDITABLE:ny-s0-p0:start */}
          <EditableText eid="ny-s0-p0" tag="p" className="text-stone-700">{"子どもの成長は驚くほど早く、幼稚園入園・小学校入学・中学校入学・高校入学・大学入学・それぞれの卒業式は一度きりの特別な節目です。当日の式場では慌ただしく、ゆっくり写真を撮る余裕がないことも多いため、事前にフォトスタジオで「前撮り」をするご家族が増えています。"}</EditableText>
          {/* EDITABLE:ny-s0-p0:end */}
          {/* EDITABLE:ny-s0-p1:start */}
          <EditableText eid="ny-s0-p1" tag="p" className="text-stone-700 mt-3">{"プロのカメラマンによる撮影なら、子どもの晴れ姿を美しいライティングで、複数のシーンで記録することができます。"}</EditableText>
          {/* EDITABLE:ny-s0-p1:end */}
        </section>

        <section>
          {/* EDITABLE:ny-s1-h:start */}
          <EditableText eid="ny-s1-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"対応している節目一覧"}</EditableText>
          {/* EDITABLE:ny-s1-h:end */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-blue-50 rounded-xl p-3 text-center text-xs font-medium text-stone-700">
              {/* EDITABLE:ny-s1-i0:start */}<EditableText eid="ny-s1-i0" tag="span">{"幼稚園・保育園 入園"}</EditableText>{/* EDITABLE:ny-s1-i0:end */}
            </div>
            <div className="bg-blue-50 rounded-xl p-3 text-center text-xs font-medium text-stone-700">
              {/* EDITABLE:ny-s1-i1:start */}<EditableText eid="ny-s1-i1" tag="span">{"幼稚園・保育園 卒園"}</EditableText>{/* EDITABLE:ny-s1-i1:end */}
            </div>
            <div className="bg-blue-50 rounded-xl p-3 text-center text-xs font-medium text-stone-700">
              {/* EDITABLE:ny-s1-i2:start */}<EditableText eid="ny-s1-i2" tag="span">{"小学校 入学"}</EditableText>{/* EDITABLE:ny-s1-i2:end */}
            </div>
            <div className="bg-blue-50 rounded-xl p-3 text-center text-xs font-medium text-stone-700">
              {/* EDITABLE:ny-s1-i3:start */}<EditableText eid="ny-s1-i3" tag="span">{"小学校 卒業"}</EditableText>{/* EDITABLE:ny-s1-i3:end */}
            </div>
            <div className="bg-blue-50 rounded-xl p-3 text-center text-xs font-medium text-stone-700">
              {/* EDITABLE:ny-s1-i4:start */}<EditableText eid="ny-s1-i4" tag="span">{"中学校 入学"}</EditableText>{/* EDITABLE:ny-s1-i4:end */}
            </div>
            <div className="bg-blue-50 rounded-xl p-3 text-center text-xs font-medium text-stone-700">
              {/* EDITABLE:ny-s1-i5:start */}<EditableText eid="ny-s1-i5" tag="span">{"中学校 卒業"}</EditableText>{/* EDITABLE:ny-s1-i5:end */}
            </div>
            <div className="bg-blue-50 rounded-xl p-3 text-center text-xs font-medium text-stone-700">
              {/* EDITABLE:ny-s1-i6:start */}<EditableText eid="ny-s1-i6" tag="span">{"高校 入学"}</EditableText>{/* EDITABLE:ny-s1-i6:end */}
            </div>
            <div className="bg-blue-50 rounded-xl p-3 text-center text-xs font-medium text-stone-700">
              {/* EDITABLE:ny-s1-i7:start */}<EditableText eid="ny-s1-i7" tag="span">{"高校 卒業"}</EditableText>{/* EDITABLE:ny-s1-i7:end */}
            </div>
            <div className="bg-blue-50 rounded-xl p-3 text-center text-xs font-medium text-stone-700">
              {/* EDITABLE:ny-s1-i8:start */}<EditableText eid="ny-s1-i8" tag="span">{"大学 入学・卒業"}</EditableText>{/* EDITABLE:ny-s1-i8:end */}
            </div>
          </div>
        </section>

        <section>
          {/* EDITABLE:ny-s2-h:start */}
          <EditableText eid="ny-s2-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"ジャングルスタジオの卒入学プラン"}</EditableText>
          {/* EDITABLE:ny-s2-h:end */}
          <div className="bg-amber-50 rounded-2xl p-6 space-y-4">
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                {/* EDITABLE:ny-plan0-name:start */}
                <EditableText eid="ny-plan0-name" tag="p" className="font-bold text-stone-800 text-sm">{"エコノミープラン"}</EditableText>
                {/* EDITABLE:ny-plan0-name:end */}
              </div>
              {/* EDITABLE:ny-plan0-detail:start */}
              <EditableText eid="ny-plan0-detail" tag="p" className="text-xs text-stone-500">{"約40分 / 衣装1着 / 2スタジオ〜 / 50枚保証"}</EditableText>
              {/* EDITABLE:ny-plan0-detail:end */}
              {/* EDITABLE:ny-plan0-price:start */}
              <EditableText eid="ny-plan0-price" tag="p" className="text-xl font-bold text-amber-700 mt-2">{"¥25,000〜"}</EditableText>
              {/* EDITABLE:ny-plan0-price:end */}
            </div>
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                {/* EDITABLE:ny-plan1-name:start */}
                <EditableText eid="ny-plan1-name" tag="p" className="font-bold text-stone-800 text-sm">{"プレミアムプラン"}</EditableText>
                {/* EDITABLE:ny-plan1-name:end */}
                <span className="text-[10px] font-extrabold bg-red-500 text-white px-2 py-0.5 rounded-full">⭐ 一番人気</span>
              </div>
              {/* EDITABLE:ny-plan1-detail:start */}
              <EditableText eid="ny-plan1-detail" tag="p" className="text-xs text-stone-500">{"約60分 / 衣装1着〜 / 3スタジオ〜 / 80枚保証"}</EditableText>
              {/* EDITABLE:ny-plan1-detail:end */}
              {/* EDITABLE:ny-plan1-price:start */}
              <EditableText eid="ny-plan1-price" tag="p" className="text-xl font-bold text-amber-700 mt-2">{"¥30,000〜"}</EditableText>
              {/* EDITABLE:ny-plan1-price:end */}
            </div>
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                {/* EDITABLE:ny-plan2-name:start */}
                <EditableText eid="ny-plan2-name" tag="p" className="font-bold text-stone-800 text-sm">{"ファーストプラン"}</EditableText>
                {/* EDITABLE:ny-plan2-name:end */}
              </div>
              {/* EDITABLE:ny-plan2-detail:start */}
              <EditableText eid="ny-plan2-detail" tag="p" className="text-xs text-stone-500">{"約90分 / 衣装1着〜 / 4スタジオ / 120枚保証"}</EditableText>
              {/* EDITABLE:ny-plan2-detail:end */}
              {/* EDITABLE:ny-plan2-price:start */}
              <EditableText eid="ny-plan2-price" tag="p" className="text-xl font-bold text-amber-700 mt-2">{"¥35,000〜"}</EditableText>
              {/* EDITABLE:ny-plan2-price:end */}
            </div>
          </div>
          {/* EDITABLE:ny-s2-note:start */}
          <EditableText eid="ny-s2-note" tag="p" className="text-xs text-stone-400 mt-2">{"主役2人以上は2人目からプラン料金の50%で追加可能"}</EditableText>
          {/* EDITABLE:ny-s2-note:end */}
        </section>

        <section>
          {/* EDITABLE:ny-s3-h:start */}
          <EditableText eid="ny-s3-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"シンプルプランという選択肢"}</EditableText>
          {/* EDITABLE:ny-s3-h:end */}
          <div className="bg-stone-50 border-2 border-stone-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-red-500 text-white text-xs font-extrabold px-3 py-1 rounded-full">🎀 当日決めたい方に！</span>
            </div>
            <div className="bg-white rounded-xl p-4 mb-4">
              {/* EDITABLE:ny-simple-name:start */}
              <EditableText eid="ny-simple-name" tag="p" className="font-bold text-stone-800 text-sm mb-1">{"シンプルプラン"}</EditableText>
              {/* EDITABLE:ny-simple-name:end */}
              {/* EDITABLE:ny-simple-price:start */}
              <EditableText eid="ny-simple-price" tag="p" className="text-xl font-bold text-amber-700 mb-2">{"¥5,000〜"}</EditableText>
              {/* EDITABLE:ny-simple-price:end */}
              <div className="text-xs text-stone-500 space-y-1">
                {/* EDITABLE:ny-simple-d0:start */}
                <EditableText eid="ny-simple-d0" tag="p">{"撮影時間：約90〜120分"}</EditableText>
                {/* EDITABLE:ny-simple-d0:end */}
                {/* EDITABLE:ny-simple-d1:start */}
                <EditableText eid="ny-simple-d1" tag="p">{"衣装：1〜4着（主役のみ）"}</EditableText>
                {/* EDITABLE:ny-simple-d1:end */}
                {/* EDITABLE:ny-simple-d2:start */}
                <EditableText eid="ny-simple-d2" tag="p">{"スタジオ：3〜4スタジオ"}</EditableText>
                {/* EDITABLE:ny-simple-d2:end */}
                {/* EDITABLE:ny-simple-d3:start */}
                <EditableText eid="ny-simple-d3" tag="p">{"家族・兄弟写真：何人でも自由"}</EditableText>
                {/* EDITABLE:ny-simple-d3:end */}
                {/* EDITABLE:ny-simple-d4:start */}
                <EditableText eid="ny-simple-d4" tag="p">{"データ保証：0枚スタート（撮影後にご自身で選択）"}</EditableText>
                {/* EDITABLE:ny-simple-d4:end */}
                {/* EDITABLE:ny-simple-d5:start */}
                <EditableText eid="ny-simple-d5" tag="p">{"主役追加：+¥2,500/人"}</EditableText>
                {/* EDITABLE:ny-simple-d5:end */}
              </div>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 mb-4">
              {/* EDITABLE:ny-retouch-h:start */}
              <EditableText eid="ny-retouch-h" tag="p" className="font-semibold text-stone-800 text-sm mb-2">{"撮影後のデータ購入（当日選択）"}</EditableText>
              {/* EDITABLE:ny-retouch-h:end */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:ny-retouch0-label:start */}
                  <EditableText eid="ny-retouch0-label" tag="p" className="text-stone-500">{"美肌レタッチ 1枚"}</EditableText>
                  {/* EDITABLE:ny-retouch0-label:end */}
                  {/* EDITABLE:ny-retouch0-price:start */}
                  <EditableText eid="ny-retouch0-price" tag="p" className="font-bold text-stone-800">{"¥3,000"}</EditableText>
                  {/* EDITABLE:ny-retouch0-price:end */}
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:ny-retouch1-label:start */}
                  <EditableText eid="ny-retouch1-label" tag="p" className="text-stone-500">{"美肌レタッチ 10枚"}</EditableText>
                  {/* EDITABLE:ny-retouch1-label:end */}
                  {/* EDITABLE:ny-retouch1-price:start */}
                  <EditableText eid="ny-retouch1-price" tag="p" className="font-bold text-stone-800">{"¥25,000"}</EditableText>
                  {/* EDITABLE:ny-retouch1-price:end */}
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:ny-retouch2-label:start */}
                  <EditableText eid="ny-retouch2-label" tag="p" className="text-stone-500">{"美肌レタッチ 20枚"}</EditableText>
                  {/* EDITABLE:ny-retouch2-label:end */}
                  {/* EDITABLE:ny-retouch2-price:start */}
                  <EditableText eid="ny-retouch2-price" tag="p" className="font-bold text-stone-800">{"¥45,000"}</EditableText>
                  {/* EDITABLE:ny-retouch2-price:end */}
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:ny-retouch3-label:start */}
                  <EditableText eid="ny-retouch3-label" tag="p" className="text-stone-500">{"全データ（光レタッチのみ）"}</EditableText>
                  {/* EDITABLE:ny-retouch3-label:end */}
                  {/* EDITABLE:ny-retouch3-price:start */}
                  <EditableText eid="ny-retouch3-price" tag="p" className="font-bold text-stone-800">{"¥50,000"}</EditableText>
                  {/* EDITABLE:ny-retouch3-price:end */}
                </div>
              </div>
            </div>
            <div className="text-xs text-stone-600 space-y-1">
              {/* EDITABLE:ny-reco-h:start */}
              <EditableText eid="ny-reco-h" tag="p" className="font-semibold text-stone-700 mb-1">{"こんな方におすすめ"}</EditableText>
              {/* EDITABLE:ny-reco-h:end */}
              {/* EDITABLE:ny-reco0:start */}
              <EditableText eid="ny-reco0" tag="p">{"✓ データ枚数を当日の雰囲気で決めたい方"}</EditableText>
              {/* EDITABLE:ny-reco0:end */}
              {/* EDITABLE:ny-reco1:start */}
              <EditableText eid="ny-reco1" tag="p">{"✓ ご家族・きょうだい全員でたくさん撮りたい方"}</EditableText>
              {/* EDITABLE:ny-reco1:end */}
              {/* EDITABLE:ny-reco2:start */}
              <EditableText eid="ny-reco2" tag="p">{"✓ 予算を自分でコントロールしたい方"}</EditableText>
              {/* EDITABLE:ny-reco2:end */}
            </div>
          </div>
        </section>

        <section>
          {/* EDITABLE:ny-s4-h:start */}
          <EditableText eid="ny-s4-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"前撮り・後撮りのすすめ"}</EditableText>
          {/* EDITABLE:ny-s4-h:end */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-stone-50 rounded-xl p-4">
              {/* EDITABLE:ny-before-h:start */}
              <EditableText eid="ny-before-h" tag="p" className="font-semibold text-stone-800 text-sm mb-2">{"前撮りのメリット"}</EditableText>
              {/* EDITABLE:ny-before-h:end */}
              <ul className="text-xs text-stone-600 space-y-1">
                <li>{/* EDITABLE:ny-before-i0:start */}<EditableText eid="ny-before-i0" tag="span">{"・式当日の慌ただしさがない"}</EditableText>{/* EDITABLE:ny-before-i0:end */}</li>
                <li>{/* EDITABLE:ny-before-i1:start */}<EditableText eid="ny-before-i1" tag="span">{"・ヘアメイク・衣装に時間をかけられる"}</EditableText>{/* EDITABLE:ny-before-i1:end */}</li>
                <li>{/* EDITABLE:ny-before-i2:start */}<EditableText eid="ny-before-i2" tag="span">{"・天候に左右されない"}</EditableText>{/* EDITABLE:ny-before-i2:end */}</li>
                <li>{/* EDITABLE:ny-before-i3:start */}<EditableText eid="ny-before-i3" tag="span">{"・式の招待状に使える写真が手に入る"}</EditableText>{/* EDITABLE:ny-before-i3:end */}</li>
              </ul>
            </div>
            <div className="bg-stone-50 rounded-xl p-4">
              {/* EDITABLE:ny-after-h:start */}
              <EditableText eid="ny-after-h" tag="p" className="font-semibold text-stone-800 text-sm mb-2">{"後撮りのメリット"}</EditableText>
              {/* EDITABLE:ny-after-h:end */}
              <ul className="text-xs text-stone-600 space-y-1">
                <li>{/* EDITABLE:ny-after-i0:start */}<EditableText eid="ny-after-i0" tag="span">{"・式の余韻に浸りながら撮影できる"}</EditableText>{/* EDITABLE:ny-after-i0:end */}</li>
                <li>{/* EDITABLE:ny-after-i1:start */}<EditableText eid="ny-after-i1" tag="span">{"・オフシーズンで予約が取りやすい"}</EditableText>{/* EDITABLE:ny-after-i1:end */}</li>
                <li>{/* EDITABLE:ny-after-i2:start */}<EditableText eid="ny-after-i2" tag="span">{"・費用が抑えられる場合がある"}</EditableText>{/* EDITABLE:ny-after-i2:end */}</li>
                <li>{/* EDITABLE:ny-after-i3:start */}<EditableText eid="ny-after-i3" tag="span">{"・成長した姿を記録できる"}</EditableText>{/* EDITABLE:ny-after-i3:end */}</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          {/* EDITABLE:ny-s5-h:start */}
          <EditableText eid="ny-s5-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"よくある質問"}</EditableText>
          {/* EDITABLE:ny-s5-h:end */}
          <div className="space-y-4">
            <EditableFaqAccordion items={[
              {
                q: (<>{/* EDITABLE:ny-faq0-q:start */}<EditableText eid="ny-faq0-q" tag="span">{"入学・入園の撮影はいつ頃がおすすめですか？"}</EditableText>{/* EDITABLE:ny-faq0-q:end */}</>),
                a: (<>{/* EDITABLE:ny-faq0-a:start */}<EditableText eid="ny-faq0-a" tag="span">{"入学式・入園式の前後、2〜4月が最も人気の時期です。早めのご予約をおすすめします。"}</EditableText>{/* EDITABLE:ny-faq0-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:ny-faq1-q:start */}<EditableText eid="ny-faq1-q" tag="span">{"ランドセルや制服など持ち込みで撮影できますか？"}</EditableText>{/* EDITABLE:ny-faq1-q:end */}</>),
                a: (<>{/* EDITABLE:ny-faq1-a:start */}<EditableText eid="ny-faq1-a" tag="span">{"はい。ご自身のランドセル・制服・体操服などお持ち込みいただいて撮影できます。"}</EditableText>{/* EDITABLE:ny-faq1-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:ny-faq2-q:start */}<EditableText eid="ny-faq2-q" tag="span">{"入園・入学プランでは何着着られますか？"}</EditableText>{/* EDITABLE:ny-faq2-q:end */}</>),
                a: (<>{/* EDITABLE:ny-faq2-a:start */}<EditableText eid="ny-faq2-a" tag="span">{"基本1着ですが、時間が許す限りは撮影できます。"}</EditableText>{/* EDITABLE:ny-faq2-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:ny-faq3-q:start */}<EditableText eid="ny-faq3-q" tag="span">{"きょうだいの誕生日撮影と同日に入学撮影はできますか？"}</EditableText>{/* EDITABLE:ny-faq3-q:end */}</>),
                a: (<>{/* EDITABLE:ny-faq3-a:start */}<EditableText eid="ny-faq3-a" tag="span">{"お子様の体力や撮影時間の制約があるため、事前にご相談ください。"}</EditableText>{/* EDITABLE:ny-faq3-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:ny-faq4-q:start */}<EditableText eid="ny-faq4-q" tag="span">{"撮影時間はどのくらいですか？"}</EditableText>{/* EDITABLE:ny-faq4-q:end */}</>),
                a: (<>{/* EDITABLE:ny-faq4-a:start */}<EditableText eid="ny-faq4-a" tag="span">{"ご来店からご退店まで約1時間〜2時間が目安です。それぞれのプランに時間目安が書いていますので、ご参考にしてください。"}</EditableText>{/* EDITABLE:ny-faq4-a:end */}</>),
              },
            ]} />
          </div>
        </section>
      </div>

      <div className="mt-12 bg-stone-900 rounded-2xl p-8 text-center">
        {/* EDITABLE:ny-cta-title:start */}
        <EditableText eid="ny-cta-title" tag="p" className="text-white font-bold mb-2" style={{ fontFamily: 'serif' }}>{"卒入学記念写真のご予約はこちら"}</EditableText>
        {/* EDITABLE:ny-cta-title:end */}
        {/* EDITABLE:ny-cta-sub:start */}
        <EditableText eid="ny-cta-sub" tag="p" className="text-stone-400 text-xs mb-5">{"24時間オンライン予約受付 / 神奈川県厚木市"}</EditableText>
        {/* EDITABLE:ny-cta-sub:end */}
        <a href="https://studio-app-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-reserve inline-block px-8 py-3 rounded-full text-sm">
          【24時間対応】ご予約はこちら
        </a>
      </div>
    </article>
  );
}
