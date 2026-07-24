import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export const generateAIContent = async (payload) => {
  try {
    const { subject, educationLevel, topic, outputType, options } = payload;

    const BASE_PROMPT = `
You are ExamAI, an expert educational AI assistant.

Generate accurate, well-structured, exam-focused study material based on the user's request.
Adapt the content depth, terminology, and complexity according to the specified education level.

Study Details:
- Subject: ${subject}
- Education Level: ${educationLevel}
- Topic: ${topic}

Additional Requirements:
${options.revisionPoints ? "- Include revision points.\n" : ""}
${options.examples ? "- Include practical examples.\n" : ""}
${options.examFocused ? "- Prioritize frequently asked exam concepts.\n" : ""}
${options.simpleLanguage ? "- Use simple, beginner-friendly language.\n" : ""}

Formatting Rules:
- Return ONLY GitHub-Flavored Markdown.
- Use headings, bullet lists, numbered lists and tables where helpful.
- Use plain Unicode symbols (→, ←, ≥, ≤, √, ×, ÷, π, Σ, etc.).
- Do NOT use HTML.
- Do NOT use LaTeX.
- Make the content clear, concise and visually organized.
- Return only the requested study material.
`;

    const OUTPUT_PROMPTS = {
      notes: `
Create comprehensive, well-organized study notes.

Structure:
- Title
- Introduction
- Key Concepts
- Definitions
- Detailed Explanations
- Examples (when applicable)
- Comparison Tables (if useful)
- Revision Points
- Exam Tips
- Short Conclusion
`,

      flashcards: `
Create 10 flashcards.

Each flashcard must test ONLY ONE concept.

Format:

### Flashcard 1

**Question**
...

**Answer**
...

Rules:
- One question per flashcard.
- Keep answers concise (1–5 bullet points or 1–3 short sentences).
- If comparison is necessary, use a small Markdown table.
- Focus on important exam concepts.
- Avoid combining multiple topics into one flashcard.
- Return only GitHub-Flavored Markdown.
`,

      mcqs: `
Create 15 multiple-choice questions.

Each question must include:
- Four options (A-D)
- Correct answer
- One-line explanation
- Avoid ambiguous questions.
- Cover different difficulty levels.
- Do not repeat concepts.
`,

      "question-paper": `
Generate a university-style question paper.

Include:
- Section A (2 marks)
- Section B (5 marks)
- Section C (10 marks)

Include marks for every question.
Requirements:
- Mix easy, medium and difficult questions.
- Avoid duplicate concepts.
- Follow the given education level.
- Include marks for every question.
`,

      summary: `
Generate a concise revision summary.

Include:
- Topic overview
- Key concepts
- Important definitions
- Important formulas (if applicable)
- Memory tricks (if applicable)
- Exam-focused points
- Key takeaways

Optimize for quick revision before exams.
`,

      "mind-map": `
Generate a hierarchical study mind map for the given topic.

Requirements:
- Return ONLY GitHub-Flavored Markdown.
- Represent the mind map using nested bullet lists.
- Start with the main topic as the root.
- Organize concepts from general → specific.
- Each node should contain only a short keyword or phrase.
- Do NOT explain concepts.
- Do NOT write paragraphs.
- Do NOT include detailed notes or descriptions.
- Do NOT include tables.
- Do NOT include code blocks.
- Do NOT include formulas unless absolutely necessary.
- Keep each node under 8 words whenever possible.
- Make the hierarchy clear and easy to scan.
- Maximum depth: 4 levels.
`,
    };

    const prompt = `
    ${BASE_PROMPT}

    ${OUTPUT_PROMPTS[outputType]}
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
