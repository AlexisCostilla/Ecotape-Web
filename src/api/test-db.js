import { pool } from '../../../ConnectionPost.js';

export async function GET() {
  try {
    const result = await pool.query("SELECT NOW()");
    return new Response(
      JSON.stringify({ ok: true, now: result.rows[0].now }), 
      {
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: err.message }), 
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}