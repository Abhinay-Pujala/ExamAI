import Generation from "../models/generation.model.js";

export async function getGeneration(req, res) {
  try {
    const generation = await Generation.findOne({
      user: req.user._id,
      _id: req.params.id,
    });

    if (!generation) {
      return res.status(404).json({
        success: false,
        message: "Generation not found.",
      });
    }
    return res.status(200).json({
      success: true,
      generation,
    });
  } catch (err) {
    console.error("Get Generation Controller Error:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch generation",
    });
  }
}
