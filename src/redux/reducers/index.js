// combine all reducers
import { combineReducers } from "redux";

import { albumReducer } from "./albumReducer";
import { artistReducer } from "./artistReducer";

const reducers = combineReducers({
  artist: artistReducer,
  album: albumReducer,
});
export default reducers;
