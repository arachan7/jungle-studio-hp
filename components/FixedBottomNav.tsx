'use client';

import Link from 'next/link';

export default function FixedBottomNav({ fontClassName }: { fontClassName?: string }) {
  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-rose-300 shadow-[0_-2px_12px_rgba(0,0,0,0.1)] ${fontClassName ?? ''}`}>
      <div className="flex h-16 divide-x divide-rose-200">
        <Link
          href="/#faq"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 text-rose-500 hover:bg-rose-50 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="10" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth={3} strokeLinecap="round" />
          </svg>
          <span className="text-xs font-bold tracking-wide">よくある質問</span>
        </Link>

        <Link
          href="/flow"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 text-rose-500 hover:bg-rose-50 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 16h4" />
          </svg>
          <span className="text-xs font-bold tracking-wide">ご利用の流れ</span>
        </Link>

        <a
          href="https://studio-app-two.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center bg-rose-500 hover:bg-rose-600 transition-colors text-white text-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="text-[9px] leading-tight">【24時間対応】</span>
          <span className="text-xs font-bold leading-tight">ご予約はこちら</span>
        </a>
      </div>
    </div>
  );
}
