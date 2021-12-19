import { ActionTypes } from "../constants/action-type";

const initialState = {
  artists: [],
};
export const artistReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_ARTISTS:
      return { ...state, artists: payload };
    default:
      return state;
  }
};
