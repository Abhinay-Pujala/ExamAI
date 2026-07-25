import mongoose from "mongoose";

const generationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    educationLevel: {
      type: String,
      required: true,
      trim: true,
    },
    topic: {
      type: String,
      required: true,
      trim: true,
    },
    outputType: {
      type: String,
      required: true,
      enum: [
        "notes",
        "flashcards",
        "mcqs",
        "mind-map",
        "summary",
        "question-paper",
      ],
    },

    options: {
      revisionPoints: {
        type: Boolean,
        default: false,
      },
      examples: {
        type: Boolean,
        default: false,
      },
      examFocused: {
        type: Boolean,
        default: false,
      },
      simpleLanguage: {
        type: Boolean,
        default: false,
      },
    },
    generatedContent: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Generation = mongoose.model("Generation", generationSchema);

export default Generation;
