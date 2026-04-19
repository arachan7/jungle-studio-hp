'use client';

import { useState } from 'react';

type FaqItem = { q: string; a: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {items.map((faq, i) => (
        <div key={i} className="border border-stone-200 rounded-xl overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-5 py-3 bg-stone-50 hover:bg-stone-100 transition-colors text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-semibold text-sm text-stone-800 pr-4">Q. {faq.q}</span>
            <span className={`text-amber-600 text-lg leading-none flex-shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-45' : ''}`}>
              +
            </span>
          </button>
          {openIndex === i && (
            <div className="px-5 py-3 text-sm text-stone-600 border-t border-stone-100">
              A. {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
