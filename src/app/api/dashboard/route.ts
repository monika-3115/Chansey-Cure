import { NextResponse } from "next/server";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

// Open SQLite database
async function openDB() {
  return open({
    filename: "python_files/medical.db",
    driver: sqlite3.Database,
  });
}

export async function GET() {
  try {
    const db = await openDB();

    const { count } = await db.get("SELECT COUNT(*) as count FROM users WHERE is_logged_in = 1");

    const conversations = await db.all("SELECT * FROM conversations ORDER BY timestamp DESC LIMIT 10");

    const feedbacks = await db.all("SELECT * FROM feedback ORDER BY created_at DESC LIMIT 10");

    return NextResponse.json({
      loggedInUsers: count,
      conversations,
      feedbacks,
    });
  } catch (error: any) {
    console.error("🔥 Dashboard API error:", error); // <- log the exact error
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

