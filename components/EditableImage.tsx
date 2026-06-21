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

  const image = (
    <Image
      src={currentSrc}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
      data-eid={eid}
    />
  );

  if (!isEditMode) {
    return image;
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
        alert(data.error ?? 'Upload failed');
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

  // fill モード: 後続の overlay div にクリック領域を奪われるため、
  // wrapper 自体のクリックは無効化し、z-[100] の固定ボタンで変更を受け付ける
  if (fill) {
    return (
      <span
        className="block w-full h-full"
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      >
        {image}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (!uploading) inputRef.current?.click();
          }}
          className="absolute top-2 right-2 z-[100] flex items-center gap-1 bg-black/70 hover:bg-black/90 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-lg transition-colors"
        >
          📷 画像を変更
        </button>
        {uploading && (
          <span className="absolute inset-0 z-[101] flex items-center justify-center bg-black/60">
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

  return (
    <span
      className="group block w-full h-full cursor-pointer relative"
      onClick={() => !uploading && inputRef.current?.click()}
    >
      {image}
      <span className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-black/0 group-hover:bg-black/50 transition-colors">
        <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-bold transition-opacity">
          Change image
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
