export function formatGenerationType(type) {
  const typeMap = {
    notes: "Notes",
    mcqs: "MCQs",
    summary: "Summary",
    flashcards: "Flashcards",
    "question-paper": "Question Paper",
    "mind-map": "Mind Map",
  };

  return typeMap[type] || type;
}

export function getGenerationBadgeColor(type) {
  const badgeColors = {
    notes: "bg-indigo-500/10 text-indigo-400",
    summary: "bg-sky-500/10 text-sky-400",
    flashcards: "bg-emerald-500/10 text-emerald-400",
    mcqs: "bg-amber-500/10 text-amber-400",
    "question-paper": "bg-rose-500/10 text-rose-400",
    "mind-map": "bg-purple-500/10 text-purple-400",
  };

  return badgeColors[type] || "bg-slate-500/10 text-slate-400";
}

export function formatRelativeTime(dateString) {
  const now = new Date();
  const created = new Date(dateString);

  if (Number.isNaN(created.getTime())) {
    return "Unknown";
  }

  const diffInSeconds = Math.floor((now - created) / 1000);

  if (diffInSeconds < 60) {
    return "Just now";
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);

  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes === 1 ? "" : "s"} ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);

  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays === 1 ? "" : "s"} ago`;
  }

  const diffInWeeks = Math.floor(diffInDays / 7);

  if (diffInWeeks < 5) {
    return `${diffInWeeks} week${diffInWeeks === 1 ? "" : "s"} ago`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);

  if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths === 1 ? "" : "s"} ago`;
  }

  const diffInYears = Math.floor(diffInDays / 365);

  return `${diffInYears} year${diffInYears === 1 ? "" : "s"} ago`;
}
