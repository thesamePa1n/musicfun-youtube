import { useEffect, useState } from "react";
import type { GetTrackDetailsOutput } from "../shared/types/tracks.types";
import { getTrack } from "../dal/api";

export function useTrackDetail(selectedTrackId: string | null) {
  const [trackDetails, setTrackDetails] =
    useState<GetTrackDetailsOutput | null>(null);

  useEffect(() => {
    if (!selectedTrackId) {
      return;
    }

    getTrack(selectedTrackId).then((json) => setTrackDetails(json.data));
  }, [selectedTrackId]);

  return {
    trackDetails,
  };
}
