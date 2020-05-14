export const selectSong = (song: any) => {
  return {
    type: "SELECT_SONG",
    payload: song,
  };
};
