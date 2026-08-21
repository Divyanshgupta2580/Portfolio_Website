function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req: any, res: any) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  // Handle parsed body or parse string if necessary
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ success: false, message: 'Malformed JSON payload.' });
    }
  }

  const { name, email, subject, opportunityType, message } = body || {};

  // 1. Validation
  const trimmedName = typeof name === 'string' ? name.trim() : '';
  const trimmedEmail = typeof email === 'string' ? email.trim() : '';
  const trimmedSubject = typeof subject === 'string' ? subject.trim() : '';
  const trimmedOpportunity = typeof opportunityType === 'string' ? opportunityType.trim() : 'General';
  const trimmedMessage = typeof message === 'string' ? message.trim() : '';

  if (!trimmedName) {
    return res.status(400).json({
      success: false,
      message: 'Name is required.',
    });
  }

  if (!trimmedEmail) {
    return res.status(400).json({
      success: false,
      message: 'Email address is required.',
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail) || trimmedEmail.length > 254) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address format (e.g. name@domain.com).',
    });
  }

  if (!trimmedMessage || trimmedMessage.length < 5) {
    return res.status(400).json({
      success: false,
      message: 'Message details must be at least 5 characters long.',
    });
  }

  if (trimmedMessage.length > 5000) {
    return res.status(400).json({
      success: false,
      message: 'Message exceeds maximum length of 5000 characters.',
    });
  }

  // 2. Server Environment Variables
  const resendApiKey = (process.env.RESEND_API_KEY || '').trim();
  const toEmail = (process.env.CONTACT_TO_EMAIL || 'inbox.divyanshgupta1@protonmail.com').trim().toLowerCase();
  const fromEmail = (process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>').trim();

  if (!resendApiKey) {
    return res.status(500).json({
      success: false,
      message: 'Email delivery service is not configured on the server. Please contact Divyansh directly via inbox.DivyanshGupta1@protonmail.com.',
    });
  }

  // 3. Sanitized HTML Email Template
  const safeName = escapeHtml(trimmedName);
  const safeEmail = escapeHtml(trimmedEmail);
  const safeSubject = escapeHtml(trimmedSubject || `Portfolio Inquiry: ${trimmedOpportunity} from ${trimmedName}`);
  const safeOpportunity = escapeHtml(trimmedOpportunity);
  const safeMessage = escapeHtml(trimmedMessage);

  try {
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
        'User-Agent': 'Portfolio-Contact-Service/1.0',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: trimmedEmail,
        subject: safeSubject,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; color: #1e293b; line-height: 1.6;">
            <div style="border-bottom: 2px solid #00f2fe; padding-bottom: 14px; margin-bottom: 18px;">
              <h2 style="margin: 0; color: #0f172a; font-size: 20px; font-weight: 700;">New Portfolio Inquiry Received</h2>
              <p style="margin: 4px 0 0 0; font-size: 13px; color: #64748b;">Direct message from portfolio contact form</p>
            </div>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 18px; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; width: 140px;"><strong>Sender Name:</strong></td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Sender Email:</strong></td>
                <td style="padding: 8px 0; color: #0284c7;"><a href="mailto:${safeEmail}" style="color: #0284c7; text-decoration: none;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Opportunity Type:</strong></td>
                <td style="padding: 8px 0; color: #0f172a;"><span style="background: #f1f5f9; padding: 3px 10px; border-radius: 6px; font-size: 13px; font-weight: 600;">${safeOpportunity}</span></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Subject:</strong></td>
                <td style="padding: 8px 0; color: #0f172a;">${safeSubject}</td>
              </tr>
            </table>
            <div style="background-color: #f8fafc; border-left: 4px solid #00f2fe; padding: 16px; margin: 18px 0; border-radius: 6px;">
              <h4 style="margin: 0 0 8px 0; color: #334155; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700;">Project / Role Details:</h4>
              <p style="white-space: pre-wrap; margin: 0; color: #1e293b; font-size: 14px; line-height: 1.65;">${safeMessage}</p>
            </div>
            <p style="font-size: 12px; color: #94a3b8; margin-top: 24px; border-top: 1px solid #f1f5f9; padding-top: 14px;">
              Sent to ${toEmail} via Divyansh Gupta's Portfolio. Hit 'Reply' to respond directly to ${safeEmail}.
            </p>
          </div>
        `,
      }),
    });

    const data: any = await emailResponse.json();

    if (emailResponse.ok) {
      return res.status(200).json({
        success: true,
        message: 'Your inquiry has been delivered successfully! Divyansh will get back to you shortly.',
        id: data?.id,
      });
    } else {
      console.error('[Resend API Error]:', data);
      return res.status(emailResponse.status || 500).json({
        success: false,
        message: data?.message || 'Email delivery provider error. Please contact Divyansh directly via inbox.DivyanshGupta1@protonmail.com.',
      });
    }
  } catch (error: any) {
    console.error('[Contact Handler Exception]:', error);
    return res.status(502).json({
      success: false,
      message: error?.message 
        ? `Communication error with email service (${error.message}). Please reach out directly to inbox.DivyanshGupta1@protonmail.com.`
        : 'Communication error with email delivery service. Please use the direct email button below.',
    });
  }
}
