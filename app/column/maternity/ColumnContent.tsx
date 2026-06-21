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
        <span>マタニティフォト</span>
      </nav>

      <header className="mb-10">
        <p className="text-amber-700 text-xs tracking-widest mb-3">COLUMN / マタニティフォト</p>
        {/* EDITABLE:mt-title:start */}
        <EditableText eid="mt-title" tag="h1" className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ fontFamily: 'serif' }}>{"マタニティフォト完全ガイド｜妊娠中の美しい姿を一生の思い出に"}</EditableText>
        {/* EDITABLE:mt-title:end */}
        {/* EDITABLE:mt-sub:start */}
        <EditableText eid="mt-sub" tag="p" className="text-stone-500 text-sm">{"神奈川県厚木市のフォトスタジオ「ジャングルスタジオ」が解説"}</EditableText>
        {/* EDITABLE:mt-sub:end */}
      </header>

      <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
        {/* EDITABLE:mt-hero:start */}
        <EditableImage eid="mt-hero" src="/maternity.jpg" alt="マタニティフォト 妊婦 記念写真 フォトスタジオ 厚木市" fill className="object-cover" priority />
        {/* EDITABLE:mt-hero:end */}
      </div>

      <div className="prose prose-stone max-w-none text-sm leading-relaxed space-y-8">
        <section>
          {/* EDITABLE:mt-s0-h:start */}
          <EditableText eid="mt-s0-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"マタニティフォトとは"}</EditableText>
          {/* EDITABLE:mt-s0-h:end */}
          {/* EDITABLE:mt-s0-p0:start */}
          <EditableText eid="mt-s0-p0" tag="p" className="text-stone-700">{"マタニティフォトとは、妊娠中のお腹の大きさや、輝くようなママの姿を写真として残す撮影です。赤ちゃんがお腹の中にいる期間は約10ヶ月、そして二度と戻らない特別な時間です。「恥ずかしい」「体型が気になる」と感じる方も多いですが、撮影後は「撮っておいてよかった」と感じるお客様が圧倒的に多いのがマタニティフォトの特徴です。"}</EditableText>
          {/* EDITABLE:mt-s0-p0:end */}
        </section>

        <section>
          {/* EDITABLE:mt-s1-h:start */}
          <EditableText eid="mt-s1-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"マタニティフォトを撮るベストな時期"}</EditableText>
          {/* EDITABLE:mt-s1-h:end */}
          <div className="bg-amber-50 rounded-xl p-5">
            {/* EDITABLE:mt-s1-lead:start */}
            <EditableText eid="mt-s1-lead" tag="p" className="font-semibold text-stone-800 mb-2 text-sm">{"妊娠7〜9ヶ月（妊娠28〜36週頃）が最適"}</EditableText>
            {/* EDITABLE:mt-s1-lead:end */}
            <ul className="text-sm text-stone-700 space-y-1">
              <li>{/* EDITABLE:mt-s1-i0:start */}<EditableText eid="mt-s1-i0" tag="span">{"・お腹が十分に大きく、丸みを帯びた美しいシルエットになる"}</EditableText>{/* EDITABLE:mt-s1-i0:end */}</li>
              <li>{/* EDITABLE:mt-s1-i1:start */}<EditableText eid="mt-s1-i1" tag="span">{"・体の動きがまだ比較的楽な時期"}</EditableText>{/* EDITABLE:mt-s1-i1:end */}</li>
              <li>{/* EDITABLE:mt-s1-i2:start */}<EditableText eid="mt-s1-i2" tag="span">{"・早産リスクが低い安定期"}</EditableText>{/* EDITABLE:mt-s1-i2:end */}</li>
              <li>{/* EDITABLE:mt-s1-i3:start */}<EditableText eid="mt-s1-i3" tag="span">{"・産前の体力が残っている"}</EditableText>{/* EDITABLE:mt-s1-i3:end */}</li>
            </ul>
          </div>
          {/* EDITABLE:mt-s1-note:start */}
          <EditableText eid="mt-s1-note" tag="p" className="text-stone-500 text-xs mt-2">{"※ 体調によって個人差があります。かかりつけ医にご相談の上でご予約ください。"}</EditableText>
          {/* EDITABLE:mt-s1-note:end */}
        </section>

        <section>
          {/* EDITABLE:mt-s2-h:start */}
          <EditableText eid="mt-s2-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"ジャングルスタジオのマタニティフォトプラン"}</EditableText>
          {/* EDITABLE:mt-s2-h:end */}
          <div className="bg-amber-50 rounded-2xl p-6">
            <div className="bg-white rounded-xl p-4 flex justify-between items-start flex-wrap gap-2">
              <div>
                {/* EDITABLE:mt-plan0-name:start */}
                <EditableText eid="mt-plan0-name" tag="p" className="font-bold text-stone-800 text-sm">{"マタニティフォト"}</EditableText>
                {/* EDITABLE:mt-plan0-name:end */}
                {/* EDITABLE:mt-plan0-detail:start */}
                <EditableText eid="mt-plan0-detail" tag="p" className="text-xs text-stone-500">{"約30〜40分 / 1着 / 2スタジオ / 50枚保証"}</EditableText>
                {/* EDITABLE:mt-plan0-detail:end */}
                {/* EDITABLE:mt-plan0-note:start */}
                <EditableText eid="mt-plan0-note" tag="p" className="text-xs text-stone-400 mt-1">{"パートナー・上の子と一緒の撮影も可"}</EditableText>
                {/* EDITABLE:mt-plan0-note:end */}
              </div>
              {/* EDITABLE:mt-plan0-price:start */}
              <EditableText eid="mt-plan0-price" tag="p" className="text-xl font-bold text-amber-700">{"¥19,800〜"}</EditableText>
              {/* EDITABLE:mt-plan0-price:end */}
            </div>
          </div>
        </section>

        <section>
          {/* EDITABLE:mt-s3-h:start */}
          <EditableText eid="mt-s3-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"シンプルプランという選択肢"}</EditableText>
          {/* EDITABLE:mt-s3-h:end */}
          <div className="bg-stone-50 border-2 border-stone-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-red-500 text-white text-xs font-extrabold px-3 py-1 rounded-full">🎀 当日決めたい方に！</span>
            </div>
            <div className="bg-white rounded-xl p-4 mb-4">
              {/* EDITABLE:mt-simple-name:start */}
              <EditableText eid="mt-simple-name" tag="p" className="font-bold text-stone-800 text-sm mb-1">{"シンプルプラン"}</EditableText>
              {/* EDITABLE:mt-simple-name:end */}
              {/* EDITABLE:mt-simple-price:start */}
              <EditableText eid="mt-simple-price" tag="p" className="text-xl font-bold text-amber-700 mb-2">{"¥5,000〜"}</EditableText>
              {/* EDITABLE:mt-simple-price:end */}
              <div className="text-xs text-stone-500 space-y-1">
                {/* EDITABLE:mt-simple-d0:start */}
                <EditableText eid="mt-simple-d0" tag="p">{"撮影時間：約90〜120分"}</EditableText>
                {/* EDITABLE:mt-simple-d0:end */}
                {/* EDITABLE:mt-simple-d1:start */}
                <EditableText eid="mt-simple-d1" tag="p">{"衣装：1〜4着（主役のみ）"}</EditableText>
                {/* EDITABLE:mt-simple-d1:end */}
                {/* EDITABLE:mt-simple-d2:start */}
                <EditableText eid="mt-simple-d2" tag="p">{"スタジオ：3〜4スタジオ"}</EditableText>
                {/* EDITABLE:mt-simple-d2:end */}
                {/* EDITABLE:mt-simple-d3:start */}
                <EditableText eid="mt-simple-d3" tag="p">{"家族・兄弟写真：何人でも自由"}</EditableText>
                {/* EDITABLE:mt-simple-d3:end */}
                {/* EDITABLE:mt-simple-d4:start */}
                <EditableText eid="mt-simple-d4" tag="p">{"データ保証：0枚スタート（撮影後にご自身で選択）"}</EditableText>
                {/* EDITABLE:mt-simple-d4:end */}
                {/* EDITABLE:mt-simple-d5:start */}
                <EditableText eid="mt-simple-d5" tag="p">{"主役追加：+¥2,500/人"}</EditableText>
                {/* EDITABLE:mt-simple-d5:end */}
              </div>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 mb-4">
              {/* EDITABLE:mt-retouch-h:start */}
              <EditableText eid="mt-retouch-h" tag="p" className="font-semibold text-stone-800 text-sm mb-2">{"撮影後のデータ購入（当日選択）"}</EditableText>
              {/* EDITABLE:mt-retouch-h:end */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:mt-retouch0-label:start */}
                  <EditableText eid="mt-retouch0-label" tag="p" className="text-stone-500">{"美肌レタッチ 1枚"}</EditableText>
                  {/* EDITABLE:mt-retouch0-label:end */}
                  {/* EDITABLE:mt-retouch0-price:start */}
                  <EditableText eid="mt-retouch0-price" tag="p" className="font-bold text-stone-800">{"¥3,000"}</EditableText>
                  {/* EDITABLE:mt-retouch0-price:end */}
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:mt-retouch1-label:start */}
                  <EditableText eid="mt-retouch1-label" tag="p" className="text-stone-500">{"美肌レタッチ 10枚"}</EditableText>
                  {/* EDITABLE:mt-retouch1-label:end */}
                  {/* EDITABLE:mt-retouch1-price:start */}
                  <EditableText eid="mt-retouch1-price" tag="p" className="font-bold text-stone-800">{"¥25,000"}</EditableText>
                  {/* EDITABLE:mt-retouch1-price:end */}
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:mt-retouch2-label:start */}
                  <EditableText eid="mt-retouch2-label" tag="p" className="text-stone-500">{"美肌レタッチ 20枚"}</EditableText>
                  {/* EDITABLE:mt-retouch2-label:end */}
                  {/* EDITABLE:mt-retouch2-price:start */}
                  <EditableText eid="mt-retouch2-price" tag="p" className="font-bold text-stone-800">{"¥45,000"}</EditableText>
                  {/* EDITABLE:mt-retouch2-price:end */}
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  {/* EDITABLE:mt-retouch3-label:start */}
                  <EditableText eid="mt-retouch3-label" tag="p" className="text-stone-500">{"全データ（光レタッチのみ）"}</EditableText>
                  {/* EDITABLE:mt-retouch3-label:end */}
                  {/* EDITABLE:mt-retouch3-price:start */}
                  <EditableText eid="mt-retouch3-price" tag="p" className="font-bold text-stone-800">{"¥50,000"}</EditableText>
                  {/* EDITABLE:mt-retouch3-price:end */}
                </div>
              </div>
            </div>
            <div className="text-xs text-stone-600 space-y-1">
              {/* EDITABLE:mt-reco-h:start */}
              <EditableText eid="mt-reco-h" tag="p" className="font-semibold text-stone-700 mb-1">{"こんな方におすすめ"}</EditableText>
              {/* EDITABLE:mt-reco-h:end */}
              {/* EDITABLE:mt-reco0:start */}
              <EditableText eid="mt-reco0" tag="p">{"✓ データ枚数を当日の雰囲気で決めたい方"}</EditableText>
              {/* EDITABLE:mt-reco0:end */}
              {/* EDITABLE:mt-reco1:start */}
              <EditableText eid="mt-reco1" tag="p">{"✓ ご家族・きょうだい全員でたくさん撮りたい方"}</EditableText>
              {/* EDITABLE:mt-reco1:end */}
              {/* EDITABLE:mt-reco2:start */}
              <EditableText eid="mt-reco2" tag="p">{"✓ 予算を自分でコントロールしたい方"}</EditableText>
              {/* EDITABLE:mt-reco2:end */}
            </div>
          </div>
        </section>

        <section>
          {/* EDITABLE:mt-s4-h:start */}
          <EditableText eid="mt-s4-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"マタニティフォトの衣装・スタイリング"}</EditableText>
          {/* EDITABLE:mt-s4-h:end */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-stone-50 rounded-xl p-4">
              {/* EDITABLE:mt-cos0-h:start */}
              <EditableText eid="mt-cos0-h" tag="p" className="font-semibold text-stone-800 text-sm mb-2">{"スタジオ衣装（1着含む）"}</EditableText>
              {/* EDITABLE:mt-cos0-h:end */}
              <ul className="text-xs text-stone-600 space-y-1">
                <li>{/* EDITABLE:mt-cos0-i0:start */}<EditableText eid="mt-cos0-i0" tag="span">{"・マタニティドレス（白・ピンク等）"}</EditableText>{/* EDITABLE:mt-cos0-i0:end */}</li>
                <li>{/* EDITABLE:mt-cos0-i1:start */}<EditableText eid="mt-cos0-i1" tag="span">{"・ウエストラインが見える衣装"}</EditableText>{/* EDITABLE:mt-cos0-i1:end */}</li>
                <li>{/* EDITABLE:mt-cos0-i2:start */}<EditableText eid="mt-cos0-i2" tag="span">{"・カジュアル〜エレガントまで選択可"}</EditableText>{/* EDITABLE:mt-cos0-i2:end */}</li>
              </ul>
            </div>
            <div className="bg-stone-50 rounded-xl p-4">
              {/* EDITABLE:mt-cos1-h:start */}
              <EditableText eid="mt-cos1-h" tag="p" className="font-semibold text-stone-800 text-sm mb-2">{"持ち込み衣装もOK"}</EditableText>
              {/* EDITABLE:mt-cos1-h:end */}
              <ul className="text-xs text-stone-600 space-y-1">
                <li>{/* EDITABLE:mt-cos1-i0:start */}<EditableText eid="mt-cos1-i0" tag="span">{"・お気に入りのマタニティウェア"}</EditableText>{/* EDITABLE:mt-cos1-i0:end */}</li>
                <li>{/* EDITABLE:mt-cos1-i1:start */}<EditableText eid="mt-cos1-i1" tag="span">{"・パートナーとのペアコーデ"}</EditableText>{/* EDITABLE:mt-cos1-i1:end */}</li>
                <li>{/* EDITABLE:mt-cos1-i2:start */}<EditableText eid="mt-cos1-i2" tag="span">{"・上のお子様の衣装"}</EditableText>{/* EDITABLE:mt-cos1-i2:end */}</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          {/* EDITABLE:mt-s5-h:start */}
          <EditableText eid="mt-s5-h" tag="h2" className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>{"よくある質問"}</EditableText>
          {/* EDITABLE:mt-s5-h:end */}
          <div className="space-y-4">
            <EditableFaqAccordion items={[
              {
                q: (<>{/* EDITABLE:mt-faq0-q:start */}<EditableText eid="mt-faq0-q" tag="span">{"マタニティフォトはいつ撮影するのがおすすめですか？"}</EditableText>{/* EDITABLE:mt-faq0-q:end */}</>),
                a: (<>{/* EDITABLE:mt-faq0-a:start */}<EditableText eid="mt-faq0-a" tag="span">{"妊娠7〜9ヶ月（妊娠28〜36週頃）がおすすめです。おなかが大きくふくらみ、かつ体調が比較的安定している時期です。"}</EditableText>{/* EDITABLE:mt-faq0-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:mt-faq1-q:start */}<EditableText eid="mt-faq1-q" tag="span">{"衣装はレンタルできますか？持ち込みでも大丈夫ですか？"}</EditableText>{/* EDITABLE:mt-faq1-q:end */}</>),
                a: (<>{/* EDITABLE:mt-faq1-a:start */}<EditableText eid="mt-faq1-a" tag="span">{"基本1着レンタルOKです。それ以上のレンタルや、持ち込み希望の方は事前にご相談ください。"}</EditableText>{/* EDITABLE:mt-faq1-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:mt-faq2-q:start */}<EditableText eid="mt-faq2-q" tag="span">{"パパや上の子も一緒に撮れますか？"}</EditableText>{/* EDITABLE:mt-faq2-q:end */}</>),
                a: (<>{/* EDITABLE:mt-faq2-a:start */}<EditableText eid="mt-faq2-a" tag="span">{"はい、ご家族での写真も撮影できます。ご家族写真は+¥4,000のオプションで追加いただけます。"}</EditableText>{/* EDITABLE:mt-faq2-a:end */}</>),
              },
              {
                q: (<>{/* EDITABLE:mt-faq3-q:start */}<EditableText eid="mt-faq3-q" tag="span">{"撮影時間はどのくらいですか？"}</EditableText>{/* EDITABLE:mt-faq3-q:end */}</>),
                a: (<>{/* EDITABLE:mt-faq3-a:start */}<EditableText eid="mt-faq3-a" tag="span">{"撮影は約30分〜40分が目安です。"}</EditableText>{/* EDITABLE:mt-faq3-a:end */}</>),
              },
            ]} />
          </div>
        </section>
      </div>

      <div className="mt-12 bg-stone-900 rounded-2xl p-8 text-center">
        {/* EDITABLE:mt-cta-title:start */}
        <EditableText eid="mt-cta-title" tag="p" className="text-white font-bold mb-2" style={{ fontFamily: 'serif' }}>{"マタニティフォトのご予約はこちら"}</EditableText>
        {/* EDITABLE:mt-cta-title:end */}
        {/* EDITABLE:mt-cta-sub:start */}
        <EditableText eid="mt-cta-sub" tag="p" className="text-stone-400 text-xs mb-5">{"24時間オンライン予約受付 / 神奈川県厚木市"}</EditableText>
        {/* EDITABLE:mt-cta-sub:end */}
        <a href="https://studio-app-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-reserve inline-block px-8 py-3 rounded-full text-sm">
          【24時間対応】ご予約はこちら
        </a>
      </div>
    </article>
  );
}
