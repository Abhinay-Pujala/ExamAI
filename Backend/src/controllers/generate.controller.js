import validGenerateRequest from "../validators/generate.validator.js";
import buildPrompt from "../utils/PromptBuilder.js";
import generateContent from "../services/ai.service.js";
import Generation from "../models/generation.model.js";

export async function generateStudyMaterial(req, res) {
  try {
    const validation = validGenerateRequest(req.body);

    if (!validation.valid) {
      return res.status(400).json({
        message: validation.message,
      });
    }

    const prompt = buildPrompt(validation.data, req.user.settings);

    const content = await generateContent(prompt);

    const generation = await Generation.create({
      user: req.user._id,
      subject: validation.data.subject,
      educationLevel: validation.data.educationLevel,
      topic: validation.data.topic,
      outputType: validation.data.outputType,
      options: validation.data.options,
      generatedContent: content,
    });

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
