import React from "react";
import { Video } from "../types";
import "./VideoItem.scss";

interface Props {
  video: Video;
  onSelectVideo(video: Video): void;
}

const VideoItem = (props: Props) => {
  const { video, onSelectVideo } = props;
  const { thumbnails } = video.snippet;

  return (
    <div onClick={() => onSelectVideo(video)} className="item video-item">
      <img
        className="ui image video-item__image"
        src={thumbnails.high.url}
        alt={video.snippet.title}
      />

      <div className="content">
        <p className="header">{video.snippet.title}</p>
      </div>
    </div>
  );
};

export default VideoItem;
