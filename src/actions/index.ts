import jsonPlaceholder from "../apis/jsonPlaceholder";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { RootState } from "../reducers";
import { Post } from "../reducers/postsReducer";
import { User } from "../reducers/userReducer";
import _ from "lodash";

export interface FetchPostsAction {
  type: "FETCH_POSTS";
  payload: Post[];
}

export interface FetchUser {
  type: "FETCH_USER";
  payload: User;
}

export type RootActions = FetchPostsAction | FetchUser;

export const fetchPosts = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  const res = await jsonPlaceholder.get("posts");

  dispatch({ type: "FETCH_POSTS", payload: res.data });
};

const _fetchUser = _.memoize(async (userId: number, dispatch) => {
  const res = await jsonPlaceholder.get(`users/${userId}`);
  dispatch({ type: "FETCH_USER", payload: res.data });
});

export const fetchUser = (
  userId: number
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) =>
  _fetchUser(userId, dispatch);
