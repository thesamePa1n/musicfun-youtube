import { useEffect, useState } from "react";
import type { GetTrackListOutput } from "../shared/types/tracks.types";
import { getTracks } from "../dal/api";

export function useTracks(){
  const [tracks, setTracks] = useState<GetTrackListOutput[] | null>(null);

  useEffect(() => {
    getTracks().then((json) =>
      setTracks(json.data)
    );
  }, []);

  return {
    tracks
  }
}