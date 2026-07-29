import mongoose from "mongoose";

// Define user schema to store user information coming from the firebase authentication
const userSchema = new mongoose.Schema(
  {
    firebaseUid: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    displayName: {
      type: String,
      trim: true,
    },
    photoURL: {
      type: String,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    bio: {
      type: String,
      trim: true,
      maxlength: 300,
      default: "",
    },
    settings: {
      outputLanguage: {
        type: String,
        enum: ["English", "Telugu", "Hindi"],
        default: "English",
      },
      noteStyle: {
        type: String,
        enum: ["Detailed", "Concise", "Bullet Points", "Revision Notes"],
        default: "Detailed",
      },
      emailNotifications: {
        type: Boolean,
        default: true,
      },
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);

export default User;
