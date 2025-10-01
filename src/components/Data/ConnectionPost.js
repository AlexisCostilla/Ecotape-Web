import pg from "pg";

export const pool = new pg.Pool({
  host: "localhost",
  port: 5432,
  database: "BD_Ecotape",
  user: "postgres",
  password: "AlExIS.2004.S",
});
