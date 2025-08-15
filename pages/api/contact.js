const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
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
    return res.status(200).json({
      success: true,
      id: result.rows[0].id,
      message: 'Your message has been received. We will get back to you shortly.'
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
