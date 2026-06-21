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
        <span>バースデーフォト</span>
      </nav>

      <header className="mb-10">
        <p className="text-amber-700 text-xs tracking-widest mb-3">COLUMN / バースデー</p>
        {/* EDITABLE:bd-title:start */}
        <EditableText eid="bd-title" tag="h1" className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ fontFamily: 'serif' }}>{"バースデーフォト完全ガイド｜お誕生日の特別な一日を写真に残す"}</EditableText>
        {/* EDITABLE:bd-title:end */}
        {/* EDITABLE:bd-sub:start */}
        <EditableText eid="bd-sub" tag="p" className="text-stone-500 text-sm">{"神奈川県厚木市のフォトスタジオ「ジャングルスタジオ」が解説"}</EditableText>
        {/* EDITABLE:bd-sub:end */}
      </header>

      <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
        {/* EDITABLE:bd-hero:start */}
        <EditableImage eid="bd-hero" src="/birthday.jpg" alt="バースデーフォト 誕生日 記念写真 フォトスタジオ 厚木市" fill className="object-cover" priority />
        {/* EDITABLE:bd-hero:end */}
      </div>

      <div className="prose prose-stone max-w-none text-sm leading-relaxed space-y-8">
        <section>
          {/* EDITABLE:bd-s0-h:start */}
          <EditableText eid="bd-s0-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"バースデーフォトとは？"}</EditableText>
          {/* EDITABLE:bd-s0-h:end */}
          {/* EDITABLE:bd-s0-p0:start */}
          <EditableText eid="bd-s0-p0" tag="p" className="text-stone-700">{"バースデーフォトとは、お子様のお誕生日を記念して行うスタジオ撮影です。1歳・2歳・3歳など、毎年の成長を写真として残すことで、子どもが大きくなったときに「こんなに小さかったんだ」と振り返れる大切なアルバムになります。"}</EditableText>
          {/* EDITABLE:bd-s0-p0:end */}
          {/* EDITABLE:bd-s0-p1:start */}
          <EditableText eid="bd-s0-p1" tag="p" className="text-stone-700 mt-3">{"特に1歳のバースデーフォトは「ファーストバースデー」として人気が高いです。"}</EditableText>
          {/* EDITABLE:bd-s0-p1:end */}
        </section>

        <section>
          {/* EDITABLE:bd-s1-h:start */}
          <EditableText eid="bd-s1-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"ジャングルスタジオのバースデープラン"}</EditableText>
          {/* EDITABLE:bd-s1-h:end */}
          <div className="bg-amber-50 rounded-2xl p-6 space-y-4">
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                {/* EDITABLE:bd-plan0-name:start */}
                <EditableText eid="bd-plan0-name" tag="p" className="font-bold text-stone-800 text-sm">{"エコノミープラン"}</EditableText>
                {/* EDITABLE:bd-plan0-name:end */}
              </div>
              {/* EDITABLE:bd-plan0-detail:start */}
              <EditableText eid="bd-plan0-detail" tag="p" className="text-xs text-stone-500">{"約40分 / 衣装〜2着 / 2スタジオ〜 / 50枚保証"}</EditableText>
              {/* EDITABLE:bd-plan0-detail:end */}
              {/* EDITABLE:bd-plan0-price:start */}
              <EditableText eid="bd-plan0-price" tag="p" className="text-xl font-bold text-amber-700 mt-2">{"¥25,000〜"}</EditableText>
              {/* EDITABLE:bd-plan0-price:end */}
            </div>
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                {/* EDITABLE:bd-plan1-name:start */}
                <EditableText eid="bd-plan1-name" tag="p" className="font-bold text-stone-800 text-sm">{"プレミアムプラン"}</EditableText>
                {/* EDITABLE:bd-plan1-name:end */}
                <span className="text-[10px] font-extrabold bg-red-500 text-white px-2 py-0.5 rounded-full">⭐ 一番人気</span>
              </div>
              {/* EDITABLE:bd-plan1-detail:start */}
              <EditableText eid="bd-plan1-detail" tag="p" className="text-xs text-stone-500">{"約60分 / 衣装〜3着 / 3スタジオ〜 / 80枚保証"}</EditableText>
              {/* EDITABLE:bd-plan1-detail:end */}
              {/* EDITABLE:bd-plan1-price:start */}
              <EditableText eid="bd-plan1-price" tag="p" className="text-xl font-bold text-amber-700 mt-2">{"¥30,000〜"}</EditableText>
              {/* EDITABLE:bd-plan1-price:end */}
            </div>
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                {/* EDITABLE:bd-plan2-name:start */}
                <EditableText eid="bd-plan2-name" tag="p" className="font-bold text-stone-800 text-sm">{"ファーストプラン"}</EditableText>
                {/* EDITABLE:bd-plan2-name:end */}
              </div>
              {/* EDITABLE:bd-plan2-detail:start */}
              <EditableText eid="bd-plan2-detail" tag="p" className="text-xs text-stone-500">{"約90分 / 衣装〜4着 / 4スタジオ / 120枚保証"}</EditableText>
              {/* EDITABLE:bd-plan2-detail:end */}
              {/* EDITABLE:bd-plan2-price:start */}
              <EditableText eid="bd-plan2-price" tag="p" className="text-xl font-bold text-amber-700 mt-2">{"¥35,000〜"}</EditableText>
              {/* EDITABLE:bd-plan2-price:end */}
            </div>
          </div>
        </section>

        <section>
          {/* EDITABLE:bd-s2-h:start */}
          <EditableText eid="bd-s2-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"シンプルプランという選択肢"}</EditableText>
          {/* EDITABLE:bd-s2-h:end */}
          <div className="bg-stone-50 border-2 border-stone-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-red-500 text-white text-xs font-extrabold px-3 py-1 rounded-full">🎀 当日決めたい方に！</span>
            </div>
            <div className="bg-white rounded-xl p-4 mb-4">
              {/* EDITABLE:bd-simple-name:start */}
              <EditableText eid="bd-simple-name" tag="p" className="font-bold text-stone-800 text-sm mb-1">{"シンプルプラン"}</EditableText>
              {/* EDITABLE:bd-simple-name:end */}
              {/* EDITABLE:bd-simple-price:start */}
              <EditableText eid="bd-simple-price" tag="p" className="text-xl font-bold text-amber-700 mb-2">{"¥5,000〜"}</EditableText>
              {/* EDITABLE:bd-simple-price:end */}
              <div className="text-xs text-stone-500 space-y-1">
                {/* EDITABLE:bd-simple-d0:start */}
                <EditableText eid="bd-simple-d0" tag="p">{"撮影時間：約90〜120分"}</EditableText>
                {/* EDITABLE:bd-simple-d0:end */}
                {/* EDITABLE:bd-simple-d1:start */}
                <EditableText eid="bd-simple-d1" tag="p">{"衣装：1〜4着（主役のみ）"}</EditableText>
                {/* EDITABLE:bd-simple-d1:end */}
                {/* EDITABLE:bd-simple-d2:start */}
                <EditableText eid="bd-simple-d2" tag="p">{"スタジオ：3〜4スタジオ"}</EditableText>
                {/* EDITABLE:bd-simple-d2:end */}
                {/* EDITABLE:bd-simple-d3:start */}
                <EditableText eid="bd-simple-d3" tag="p">{"家族・兄弟写真：何人でも自由"}</EditableText>
                {/* EDITABLE:bd-simple-d3:end */}
                {/* EDITABLE:bd-simple-d4:start */}
                <EditableText eid="bd-simple-d4" tag="p">{"データ保証：0枚スタート（撮影後にご自身で選択）"}</EditableText>
                {/* EDITABLE:bd-simple-d4:end */}
                {/* EDITABLE:bd-simple-d5:start */}
                <EditableText eid="bd-simple-d5" tag="p">{"主役追加：+¥2,500/人"}</EditableText>
                {/* EDITABLE:bd-simple-d5:end */}
              </div>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 mb-4">
              {/* EDITABLE:bd-retouch-h:start */}
              <EditableText eid="bd-retouch-h" tag="p" className="font-semibold text-stone-800 text-sm mb-2">{"撮影後のデータ購入（当日選択）"}</EditableText>
              {/* EDITABLE:bd-retouch-h:end */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:bd-retouch0-label:start */}
                  <EditableText eid="bd-retouch0-label" tag="p" className="text-stone-500">{"美肌レタッチ 1枚"}</EditableText>
                  {/* EDITABLE:bd-retouch0-label:end */}
                  {/* EDITABLE:bd-retouch0-price:start */}
                  <EditableText eid="bd-retouch0-price" tag="p" className="font-bold text-stone-800">{"¥3,000"}</EditableText>
                  {/* EDITABLE:bd-retouch0-price:end */}
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:bd-retouch1-label:start */}
                  <EditableText eid="bd-retouch1-label" tag="p" className="text-stone-500">{"美肌レタッチ 10枚"}</EditableText>
                  {/* EDITABLE:bd-retouch1-label:end */}
                  {/* EDITABLE:bd-retouch1-price:start */}
                  <EditableText eid="bd-retouch1-price" tag="p" className="font-bold text-stone-800">{"¥25,000"}</EditableText>
                  {/* EDITABLE:bd-retouch1-price:end */}
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:bd-retouch2-label:start */}
                  <EditableText eid="bd-retouch2-label" tag="p" className="text-stone-500">{"美肌レタッチ 20枚"}</EditableText>
                  {/* EDITABLE:bd-retouch2-label:end */}
                  {/* EDITABLE:bd-retouch2-price:start */}
                  <EditableText eid="bd-retouch2-price" tag="p" className="font-bold text-stone-800">{"¥45,000"}</EditableText>
                  {/* EDITABLE:bd-retouch2-price:end */}
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:bd-retouch3-label:start */}
                  <EditableText eid="bd-retouch3-label" tag="p" className="text-stone-500">{"全データ（光レタッチのみ）"}</EditableText>
                  {/* EDITABLE:bd-retouch3-label:end */}
                  {/* EDITABLE:bd-retouch3-price:start */}
                  <EditableText eid="bd-retouch3-price" tag="p" className="font-bold text-stone-800">{"¥50,000"}</EditableText>
                  {/* EDITABLE:bd-retouch3-price:end */}
                </div>
              </div>
            </div>
            <div className="text-xs text-stone-600 space-y-1">
              {/* EDITABLE:bd-reco-h:start */}
              <EditableText eid="bd-reco-h" tag="p" className="font-semibold text-stone-700 mb-1">{"こんな方におすすめ"}</EditableText>
              {/* EDITABLE:bd-reco-h:end */}
              {/* EDITABLE:bd-reco0:start */}
              <EditableText eid="bd-reco0" tag="p">{"✓ データ枚数を当日の雰囲気で決めたい方"}</EditableText>
              {/* EDITABLE:bd-reco0:end */}
              {/* EDITABLE:bd-reco1:start */}
              <EditableText eid="bd-reco1" tag="p">{"✓ ご家族・きょうだい全員でたくさん撮りたい方"}</EditableText>
              {/* EDITABLE:bd-reco1:end */}
              {/* EDITABLE:bd-reco2:start */}
              <EditableText eid="bd-reco2" tag="p">{"✓ 予算を自分でコントロールしたい方"}</EditableText>
              {/* EDITABLE:bd-reco2:end */}
            </div>
          </div>
        </section>

        <section>
          {/* EDITABLE:bd-s3-h:start */}
          <EditableText eid="bd-s3-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"よくある質問"}</EditableText>
          {/* EDITABLE:bd-s3-h:end */}
          <div className="space-y-4">
            <EditableFaqAccordion items={[
              {
                q: (<>{/* EDITABLE:bd-faq0-q:start */}<EditableText eid="bd-faq0-q" tag="span">{"誕生日当日でないといけませんか？"}</EditableText>{/* EDITABLE:bd-faq0-q:end */}</>),
                a: (<>{/* EDITABLE:bd-faq0-a:start */}<EditableText eid="bd-faq0-a" tag="span">{"いいえ。お誕生日の前後で都合の良い日にご予約いただけます。"}</EditableText>{/* EDITABLE:bd-faq0-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:bd-faq1-q:start */}<EditableText eid="bd-faq1-q" tag="span">{"1歳の誕生日撮影でおすすめの時期は？"}</EditableText>{/* EDITABLE:bd-faq1-q:end */}</>),
                a: (<>{/* EDITABLE:bd-faq1-a:start */}<EditableText eid="bd-faq1-a" tag="span">{"つかまり立ちができるようになった頃がおすすめです。人見知りが出やすい時期でもあるため、体調・機嫌の良い日を選んでください。"}</EditableText>{/* EDITABLE:bd-faq1-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:bd-faq2-q:start */}<EditableText eid="bd-faq2-q" tag="span">{"誕生日プランでは何着着られますか？"}</EditableText>{/* EDITABLE:bd-faq2-q:end */}</>),
                a: (<>{/* EDITABLE:bd-faq2-a:start */}<EditableText eid="bd-faq2-a" tag="span">{"エコノミープランは〜2着、プレミアムプランは〜3着、ファーストプランは〜4着です。"}</EditableText>{/* EDITABLE:bd-faq2-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:bd-faq3-q:start */}<EditableText eid="bd-faq3-q" tag="span">{"スマッシュケーキはできますか？"}</EditableText>{/* EDITABLE:bd-faq3-q:end */}</>),
                a: (<>{/* EDITABLE:bd-faq3-a:start */}<EditableText eid="bd-faq3-a" tag="span">{"今の所対応していないですが、今後実装予定になります。"}</EditableText>{/* EDITABLE:bd-faq3-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:bd-faq4-q:start */}<EditableText eid="bd-faq4-q" tag="span">{"バルーンや小物などの持ち込みはできますか？"}</EditableText>{/* EDITABLE:bd-faq4-q:end */}</>),
                a: (<>{/* EDITABLE:bd-faq4-a:start */}<EditableText eid="bd-faq4-a" tag="span">{"無料で持ち込み可能です（名前ボード・バルーン・髪飾りなど）。溶けやすいチョコレートや飴など衣装を汚す可能性のあるものはご遠慮ください。"}</EditableText>{/* EDITABLE:bd-faq4-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:bd-faq5-q:start */}<EditableText eid="bd-faq5-q" tag="span">{"きょうだいをそれぞれ主役で撮影できますか？"}</EditableText>{/* EDITABLE:bd-faq5-q:end */}</>),
                a: (<>{/* EDITABLE:bd-faq5-a:start */}<EditableText eid="bd-faq5-a" tag="span">{"基本プランは主役のお子様1名分の内容です。2人目以降の主役追加はプラン料金の50%で対応しています。"}</EditableText>{/* EDITABLE:bd-faq5-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:bd-faq6-q:start */}<EditableText eid="bd-faq6-q" tag="span">{"家族・きょうだいとの写真も撮れますか？"}</EditableText>{/* EDITABLE:bd-faq6-q:end */}</>),
                a: (<>{/* EDITABLE:bd-faq6-a:start */}<EditableText eid="bd-faq6-a" tag="span">{"どのプランでもご家族との撮影は対応しています。ご家族写真は+¥4,000のオプションで追加いただけます。"}</EditableText>{/* EDITABLE:bd-faq6-a:end */}</>),
              },
            ]} />
          </div>
        </section>
      </div>

      <div className="mt-12 bg-stone-900 rounded-2xl p-8 text-center">
        {/* EDITABLE:bd-cta-title:start */}
        <EditableText eid="bd-cta-title" tag="p" className="text-white font-bold mb-2" style={{ fontFamily: 'serif' }}>{"バースデーフォトのご予約はこちら"}</EditableText>
        {/* EDITABLE:bd-cta-title:end */}
        {/* EDITABLE:bd-cta-sub:start */}
        <EditableText eid="bd-cta-sub" tag="p" className="text-stone-400 text-xs mb-5">{"24時間オンライン予約受付 / 神奈川県厚木市"}</EditableText>
        {/* EDITABLE:bd-cta-sub:end */}
        <a href="https://studio-app-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-reserve inline-block px-8 py-3 rounded-full text-sm">
          【24時間対応】ご予約はこちら
        </a>
      </div>
    </article>
  );
}
