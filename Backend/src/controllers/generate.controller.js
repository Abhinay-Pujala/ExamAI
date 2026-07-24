import validGenerateRequest from "../validators/generate.validator.js";
import buildPrompt from "../utils/PromptBuilder.js";
import generateContent from "../services/ai.service.js";

export async function generateStudyMaterial(req, res) {
  try {
    const validation = validGenerateRequest(req.body);

    if (!validation.valid) {
      return res.status(400).json({
        message: validation.message,
      });
    }

    const prompt = buildPrompt(validation.data);

    const content = await generateContent(prompt);

    return res.status(200).json({
      message: "Study material generated successfully",
      content,
    });
  } catch (err) {
    console.log("Generate Controller error", err);

    return res.status(500).json({
      message: "Failed to generate study material.",
    });
  }
}
