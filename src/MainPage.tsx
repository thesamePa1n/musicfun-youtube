import TracksList from "./ui/TracksList";
import TrackDetail from "./ui/TrackDetail";
import { useTrackSelection } from "./bll/useTrackSelection";

export default function MainPage() {
  const {selectedTrackId, setSelectedTrackId} = useTrackSelection()

  const handleSelectedTrackId = (id: string) => setSelectedTrackId(id);

  return (
    <div className="container">
      <div style={{ display: "flex", gap: "40px" }}>
        <TracksList
          selectedTrackId={selectedTrackId}
          onTrackSelected={handleSelectedTrackId}
        />
        <TrackDetail selectedTrackId={selectedTrackId} />
      </div>
    </div>
  );
}
