import { Pool } from 'pg';
import nodemailer from 'nodemailer';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Configure nodemailer with Gmail
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, service, message } = req.body;

  try {
    // Save to database (table: contact_submissions)
    const result = await pool.query(
      `INSERT INTO contact_submissions (name, email, phone, service, message, created_at)
       VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING id`,
      [name, email, phone, service, message]
    );

    // Send email notification
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      id: result.rows[0].id,
      message: 'Your message has been received. We will get back to you shortly.'
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
}
