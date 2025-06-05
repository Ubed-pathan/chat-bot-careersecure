import { NextRequest, NextResponse } from 'next/server';
import clientPromise from "@/lib/mongodb";
import { Message } from "@/types/message";

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export async function POST(request: NextRequest) {
  const client = await clientPromise;
  const db = client.db("chat-bot");
  const messages = db.collection<Message>("messages");

  try {
    const { text } = await request.json();

    // Get Gemini response
    const geminiRes = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text }] }]
      }),
    });
    const geminiData = await geminiRes.json();
    const geminiText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";

    // Store both user and Gemini response in one message
    const message: Message = {
      userText: text,
      geminiResponse: geminiText,
      createdAt: new Date().toISOString(),
    };
    await messages.insertOne(message);

    return NextResponse.json({ message: "Message saved", data: message }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}

export async function GET() {
  const client = await clientPromise;
  const db = client.db("chat-bot");
  const messages = db.collection<Message>("messages");

  const allMessages = await messages.find().sort({ createdAt: -1 }).toArray();
  return NextResponse.json(allMessages, { status: 200 });
}