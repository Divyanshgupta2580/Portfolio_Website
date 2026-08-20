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

// Client-side rate limiting tracker (10 seconds cooldown)
let lastSubmissionTime = 0;
const COOLDOWN_PERIOD_MS = 10000;

export async function submitContactForm(data: ContactFormData): Promise<SubmissionResult> {
  // 1. Client-Side Field Validation
  const trimmedName = data.name.trim();
  const trimmedEmail = data.email.trim();
  const trimmedMessage = data.message.trim();

  if (!trimmedName) {
    return { success: false, message: 'Please enter your name.' };
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
    return { success: false, message: 'Please enter a valid email address.' };
  }

  if (!trimmedMessage || trimmedMessage.length < 5) {
    return { success: false, message: 'Message must be at least 5 characters long.' };
  }

  // 2. Prevent Duplicate Submissions (Rate Limiting)
  const now = Date.now();
  if (now - lastSubmissionTime < COOLDOWN_PERIOD_MS) {
    const remainingSec = Math.ceil((COOLDOWN_PERIOD_MS - (now - lastSubmissionTime)) / 1000);
    return {
      success: false,
      message: `Please wait ${remainingSec}s before submitting another message.`,
    };
  }

  // 3. Determine endpoint strategy
  // Priority 1: Custom configured URL from environment variables
  // Priority 2: Vercel Serverless /api/contact route
  // Priority 3: Formspree / Web3Forms integration if access key is provided
  const customApiUrl = import.meta.env.VITE_CONTACT_API_URL;
  const accessKey = import.meta.env.VITE_CONTACT_ACCESS_KEY;

  // If a custom Formspree or Web3Forms URL is explicitly defined:
  if (customApiUrl && customApiUrl.startsWith('http')) {
    try {
      const isFormspree = customApiUrl.includes('formspree.io');
      const payload = isFormspree
        ? {
            name: trimmedName,
            email: trimmedEmail,
            subject: data.subject?.trim() || `Inquiry: ${data.opportunityType} from ${trimmedName}`,
            opportunityType: data.opportunityType,
            message: trimmedMessage,
          }
        : {
            access_key: accessKey,
            name: trimmedName,
            email: trimmedEmail,
            subject: data.subject?.trim() || `Portfolio Contact: ${data.opportunityType} from ${trimmedName}`,
            opportunity_type: data.opportunityType,
            message: trimmedMessage,
            from_name: 'Portfolio Website',
          };

      const res = await fetch(customApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const resData = await res.json();
      if (res.ok && (resData.success || resData.ok || resData.status === 'success')) {
        lastSubmissionTime = Date.now();
        return {
          success: true,
          message: 'Your message has been sent successfully. Divyansh will get back to you shortly!',
        };
      } else {
        return {
          success: false,
          message: resData.message || resData.error || 'Submission failed. Please use the direct email button below.',
        };
      }
    } catch (err: any) {
      return {
        success: false,
        message: 'Network connection error. Please send your message directly via email.',
      };
    }
  }

  // Default: Post to Vercel Serverless Function /api/contact
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: trimmedName,
        email: trimmedEmail,
        subject: data.subject?.trim() || `Portfolio Inquiry: ${data.opportunityType} from ${trimmedName}`,
        opportunityType: data.opportunityType,
        message: trimmedMessage,
      }),
    });

    const resData = await res.json();

    if (res.ok && resData.success) {
      lastSubmissionTime = Date.now();
      return {
        success: true,
        message: resData.message || 'Your message has been sent successfully. Divyansh will get back to you shortly!',
      };
    } else {
      // If running on static dev server without Vercel backend active, or missing Resend key
      if (res.status === 404 || res.status === 500) {
        return {
          success: false,
          message: resData.message || 'Contact server endpoint is not active yet. Please configure RESEND_API_KEY in Vercel or use "Send via Email Client".',
        };
      }
      return {
        success: false,
        message: resData.message || 'Failed to deliver message. Please use direct email.',
      };
    }
  } catch (err: any) {
    // If running offline or without backend server, provide clear fallback guidance
    return {
      success: false,
      message: 'Unable to reach submission endpoint. Please use the "Send via Email Client" button.',
    };
  }
}
