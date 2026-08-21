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

// Client-side rate limiting tracker (8 seconds cooldown)
let lastSubmissionTime = 0;
const COOLDOWN_PERIOD_MS = 8000;

export async function submitContactForm(data: ContactFormData): Promise<SubmissionResult> {
  // 1. Client-Side Field Validation
  const trimmedName = (data.name || '').trim();
  const trimmedEmail = (data.email || '').trim();
  const trimmedOpportunity = (data.opportunityType || '').trim();
  const trimmedMessage = (data.message || '').trim();

  if (!trimmedName) {
    return { success: false, message: 'Please enter your name.' };
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
    return { success: false, message: 'Please enter a valid email address.' };
  }

  if (!trimmedOpportunity) {
    return { success: false, message: 'Please select an opportunity type.' };
  }

  if (!trimmedMessage || trimmedMessage.length < 5) {
    return { success: false, message: 'Message details must be at least 5 characters long.' };
  }

  // 2. Prevent Duplicate Submissions (Rate Limiting)
  const now = Date.now();
  if (now - lastSubmissionTime < COOLDOWN_PERIOD_MS) {
    const remainingSec = Math.ceil((COOLDOWN_PERIOD_MS - (now - lastSubmissionTime)) / 1000);
    return {
      success: false,
      message: `Please wait ${remainingSec}s before submitting another inquiry.`,
    };
  }

  // 3. Determine endpoint strategy
  // Priority 1: Custom configured URL from environment variables
  // Priority 2: Vercel Serverless / Local Vite middleware /api/contact route
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
            subject: data.subject?.trim() || `Inquiry: ${trimmedOpportunity} from ${trimmedName}`,
            opportunityType: trimmedOpportunity,
            message: trimmedMessage,
          }
        : {
            access_key: accessKey,
            name: trimmedName,
            email: trimmedEmail,
            subject: data.subject?.trim() || `Portfolio Contact: ${trimmedOpportunity} from ${trimmedName}`,
            opportunity_type: trimmedOpportunity,
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
          message: resData.message || resData.error || 'Submission failed. Please use direct email to reach Divyansh.',
        };
      }
    } catch (err: any) {
      return {
        success: false,
        message: 'Network connection error. Please use direct email to reach Divyansh.',
      };
    }
  }

  // Default: Post to Server /api/contact
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
        subject: data.subject?.trim() || `Inquiry: ${trimmedOpportunity} from ${trimmedName}`,
        opportunityType: trimmedOpportunity,
        message: trimmedMessage,
      }),
    });

    let resData: any = {};
    try {
      resData = await res.json();
    } catch {
      resData = { message: 'Server response could not be parsed as JSON.' };
    }

    if (res.ok && resData.success) {
      lastSubmissionTime = Date.now();
      return {
        success: true,
        message: resData.message || 'Your inquiry has been delivered successfully! Divyansh will get back to you shortly.',
      };
    } else {
      return {
        success: false,
        message: resData.message || `Delivery failed with status ${res.status}. Please use direct email.`,
      };
    }
  } catch (err: any) {
    return {
      success: false,
      message: 'Unable to connect to the message server. Please send your inquiry directly to inbox.DivyanshGupta1@protonmail.com.',
    };
  }
}
