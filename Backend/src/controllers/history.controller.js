import Generation from "../models/generation.model.js";

export async function getHistory(req, res) {
  try {
    const history = await Generation.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      message: "History fetched successfully.",
      history,
    });
  } catch (err) {
    console.error("History Controller Error: ", err);
    return res.status(500).json({
      message: "Failed to fetch history",
    });
  }
}

export async function getHistoryById(req, res) {
  try {
    const generation = await Generation.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!generation) {
      return res.status(404).json({
        message: "History not found.",
      });
    }

    return res.status(200).json({
      message: "History fetched successfully.",
      generation,
    });
  } catch (err) {
    console.error("History Controller Error: ", err);
    return res.status(500).json({
      message: "Failed to fetch history.",
    });
  }
}

export async function deleteHistoryById(req, res) {
  try {
    const generation = await Generation.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!generation) {
      return res.status(404).json({
        message: "History not found.",
      });
    }

    return res.status(200).json({
      message: "History deleted successfully.",
    });
  } catch (err) {
    console.error("History Controller Error: ", err);
    return res.status(500).json({
      message: "Failed to delete history.",
    });
  }
}

export async function clearHistory(req, res) {
  try {
    const result = await Generation.deleteMany({
      user: req.user._id,
    });

    return res.status(200).json({
      message: "History cleared successfully",
      deletedCount: result.deletedCount,
    });
  } catch (err) {
    console.error("History controller error: ", err);
    return res.status(500).json({
      message: "Failed to delete history.",
    });
  }
}
