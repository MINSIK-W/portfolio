import nodemailer from 'nodemailer';
import process from 'process';

export type EmailData = {
  from: string;
  subject: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for port , false for other ports
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

export async function sendMail(data: EmailData) {
  const mailData = {
    to: process.env.AUTH_USER,
    subject: `[project] ${data.subject}`,
    from: data.from,
    html: `
    <h1>${data.subject}</h1>
    <div>${data.message}</div>
    <br/>
    <p>보낸사람 : ${data.from}</p>
    `,
  };
  return transporter.sendMail(mailData);
}
