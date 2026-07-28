import Generation from "../models/generation.model.js";

export async function getDashboardStats(req, res) {
  try {
    const userId = req.user._id;

    const [notes, questionPapers, flashcards] = await Promise.all([
      Generation.countDocuments({
        user: userId,
        outputType: "notes",
      }),
      Generation.countDocuments({
        user: userId,
        outputType: "question-paper",
      }),
      Generation.countDocuments({
        user: userId,
        outputType: "flashcards",
      }),
    ]);

    return res.status(200).json({
      success: true,
      stats: {
        notes,
        questionPapers,
        flashcards,
        studyStreak: 0,
      },
    });
  } catch (err) {
    console.error("Get dashboard stats error.", err);
    return res.status(500).json({
      success: false,
      message: "failed to fetch dashboard stats",
    });
  }
}

export async function getRecentActivity(req, res) {
  try {
    const activities = await Generation.find({
      user: req.user._id,
    })
      .select("subject topic outputType createdAt")
      .sort({ createdAt: -1 })
      .limit(5);

    return res.status(200).json({
      success: true,
      activities,
    });
  } catch (err) {
    console.error("Get recent activity error:", err);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch recent activity.",
    });
  }
}
