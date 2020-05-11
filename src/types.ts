export interface Video {
  id: { videoId: string };
  snippet: {
    thumbnails: {
      default: { url: string };
      high: { url: string };
      medium: { url: string };
    };
    title: string;
  };
}
