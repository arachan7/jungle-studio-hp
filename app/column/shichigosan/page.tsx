import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: '七五三フォト完全ガイド｜厚木市のフォトスタジオ JUNGLE STUDIO',
  description: '七五三の記念写真を神奈川県厚木市で撮るなら「ジャングルスタジオ」。3歳・5歳・7歳の七五三写真の準備・衣装・当日の流れを完全解説。スタジオ撮影の料金は¥25,000〜。24時間オンライン予約。',
  keywords: ['七五三', '写真', '厚木市', 'フォトスタジオ', '七五三撮影', '七五三 神奈川', '七五三 料金', '3歳 七五三', '5歳 七五三', '7歳 七五三'],
  openGraph: {
    title: '七五三フォト完全ガイド｜厚木市フォトスタジオ JUNGLE STUDIO',
    description: '神奈川県厚木市で七五三の記念写真。¥25,000〜でプロのスタジオ撮影。24時間オンライン予約受付中。',
    url: 'https://www.junglestudiophoto.com/column/shichigosan',
  },
  alternates: { canonical: 'https://www.junglestudiophoto.com/column/shichigosan' },
};

export default function ShichigosanColumn() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-xs text-stone-400 mb-8">
        <Link href="/" className="hover:text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span>七五三フォト</span>
      </nav>

      <header className="mb-10">
        <p className="text-amber-700 text-xs tracking-widest mb-3">COLUMN / 七五三</p>
        <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ fontFamily: 'serif' }}>
          七五三フォト完全ガイド｜<br className="sm:hidden" />3歳・5歳・7歳の記念写真を残すために
        </h1>
        <p className="text-stone-500 text-sm">神奈川県厚木市のフォトスタジオ「ジャングルスタジオ」が解説</p>
      </header>

      <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
        <Image
          src="/shichigosan.jpg"
          alt="七五三 フォトスタジオ 厚木市 記念写真"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="prose prose-stone max-w-none text-sm leading-relaxed space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>七五三とは？その意味と由来</h2>
          <p className="text-stone-700">
            七五三（しちごさん）は、子どもの健やかな成長を祝う日本の伝統行事です。
            数え年または満年齢で、男の子は3歳と5歳、女の子は3歳と7歳にお祝いをするのが一般的とされています。
            11月15日が正式な七五三の日ですが、現在は10月〜12月にかけて神社や写真スタジオで広く行われています。
          </p>
          <p className="text-stone-700 mt-3">
            厚木市内でも、厚木神社や飯山白山森など人気のお参りスポットがあります。
            お参りの前後に、フォトスタジオで記念撮影をされるご家族が多くなっています。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>七五三の記念写真をスタジオで撮るメリット</h2>
          <ul className="space-y-2 text-stone-700">
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>天候に左右されず、常にベストな環境で撮影できる</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>豊富な衣装（着物・ドレス）の中から選べる</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>プロのカメラマンが子どもの自然な表情を引き出す</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>複数のスタジオセットで多彩なシーンが撮れる</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span>親子写真・兄弟写真も同時に撮影可能</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>ジャングルスタジオの七五三プラン</h2>
          <div className="bg-amber-50 rounded-2xl p-6 space-y-4">
            {[
              { name: 'エコノミープラン', price: '¥25,000〜', time: '約40分', data: '50枚保証', studios: '2スタジオ〜', costumes: '1着' },
              { name: 'プレミアムプラン', price: '¥30,000〜', time: '約60分', data: '80枚保証', studios: '3スタジオ〜', costumes: '1着〜', popular: true },
              { name: 'ファーストプラン', price: '¥35,000〜', time: '約90分', data: '120枚保証', studios: '4スタジオ', costumes: '1着〜' },
            ].map((p) => (
              <div key={p.name} className="bg-white rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-bold text-stone-800 text-sm">{p.name}</p>
                  {p.popular && <span className="text-[10px] font-extrabold bg-red-500 text-white px-2 py-0.5 rounded-full">⭐ 一番人気</span>}
                </div>
                <p className="text-xs text-stone-500">{p.time} / 衣装{p.costumes} / {p.studios} / {p.data}</p>
                <p className="text-xl font-bold text-amber-700 mt-2">{p.price}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-stone-400 mt-2">主役2人以上は2人目からプラン料金の50%で追加可能</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>シンプルプランという選択肢</h2>
          <div className="bg-stone-50 border-2 border-stone-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-red-500 text-white text-xs font-extrabold px-3 py-1 rounded-full">🎀 当日決めたい方に！</span>
            </div>
            <div className="bg-white rounded-xl p-4 mb-4">
              <p className="font-bold text-stone-800 text-sm mb-1">シンプルプラン</p>
              <p className="text-xl font-bold text-amber-700 mb-2">¥5,000〜</p>
              <div className="text-xs text-stone-500 space-y-1">
                <p>撮影時間：約90〜120分</p>
                <p>衣装：1〜4着（主役のみ）</p>
                <p>スタジオ：3〜4スタジオ</p>
                <p>家族・兄弟写真：何人でも自由</p>
                <p>データ保証：0枚スタート（撮影後にご自身で選択）</p>
                <p>主役追加：+¥2,500/人</p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 mb-4">
              <p className="font-semibold text-stone-800 text-sm mb-2">撮影後のデータ購入（当日選択）</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white rounded-lg p-2 text-center">
                  <p className="text-stone-500">美肌レタッチ 1枚</p>
                  <p className="font-bold text-stone-800">¥3,000</p>
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  <p className="text-stone-500">美肌レタッチ 10枚</p>
                  <p className="font-bold text-stone-800">¥25,000</p>
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  <p className="text-stone-500">美肌レタッチ 20枚</p>
                  <p className="font-bold text-stone-800">¥45,000</p>
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  <p className="text-stone-500">全データ（光レタッチのみ）</p>
                  <p className="font-bold text-stone-800">¥50,000</p>
                </div>
              </div>
            </div>
            <div className="text-xs text-stone-600 space-y-1">
              <p className="font-semibold text-stone-700 mb-1">こんな方におすすめ</p>
              <p>✓ データ枚数を当日の雰囲気で決めたい方</p>
              <p>✓ ご家族・きょうだい全員でたくさん撮りたい方</p>
              <p>✓ 予算を自分でコントロールしたい方</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>七五三撮影の準備・当日の流れ</h2>
          <ol className="space-y-3 text-stone-700">
            <li className="flex gap-3"><span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>オンラインで予約（24時間受付）</li>
            <li className="flex gap-3"><span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>当日スタジオに来店・衣装選び</li>
            <li className="flex gap-3"><span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>ヘアメイク・着付け（衣装持ち込みも可）</li>
            <li className="flex gap-3"><span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>プロカメラマンによる撮影</li>
            <li className="flex gap-3"><span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">5</span>データ納品（翌日〜1週間以内）</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'serif' }}>七五三撮影のよくある質問</h2>
          <FaqAccordion items={[
              { q: '七五三の撮影はいつ頃がおすすめですか？', a: '七五三のお祝い本来の日は11月15日ですが、9月以降は大変混み合うためお早めのご予約をおすすめします。1月〜9月はオフシーズンとなり、お得な料金で撮影できます。前撮り・後撮りどちらも人気です。' },
              { q: '数え年・満年齢どちらで撮影すればいいですか？', a: 'どちらでも問題ありません。3歳は数え年だと着付けが大変な場合もあるため、お子様の体格や成長具合に合わせてお決めください。' },
              { q: 'きょうだい写真や家族写真も撮れますか？', a: 'はい。七五三メインのお子様の主役写真に加え、ごきょうだいやご家族との写真も撮影できます。お子様2人以上を主役で撮影したい場合は有料オプションになります。' },
              { q: 'いとこ同士・友達同士での撮影はできますか？', a: '可能です。その場合は家族ごとに料金が発生します（七五三プラン×人数分）。ご予約フォームより入力して分からない場合は、事前にご相談ください。' },
              { q: '着物はレンタルできますか？持ち込みも可能ですか？', a: 'どちらも対応しています。持ち込みの場合はもし出来れば、「肩上げ」「半衿つけ」を事前に済ませた状態でお持ちください。' },
              { q: 'きょうだいの着物・衣装もレンタルできますか？', a: 'はい、ごきょうだいの衣装もレンタル可能です。' },
              { q: '着付け・ヘアセットはプランに含まれますか？', a: '七五三プランは、着付け・ヘアメイクがオプションで選べます。レンタル着付けヘアメ、持ち込み着付けヘアメ、何もなし　の３パターンで選べます。パパ・ママなど大人の方の着付けは別途オプション料金です。' },
              { q: '七五三のお子様に簡単なメイクはしてもらえますか？', a: '簡単なチーク・リップのみの施術に対応しています。化粧品のアレルギーなどがある場合はお申し付けくださいませ。' },
              { q: '神社でのロケーション撮影もできますか？', a: '今後実装予定です。' },
              { q: '自宅でお支度をしてから行ってもいいですか？', a: 'はい。ご自宅でお支度済みでのご来店も可能です。着付け・ヘアセット料金が無くなり、お安くご案内に出来ます。' },
              { q: '七五三と同日に別のきょうだいのお宮参りや誕生日撮影もできますか？', a: '七五三が主役となるため、赤ちゃんや他のお子様のコンディション管理が難しくなるケースもあります。希望の場合は事前にご相談ください。' },
              { q: '撮影はしないで七五三の着物だけ借りられますか？', a: '基本対応していないですが、相談次第になります。' },
            ]} />
        </section>
      </div>

      <div className="mt-12 bg-stone-900 rounded-2xl p-8 text-center">
        <p className="text-white font-bold mb-2" style={{ fontFamily: 'serif' }}>七五三のご予約はこちら</p>
        <p className="text-stone-400 text-xs mb-5">24時間オンライン予約受付 / 神奈川県厚木市</p>
        <a
          href="https://studio-app-two.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-reserve inline-block px-8 py-3 rounded-full text-sm"
        >
          【24時間対応】ご予約はこちら
        </a>
      </div>
    </article>
  );
}
