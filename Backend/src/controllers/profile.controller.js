import User from "../models/user.model.js";

export async function getProfile(req, res) {
  try {
    return res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (err) {
    console.log("Get profile error: ", err);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch profile.",
    });
  }
}

export async function updateProfile(req, res) {
  try {
    const { displayName, bio } = req.body;
    const updates = {};
    if (displayName !== undefined) updates.displayName = displayName;
    if (bio !== undefined) updates.bio = bio;

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No fields provided to update.",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(req.user._id, updates, {
      new: true,
      runValidators: true,
    });

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully.",
      user: updatedUser,
    });
  } catch (err) {
    console.log("Update profile error: ", err);
    return res.status(500).json({
      success: false,
      message: "Failed to update profile.",
    });
  }
}
