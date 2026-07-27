import {
  clearHistory,
  deleteHistoryItem,
  getHistory,
} from "../../services/history.service.js";
import { toggleFavorite } from "../../services/favorites.service.js";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth.js";
import HistoryHeader from "../../components/dashboard/history/HistoryHeader.jsx";
import HistoryList from "../../components/dashboard/history/HistoryList.jsx";
import HistoryToolbar from "../../components/dashboard/history/HistoryToolbar.jsx";
import DashboardLayout from "../../layouts/DashboardLayout.jsx";
import EmptyHistory from "../../components/dashboard/history/EmptyHistory.jsx";
import NoResults from "../../components/dashboard/history/NoResults.jsx";

export default function History() {
  const { user } = useAuth();

  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  // Loads History
  useEffect(() => {
    const fetchHistory = async () => {
      if (!user) return;

      try {
        setLoading(true);
        const data = await getHistory(user);
        setHistory(data.history);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, [user]);

  const handleClearHistory = async () => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete all history?",
      );
      if (!confirmed) return;

      await clearHistory(user);

      setHistory([]);
      setSearchQuery("");
      setSelectedType("all");
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteHistory = async (historyId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this history item?",
    );
    if (!confirmed) return;

    try {
      await deleteHistoryItem(historyId, user);

      setHistory((prev) => prev.filter((item) => item._id !== historyId));
    } catch (err) {
      console.error(err);
    }
  };

  const handletoggleFavorite = async (id) => {
    try {
      await toggleFavorite(id, user);

      setHistory((prev) =>
        prev.map((item) =>
          item._id === id
            ? {
                ...item,
                isFavorite: !item.isFavorite,
              }
            : item,
        ),
      );

      toast.success("Favorites updated.");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update Favorite");
    }
  };

  const filteredHistory = history.filter((item) => {
    const query = searchQuery.toLowerCase();

    const matchesSearch =
      item.subject.toLowerCase().includes(query) ||
      item.topic.toLowerCase().includes(query);

    const matchesFilter =
      selectedType === "all" || item.outputType === selectedType;
    return matchesSearch && matchesFilter;
  });

  // Loading case
  if (loading) {
    return (
      <DashboardLayout title="History">
        <div className="text-slate-400">Loading History...</div>
      </DashboardLayout>
    );
  }

  // Error case
  if (error) {
    return (
      <DashboardLayout title="History">
        <div className="text-red-400">{error}</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="History">
      <div className="space-y-6">
        <HistoryHeader />
        <HistoryToolbar
          history={history}
          onClearHistory={handleClearHistory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
        {history.length === 0 ? (
          <EmptyHistory />
        ) : filteredHistory.length === 0 ? (
          <NoResults />
        ) : (
          <HistoryList
            history={filteredHistory}
            onDeleteHistory={handleDeleteHistory}
            onToggleFavorite={handletoggleFavorite}
          />
        )}
      </div>
    </DashboardLayout>
  );
}
