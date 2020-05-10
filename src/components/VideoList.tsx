import React from "react";
import VideoItem from "./VideoItem";

interface Props {
  videos: any[];
}

const VideoList = (props: Props) => {
  return (
    <div>
      {props.videos.length}
      <VideoItem />
    </div>
  );
};

export default VideoList;
