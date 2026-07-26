import EmptyHistory from "./EmptyHistory.jsx";
import HistoryCard from "./HistoryCard.jsx";

export default function HistoryList({ history, onDeleteHistory }) {
  if (!history || history.length === 0) {
    return <EmptyHistory />;
  }

  return (
    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
      {history.map((historyItem) => (
        <HistoryCard
          key={historyItem._id}
          historyItem={historyItem}
          onDeleteHistory={onDeleteHistory}
        />
      ))}
    </div>
  );
}
