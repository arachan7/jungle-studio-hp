import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-white font-bold tracking-widest mb-4" style={{ fontFamily: 'serif' }}>
              JUNGLE STUDIO
            </h3>
            <p className="text-sm leading-relaxed text-stone-400">
              神奈川県厚木市のフォトスタジオ。<br />
              お子様の大切な瞬間を高品質な写真で残します。
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold tracking-widest mb-4">COLUMN</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/column/shichigosan" className="hover:text-amber-400 transition-colors">七五三フォト</Link></li>
              <li><Link href="/column/half-birthday" className="hover:text-amber-400 transition-colors">ハーフバースデー</Link></li>
              <li><Link href="/column/birthday" className="hover:text-amber-400 transition-colors">バースデー</Link></li>
              <li><Link href="/column/omiyamairi" className="hover:text-amber-400 transition-colors">お宮参り</Link></li>
              <li><Link href="/column/newborn" className="hover:text-amber-400 transition-colors">ニューボーンフォト</Link></li>
              <li><Link href="/column/maternity" className="hover:text-amber-400 transition-colors">マタニティフォト</Link></li>
              <li><Link href="/column/nyuugaku" className="hover:text-amber-400 transition-colors">入園・卒業</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold tracking-widest mb-4">ACCESS</h4>
            <address className="not-italic text-sm text-stone-400 space-y-1 leading-relaxed">
              <p>〒243-0014</p>
              <p>神奈川県厚木市旭町5丁目43-14</p>
              <p>パストラルASAHI 401-A</p>
              <p className="mt-3">
                <a href="tel:07037630878" className="hover:text-amber-400 transition-colors">
                  070-3763-0878
                </a>
              </p>
              <p>営業時間：10:00〜21:00</p>
              <p className="text-xs">（最終入場 19:00）</p>
            </address>
          </div>
        </div>

        <div className="border-t border-stone-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-stone-500">© 2026 Jungle Studio. All rights reserved.</p>
          <a
            href="https://studio-app-two.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-reserve px-6 py-2.5 rounded-full text-sm"
          >
            【24時間対応】ご予約はこちら
          </a>
        </div>
      </div>
    </footer>
  );
}
