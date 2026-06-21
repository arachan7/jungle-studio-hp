'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useEditMode } from './EditModeContext';

type Props = {
  eid: string;
  href: string;
  children: string;
  className?: string;
  target?: string;
  rel?: string;
  external?: boolean; // true なら <a>, false なら Next.js <Link>
};

export default function EditableLink({
  eid,
  href,
  children,
  className,
  target,
  rel,
  external,
}: Props) {
  const { isEditMode, addChange } = useEditMode();
  const [text, setText] = useState(children);
  const [url, setUrl] = useState(href);
  const [open, setOpen] = useState(false);
  const [draftText, setDraftText] = useState(children);
  const [draftUrl, setDraftUrl] = useState(href);

  const link = external ? (
    <a href={url} target={target} rel={rel} className={className} data-eid={eid}>
      {text}
    </a>
  ) : (
    <Link href={url} className={className} data-eid={eid}>
      {text}
    </Link>
  );

  if (!isEditMode) {
    return link;
  }

  const openPopover = () => {
    setDraftText(text);
    setDraftUrl(url);
    setOpen(true);
  };

  const handleSave = () => {
    setText(draftText);
    setUrl(draftUrl);
    setOpen(false);
    const value = JSON.stringify({ text: draftText, href: draftUrl });
    addChange(eid, { type: 'link', value });
    if (typeof window !== 'undefined' && window.parent !== window) {
      window.parent.postMessage(
        { type: 'eid-change', eid, changeType: 'link', value },
        window.location.origin,
      );
    }
  };

  return (
    <span className="relative inline-block">
      <span
        role="button"
        tabIndex={0}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          openPopover();
        }}
        className="ring-2 ring-blue-400 rounded inline-block cursor-pointer"
      >
        {link}
      </span>
      {open && (
        <span className="absolute top-full left-0 mt-2 z-[200] block w-72 bg-white text-stone-800 border border-stone-300 rounded-xl shadow-2xl p-4 text-left">
          <label className="block text-xs font-bold text-stone-600 mb-1">
            テキスト
          </label>
          <input
            type="text"
            value={draftText}
            onChange={(e) => setDraftText(e.target.value)}
            className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <label className="block text-xs font-bold text-stone-600 mb-1">
            リンク URL
          </label>
          <input
            type="text"
            value={draftUrl}
            onChange={(e) => setDraftUrl(e.target.value)}
            className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <span className="flex gap-2">
            <button
              type="button"
              onClick={handleSave}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg py-2 transition-colors"
            >
              保存
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex-1 bg-stone-200 hover:bg-stone-300 text-stone-700 text-sm font-bold rounded-lg py-2 transition-colors"
            >
              キャンセル
            </button>
          </span>
        </span>
      )}
    </span>
  );
}
