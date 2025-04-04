import { NextResponse } from "next/server";
import { getDB } from "@/lib/db";

export async function POST(req: Request) {
    try {
        const { name, feedback, rating } = await req.json();

        if (!name || !feedback || !rating) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const db = await getDB();

        await db.run(
            "INSERT INTO feedback (name, feedback, rating) VALUES (?, ?, ?)",
            name,
            feedback,
            rating
        );

        return NextResponse.json({ message: "Feedback submitted!" });
    } catch (error) {
        console.error("Error saving feedback:", error);
        return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
}
