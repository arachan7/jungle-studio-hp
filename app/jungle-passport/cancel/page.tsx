'use client';

import { useState } from 'react';

type PassportInfo = {
  name: string;
  email: string;
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

export default function JunglePassportCancelPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passport, setPassport] = useState<PassportInfo | null>(null);
  const [lookupError, setLookupError] = useState('');
  const [looking, setLooking] = useState(false);
  const [cancelling, setCancelling] = useState(false);
  const [cancelDone, setCancelDone] = useState<string | null>(null);
  const [cancelError, setCancelError] = useState('');

  async function handleLookup(e: React.FormEvent) {
    e.preventDefault();
    setLookupError('');
    setPassport(null);
    setLooking(true);

    const params = new URLSearchParams({ name: name.trim(), email: email.trim() });
    const res = await fetch(`/api/jungle-passport/lookup?${params}`);
    const data = await res.json();
    setLooking(false);

    if (!res.ok) {
      setLookupError(data.error ?? '情報が見つかりませんでした');
      return;
    }
    setPassport(data);
  }

  async function handleCancel() {
    setCancelError('');
    setCancelling(true);

    const res = await fetch('/api/jungle-passport/cancel', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name.trim(), email: email.trim() }),
    });
    const data = await res.json();
    setCancelling(false);

    if (!res.ok) {
      setCancelError(data.error ?? '解約処理に失敗しました');
      return;
    }
    setCancelDone(data.expiresAt);
  }

  const isInTrial = passport ? new Date(passport.trialEndAt) > new Date() : false;
  const canCancel = passport?.status === 'active';

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-lg mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-stone-900 mb-2">解約手続き</h1>
        <p className="text-stone-500 text-sm mb-8">
          ジャングルパスポートの解約はこちらから手続きできます。
        </p>

        {!passport && !cancelDone && (
          <form onSubmit={handleLookup} className="space-y-4">
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
            {lookupError && (
              <p className="text-red-600 text-sm bg-red-50 rounded-lg px-3 py-2">{lookupError}</p>
            )}
            <button
              type="submit"
              disabled={looking}
              className="w-full bg-stone-900 hover:bg-stone-800 text-white font-bold py-3.5 rounded-xl transition-colors disabled:opacity-50"
            >
              {looking ? '確認中...' : '契約状況を確認する'}
            </button>
          </form>
        )}

        {passport && !cancelDone && (
          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-stone-200 p-5">
              <p className="text-stone-500 text-xs mb-3 font-semibold">契約情報</p>
              <p className="font-bold text-stone-900 text-lg">{passport.name}</p>
              <p className="text-stone-500 text-sm">{passport.email}</p>
              <div className="mt-4 space-y-2 text-sm text-stone-600">
                <div className="flex justify-between">
                  <span>契約開始日</span>
                  <span className="font-semibold">{fmt(passport.trialStartAt)}</span>
                </div>
                <div className="flex justify-between">
                  <span>課金開始日</span>
                  <span className="font-semibold">{fmt(passport.trialEndAt)}</span>
                </div>
              </div>
            </div>

            {/* 無料期間中 */}
            {isInTrial && (
              <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 text-center">
                <p className="text-amber-800 font-bold mb-1">解約不可期間中</p>
                <p className="text-amber-700 text-sm">
                  <span className="font-semibold">{fmt(passport.trialEndAt)}</span> まで解約できません
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
                {cancelError && (
                  <p className="text-red-600 text-sm bg-red-50 rounded-lg px-3 py-2">{cancelError}</p>
                )}
                <button
                  onClick={handleCancel}
                  disabled={cancelling}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition-colors disabled:opacity-50"
                >
                  {cancelling ? '処理中...' : '解約する'}
                </button>
                <button
                  onClick={() => setPassport(null)}
                  className="w-full text-stone-500 text-sm py-2"
                >
                  戻る
                </button>
              </div>
            )}

            {/* すでに解約済み */}
            {(passport.status === 'cancelled' || passport.status === 'expired') && (
              <div className="bg-stone-100 rounded-xl p-4 text-center text-stone-600 text-sm">
                <p className="font-semibold mb-1">すでに解約済みです</p>
                {passport.expiresAt && (
                  <p>{fmt(passport.expiresAt)} まで有効です</p>
                )}
              </div>
            )}
          </div>
        )}

        {cancelDone && (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-stone-900">解約手続き完了</h2>
            <p className="text-stone-600 text-sm">
              解約の手続きが完了しました。<br />
              <span className="font-semibold">{fmt(cancelDone)}</span> まで引き続きご利用いただけます。
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
