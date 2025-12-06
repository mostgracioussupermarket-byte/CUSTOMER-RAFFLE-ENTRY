import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateLuckyMessage = async (name: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `Write a short, exciting, and personalized 'Good Luck' message for ${name} who just entered a supermarket raffle to win a Refrigerator, Fan, or Blender. Keep it under 15 words. Be encouraging and festive.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text.trim();
  } catch (error) {
    console.error("Error generating message:", error);
    return `Wishing you the best of luck, ${name}!`;
  }
};
