import React from "react";
import SearchBar from "./SearchBar";
import youTube from "../apis/youtube";
import VideoList from "./VideoList";
import { Video } from "../types";
import VideoDetail from "./VideoDetail";

interface State {
  videos: Video[];
  selectedVideo: Video | null;
}

class App extends React.Component {
  state: State = {
    videos: [],
    selectedVideo: null,
  };

  onSubmit = async (term: string): Promise<void> => {
    const res = await youTube.get("search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: res.data.items });
  };

  onSelectVideo = (video: Video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ paddingTop: "20px" }}>
        <SearchBar onSubmit={this.onSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>

            <div className="five wide column">
              <VideoList
                onSelectVideo={this.onSelectVideo}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
