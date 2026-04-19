'use client';

import Link from 'next/link';

export default function FixedBottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-stone-200 shadow-[0_-2px_12px_rgba(0,0,0,0.08)]">
      <div className="flex h-16 divide-x divide-stone-200">
        <Link
          href="/#faq"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 text-stone-600 hover:text-amber-700 hover:bg-stone-50 transition-colors"
        >
          <span className="text-lg leading-none">?</span>
          <span className="text-[10px] font-medium tracking-wide">よくある質問</span>
        </Link>

        <Link
          href="/#flow"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 text-stone-600 hover:text-amber-700 hover:bg-stone-50 transition-colors"
        >
          <span className="text-lg leading-none">≡</span>
          <span className="text-[10px] font-medium tracking-wide">ご利用の流れ</span>
        </Link>

        <a
          href="https://studio-app-two.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center btn-reserve text-center"
        >
          <span className="text-[9px] leading-tight">【24時間対応】</span>
          <span className="text-xs font-bold leading-tight">ご予約はこちら</span>
        </a>
      </div>
    </div>
  );
}
