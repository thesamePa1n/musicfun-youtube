import type { GetTrackDetailsOutput, GetTrackListOutput } from "../shared/types/tracks.types";

export const getTrack = (trackId: string) => {
  const promise: Promise<{ data: GetTrackDetailsOutput }> = fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + trackId,
    {
      headers: {
        "api-key": "2b5ddf3d-9134-4498-8564-e47f7ad39755",
      },
    }
  ).then((res) => res.json());

  return promise;
};

export const getTracks = () => {
  const promise: Promise<{data: GetTrackListOutput[]}> = fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks",
    {
      headers: {
        "api-key": "2b5ddf3d-9134-4498-8564-e47f7ad39755",
      },
    }
  ).then((res) => res.json());

  return promise
};
