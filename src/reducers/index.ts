import { combineReducers } from "redux";

const rootReducer = combineReducers({
  replaceMe: () => 9,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
