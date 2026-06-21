'use client';

import Link from 'next/link';
import EditableText from '@/components/EditableText';
import EditableImage from '@/components/EditableImage';

export default function TipsContent() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-xs text-stone-400 mb-8">
        <Link href="/" className="hover:text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span>撮影前に抑えておきたいポイント</span>
      </nav>

      <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden mb-10">
        {/* EDITABLE:tips-hero:start */}
        <EditableImage
          eid="tips-hero"
          src="/tips-hero.jpg"
          alt="撮影前に抑えておきたいポイント"
          fill
          className="object-cover"
          priority
        />
        {/* EDITABLE:tips-hero:end */}
      </div>

      <header className="mb-12">
        <p className="text-amber-700 text-xs tracking-widest mb-3">TIPS</p>
        {/* EDITABLE:tips-title:start */}
        <EditableText eid="tips-title" tag="h1" className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ fontFamily: 'serif' }}>{"撮影前に抑えておきたいポイント"}</EditableText>
        {/* EDITABLE:tips-title:end */}
        {/* EDITABLE:tips-sub:start */}
        <EditableText eid="tips-sub" tag="p" className="text-stone-500 text-sm">{"当日のベストショットのために、事前に知っておいてほしいこと"}</EditableText>
        {/* EDITABLE:tips-sub:end */}
      </header>

      <div className="space-y-12">
        {/* POINT 01 */}
        <section className="relative">
          <div className="flex gap-4 items-start mb-4">
            <div className="flex-shrink-0 bg-amber-700 text-white text-sm font-bold px-3 py-1 rounded-full">01</div>
            {/* EDITABLE:tips-p0-title:start */}
            <EditableText eid="tips-p0-title" tag="h2" className="text-lg sm:text-xl font-bold text-stone-800 pt-0.5" style={{ fontFamily: 'serif' }}>{"前日からの体調・生活リズム管理"}</EditableText>
            {/* EDITABLE:tips-p0-title:end */}
          </div>
          <div className="pl-0 space-y-3">
            {/* EDITABLE:tips-p0-body0:start */}
            <EditableText eid="tips-p0-body0" tag="p" className="text-sm text-stone-600 leading-relaxed whitespace-pre-line">{"年齢を問わず、撮影の前日から生活リズムを意識して整えておくことが、当日のベストショットへの近道です。"}</EditableText>
            {/* EDITABLE:tips-p0-body0:end */}
            {/* EDITABLE:tips-p0-body1:start */}
            <EditableText eid="tips-p0-body1" tag="p" className="text-sm text-stone-600 leading-relaxed whitespace-pre-line">{"特に乳幼児・未就学児のお子様は、体内時計がとても敏感。いつもより早く起こされたり、昼寝のタイミングがずれるだけで、機嫌や集中力に大きな差が出ます。撮影時間に合わせて、前日の就寝時刻を少し早めに調整し、当日の朝はなるべくいつも通りのルーティンで過ごすのがおすすめです。"}</EditableText>
            {/* EDITABLE:tips-p0-body1:end */}
            {/* EDITABLE:tips-p0-body2:start */}
            <EditableText eid="tips-p0-body2" tag="p" className="text-sm text-stone-600 leading-relaxed whitespace-pre-line">{"たとえば、午後のご予約の場合は、撮影開始の1〜2時間前に短めの昼寝を取らせてあげると、スタジオに到着するころにちょうどご機嫌が安定しやすくなり、眠気によるグズりを防ぎやすくなります。"}</EditableText>
            {/* EDITABLE:tips-p0-body2:end */}
          </div>
        </section>

        {/* POINT 02 */}
        <section className="relative">
          <div className="flex gap-4 items-start mb-4">
            <div className="flex-shrink-0 bg-amber-700 text-white text-sm font-bold px-3 py-1 rounded-full">02</div>
            {/* EDITABLE:tips-p1-title:start */}
            <EditableText eid="tips-p1-title" tag="h2" className="text-lg sm:text-xl font-bold text-stone-800 pt-0.5" style={{ fontFamily: 'serif' }}>{"おやつ・飲み物・おもちゃは迷わず持参を"}</EditableText>
            {/* EDITABLE:tips-p1-title:end */}
          </div>
          <div className="pl-0 space-y-3">
            {/* EDITABLE:tips-p1-body0:start */}
            <EditableText eid="tips-p1-body0" tag="p" className="text-sm text-stone-600 leading-relaxed whitespace-pre-line">{"撮影当日は、普段から慣れ親しんでいるアイテムを遠慮なくお持ちください。見慣れない照明機材、カメラの音、そして知らない大人がいるスタジオという空間は、お子様にとって想像以上に緊張する環境です。そんなとき、いつもの「お気に入り」があるだけで、気持ちがほぐれて自然な笑顔が引き出されることが多くあります。"}</EditableText>
            {/* EDITABLE:tips-p1-body0:end */}
            <div className="bg-stone-50 rounded-xl p-4 mt-4">
              {/* EDITABLE:tips-p1-list0-title:start */}
              <EditableText eid="tips-p1-list0-title" tag="p" className="text-xs font-bold text-stone-500 tracking-widest mb-3">{"◆ おやつ・飲み物について"}</EditableText>
              {/* EDITABLE:tips-p1-list0-title:end */}
              <ul className="space-y-2">
                <li className="flex gap-2 text-sm text-stone-600"><span className="text-amber-500 flex-shrink-0">・</span>{/* EDITABLE:tips-p1-list0-item0:start */}<EditableText eid="tips-p1-list0-item0" tag="span">{"普段食べているものが一番安心です。はじめてのおやつは体調変化のリスクがあるため避けましょう。"}</EditableText>{/* EDITABLE:tips-p1-list0-item0:end */}</li>
                <li className="flex gap-2 text-sm text-stone-600"><span className="text-amber-500 flex-shrink-0">・</span>{/* EDITABLE:tips-p1-list0-item1:start */}<EditableText eid="tips-p1-list0-item1" tag="span">{"衣装を汚しにくいもの（ボーロ、カリントウ、せんべいなど粉が少ないもの）がベターです。"}</EditableText>{/* EDITABLE:tips-p1-list0-item1:end */}</li>
                <li className="flex gap-2 text-sm text-stone-600"><span className="text-amber-500 flex-shrink-0">・</span>{/* EDITABLE:tips-p1-list0-item2:start */}<EditableText eid="tips-p1-list0-item2" tag="span">{"ジュースよりも水・麦茶など色のつかない飲み物を推奨しています。"}</EditableText>{/* EDITABLE:tips-p1-list0-item2:end */}</li>
                <li className="flex gap-2 text-sm text-stone-600"><span className="text-amber-500 flex-shrink-0">・</span>{/* EDITABLE:tips-p1-list0-item3:start */}<EditableText eid="tips-p1-list0-item3" tag="span">{"撮影直前ではなく、衣装を着る前に済ませておくのが理想的です。"}</EditableText>{/* EDITABLE:tips-p1-list0-item3:end */}</li>
              </ul>
            </div>
            <div className="bg-stone-50 rounded-xl p-4 mt-4">
              {/* EDITABLE:tips-p1-list1-title:start */}
              <EditableText eid="tips-p1-list1-title" tag="p" className="text-xs font-bold text-stone-500 tracking-widest mb-3">{"◆ おもちゃ・グッズについて"}</EditableText>
              {/* EDITABLE:tips-p1-list1-title:end */}
              <ul className="space-y-2">
                <li className="flex gap-2 text-sm text-stone-600"><span className="text-amber-500 flex-shrink-0">・</span>{/* EDITABLE:tips-p1-list1-item0:start */}<EditableText eid="tips-p1-list1-item0" tag="span">{"いつも使っているぬいぐるみやブランケットは最高の安心アイテムです。"}</EditableText>{/* EDITABLE:tips-p1-list1-item0:end */}</li>
                <li className="flex gap-2 text-sm text-stone-600"><span className="text-amber-500 flex-shrink-0">・</span>{/* EDITABLE:tips-p1-list1-item1:start */}<EditableText eid="tips-p1-list1-item1" tag="span">{"シャボン玉や風船はカメラマンが持っていても、\"見慣れたもの\"ではないため、自前のものの方が反応が良いことも。"}</EditableText>{/* EDITABLE:tips-p1-list1-item1:end */}</li>
                <li className="flex gap-2 text-sm text-stone-600"><span className="text-amber-500 flex-shrink-0">・</span>{/* EDITABLE:tips-p1-list1-item2:start */}<EditableText eid="tips-p1-list1-item2" tag="span">{"月齢の小さな赤ちゃんには、音の鳴るガラガラやライトアップするおもちゃが視線を引きつけやすいです。"}</EditableText>{/* EDITABLE:tips-p1-list1-item2:end */}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* POINT 03 */}
        <section className="relative">
          <div className="flex gap-4 items-start mb-4">
            <div className="flex-shrink-0 bg-amber-700 text-white text-sm font-bold px-3 py-1 rounded-full">03</div>
            {/* EDITABLE:tips-p2-title:start */}
            <EditableText eid="tips-p2-title" tag="h2" className="text-lg sm:text-xl font-bold text-stone-800 pt-0.5" style={{ fontFamily: 'serif' }}>{"撮影前のスケジュール設計が仕上がりを左右する"}</EditableText>
            {/* EDITABLE:tips-p2-title:end */}
          </div>
          <div className="pl-0 space-y-3">
            {/* EDITABLE:tips-p2-body0:start */}
            <EditableText eid="tips-p2-body0" tag="p" className="text-sm text-stone-600 leading-relaxed whitespace-pre-line">{"「せっかくだから七五三のお参りの後に撮影を」という流れは一見スムーズに見えますが、習い事・お参り・遠方への移動の後は、お子様の体力がすでに消耗している状態でのご来店になることが少なくありません。"}</EditableText>
            {/* EDITABLE:tips-p2-body0:end */}
            {/* EDITABLE:tips-p2-body1:start */}
            <EditableText eid="tips-p2-body1" tag="p" className="text-sm text-stone-600 leading-relaxed whitespace-pre-line">{"特に七五三の時期は着物を着たままご移動いただくケースも多く、慣れない草履での長時間の歩行はお子様にとって相当な疲労を伴います。撮影時間が後半になるほど、表情が硬くなったり、ぐずりが増えたりと、本来の可愛さや晴れやかな表情が引き出しにくくなってしまいます。"}</EditableText>
            {/* EDITABLE:tips-p2-body1:end */}
            {/* EDITABLE:tips-p2-body2:start */}
            <EditableText eid="tips-p2-body2" tag="p" className="text-sm text-stone-600 leading-relaxed whitespace-pre-line">{"可能であれば「撮影を先、お参りを後」の順番をおすすめしています。スタジオで元気なうちに存分に撮影し、その後お参りへ向かうスケジュールにするだけで、仕上がりのクオリティが格段に変わります。"}<br />{"また、習い事（スイミング・体操など）は特に消耗が大きいため、撮影日当日は可能な限り控えていただくことをご検討ください。"}</EditableText>
            {/* EDITABLE:tips-p2-body2:end */}
          </div>
        </section>

        {/* POINT 04 */}
        <section className="relative">
          <div className="flex gap-4 items-start mb-4">
            <div className="flex-shrink-0 bg-amber-700 text-white text-sm font-bold px-3 py-1 rounded-full">04</div>
            {/* EDITABLE:tips-p3-title:start */}
            <EditableText eid="tips-p3-title" tag="h2" className="text-lg sm:text-xl font-bold text-stone-800 pt-0.5" style={{ fontFamily: 'serif' }}>{"衣装・ヘアスタイルは事前にシミュレーションを"}</EditableText>
            {/* EDITABLE:tips-p3-title:end */}
          </div>
          <div className="pl-0 space-y-3">
            {/* EDITABLE:tips-p3-body0:start */}
            <EditableText eid="tips-p3-body0" tag="p" className="text-sm text-stone-600 leading-relaxed whitespace-pre-line">{"当日はじめて袖を通す衣装、当日はじめて試みるヘアスタイルは、お子様にとってのストレス要因になることがあります。"}</EditableText>
            {/* EDITABLE:tips-p3-body0:end */}
            {/* EDITABLE:tips-p3-body1:start */}
            <EditableText eid="tips-p3-body1" tag="p" className="text-sm text-stone-600 leading-relaxed whitespace-pre-line">{"特にドレスや着物など、普段着慣れない衣装は締め付けや生地の感触が気になってグズりにつながるケースも。可能であれば事前に一度着てみる「試着練習」をしておくと、当日スムーズに着替えができてスタート時点から機嫌よく撮影に入れることが多いです。"}</EditableText>
            {/* EDITABLE:tips-p3-body1:end */}
            {/* EDITABLE:tips-p3-body2:start */}
            <EditableText eid="tips-p3-body2" tag="p" className="text-sm text-stone-600 leading-relaxed whitespace-pre-line">{"また、衣装のサイズ感は余裕を持って確認しておきましょう。成長が早い時期は、数ヶ月前に選んだサイズが当日きつくなっていた、というケースも珍しくありません。"}</EditableText>
            {/* EDITABLE:tips-p3-body2:end */}
            <div className="bg-stone-50 rounded-xl p-4 mt-4">
              {/* EDITABLE:tips-p3-list0-title:start */}
              <EditableText eid="tips-p3-list0-title" tag="p" className="text-xs font-bold text-stone-500 tracking-widest mb-3">{"◆ ヘアスタイルについて"}</EditableText>
              {/* EDITABLE:tips-p3-list0-title:end */}
              <ul className="space-y-2">
                <li className="flex gap-2 text-sm text-stone-600"><span className="text-amber-500 flex-shrink-0">・</span>{/* EDITABLE:tips-p3-list0-item0:start */}<EditableText eid="tips-p3-list0-item0" tag="span">{"ヘアピンや飾りを嫌がるお子様は、事前に少しずつ慣らしておくのがおすすめ。"}</EditableText>{/* EDITABLE:tips-p3-list0-item0:end */}</li>
                <li className="flex gap-2 text-sm text-stone-600"><span className="text-amber-500 flex-shrink-0">・</span>{/* EDITABLE:tips-p3-list0-item1:start */}<EditableText eid="tips-p3-list0-item1" tag="span">{"撮影当日に初めてヘアスプレーを使うと香りや感触で泣いてしまうことも。"}</EditableText>{/* EDITABLE:tips-p3-list0-item1:end */}</li>
                <li className="flex gap-2 text-sm text-stone-600"><span className="text-amber-500 flex-shrink-0">・</span>{/* EDITABLE:tips-p3-list0-item2:start */}<EditableText eid="tips-p3-list0-item2" tag="span">{"ポニーテールやおだんごなど、引っ張られる感覚が苦手なお子様は前もってご相談ください。カメラマンやスタッフがヘアスタイルの代替案をご提案します。"}</EditableText>{/* EDITABLE:tips-p3-list0-item2:end */}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* POINT 05 */}
        <section className="relative">
          <div className="flex gap-4 items-start mb-4">
            <div className="flex-shrink-0 bg-amber-700 text-white text-sm font-bold px-3 py-1 rounded-full">05</div>
            {/* EDITABLE:tips-p4-title:start */}
            <EditableText eid="tips-p4-title" tag="h2" className="text-lg sm:text-xl font-bold text-stone-800 pt-0.5" style={{ fontFamily: 'serif' }}>{"親御さん自身もリラックスすることが最大の近道"}</EditableText>
            {/* EDITABLE:tips-p4-title:end */}
          </div>
          <div className="pl-0 space-y-3">
            {/* EDITABLE:tips-p4-body0:start */}
            <EditableText eid="tips-p4-body0" tag="p" className="text-sm text-stone-600 leading-relaxed whitespace-pre-line">{"「いい写真を撮らなければ」「ちゃんとポーズを取らせなければ」というプレッシャーは、お子様にしっかり伝わります。"}</EditableText>
            {/* EDITABLE:tips-p4-body0:end */}
            {/* EDITABLE:tips-p4-body1:start */}
            <EditableText eid="tips-p4-body1" tag="p" className="text-sm text-stone-600 leading-relaxed whitespace-pre-line">{"子どもは親の表情や声のトーンに驚くほど敏感で、ご両親が緊張していると、お子様も緊張するという連鎖が起きやすいのです。スタジオでよく見られるのが、ご両親が「笑って！」「こっち向いて！」と声をかけ続けることで、お子様がかえってプレッシャーを感じてしまうパターンです。"}</EditableText>
            {/* EDITABLE:tips-p4-body1:end */}
            {/* EDITABLE:tips-p4-body2:start */}
            <EditableText eid="tips-p4-body2" tag="p" className="text-sm text-stone-600 leading-relaxed whitespace-pre-line">{"当日ご両親にお願いしたいのは、「見守ること」です。カメラマンやスタッフがお子様の興味を引き出すプロとして全力でサポートしますので、ぜひその場の流れに身を任せてください。ご両親が楽しそうにしているだけで、お子様の表情はみるみる変わります。"}</EditableText>
            {/* EDITABLE:tips-p4-body2:end */}
            <div className="bg-stone-50 rounded-xl p-4 mt-4">
              {/* EDITABLE:tips-p4-list0-title:start */}
              <EditableText eid="tips-p4-list0-title" tag="p" className="text-xs font-bold text-stone-500 tracking-widest mb-3">{"◆ 意識していただきたい3つのこと"}</EditableText>
              {/* EDITABLE:tips-p4-list0-title:end */}
              <ul className="space-y-2">
                <li className="flex gap-2 text-sm text-stone-600"><span className="text-amber-500 flex-shrink-0">・</span>{/* EDITABLE:tips-p4-list0-item0:start */}<EditableText eid="tips-p4-list0-item0" tag="span">{"声をかけるより、一緒に笑う。"}</EditableText>{/* EDITABLE:tips-p4-list0-item0:end */}</li>
                <li className="flex gap-2 text-sm text-stone-600"><span className="text-amber-500 flex-shrink-0">・</span>{/* EDITABLE:tips-p4-list0-item1:start */}<EditableText eid="tips-p4-list0-item1" tag="span">{"ポーズを指示するより、一緒にふざける。"}</EditableText>{/* EDITABLE:tips-p4-list0-item1:end */}</li>
                <li className="flex gap-2 text-sm text-stone-600"><span className="text-amber-500 flex-shrink-0">・</span>{/* EDITABLE:tips-p4-list0-item2:start */}<EditableText eid="tips-p4-list0-item2" tag="span">{"完璧を目指すより、その日の「らしさ」を楽しむ。"}</EditableText>{/* EDITABLE:tips-p4-list0-item2:end */}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* まとめ */}
        <section className="bg-amber-50 rounded-2xl p-6">
          {/* EDITABLE:tips-summary-title:start */}
          <EditableText eid="tips-summary-title" tag="h2" className="text-base font-bold text-stone-800 mb-3" style={{ fontFamily: 'serif' }}>{"まとめ"}</EditableText>
          {/* EDITABLE:tips-summary-title:end */}
          {/* EDITABLE:tips-summary-body0:start */}
          <EditableText eid="tips-summary-body0" tag="p" className="text-sm text-stone-600 leading-relaxed">{"撮影の仕上がりを左右するのは、カメラマンの腕だけではありません。お子様の体調・機嫌・場の安心感が揃ってはじめて、本当に良い写真が生まれます。"}</EditableText>
          {/* EDITABLE:tips-summary-body0:end */}
          {/* EDITABLE:tips-summary-body1:start */}
          <EditableText eid="tips-summary-body1" tag="p" className="text-sm text-stone-600 leading-relaxed mt-3">{"ご不明な点やご不安なことがあれば、ご予約時やご来店前にお気軽にスタッフへご相談ください。当日のスケジュール調整についても、できる限り一緒に考えます。"}</EditableText>
          {/* EDITABLE:tips-summary-body1:end */}
        </section>
      </div>

      {/* CTA */}
      <div className="mt-14 bg-stone-900 rounded-2xl p-8 text-center">
        {/* EDITABLE:tips-cta-title:start */}
        <EditableText eid="tips-cta-title" tag="p" className="text-white font-bold mb-2 text-lg" style={{ fontFamily: 'serif' }}>{"ご予約・ご相談はお気軽に"}</EditableText>
        {/* EDITABLE:tips-cta-title:end */}
        {/* EDITABLE:tips-cta-sub:start */}
        <EditableText eid="tips-cta-sub" tag="p" className="text-stone-400 text-xs mb-5">{"24時間オンライン予約受付 / 神奈川県厚木市"}</EditableText>
        {/* EDITABLE:tips-cta-sub:end */}
        <a href="https://studio-app-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-reserve inline-block px-8 py-3 rounded-full text-sm">
          【24時間対応】ご予約はこちら
        </a>
      </div>
    </article>
  );
}
