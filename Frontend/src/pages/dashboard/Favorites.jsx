import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import FavoritesHeader from "../../components/dashboard/favorites/FavoritesHeader";
import FavoritesToolbar from "../../components/dashboard/favorites/FavoritesToolbar";
import DashboardLayout from "../../layouts/DashboardLayout";
import EmptyFavorites from "../../components/dashboard/favorites/EmptyFavorites";
import NoResults from "../../components/dashboard/history/NoResults.jsx";
import FavoritesList from "../../components/dashboard/favorites/FavoritesList";
import useAuth from "../../hooks/useAuth";
import { getFavorites, toggleFavorite } from "../../services/favorites.service";

export default function Favorites() {
  const { user } = useAuth();

  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user) return;
      try {
        setLoading(true);
        const data = await getFavorites(user);

        setFavorites(data.favorites);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFavorites();
  }, [user]);

  const filteredFavorites = favorites.filter((item) => {
    const query = searchQuery.toLowerCase();

    const searchMatched =
      item.subject.toLowerCase().includes(query) ||
      item.topic.toLowerCase().includes(query);

    const filterMatched =
      selectedType === "all" || item.outputType === selectedType;

    return searchMatched && filterMatched;
  });

  const handleToggleFavorite = async (generationId) => {
    try {
      await toggleFavorite(generationId, user);

      setFavorites((prev) => prev.filter((item) => item._id !== generationId));
      toast.success("Removed from favorites.");
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to update favorite.");
    }
  };

  if (loading) {
    return (
      <DashboardLayout title="Favorites">
        <div className="text-slate-400">Loading Favorites...</div>
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout title="Favorites">
        <div className="text-red-400">{error}</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Favorites">
      <div className="space-y-6">
        <FavoritesHeader />
        <FavoritesToolbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
        {favorites.length === 0 ? (
          <EmptyFavorites />
        ) : filteredFavorites.length === 0 ? (
          <NoResults />
        ) : (
          <FavoritesList
            favorites={filteredFavorites}
            onToggleFavorite={handleToggleFavorite}
          />
        )}
      </div>
    </DashboardLayout>
  );
}
