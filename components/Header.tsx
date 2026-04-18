'use client';

import { useState } from 'react';
import Link from 'next/link';

const NAV_ITEMS = [
  { href: '/column/shichigosan', label: '七五三' },
  { href: '/column/omiyamairi', label: 'お宮参り' },
  { href: '/column/newborn', label: 'ニューボーンフォト' },
  { href: '/column/maternity', label: 'マタニティフォト' },
  { href: '/column/nyuugaku', label: '入園・卒業' },
  { href: '/#plans', label: 'プラン・料金' },
  { href: '/#access', label: 'アクセス' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-widest text-stone-800" style={{ fontFamily: 'serif' }}>
          JUNGLE STUDIO
        </Link>

        <div className="flex items-center gap-4">
          <a
            href="https://studio-app-two.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-reserve hidden sm:inline-block px-5 py-2 rounded-full text-sm"
          >
            【24時間対応】予約はこちら
          </a>

          <button
            className="hamburger p-2 flex flex-col justify-center"
            onClick={() => setOpen(!open)}
            aria-label="メニューを開く"
          >
            <span className={open ? 'rotate-45 translate-y-1.5' : ''} />
            <span className={open ? 'opacity-0' : ''} />
            <span className={open ? '-rotate-45 -translate-y-1.5' : ''} />
          </button>
        </div>
      </div>

      {open && (
        <div className="bg-white border-t border-stone-100 shadow-lg">
          <nav className="max-w-6xl mx-auto px-4 py-6">
            <p className="text-xs text-stone-400 tracking-widest mb-4">COLUMN &amp; MENU</p>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-stone-700 hover:text-amber-700 transition-colors py-1 border-b border-stone-100 text-sm tracking-wide"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="https://studio-app-two.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-reserve mt-6 block text-center px-6 py-3 rounded-full text-sm sm:hidden"
            >
              【24時間対応】予約はこちら
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
