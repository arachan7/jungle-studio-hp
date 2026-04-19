'use client';

import { useState } from 'react';
import Link from 'next/link';

const PLAN_ITEMS = [
  { href: '/column/shichigosan', label: '七五三' },
  { href: '/column/half-birthday', label: 'ハーフバースデー' },
  { href: '/column/birthday', label: 'バースデー' },
  { href: '/column/omiyamairi', label: 'お宮参り' },
  { href: '/column/newborn', label: 'ニューボーンフォト' },
  { href: '/column/maternity', label: 'マタニティフォト' },
  { href: '/column/nyuugaku', label: '卒入学' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [planOpen, setPlanOpen] = useState(false);

  const close = () => { setOpen(false); setPlanOpen(false); };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="text-base sm:text-xl font-bold tracking-widest text-stone-800" style={{ fontFamily: 'serif' }}>
          JUNGLE STUDIO
        </Link>

        <button
          className="flex flex-col items-center justify-center gap-0.5 p-2 mr-1 text-stone-700 hover:text-amber-700 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="メニューを開く"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
          <span className="text-[9px] font-bold tracking-widest">{open ? 'CLOSE' : 'MENU'}</span>
        </button>
      </div>

      {open && (
        <div className="bg-white border-t border-stone-100 shadow-lg">
          <nav className="max-w-6xl mx-auto px-4 py-6">
            <ul className="space-y-1">
              {/* ご利用の流れ */}
              <li>
                <Link href="/flow" className="block text-stone-700 hover:text-amber-700 transition-colors py-2.5 border-b border-stone-100 text-sm tracking-wide" onClick={close}>
                  ご利用の流れ
                </Link>
              </li>

              {/* 撮影プランと料金 - accordion */}
              <li>
                <button
                  className="w-full flex items-center justify-between py-2.5 border-b border-stone-100 text-sm tracking-wide text-stone-700 hover:text-amber-700 transition-colors text-left"
                  onClick={() => setPlanOpen(!planOpen)}
                >
                  <span>撮影プランと料金</span>
                  <span className={`text-amber-600 text-lg leading-none transition-transform duration-200 ${planOpen ? 'rotate-45' : ''}`}>+</span>
                </button>
                {planOpen && (
                  <ul className="pl-4 mt-1 mb-1 space-y-0.5">
                    {PLAN_ITEMS.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block text-stone-500 hover:text-amber-700 transition-colors py-2 border-b border-stone-50 text-sm"
                          onClick={close}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* 撮影前に抑えておきたいポイント */}
              <li>
                <Link href="/tips" className="block text-stone-700 hover:text-amber-700 transition-colors py-2.5 border-b border-stone-100 text-sm tracking-wide" onClick={close}>
                  撮影前に抑えておきたいポイント
                </Link>
              </li>

              {/* よくある質問 */}
              <li>
                <Link href="/faq" className="block text-stone-700 hover:text-amber-700 transition-colors py-2.5 border-b border-stone-100 text-sm tracking-wide" onClick={close}>
                  よくある質問
                </Link>
              </li>

              {/* SNS */}
              <li>
                <a href="https://www.instagram.com/jungle_studio_photo/" target="_blank" rel="noopener noreferrer" className="block text-stone-700 hover:text-amber-700 transition-colors py-2.5 border-b border-stone-100 text-sm tracking-wide" onClick={close}>
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.threads.net/@jungle_studio_photo" target="_blank" rel="noopener noreferrer" className="block text-stone-700 hover:text-amber-700 transition-colors py-2.5 border-b border-stone-100 text-sm tracking-wide" onClick={close}>
                  Threads
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@jungle_studio_photo" target="_blank" rel="noopener noreferrer" className="block text-stone-700 hover:text-amber-700 transition-colors py-2.5 border-b border-stone-100 text-sm tracking-wide" onClick={close}>
                  TikTok
                </a>
              </li>

              {/* お問い合わせ */}
              <li>
                <Link href="/contact" className="block text-stone-700 hover:text-amber-700 transition-colors py-2.5 border-b border-stone-100 text-sm tracking-wide" onClick={close}>
                  お問い合わせ
                </Link>
              </li>

              {/* アクセス */}
              <li>
                <Link href="/#access" className="block text-stone-700 hover:text-amber-700 transition-colors py-2.5 text-sm tracking-wide" onClick={close}>
                  アクセス
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
