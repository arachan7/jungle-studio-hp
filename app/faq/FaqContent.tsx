'use client';

import Link from 'next/link';
import EditableText from '@/components/EditableText';
import EditableImage from '@/components/EditableImage';
import EditableFaqAccordion from '@/components/EditableFaqAccordion';

export default function FaqContent() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-xs text-stone-400 mb-8">
        <Link href="/" className="hover:text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span>よくある質問</span>
      </nav>

      <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden mb-10">
        {/* EDITABLE:faq-hero:start */}
        <EditableImage
          eid="faq-hero"
          src="/faq-hero.jpg"
          alt="よくある質問"
          fill
          className="object-cover"
          priority
        />
        {/* EDITABLE:faq-hero:end */}
      </div>

      <header className="mb-12">
        <p className="text-amber-700 text-xs tracking-widest mb-3">FAQ</p>
        {/* EDITABLE:faq-title:start */}
        <EditableText eid="faq-title" tag="h1" className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ fontFamily: 'serif' }}>
          {"よくある質問"}
        </EditableText>
        {/* EDITABLE:faq-title:end */}
        {/* EDITABLE:faq-sub:start */}
        <EditableText eid="faq-sub" tag="p" className="text-stone-500 text-sm">
          {"ご来店前によく寄せられるご質問をまとめました"}
        </EditableText>
        {/* EDITABLE:faq-sub:end */}
      </header>

      <div className="space-y-10">
        {/* 七五三 */}
        <section>
          <div className="flex items-center justify-between mb-3">
            {/* EDITABLE:faq-cat0-label:start */}
            <EditableText eid="faq-cat0-label" tag="h2" className="text-base font-bold text-stone-800" style={{ fontFamily: 'serif' }}>{"七五三"}</EditableText>
            {/* EDITABLE:faq-cat0-label:end */}
            <Link href="/column/shichigosan" className="text-xs text-amber-600 hover:underline">詳しく見る →</Link>
          </div>
          <EditableFaqAccordion items={[
            {
              q: (<>{/* EDITABLE:faq-cat0-item0-q:start */}<EditableText eid="faq-cat0-item0-q" tag="span">{"七五三の撮影はいつ頃がおすすめですか？"}</EditableText>{/* EDITABLE:faq-cat0-item0-q:end */}</>),
              a: (<>{/* EDITABLE:faq-cat0-item0-a:start */}<EditableText eid="faq-cat0-item0-a" tag="span">{"七五三のお祝い本来の日は11月15日ですが、9月以降は大変混み合うためお早めのご予約をおすすめします。1月〜9月はオフシーズンとなり、お得な料金で撮影できます。前撮り・後撮りどちらも人気です。"}</EditableText>{/* EDITABLE:faq-cat0-item0-a:end */}</>),
            },
            {
              q: (<>{/* EDITABLE:faq-cat0-item1-q:start */}<EditableText eid="faq-cat0-item1-q" tag="span">{"数え年・満年齢どちらで撮影すればいいですか？"}</EditableText>{/* EDITABLE:faq-cat0-item1-q:end */}</>),
              a: (<>{/* EDITABLE:faq-cat0-item1-a:start */}<EditableText eid="faq-cat0-item1-a" tag="span">{"どちらでも問題ありません。3歳は数え年だと着付けが大変な場合もあるため、お子様の体格や成長具合に合わせてお決めください。"}</EditableText>{/* EDITABLE:faq-cat0-item1-a:end */}</>),
            },
            {
              q: (<>{/* EDITABLE:faq-cat0-item2-q:start */}<EditableText eid="faq-cat0-item2-q" tag="span">{"着物はレンタルできますか？持ち込みも可能ですか？"}</EditableText>{/* EDITABLE:faq-cat0-item2-q:end */}</>),
              a: (<>{/* EDITABLE:faq-cat0-item2-a:start */}<EditableText eid="faq-cat0-item2-a" tag="span">{"どちらも対応しています。持ち込みの場合はもし出来れば、「肩上げ」「半衿つけ」を事前に済ませた状態でお持ちください。"}</EditableText>{/* EDITABLE:faq-cat0-item2-a:end */}</>),
            },
            {
              q: (<>{/* EDITABLE:faq-cat0-item3-q:start */}<EditableText eid="faq-cat0-item3-q" tag="span">{"着付け・ヘアセットはプランに含まれますか？"}</EditableText>{/* EDITABLE:faq-cat0-item3-q:end */}</>),
              a: (<>{/* EDITABLE:faq-cat0-item3-a:start */}<EditableText eid="faq-cat0-item3-a" tag="span">{"七五三プランは、着付け・ヘアメイクがオプションで選べます。レンタル着付けヘアメ、持ち込み着付けヘアメ、何もなし　の３パターンで選べます。パパ・ママなど大人の方の着付けは別途オプション料金です。"}</EditableText>{/* EDITABLE:faq-cat0-item3-a:end */}</>),
            },
          ]} />
        </section>

        {/* ハーフバースデー・バースデー */}
        <section>
          <div className="flex items-center justify-between mb-3">
            {/* EDITABLE:faq-cat1-label:start */}
            <EditableText eid="faq-cat1-label" tag="h2" className="text-base font-bold text-stone-800" style={{ fontFamily: 'serif' }}>{"ハーフバースデー・バースデー"}</EditableText>
            {/* EDITABLE:faq-cat1-label:end */}
            <Link href="/column/birthday" className="text-xs text-amber-600 hover:underline">詳しく見る →</Link>
          </div>
          <EditableFaqAccordion items={[
            {
              q: (<>{/* EDITABLE:faq-cat1-item0-q:start */}<EditableText eid="faq-cat1-item0-q" tag="span">{"ハーフバースデーはいつ撮影するのがおすすめですか？"}</EditableText>{/* EDITABLE:faq-cat1-item0-q:end */}</>),
              a: (<>{/* EDITABLE:faq-cat1-item0-a:start */}<EditableText eid="faq-cat1-item0-a" tag="span">{"生後6ヶ月前後が目安です。首がすわり、表情も豊かになる時期でねんね期の愛らしさが凝縮されています。±1〜2ヶ月前後でも全く問題ありません。"}</EditableText>{/* EDITABLE:faq-cat1-item0-a:end */}</>),
            },
            {
              q: (<>{/* EDITABLE:faq-cat1-item1-q:start */}<EditableText eid="faq-cat1-item1-q" tag="span">{"誕生日当日でないといけませんか？"}</EditableText>{/* EDITABLE:faq-cat1-item1-q:end */}</>),
              a: (<>{/* EDITABLE:faq-cat1-item1-a:start */}<EditableText eid="faq-cat1-item1-a" tag="span">{"いいえ。お誕生日の前後で都合の良い日にご予約いただけます。"}</EditableText>{/* EDITABLE:faq-cat1-item1-a:end */}</>),
            },
            {
              q: (<>{/* EDITABLE:faq-cat1-item2-q:start */}<EditableText eid="faq-cat1-item2-q" tag="span">{"バルーンや小物などの持ち込みはできますか？"}</EditableText>{/* EDITABLE:faq-cat1-item2-q:end */}</>),
              a: (<>{/* EDITABLE:faq-cat1-item2-a:start */}<EditableText eid="faq-cat1-item2-a" tag="span">{"無料で持ち込み可能です（名前ボード・バルーン・髪飾りなど）。溶けやすいチョコレートや飴など衣装を汚す可能性のあるものはご遠慮ください。"}</EditableText>{/* EDITABLE:faq-cat1-item2-a:end */}</>),
            },
            {
              q: (<>{/* EDITABLE:faq-cat1-item3-q:start */}<EditableText eid="faq-cat1-item3-q" tag="span">{"家族・きょうだいと一緒に撮れますか？"}</EditableText>{/* EDITABLE:faq-cat1-item3-q:end */}</>),
              a: (<>{/* EDITABLE:faq-cat1-item3-a:start */}<EditableText eid="faq-cat1-item3-a" tag="span">{"どのプランでもご家族との撮影は対応しています。親2人、子1人がベースで、家族写真は付いていますが、兄弟だけの写真や、お子様1人増えて家族写真を撮る場合は別途3,000〜5,000円オプション費用がかかります。"}</EditableText>{/* EDITABLE:faq-cat1-item3-a:end */}</>),
            },
          ]} />
        </section>

        {/* お宮参り */}
        <section>
          <div className="flex items-center justify-between mb-3">
            {/* EDITABLE:faq-cat2-label:start */}
            <EditableText eid="faq-cat2-label" tag="h2" className="text-base font-bold text-stone-800" style={{ fontFamily: 'serif' }}>{"お宮参り"}</EditableText>
            {/* EDITABLE:faq-cat2-label:end */}
            <Link href="/column/omiyamairi" className="text-xs text-amber-600 hover:underline">詳しく見る →</Link>
          </div>
          <EditableFaqAccordion items={[
            {
              q: (<>{/* EDITABLE:faq-cat2-item0-q:start */}<EditableText eid="faq-cat2-item0-q" tag="span">{"お宮参りはいつ撮影するのがおすすめですか？"}</EditableText>{/* EDITABLE:faq-cat2-item0-q:end */}</>),
              a: (<>{/* EDITABLE:faq-cat2-item0-a:start */}<EditableText eid="faq-cat2-item0-a" tag="span">{"伝統的には男の子は生後31〜32日目、女の子は生後32〜33日目とされていますが、現在は1ヶ月検診が終わった後、体調の良い日を選ぶご家族が多いです。100日祝いと一緒に撮影されるケースも増えています。"}</EditableText>{/* EDITABLE:faq-cat2-item0-a:end */}</>),
            },
            {
              q: (<>{/* EDITABLE:faq-cat2-item1-q:start */}<EditableText eid="faq-cat2-item1-q" tag="span">{"お宮参り用のお祝い着（産着）はレンタルできますか？"}</EditableText>{/* EDITABLE:faq-cat2-item1-q:end */}</>),
              a: (<>{/* EDITABLE:faq-cat2-item1-a:start */}<EditableText eid="faq-cat2-item1-a" tag="span">{"はい。お祝い着のレンタルがプランに含まれています。"}</EditableText>{/* EDITABLE:faq-cat2-item1-a:end */}</>),
            },
            {
              q: (<>{/* EDITABLE:faq-cat2-item2-q:start */}<EditableText eid="faq-cat2-item2-q" tag="span">{"赤ちゃんが泣いてしまっても大丈夫ですか？"}</EditableText>{/* EDITABLE:faq-cat2-item2-q:end */}</>),
              a: (<>{/* EDITABLE:faq-cat2-item2-a:start */}<EditableText eid="faq-cat2-item2-a" tag="span">{"大丈夫です。泣いてしまうのもその子のありのままの姿です。スタッフが一緒にあやしながら丁寧に撮影します。泣いてしまってどうしても撮影が難しい場合は、別日に変更可能です。"}</EditableText>{/* EDITABLE:faq-cat2-item2-a:end */}</>),
            },
          ]} />
        </section>

        {/* ニューボーンフォト */}
        <section>
          <div className="flex items-center justify-between mb-3">
            {/* EDITABLE:faq-cat3-label:start */}
            <EditableText eid="faq-cat3-label" tag="h2" className="text-base font-bold text-stone-800" style={{ fontFamily: 'serif' }}>{"ニューボーンフォト"}</EditableText>
            {/* EDITABLE:faq-cat3-label:end */}
            <Link href="/column/newborn" className="text-xs text-amber-600 hover:underline">詳しく見る →</Link>
          </div>
          <EditableFaqAccordion items={[
            {
              q: (<>{/* EDITABLE:faq-cat3-item0-q:start */}<EditableText eid="faq-cat3-item0-q" tag="span">{"ニューボーンフォトはいつ撮影するのがおすすめですか？"}</EditableText>{/* EDITABLE:faq-cat3-item0-q:end */}</>),
              a: (<>{/* EDITABLE:faq-cat3-item0-a:start */}<EditableText eid="faq-cat3-item0-a" tag="span">{"生後7〜14日以内がおすすめです。この時期は新生児特有の丸まった姿勢・柔らかさが残っており、後から振り返ると「この時期にしか撮れなかった」写真になります。"}</EditableText>{/* EDITABLE:faq-cat3-item0-a:end */}</>),
            },
            {
              q: (<>{/* EDITABLE:faq-cat3-item1-q:start */}<EditableText eid="faq-cat3-item1-q" tag="span">{"安全面は大丈夫ですか？"}</EditableText>{/* EDITABLE:faq-cat3-item1-q:end */}</>),
              a: (<>{/* EDITABLE:faq-cat3-item1-a:start */}<EditableText eid="faq-cat3-item1-a" tag="span">{"赤ちゃんの安全を最優先に撮影します。フラッシュを使わず自然光での撮影が基本。使用する布・衣装・タオルは毎回無添加洗剤で洗濯・消毒し、スタッフは手洗い・消毒・マスク着用で対応します。"}</EditableText>{/* EDITABLE:faq-cat3-item1-a:end */}</>),
            },
            {
              q: (<>{/* EDITABLE:faq-cat3-item2-q:start */}<EditableText eid="faq-cat3-item2-q" tag="span">{"直前にキャンセルしたい場合はどうなりますか？"}</EditableText>{/* EDITABLE:faq-cat3-item2-q:end */}</>),
              a: (<>{/* EDITABLE:faq-cat3-item2-a:start */}<EditableText eid="faq-cat3-item2-a" tag="span">{"前日・当日のキャンセルにはキャンセル料が発生する場合があります。詳しくはご予約フォームの1番下のキャンセルポリシーをご覧ください。"}</EditableText>{/* EDITABLE:faq-cat3-item2-a:end */}</>),
            },
          ]} />
        </section>

        {/* マタニティフォト */}
        <section>
          <div className="flex items-center justify-between mb-3">
            {/* EDITABLE:faq-cat4-label:start */}
            <EditableText eid="faq-cat4-label" tag="h2" className="text-base font-bold text-stone-800" style={{ fontFamily: 'serif' }}>{"マタニティフォト"}</EditableText>
            {/* EDITABLE:faq-cat4-label:end */}
            <Link href="/column/maternity" className="text-xs text-amber-600 hover:underline">詳しく見る →</Link>
          </div>
          <EditableFaqAccordion items={[
            {
              q: (<>{/* EDITABLE:faq-cat4-item0-q:start */}<EditableText eid="faq-cat4-item0-q" tag="span">{"マタニティフォトはいつ撮影するのがおすすめですか？"}</EditableText>{/* EDITABLE:faq-cat4-item0-q:end */}</>),
              a: (<>{/* EDITABLE:faq-cat4-item0-a:start */}<EditableText eid="faq-cat4-item0-a" tag="span">{"妊娠7〜9ヶ月（妊娠28〜36週頃）がおすすめです。おなかが大きくふくらみ、かつ体調が比較的安定している時期です。"}</EditableText>{/* EDITABLE:faq-cat4-item0-a:end */}</>),
            },
            {
              q: (<>{/* EDITABLE:faq-cat4-item1-q:start */}<EditableText eid="faq-cat4-item1-q" tag="span">{"パパや上の子も一緒に撮れますか？"}</EditableText>{/* EDITABLE:faq-cat4-item1-q:end */}</>),
              a: (<>{/* EDITABLE:faq-cat4-item1-a:start */}<EditableText eid="faq-cat4-item1-a" tag="span">{"はい、ご家族での写真も撮影できます。ですが、マタニティフォトは親子写真や親同士での撮影が付属しないので、別途3,000円～5,000円のオプションが必要になります。"}</EditableText>{/* EDITABLE:faq-cat4-item1-a:end */}</>),
            },
          ]} />
        </section>

        {/* 卒入学 */}
        <section>
          <div className="flex items-center justify-between mb-3">
            {/* EDITABLE:faq-cat5-label:start */}
            <EditableText eid="faq-cat5-label" tag="h2" className="text-base font-bold text-stone-800" style={{ fontFamily: 'serif' }}>{"卒入学"}</EditableText>
            {/* EDITABLE:faq-cat5-label:end */}
            <Link href="/column/nyuugaku" className="text-xs text-amber-600 hover:underline">詳しく見る →</Link>
          </div>
          <EditableFaqAccordion items={[
            {
              q: (<>{/* EDITABLE:faq-cat5-item0-q:start */}<EditableText eid="faq-cat5-item0-q" tag="span">{"入学・入園の撮影はいつ頃がおすすめですか？"}</EditableText>{/* EDITABLE:faq-cat5-item0-q:end */}</>),
              a: (<>{/* EDITABLE:faq-cat5-item0-a:start */}<EditableText eid="faq-cat5-item0-a" tag="span">{"入学式・入園式の前後、2〜4月が最も人気の時期です。早めのご予約をおすすめします。"}</EditableText>{/* EDITABLE:faq-cat5-item0-a:end */}</>),
            },
            {
              q: (<>{/* EDITABLE:faq-cat5-item1-q:start */}<EditableText eid="faq-cat5-item1-q" tag="span">{"ランドセルや制服など持ち込みで撮影できますか？"}</EditableText>{/* EDITABLE:faq-cat5-item1-q:end */}</>),
              a: (<>{/* EDITABLE:faq-cat5-item1-a:start */}<EditableText eid="faq-cat5-item1-a" tag="span">{"はい。ご自身のランドセル・制服・体操服などお持ち込みいただいて撮影できます。"}</EditableText>{/* EDITABLE:faq-cat5-item1-a:end */}</>),
            },
          ]} />
        </section>
      </div>

      <div className="mt-14 bg-stone-900 rounded-2xl p-8 text-center">
        {/* EDITABLE:faq-cta-title:start */}
        <EditableText eid="faq-cta-title" tag="p" className="text-white font-bold mb-2 text-lg" style={{ fontFamily: 'serif' }}>
          {"その他のご質問はお気軽に"}
        </EditableText>
        {/* EDITABLE:faq-cta-title:end */}
        {/* EDITABLE:faq-cta-sub:start */}
        <EditableText eid="faq-cta-sub" tag="p" className="text-stone-400 text-xs mb-5">
          {"24時間オンライン予約受付 / 神奈川県厚木市"}
        </EditableText>
        {/* EDITABLE:faq-cta-sub:end */}
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
