import { useEffect, useState } from "react";
import type { GetTrackDetailsOutput } from "../shared/types/tracks.types";
import { getTrack } from "../dal/api";

interface IProps {
  selectedTrackId: string | null
}

const TrackDetail = (props: IProps) => {
  const [selectedTrack, setSelectedTrack] = useState<GetTrackDetailsOutput | null>(null);

  useEffect(() => {
    if (!props.selectedTrackId) {
      return;
    }

    getTrack(props.selectedTrackId).then((json) => setSelectedTrack(json.data));
  }, [props.selectedTrackId]);

  return (
    <div>
      <h2>details</h2>
      {!selectedTrack && !props.selectedTrackId && "Track is not selected"}
      {!selectedTrack && props.selectedTrackId && "Loading..."}
      {selectedTrack && props.selectedTrackId && selectedTrack.id !== props.selectedTrackId}
      {selectedTrack && (
        <div>
          <h3>{selectedTrack.attributes.title}</h3>
          <h4>Lyrics</h4>
          <p>{selectedTrack.attributes.lyrics ?? "no lyrics"}</p>
        </div>
      )}
    </div>
  );
};

export default TrackDetail;
