import nodemailer from 'nodemailer';
import { cleanEnv } from './env';

/** 解約用ワンタイムコードを登録メールアドレスに送信する（Gmail SMTP） */
export async function sendCancelOtpEmail(to: string, code: string) {
  const gmailUser = cleanEnv('GMAIL_USER');
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: gmailUser, pass: cleanEnv('GMAIL_APP_PASSWORD') },
  });

  await transporter.sendMail({
    from: `"Jungle Studio" <${gmailUser}>`,
    to,
    subject: '【ジャングルパスポート】解約手続きの確認コード',
    text: [
      'ジャングルパスポートの解約手続きの確認コードです。',
      '',
      `確認コード: ${code}`,
      '',
      'このコードは10分間有効です。',
      '解約ページにコードを入力して手続きを進めてください。',
      '',
      'お心当たりがない場合は、このメールを破棄してください。',
      '',
      '──────────',
      'ジャングルスタジオ',
      '070-3763-0878（受付 10:00〜21:00）',
    ].join('\n'),
  });
}
