import express from "express";
import cors from "cors";
import { pool } from "./ConnectionPost.js";

const app = express();

// habilitar CORS
app.use(cors());
// conecto con la base de datos y hago una consulta de prueba
app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ ok: true, now: result.rows[0].now });
  } catch (err) {
    res.json({ ok: false, error: err.message });
  }
});

app.get("/productos", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tonners");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));
