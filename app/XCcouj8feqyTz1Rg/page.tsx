import { cookies } from 'next/headers';
import type { Metadata } from 'next';
import { verifySession, EDITOR_COOKIE_NAME } from '@/lib/editorAuth';
import EditorShell from './EditorShell';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function EditorPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get(EDITOR_COOKIE_NAME)?.value ?? '';
  const isAuthed = verifySession(session);

  return <EditorShell isAuthed={isAuthed} />;
}
