import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useReactToPrint } from "react-to-print";
import PrintableNotes from "../components/print/PrintableNotes.jsx";

import DashboardLayout from "../layouts/DashboardLayout.jsx";
import useAuth from "../hooks/useAuth.js";
import { toggleFavorite } from "../services/favorites.service.js";
import { getGeneration } from "../services/generation.service.js";
import GenerationHeader from "../components/generation/GenerationHeader.jsx";
import GenerationActions from "../components/generation/GenerationActions.jsx";
import GenerationContent from "../components/generation/GenerationContent.jsx";

export default function GenerationDetails() {
  const { id } = useParams();
  const { user } = useAuth();

  const [generation, setGeneration] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGeneration = async () => {
      if (!user) return;

      try {
        setLoading(true);

        const data = await getGeneration(id, user);

        setGeneration(data.generation);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGeneration();
  }, [id, user]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generation.generatedContent);
      toast.success("Copied to clipboard!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to copy!");
    }
  };
  const handleToggleFavorite = async () => {
    try {
      const wasFavorite = generation.isFavorite;
      await toggleFavorite(generation._id, user);

      setGeneration((prev) => ({
        ...prev,
        isFavorite: !prev.isFavorite,
      }));

      toast.success(
        wasFavorite ? "Removed from favorites." : "Added to favorites.",
      );
    } catch (err) {
      console.error(err);
      toast.error("Failed to update favorite.");
    }
  };

  const printRef = useRef(null);
  const handleDownload = useReactToPrint({
    contentRef: printRef,
    documentTitle: generation
      ? `${generation.subject}_${generation.topic}_ExamAI`
      : "ExamAI_Generation",
  });

  if (loading) {
    return (
      <DashboardLayout title="Generation">
        <div>Loading...</div>
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout title="Generation">
        <div>{error}</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Generation">
      {generation && (
        <div className="space-y-6">
          <GenerationHeader generation={generation} />
          <GenerationActions
            isFavorite={generation.isFavorite}
            onToggleFavorite={handleToggleFavorite}
            onCopy={handleCopy}
            onDownload={handleDownload}
          />
          <GenerationContent content={generation.generatedContent} />
        </div>
      )}
      {/* Hidden div for download */}
      {generation && (
        <div
          style={{
            position: "absolute",
            left: "-99999px",
            top: 0,
          }}
        >
          <div ref={printRef}>
            <PrintableNotes
              subject={generation.subject}
              topic={generation.topic}
              educationLevel={generation.educationLevel}
              content={generation.generatedContent}
              generatedAt={generation.createdAt}
            />
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
