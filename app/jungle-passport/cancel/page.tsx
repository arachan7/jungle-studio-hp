'use client';

import { useState } from 'react';

type Status = {
  status: string;
  trialStartAt: string;
  trialEndAt: string;
  cancelledAt: string | null;
  expiresAt: string | null;
};

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString('ja-JP', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

type Step = 'form' | 'code' | 'status' | 'done';

export default function JunglePassportCancelPage() {
  const [step, setStep] = useState<Step>('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [status, setStatus] = useState<Status | null>(null);
  const [doneExpires, setDoneExpires] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // ① コード送信
  async function handleRequest(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const res = await fetch('/api/jungle-passport/cancel/request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name.trim(), email: email.trim() }),
    });
    setLoading(false);
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? 'エラーが発生しました');
      return;
    }
    setStep('code');
  }

  // ② コード検証 → 契約状況を取得
  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const res = await fetch('/api/jungle-passport/cancel', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name.trim(), email: email.trim(), code: code.trim() }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(data.error ?? '確認に失敗しました');
      return;
    }
    setStatus(data);
    setStep('status');
  }

  // ③ 解約確定
  async function handleCancel() {
    setError('');
    setLoading(true);
    const res = await fetch('/api/jungle-passport/cancel', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name.trim(), email: email.trim(), code: code.trim(), confirm: true }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(data.error ?? '解約処理に失敗しました');
      return;
    }
    setDoneExpires(data.expiresAt);
    setStep('done');
  }

  const isInTrial = status ? new Date(status.trialEndAt) > new Date() : false;
  const canCancel = status?.status === 'active';

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-lg mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-stone-900 mb-2">解約手続き</h1>
        <p className="text-stone-500 text-sm mb-8">
          ご本人確認のため、ご登録メールアドレスに確認コードをお送りします。
        </p>

        {/* ① 入力フォーム */}
        {step === 'form' && (
          <form onSubmit={handleRequest} className="space-y-4">
            <div>
              <label className="block text-stone-700 text-sm font-semibold mb-1">
                お名前（フルネーム）
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="山田 花子"
                required
                className="w-full border border-stone-300 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              />
            </div>
            <div>
              <label className="block text-stone-700 text-sm font-semibold mb-1">
                登録メールアドレス
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                required
                className="w-full border border-stone-300 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              />
            </div>
            {error && (
              <p className="text-red-600 text-sm bg-red-50 rounded-lg px-3 py-2">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-stone-900 hover:bg-stone-800 text-white font-bold py-3.5 rounded-xl transition-colors disabled:opacity-50"
            >
              {loading ? '送信中...' : '確認コードを送信する'}
            </button>
          </form>
        )}

        {/* ② コード入力 */}
        {step === 'code' && (
          <form onSubmit={handleVerify} className="space-y-4">
            <div className="bg-stone-100 rounded-xl p-4 text-sm text-stone-600">
              ご登録のメールアドレス宛に6桁の確認コードを送信しました（登録がある場合）。
              メールが届かない場合は迷惑メールフォルダもご確認ください。
            </div>
            <div>
              <label className="block text-stone-700 text-sm font-semibold mb-1">
                確認コード（6桁）
              </label>
              <input
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="123456"
                required
                className="w-full border border-stone-300 rounded-xl px-4 py-3 text-stone-900 text-center text-2xl tracking-[0.5em] placeholder-stone-300 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              />
            </div>
            {error && (
              <p className="text-red-600 text-sm bg-red-50 rounded-lg px-3 py-2">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-stone-900 hover:bg-stone-800 text-white font-bold py-3.5 rounded-xl transition-colors disabled:opacity-50"
            >
              {loading ? '確認中...' : '次へ'}
            </button>
            <button
              type="button"
              onClick={() => { setStep('form'); setCode(''); setError(''); }}
              className="w-full text-stone-500 text-sm py-2"
            >
              戻る
            </button>
          </form>
        )}

        {/* ③ 契約状況 */}
        {step === 'status' && status && (
          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-stone-200 p-5">
              <p className="text-stone-500 text-xs mb-3 font-semibold">契約情報</p>
              <p className="font-bold text-stone-900 text-lg">{name}</p>
              <p className="text-stone-500 text-sm">{email}</p>
              <div className="mt-4 space-y-2 text-sm text-stone-600">
                <div className="flex justify-between">
                  <span>契約開始日</span>
                  <span className="font-semibold">{fmt(status.trialStartAt)}</span>
                </div>
                <div className="flex justify-between">
                  <span>課金開始日</span>
                  <span className="font-semibold">{fmt(status.trialEndAt)}</span>
                </div>
              </div>
            </div>

            {/* 無料期間中 */}
            {isInTrial && status.status === 'trial' && (
              <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 text-center">
                <p className="text-amber-800 font-bold mb-1">解約不可期間中</p>
                <p className="text-amber-700 text-sm">
                  <span className="font-semibold">{fmt(status.trialEndAt)}</span> まで解約できません
                </p>
                <p className="text-amber-600 text-xs mt-2">
                  無料期間（30日間）終了後に解約手続きが可能になります
                </p>
              </div>
            )}

            {/* 解約可能 */}
            {canCancel && (
              <div className="space-y-3">
                <div className="bg-stone-100 rounded-xl p-4 text-sm text-stone-600">
                  解約後は課金サイクル終了日まで引き続きご利用いただけます。
                </div>
                {error && (
                  <p className="text-red-600 text-sm bg-red-50 rounded-lg px-3 py-2">{error}</p>
                )}
                <button
                  onClick={handleCancel}
                  disabled={loading}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition-colors disabled:opacity-50"
                >
                  {loading ? '処理中...' : '解約する'}
                </button>
              </div>
            )}

            {/* すでに解約済み */}
            {(status.status === 'cancelled' || status.status === 'expired') && (
              <div className="bg-stone-100 rounded-xl p-4 text-center text-stone-600 text-sm">
                <p className="font-semibold mb-1">すでに解約済みです</p>
                {status.expiresAt && <p>{fmt(status.expiresAt)} まで有効です</p>}
              </div>
            )}

            <button
              onClick={() => { setStep('form'); setStatus(null); setCode(''); setError(''); }}
              className="w-full text-stone-500 text-sm py-2"
            >
              最初に戻る
            </button>
          </div>
        )}

        {/* ④ 完了 */}
        {step === 'done' && doneExpires && (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-stone-900">解約手続き完了</h2>
            <p className="text-stone-600 text-sm">
              解約の手続きが完了しました。<br />
              <span className="font-semibold">{fmt(doneExpires)}</span> まで引き続きご利用いただけます。
            </p>
            <a href="/" className="inline-block text-stone-500 text-sm underline">
              トップページへ
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
