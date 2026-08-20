export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  opportunityType: string;
  message: string;
}

export interface SubmissionResult {
  success: boolean;
  message: string;
}

// In-memory submission timestamp tracker for client-side rate limiting
let lastSubmissionTime = 0;
const COOLDOWN_PERIOD_MS = 10000; // 10 seconds cooldown between submissions

export async function submitContactForm(data: ContactFormData): Promise<SubmissionResult> {
  // 1. Client-Side Field Validation
  if (!data.name.trim()) {
    return { success: false, message: 'Please enter your name.' };
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim() || !emailRegex.test(data.email)) {
    return { success: false, message: 'Please enter a valid email address.' };
  }

  if (!data.message.trim() || data.message.trim().length < 5) {
    return { success: false, message: 'Message must be at least 5 characters long.' };
  }

  // 2. Prevent Duplicate Submissions (Rate Limiting)
  const now = Date.now();
  if (now - lastSubmissionTime < COOLDOWN_PERIOD_MS) {
    const remainingSec = Math.ceil((COOLDOWN_PERIOD_MS - (now - lastSubmissionTime)) / 1000);
    return {
      success: false,
      message: `Please wait ${remainingSec} seconds before sending another message.`,
    };
  }

  // 3. Environment Variable Retrieval
  const apiUrl = import.meta.env.VITE_CONTACT_API_URL || 'https://api.web3forms.com/submit';
  const accessKey = import.meta.env.VITE_CONTACT_ACCESS_KEY;

  // 4. Verification of Endpoint Setup
  if (!accessKey || accessKey === 'your_access_key_here') {
    return {
      success: false,
      message: 'Contact form endpoint key is unconfigured in .env. Please configure VITE_CONTACT_ACCESS_KEY or use "Send via Email Client".',
    };
  }

  try {
    const payload = {
      access_key: accessKey,
      name: data.name.trim(),
      email: data.email.trim(),
      subject: data.subject?.trim() || `Portfolio Contact: ${data.opportunityType} from ${data.name}`,
      opportunity_type: data.opportunityType,
      message: data.message.trim(),
      from_name: 'Portfolio Contact Form',
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (response.ok && (result.success || result.status === 'success' || result.ok)) {
      lastSubmissionTime = Date.now();
      return {
        success: true,
        message: 'Your message has been sent successfully. Divyansh will get back to you shortly!',
      };
    } else {
      return {
        success: false,
        message: result.message || 'Failed to deliver message. Please try sending via your email client.',
      };
    }
  } catch (err: any) {
    return {
      success: false,
      message: 'Network error submitting form. Please use the direct email button below.',
    };
  }
}
