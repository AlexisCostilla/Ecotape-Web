import { pool } from '../../../ConnectionPost.js';

export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM tonners ORDER BY id_tonner");
    return new Response(
      JSON.stringify(result.rows), 
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
      JSON.stringify({ error: err.message }), 
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}