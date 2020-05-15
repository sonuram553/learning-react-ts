import React from "react";
import { connect } from "react-redux";
import { RootState, Song } from "../reducers";
import { render } from "@testing-library/react";

interface Props {
  selectedSong: Song | null;
}

const SongDetails = (props: Props) => {
  if (!props.selectedSong) return <div></div>;
  return (
    <div className="ui message">
      <div className="header">{props.selectedSong?.title}</div>
      <p>Duration: {props.selectedSong?.duration}</p>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
