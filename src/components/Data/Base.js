import pg from 'pg';
const { Pool } = pg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_K74BAteuwJkh@ep-solitary-flower-acaeb78f-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  ssl: {
    rejectUnauthorized: false
  }
});

// Probar la conexión al iniciar
pool.connect((err, client, release) => {
  if (err) {
    return console.error('❌ Error al conectar con Neon:', err.stack);
  }
  console.log('✅ Conectado exitosamente a Neon');
  release();
});