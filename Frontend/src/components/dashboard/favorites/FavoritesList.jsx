import FavoriteCard from "./FavoriteCard.jsx";

export default function FavoritesList({ favorites, onToggleFavorite }) {
  return (
    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
      {favorites.map((favorite) => (
        <FavoriteCard
          key={favorite._id}
          favorite={favorite}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
