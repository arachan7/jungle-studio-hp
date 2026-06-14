import { getDb } from '@/app/lib/db';
import { junglePassports } from '@/app/lib/schema';
import { and, eq } from 'drizzle-orm';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name')?.trim() ?? '';
  const email = searchParams.get('email')?.trim().toLowerCase() ?? '';

  if (!name || !email) {
    return Response.json({ error: '名前とメールアドレスを入力してください' }, { status: 400 });
  }

  const db = getDb();
  const rows = await db
    .select()
    .from(junglePassports)
    .where(and(eq(junglePassports.email, email), eq(junglePassports.name, name)));

  if (rows.length === 0) {
    return Response.json({ error: '登録情報が見つかりません' }, { status: 404 });
  }

  const p = rows[0];
  return Response.json({
    id: p.id,
    name: p.name,
    email: p.email,
    status: p.status,
    trialStartAt: p.trialStartAt,
    trialEndAt: p.trialEndAt,
    cancelledAt: p.cancelledAt,
    expiresAt: p.expiresAt,
  });
}
