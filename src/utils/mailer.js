import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export async function sendEmail(to, subject, html) {
  await transporter.sendMail({
    from: '"Sistema Gestor" <no-reply@gestor.com>',
    to,
    subject,
    html,
  });
}
