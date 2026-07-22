import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export const generateAIContent = async (payload) => {
  try {
    const { subject, educationLevel, topic, outputType, options } = payload;

    const prompt = `
                    You are an expert educational AI assistant.

                    Generate ${outputType} for the following study request.

                    Subject: ${subject}
                    Education Level: ${educationLevel}
                    Topic: ${topic}

                    Requirements:
                    ${options.revisionPoints ? "- Include revision points\n" : ""}
                    ${options.examples ? "- Include practical examples\n" : ""}
                    ${options.examFocused ? "- Focus on exam preparation\n" : ""}
                    ${options.simpleLanguage ? "- Use simple and easy-to-understand language\n" : ""}

                    Return only the generated study material.
                    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    const generatedText = response.text;

    return generatedText;
  } catch (err) {
    console.log("AI Generation Error: ", err);
    throw err;
  }
};
