'use client';

import { useEditMode } from './EditModeContext';
import type { CSSProperties } from 'react';

type Tag = 'p' | 'h1' | 'h2' | 'h3' | 'span' | 'dd';

type Props = {
  eid: string;
  className?: string;
  style?: CSSProperties;
  tag?: Tag;
  children: React.ReactNode;
};

export default function EditableText({
  eid,
  className,
  style,
  tag = 'p',
  children,
}: Props) {
  const { isEditMode, addChange } = useEditMode();
  const Tag: React.ElementType = tag;

  if (!isEditMode) {
    return (
      <Tag className={className} style={style} data-eid={eid}>
        {children}
      </Tag>
    );
  }

  const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
    const value = e.currentTarget.innerText;
    addChange(eid, { type: 'text', value });
    if (typeof window !== 'undefined' && window.parent !== window) {
      window.parent.postMessage(
        { type: 'eid-change', eid, changeType: 'text', value },
        '*',
      );
    }
  };

  return (
    <Tag
      className={className}
      style={{ ...style, outline: 'none' }}
      data-eid={eid}
      contentEditable
      suppressContentEditableWarning
      onFocus={(e: React.FocusEvent<HTMLElement>) => {
        e.currentTarget.style.outline = '2px solid #f59e0b';
        e.currentTarget.style.outlineOffset = '2px';
      }}
      onBlur={(e: React.FocusEvent<HTMLElement>) => {
        e.currentTarget.style.outline = 'none';
        handleBlur(e);
      }}
    >
      {children}
    </Tag>
  );
}
