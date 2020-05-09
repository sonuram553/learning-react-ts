import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term: string) => {
    const res = await unsplash.get("search/photos", {
      params: {
        query: term,
      },
    });

    this.setState({ images: res.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ paddingTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />

        {this.state.images.length}
      </div>
    );
  }
}

export default App;
