import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "3:00" },
    { title: "All Stars", duration: "4:15" },
    { title: "I Want it That Way", duration: "2:00" },
  ];
};

const selectedSongReducer = (
  selectedSong = null,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case "SELECT_SONG":
      return action.payload;

    default:
      return selectedSong;
  }
};

const rootReducer = combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
