import { RootActions } from "../actions";

export interface Post {
  title: string;
  body: string;
  id: number;
  userId: number;
}

/* interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: [],
}; */

const initialState: Post[] = [];

export default (state: Post[] = initialState, action: RootActions): Post[] => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;

    default:
      return state;
  }
};
