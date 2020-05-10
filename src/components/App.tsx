import React from "react";
import SearchBar from "./SearchBar";
import youTube from "../apis/youtube";

class App extends React.Component {
  onSubmit = async (term: string): Promise<void> => {
    const res = await youTube.get("search", {
      params: {
        q: term,
      },
    });

    console.log(res.data.items);
  };

  render() {
    return (
      <div className="ui container" style={{ paddingTop: "20px" }}>
        <SearchBar onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
