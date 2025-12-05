import { useTrackDetail } from "../bll/useTrackDetail";

interface IProps {
  selectedTrackId: string | null;
}

const TrackDetail = (props: IProps) => {
  const {trackDetails} = useTrackDetail(props.selectedTrackId)

  return (
    <div>
      <h2>details</h2>
      {!trackDetails && !props.selectedTrackId && "Track is not selected"}
      {!trackDetails && props.selectedTrackId && "Loading..."}
      {trackDetails &&
        props.selectedTrackId &&
        trackDetails.id !== props.selectedTrackId}
      {trackDetails && (
        <div>
          <h3>{trackDetails.attributes.title}</h3>
          <h4>Lyrics</h4>
          <p>{trackDetails.attributes.lyrics ?? "no lyrics"}</p>
        </div>
      )}
    </div>
  );
};

export default TrackDetail;
