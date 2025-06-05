export interface Message {
  _id?: string;
  userText: string;         // User's input
  geminiResponse: string;   // Gemini's reply
  createdAt: string;        // Timestamp
}