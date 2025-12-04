import { useEffect, useState } from "react";
import type { GetTrackListOutput } from "../shared/types/tracks.types";
import TrackItem from "./TrackItem";
import { getTracks } from "../dal/api";

interface IProps {
  selectedTrackId: string | null;
  onTrackSelected: (id: string) => void;
}

const TracksList = ({ selectedTrackId, onTrackSelected }: IProps) => {
  const [tracks, setTracks] = useState<GetTrackListOutput[] | null>(null);

  useEffect(() => {
    getTracks().then((json) =>
      setTracks(json.data)
    );
  }, []);

  const handleTrackSelectedId = (id: string) => {
    onTrackSelected?.(id);
  };
  
  if (tracks === null) {
    return (
      <div>
        <span>loading...</span>
      </div>
    );
  }

  if (tracks.length === 0) {
    return (
      <div>
        <span>No tracks</span>
      </div>
    );
  }

  return (
    <ul>
      {tracks.map((track) => {
        return (
          <TrackItem
            key={track.id}
            track={track}
            isSelected={track.id === selectedTrackId}
            onTrackSelectedId={handleTrackSelectedId}
          />
        );
      })}
    </ul>
  );
};

export default TracksList;


