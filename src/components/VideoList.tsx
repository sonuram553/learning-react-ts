import React from "react";
import VideoItem from "./VideoItem";
import { Video } from "../types";

interface Props {
  videos: Video[];
  onSelectVideo(video: Video): void;
}

const VideoList = (props: Props) => {
  const { videos, onSelectVideo } = props;

  const videoItems = videos.map((video) => {
    return (
      <VideoItem
        onSelectVideo={onSelectVideo}
        key={video.id.videoId}
        video={video}
      />
    );
  });

  return <div className="ui list">{videoItems}</div>;
};

export default VideoList;
