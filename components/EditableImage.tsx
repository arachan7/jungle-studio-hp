'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { useEditMode } from './EditModeContext';

type Props = {
  eid: string;
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export default function EditableImage({
  eid,
  src,
  alt,
  fill,
  width,
  height,
  className,
  priority,
  sizes,
}: Props) {
  const { isEditMode, addChange } = useEditMode();
  const [currentSrc, setCurrentSrc] = useState(src);
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const imageProps = {
    src: currentSrc,
    alt,
    fill,
    width,
    height,
    className,
    priority,
    sizes,
    'data-eid': eid,
  };

  if (!isEditMode) {
    return <Image {...imageProps} />;
  }

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const form = new FormData();
      form.append('file', file);
      form.append('eid', eid);
      const res = await fetch('/api/editor/upload', {
        method: 'POST',
        body: form,
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        alert(data.error ?? 'アップロードに失敗しました');
        return;
      }
      const data = (await res.json()) as { path: string };
      setCurrentSrc(data.path);
      addChange(eid, { type: 'image', value: data.path });
      if (typeof window !== 'undefined' && window.parent !== window) {
        window.parent.postMessage(
          { type: 'eid-change', eid, changeType: 'image', value: data.path },
          window.location.origin,
        );
      }
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  return (
    <span
      className="group block w-full h-full cursor-pointer relative"
      style={fill ? { position: 'absolute', inset: 0 } : undefined}
      onClick={() => !uploading && inputRef.current?.click()}
    >
      <Image {...imageProps} />
      <span className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-black/0 group-hover:bg-black/50 transition-colors">
        <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-bold transition-opacity">
          📷 画像を変更
        </span>
      </span>
      {uploading && (
        <span className="absolute inset-0 z-30 flex items-center justify-center bg-black/60">
          <span className="h-8 w-8 animate-spin rounded-full border-4 border-white border-t-transparent" />
        </span>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={handleFile}
      />
    </span>
  );
}
