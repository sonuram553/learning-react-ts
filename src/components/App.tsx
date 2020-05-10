import React from "react";
import SearchBar from "./SearchBar";
import youTube from "../apis/youtube";
import VideoList from "./VideoList";

interface State {
  videos: any[];
}

class App extends React.Component {
  state: State = {
    videos: [],
  };

  onSubmit = async (term: string): Promise<void> => {
    const res = await youTube.get("search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: res.data.items });
  };

  render() {
    return (
      <div className="ui container" style={{ paddingTop: "20px" }}>
        <SearchBar onSubmit={this.onSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
