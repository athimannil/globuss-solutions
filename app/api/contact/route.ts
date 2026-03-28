async function sendWithResend({
  from,
  to,
  subject,
  html,
}: {
  from: string;
  to: string;
  subject: string;
  html: string;
}): Promise<{ ok: boolean; id?: string; error?: string }> {
  if (!process.env.RESEND_API_KEY) {
    return { ok: false, error: 'Resend API key not configured' };
  }
  if (!from || !to) {
    return { ok: false, error: 'Missing from/to address' };
  }
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from, to, subject, html }),
  });
  if (!res.ok) {
    const err = await res.text().catch(() => 'unknown');
    console.error('Resend error', res.status, err);
    return { ok: false, error: err };
  }
  const json = await res.json().catch(() => ({}));
  return { ok: true, id: json.id || null };
}

// POST handler for contact form submissions
export async function POST(req: Request) {
  try {
    const { name, email, phone, company, industry, message, locale } =
      await req.json();
    if (!email || !message) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), {
        status: 400,
      });
    }

    // Compose subject and message
    const subject =
      locale === 'de' ? 'Neue Kontaktanfrage' : 'New contact request';
    const text = [
      `Name: ${name || '—'}`,
      `Email: ${email}`,
      `Phone: ${phone || '—'}`,
      `Company: ${company || '—'}`,
      `Industry: ${industry || '—'}`,
      '',
      'Message:',
      message,
    ].join('\n');
    const html = `<pre>${text.replace(/</g, '&lt;')}</pre>`;

    // Use Resend for email delivery
    const from = email || process.env.EMAIL_FROM;
    const to = process.env.EMAIL_TO || email;
    const result = await sendWithResend({ from, to, subject, html });

    if (!result.ok) {
      return new Response(
        JSON.stringify({ error: result.error || 'Failed to send' }),
        {
          status: 500,
        }
      );
    }

    return new Response(JSON.stringify({ ok: true, id: result.id || null }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to send' }), {
      status: 500,
    });
  }
}
