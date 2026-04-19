import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ジャングルスタジオ、まもなくオープンいたします｜JUNGLE STUDIO',
  description: '4月25日・26日のプレオープンを経て、4月29日にグランドオープンを迎えます。',
  alternates: { canonical: 'https://www.junglestudiophoto.com/news/grand-open' },
};

export default function GrandOpenPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-xs text-stone-400 mb-8">
        <Link href="/" className="hover:text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span>最新のコラム</span>
      </nav>

      <header className="mb-10">
        <p className="text-amber-700 text-xs tracking-widest mb-3">NEWS / 2026.04.19</p>
        <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ fontFamily: 'serif' }}>
          ジャングルスタジオ、まもなくオープンいたします
        </h1>
      </header>

      <div className="space-y-8 text-sm text-stone-700 leading-relaxed">
        <p>
          この度、フォトスタジオ「ジャングルスタジオ」は、4月25日・26日のプレオープンを経て、4月29日にグランドオープンを迎える運びとなりました。
        </p>

        <section>
          <h2 className="text-lg font-bold text-stone-800 mb-3" style={{ fontFamily: 'serif' }}>
            まずは、たくさんの「楽しみにしています」の声に感謝を
          </h2>
          <p>
            オープン前のこの段階で、すでにプレオープンのご予約を20件以上頂戴しております。正直なところ、ここまで多くの方に関心を寄せていただけるとは思っておらず、スタッフ一同、驚きと喜びでいっぱいです。
          </p>
          <p className="mt-3">
            これほどの期待を寄せてくださる皆さまに、心から感謝申し上げます。ありがとうございます。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-800 mb-3" style={{ fontFamily: 'serif' }}>
            ジャングルスタジオが大切にしていること
          </h2>
          <h3 className="font-semibold text-stone-800 mb-2">アンティークな空間が、物語を引き立てる</h3>
          <p>
            ジャングルスタジオは、どこを切り取っても絵になる、アンティークな雰囲気にこだわった空間です。使い込まれた家具の質感、落ち着いた色合いの壁、光の入り方。すべてが被写体を主役として際立たせるように設計されています。
          </p>
          <p className="mt-3">
            よくあるスタジオの「背景」ではなく、その場所自体が物語の一部になるような。そんな空気感を目指しました。マタニティ、ニューボーン、バースデー、ファミリー、成人式や記念日のポートレートまで、人生の節目を特別な一枚として残していただける場所になれたら嬉しいです。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-800 mb-3" style={{ fontFamily: 'serif' }}>
            お手頃価格で、妥協のないクオリティを
          </h2>
          <p>
            「良い写真を残したいけれど、スタジオ撮影は敷居が高い」——そう感じていらっしゃる方は少なくないと思います。
          </p>
          <p className="mt-3">
            ジャングルスタジオは、価格の面でも気軽にご利用いただける設定にしつつ、仕上がりのクオリティには一切妥協しません。撮影技術、レタッチ、空間づくり、接客の一つひとつに、プロとしての責任を持ってお応えしていきます。
          </p>
          <p className="mt-3">
            「思っていたよりずっと良かった」と感じていただけるスタジオを目指しています。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-800 mb-3" style={{ fontFamily: 'serif' }}>
            これからのジャングルスタジオを、どうぞよろしくお願いいたします
          </h2>
          <p>
            4月29日のグランドオープン以降も、お客さまの大切な瞬間に寄り添えるスタジオであり続けられるよう、スタッフ一同精進してまいります。
          </p>
          <p className="mt-3">
            ご予約・お問い合わせは随時承っております。ぜひ、ジャングルスタジオで過ごすひとときを楽しみにしていてください。
          </p>
          <p className="mt-3 font-semibold text-stone-800">
            皆さまにお会いできる日を、心よりお待ちしております。
          </p>
        </section>
      </div>

      <div className="mt-14 bg-stone-900 rounded-2xl p-8 text-center">
        <p className="text-white font-bold mb-2 text-lg" style={{ fontFamily: 'serif' }}>
          ご予約・ご相談はお気軽に
        </p>
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
