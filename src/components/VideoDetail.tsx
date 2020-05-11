import React from "react";
import { Video } from "../types";

interface Props {
  video: Video | null;
}

const VideoDetail = (props: Props): JSX.Element => {
  const { video } = props;

  if (!video) return <div></div>;

  const videoSrc = `https://youtube.com/embed/${video?.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="YouTube video player"></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">
          <p>{video?.snippet.title}</p>
        </h4>
        <p>{video?.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
