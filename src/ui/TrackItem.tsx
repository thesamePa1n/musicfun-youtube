import type { GetTrackListOutput } from "../shared/types/tracks.types";

interface IProps {
  track: GetTrackListOutput;
  isSelected: boolean;
  onTrackSelectedId: (id: string) => void;
}

const TrackItem = ({ track, isSelected, onTrackSelectedId }: IProps) => {
  return (
    <li
      key={track.id}
      style={{
        border: isSelected ? "1px solid orange" : "none",
      }}
    >
      <div onClick={() => onTrackSelectedId(track.id)}>
        {track.attributes.title}
      </div>
      <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>
  );
};

export default TrackItem;
