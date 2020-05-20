import { FetchPostsAction } from "../actions";

export interface Post {
  title: string;
  body: string;
  id: number;
}

/* interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: [],
}; */

const initialState: Post[] = [];

export default (
  state: Post[] = initialState,
  action: FetchPostsAction
): Post[] => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;

    default:
      return state;
  }
};
