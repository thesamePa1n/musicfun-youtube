export interface GetTrackListOutput {
  id: string;
  type: string;
  attributes: TrackListItemAttributes;
  relationships: {
    artists: {
      data: [
        {
          id: string;
          type: string;
        }
      ];
    };
  };
}

export interface TrackListItemAttributes {
  title: string;
  addedAt: string;
  likesCount: number;
  attachments: [
    {
      id: string;
      addedAt: string;
      updatedAt: string;
      version: number;
      url: string;
      contentType: string;
      originalName: string;
      fileSize: number;
    }
  ];
  images: {
    main: [
      {
        type: string;
        width: number;
        height: number;
        fileSize: number;
        url: string;
      }
    ];
  };
  user: {
    id: string;
    name: string;
  };
  currentUserReaction: number;
  isPublished: boolean;
  publishedAt: string;
}

export interface GetTrackDetailsOutput {
  id: string;
  type: string;
  attributes: TrackDetailsAttributes;
}

export interface TrackDetailsAttributes {
  title: string;
  lyrics: string | null;
  releaseDate: string;
  addedAt: string;
  updatedAt: string;
  duration: number;
  likesCount: number;
  attachments: {
    id: string;
    addedAt: string;
    updatedAt: string;
    version: number;
    url: string;
    contentType: string;
    originalName: string;
    fileSize: number;
  };
  images: {
    main: {
      type: string;
      width: number;
      height: number;
      fileSize: number;
      url: string;
    };
  };
  tags: {
    id: string;
    name: string;
  };
  artists: {
    id: string;
    name: string;
  };
  user: {
    id: string;
    name: string;
  };
  isPublished: boolean;
  publishedAt: string;
  currentUserReaction: number;
}
