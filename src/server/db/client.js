const { Client } = require("pg");
const connectionString =
  process.env.DATABASE_URL || "postgresql://gsaccoi:password@localhost:5432/block37a?schema=public";

const db = new Client({
  connectionString,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : undefined,
});

module.exports = db;
