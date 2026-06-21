'use client';

import { useState } from 'react';
import Link from 'next/link';
import EditableText from '@/components/EditableText';

const PLAN_ITEMS = [
  { href: '/column/shichigosan', label: '七五三' },
  { href: '/column/half-birthday', label: 'ハーフバースデー' },
  { href: '/column/birthday', label: 'バースデー' },
  { href: '/column/omiyamairi', label: 'お宮参り' },
  { href: '/column/newborn', label: 'ニューボーンフォト' },
  { href: '/column/maternity', label: 'マタニティフォト' },
  { href: '/column/nyuugaku', label: '卒入学' },
];

// 各プラン項目のラベル。EDITABLE マーカーで個別に編集可能にする。
const PLAN_LABELS: Record<string, string> = {
  /* EDITABLE:header-plan-shichigosan:start */
  'shichigosan': '七五三',
  /* EDITABLE:header-plan-shichigosan:end */
  /* EDITABLE:header-plan-half-birthday:start */
  'half-birthday': 'ハーフバースデー',
  /* EDITABLE:header-plan-half-birthday:end */
  /* EDITABLE:header-plan-birthday:start */
  'birthday': 'バースデー',
  /* EDITABLE:header-plan-birthday:end */
  /* EDITABLE:header-plan-omiyamairi:start */
  'omiyamairi': 'お宮参り',
  /* EDITABLE:header-plan-omiyamairi:end */
  /* EDITABLE:header-plan-newborn:start */
  'newborn': 'ニューボーンフォト',
  /* EDITABLE:header-plan-newborn:end */
  /* EDITABLE:header-plan-maternity:start */
  'maternity': 'マタニティフォト',
  /* EDITABLE:header-plan-maternity:end */
  /* EDITABLE:header-plan-nyuugaku:start */
  'nyuugaku': '卒入学',
  /* EDITABLE:header-plan-nyuugaku:end */
};

function planSlug(href: string): string {
  return href.replace('/column/', '');
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [planOpen, setPlanOpen] = useState(false);

  const close = () => { setOpen(false); setPlanOpen(false); };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" style={{ fontFamily: 'serif' }}>
          {/* EDITABLE:header-logo:start */}
          <EditableText eid="header-logo" tag="span" className="text-base sm:text-xl font-bold tracking-widest text-stone-800">
            JUNGLE STUDIO
          </EditableText>
          {/* EDITABLE:header-logo:end */}
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
                  {/* EDITABLE:header-nav-flow:start */}
                  <EditableText eid="header-nav-flow" tag="span">ご利用の流れ</EditableText>
                  {/* EDITABLE:header-nav-flow:end */}
                </Link>
              </li>

              {/* 撮影プランと料金 - accordion */}
              <li>
                <button
                  className="w-full flex items-center justify-between py-2.5 border-b border-stone-100 text-sm tracking-wide text-stone-700 hover:text-amber-700 transition-colors text-left"
                  onClick={() => setPlanOpen(!planOpen)}
                >
                  {/* EDITABLE:header-nav-plan:start */}
                  <EditableText eid="header-nav-plan" tag="span">撮影プランと料金</EditableText>
                  {/* EDITABLE:header-nav-plan:end */}
                  <span className={`text-amber-600 text-lg leading-none transition-transform duration-200 ${planOpen ? 'rotate-45' : ''}`}>+</span>
                </button>
                {planOpen && (
                  <ul className="pl-4 mt-1 mb-1 space-y-0.5">
                    {PLAN_ITEMS.map((item) => {
                      const slug = planSlug(item.href);
                      const label = PLAN_LABELS[slug] ?? item.label;
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block text-stone-500 hover:text-amber-700 transition-colors py-2 border-b border-stone-50 text-sm"
                            onClick={close}
                          >
                            <EditableText eid={`header-plan-${slug}`} tag="span">{label}</EditableText>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>

              {/* 撮影前に抑えておきたいポイント */}
              <li>
                <Link href="/tips" className="block text-stone-700 hover:text-amber-700 transition-colors py-2.5 border-b border-stone-100 text-sm tracking-wide" onClick={close}>
                  {/* EDITABLE:header-nav-tips:start */}
                  <EditableText eid="header-nav-tips" tag="span">撮影前に抑えておきたいポイント</EditableText>
                  {/* EDITABLE:header-nav-tips:end */}
                </Link>
              </li>

              {/* よくある質問 */}
              <li>
                <Link href="/faq" className="block text-stone-700 hover:text-amber-700 transition-colors py-2.5 border-b border-stone-100 text-sm tracking-wide" onClick={close}>
                  {/* EDITABLE:header-nav-faq:start */}
                  <EditableText eid="header-nav-faq" tag="span">よくある質問</EditableText>
                  {/* EDITABLE:header-nav-faq:end */}
                </Link>
              </li>

              {/* SNS */}
              <li>
                <a href="https://www.instagram.com/jungle_studio33?igsh=ZGlmcjQ0N2gyZjhn&utm_source=qr" target="_blank" rel="noopener noreferrer" className="block text-stone-700 hover:text-amber-700 transition-colors py-2.5 border-b border-stone-100 text-sm tracking-wide" onClick={close}>
                  {/* EDITABLE:header-nav-instagram:start */}
                  <EditableText eid="header-nav-instagram" tag="span">Instagram</EditableText>
                  {/* EDITABLE:header-nav-instagram:end */}
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@jungle_studio33" target="_blank" rel="noopener noreferrer" className="block text-stone-700 hover:text-amber-700 transition-colors py-2.5 border-b border-stone-100 text-sm tracking-wide" onClick={close}>
                  {/* EDITABLE:header-nav-tiktok1:start */}
                  <EditableText eid="header-nav-tiktok1" tag="span">TikTok①（スタジオの雰囲気や実績写真はこちら）</EditableText>
                  {/* EDITABLE:header-nav-tiktok1:end */}
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@jungle_studio_ura" target="_blank" rel="noopener noreferrer" className="block text-stone-700 hover:text-amber-700 transition-colors py-2.5 border-b border-stone-100 text-sm tracking-wide" onClick={close}>
                  {/* EDITABLE:header-nav-tiktok2:start */}
                  <EditableText eid="header-nav-tiktok2" tag="span">TikTok②（ジャングルスタジオの裏側はこちら）</EditableText>
                  {/* EDITABLE:header-nav-tiktok2:end */}
                </a>
              </li>

              {/* お問い合わせ */}
              <li>
                <Link href="/contact" className="block text-stone-700 hover:text-amber-700 transition-colors py-2.5 border-b border-stone-100 text-sm tracking-wide" onClick={close}>
                  {/* EDITABLE:header-nav-contact:start */}
                  <EditableText eid="header-nav-contact" tag="span">お問い合わせ</EditableText>
                  {/* EDITABLE:header-nav-contact:end */}
                </Link>
              </li>

              {/* アクセス */}
              <li>
                <Link href="/#access" className="block text-stone-700 hover:text-amber-700 transition-colors py-2.5 text-sm tracking-wide" onClick={close}>
                  {/* EDITABLE:header-nav-access:start */}
                  <EditableText eid="header-nav-access" tag="span">アクセス</EditableText>
                  {/* EDITABLE:header-nav-access:end */}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
