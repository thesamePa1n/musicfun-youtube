import TrackItem from "./TrackItem";
import { useTracks } from "../bll/useTracks";

interface IProps {
  selectedTrackId: string | null;
  onTrackSelected: (id: string) => void;
}

const TracksList = ({ selectedTrackId, onTrackSelected }: IProps) => {
  const {tracks} = useTracks()

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


