export async function getSettings(req, res) {
  try {
    return res.status(200).json({
      success: true,
      settings: req.user.settings,
    });
  } catch (err) {
    console.error("Get settings error: ", err);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch settings",
    });
  }
}

export async function updateSettings(req, res) {
  try {
    const { outputLanguage, noteStyle, emailNotifications } = req.body;

    if (
      outputLanguage === undefined &&
      noteStyle === undefined &&
      emailNotifications === undefined
    ) {
      return res.status(400).json({
        success: false,
        message: "No settings provided to update.",
      });
    }

    if (outputLanguage !== undefined)
      req.user.settings.outputLanguage = outputLanguage;

    if (noteStyle !== undefined) req.user.settings.noteStyle = noteStyle;

    if (emailNotifications !== undefined)
      req.user.settings.emailNotifications = emailNotifications;

    await req.user.save();

    return res.status(200).json({
      success: true,
      message: "Settings updated successfully.",
      settings: req.user.settings,
    });
  } catch (err) {
    console.error("Update settings error: ", err);
    return res.status(500).json({
      success: false,
      message: "Failed to update settings",
    });
  }
}
