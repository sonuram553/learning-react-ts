export interface Video {
  id: { videoId: string };
  snippet: {
    description: string;
    thumbnails: {
      default: { url: string };
      high: { url: string };
      medium: { url: string };
    };
    title: string;
  };
}
