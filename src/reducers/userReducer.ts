import { RootActions } from "../actions";

export interface User {
  id: number;
  name: string;
}
const initialState: User[] = [];

export default (state: User[] = initialState, action: RootActions) => {
  switch (action.type) {
    case "FETCH_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};
