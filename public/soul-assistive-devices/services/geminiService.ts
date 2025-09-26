
import { GoogleGenAI, Type } from "@google/genai";
import { products } from '../constants';

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY as string });

export const findMatchingProducts = async (userNeed: string): Promise<number[]> => {
  if (!userNeed.trim()) {
    return [];
  }

  const productInfoForPrompt = products.map(p => ({
    id: p.id,
    name: p.name,
    description: p.description,
    category: p.category,
  }));

  const systemInstruction = `You are an expert in assistive technology. A user is describing their needs. Based on their description, recommend the most suitable products from the provided list. Your goal is to find products that directly address the user's stated problem. Return your answer as a JSON array of product IDs ONLY. Do not include any other text or explanation. The user's need is: "${userNeed}".`;

  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Available products: ${JSON.stringify(productInfoForPrompt)}`,
        config: {
          systemInstruction: systemInstruction,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
                product_ids: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.NUMBER,
                    },
                },
            },
          },
        },
      });

    const jsonStr = response.text.trim();
    const result = JSON.parse(jsonStr);
    
    if (result && Array.isArray(result.product_ids)) {
      return result.product_ids as number[];
    }
    
    return [];

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    // In case of error, return an empty array or handle it as needed.
    return [];
  }
};
