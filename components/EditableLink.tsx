'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useEditMode } from './EditModeContext';
import {
  isSafeEditableHref,
  MAX_LINK_HREF_LENGTH,
  MAX_LINK_TEXT_LENGTH,
} from '@/lib/editorLink';

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
  const [error, setError] = useState('');

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
    setError('');
    setOpen(true);
  };

  const handleSave = () => {
    const nextText = draftText.trim();
    const nextUrl = draftUrl.trim();
    if (!nextText || nextText.length > MAX_LINK_TEXT_LENGTH) {
      setError(`Text must be 1-${MAX_LINK_TEXT_LENGTH} characters.`);
      return;
    }
    if (!isSafeEditableHref(nextUrl)) {
      setError('URL must be http(s), mailto, tel, or a site-relative path.');
      return;
    }

    setText(nextText);
    setUrl(nextUrl);
    setOpen(false);
    setError('');
    const value = JSON.stringify({ text: nextText, href: nextUrl });
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
            maxLength={MAX_LINK_TEXT_LENGTH}
            onChange={(e) => setDraftText(e.target.value)}
            className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <label className="block text-xs font-bold text-stone-600 mb-1">
            リンク URL
          </label>
          <input
            type="text"
            value={draftUrl}
            maxLength={MAX_LINK_HREF_LENGTH}
            onChange={(e) => setDraftUrl(e.target.value)}
            className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {error && <span className="block text-xs text-red-600 mb-3">{error}</span>}
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
