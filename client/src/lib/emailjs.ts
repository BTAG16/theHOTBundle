import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_b4zeiyc'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'template_u98byua'; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = '_M3hg2PkqSTfJRQ5Q'; // Replace with your EmailJS public key

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      to_email: 'thehotbundle@gmail.com', // Your business email
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Email sent successfully:', response);
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error('Failed to send email. Please try again.');
  }
};

export default emailjs;
