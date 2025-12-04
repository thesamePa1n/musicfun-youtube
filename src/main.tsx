import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TracksList from "./ui/TracksList";
import TrackDetail from "./ui/TrackDetail";

// eslint-disable-next-line react-refresh/only-export-components
function MainPage() {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);

  const handleSelectedTrackId = (id: string) => setSelectedTrackId(id)

  return (
    <div className="container">
      <div style={{ display: "flex", gap: "40px" }}>
        <TracksList
          selectedTrackId={selectedTrackId}
          onTrackSelected={handleSelectedTrackId}
        />
        <TrackDetail
          selectedTrackId={selectedTrackId}
        />
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>
);
