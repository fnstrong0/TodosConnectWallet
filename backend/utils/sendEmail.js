const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // Skip email if not configured
  if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('⚠️  Email not configured. Skipping email send.');
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const message = {
      from: `${process.env.EMAIL_FROM || 'noreply@myself.com'}`,
      to: options.email,
      subject: options.subject,
      text: options.message,
      html: options.html || options.message
    };

    await transporter.sendMail(message);
    console.log(`✅ Email sent to ${options.email}`);
  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    // Don't throw - allow the app to continue even if email fails
  }
};

module.exports = sendEmail;
