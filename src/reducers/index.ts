import { combineReducers } from "redux";

export interface Song {
  title: string;
  duration: string;
}

const songsReducer = (): Song[] => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "3:00" },
    { title: "All Stars", duration: "4:15" },
    { title: "I Want it That Way", duration: "2:00" },
  ];
};

const selectedSongReducer = (
  selectedSong: Song | null = null,
  action: { type: string; payload: Song }
): Song | null => {
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
