import { NextResponse } from "next/server";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function openDB() {
  return open({
    filename: "python_files/medical.db",
    driver: sqlite3.Database,
  });
}

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    const response = await fetch("http://127.0.0.1:8000/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    if (!response.ok) throw new Error("Failed to fetch chatbot response");

    const data = await response.json();
    const botReply = data.answer;

    // Store conversation in SQLite
    const db = await openDB();
    await db.run(
      "INSERT INTO conversations (user_input, bot_response) VALUES (?, ?)",
      [question, botReply]
    );

    return NextResponse.json({ reply: botReply });

  } catch (error: unknown) {  
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
    }
  }
}
