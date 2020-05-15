import React from "react";
import { connect } from "react-redux";
import { RootState } from "../reducers";
import { selectSong } from "../actions";

interface Props {
  songs: { title: string; duration: string }[];
  selectSong: typeof selectSong;
}

class SongList extends React.Component<Props> {
  renderList() {
    const { songs } = this.props;
    return songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(song)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state: RootState) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, {
  selectSong,
})(SongList);
