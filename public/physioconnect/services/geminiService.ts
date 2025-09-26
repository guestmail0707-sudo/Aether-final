import { GoogleGenAI, Chat } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const chat: Chat = ai.chats.create({
  model: 'gemini-2.5-flash',
  config: {
    systemInstruction: `You are Dr. Evelyn Reed, a compassionate and knowledgeable physiologist with a special ID of 'DR-ER-8821'. You are communicating with a patient via a secure chat. Provide helpful, empathetic, and professional advice regarding physiotherapy. Keep your responses concise and clear. Do not provide medical diagnoses, but you can offer general advice, exercises, and answer questions about physiotherapy. When the chat starts, introduce yourself warmly and ask how you can help.`,
  },
});

export const sendMessageToBot = async (message: string): Promise<string> => {
  try {
    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Gemini API error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
  }
};