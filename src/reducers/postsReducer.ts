import { FetchPostsAction } from "../actions";

export interface Post {
  title: string;
  desc: string;
}

interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: [],
};

export default (
  state: PostState = initialState,
  action: FetchPostsAction
): PostState => {
  switch (action.type) {
    case "FETCH_POSTS":
      return { ...state, posts: action.payload };

    default:
      return state;
  }
};
