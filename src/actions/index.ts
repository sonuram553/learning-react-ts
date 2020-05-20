import jsonPlaceholder from "../apis/jsonPlaceholder";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { RootState } from "../reducers";
import { Post } from "../reducers/postsReducer";

export interface FetchPostsAction {
  type: "FETCH_POSTS";
  payload: Post[];
}

export const fetchPosts = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  const res = await jsonPlaceholder.get("posts");

  dispatch({ type: "FETCH_POSTS", payload: res.data });
};
