const VALID_OUTPUT_TYPES = [
  "notes",
  "flashcards",
  "mcqs",
  "question-paper",
  "summary",
  "mind-map",
];

const VALID_EDUCATION_LEVELS = [
  "School",
  "Intermediate",
  "Diploma",
  "Undergraduate",
  "Postgraduate",
  "Competitive Exam",
  "Professional Certification",
  "Other",
];

export default function validGenerateRequest(data) {
  const { subject, topic, educationLevel, outputType, options = {} } = data;

  if (typeof subject !== "string" || !subject.trim()) {
    return { valid: false, message: "Subject is required." };
  }

  if (typeof subject !== "string" || !topic.trim()) {
    return { valid: false, message: "Topic is required." };
  }

  if (!VALID_OUTPUT_TYPES.includes(outputType)) {
    return { valid: false, message: "Invalid output type." };
  }
  if (!VALID_EDUCATION_LEVELS.includes(educationLevel)) {
    return { valid: false, message: "Invalid education level." };
  }
  if (typeof options !== "object" || Array.isArray(options)) {
    return { valid: false, message: "Options must be an object." };
  }

  return {
    valid: true,
    data: {
      subject: subject.trim(),
      topic: topic.trim(),
      educationLevel,
      outputType,
      options,
    },
  };
}
