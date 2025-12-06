import clsx from "clsx";
import type { GetTrackListOutput } from "../shared/types/tracks.types";
import styles from './TracksList.module.css'

interface IProps {
  track: GetTrackListOutput;
  isSelected: boolean;
  onTrackSelectedId: (id: string) => void;
}

const TrackItem = ({ track, isSelected, onTrackSelectedId }: IProps) => {
  const handleClick = () => onTrackSelectedId?.(track.id)

  return (
    <li
      key={track.id}
      className={clsx(styles.track, isSelected ? styles.selected : '')}
    >
      <div onClick={handleClick}>
        {track.attributes.title}
      </div>
      <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>
  );
};

export default TrackItem;
