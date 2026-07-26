import Generation from "../models/generation.model.js";

export async function getFavorites(req, res) {
  try {
    const favorites = await Generation.find({
      user: req.user._id,
      isFavorite: true,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      message: "Favorites fetched successfully.",
      count: favorites.length,
      favorites,
    });
  } catch (err) {
    console.error("Favorites Controller error: ", err);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch favorites.",
    });
  }
}

export async function toggleFavorite(req, res) {
  try {
    const { generationId } = req.params;

    const generation = await Generation.findOne({
      _id: generationId,
      user: req.user._id,
    });

    if (!generation) {
      return res.status(404).json({
        success: false,
        message: "Generation not found.",
      });
    }

    generation.isFavorite = !generation.isFavorite;

    await generation.save();

    return res.status(200).json({
      success: true,
      message: generation.isFavorite
        ? "Added to Favorites."
        : "Removed from Favorites.",
      isFavorite: generation.isFavorite,
    });
  } catch (err) {
    console.error("Favorites controller error: ", err);
    return res.status(500).json({
      success: false,
      message: "Failed to update favorite status.",
    });
  }
}
