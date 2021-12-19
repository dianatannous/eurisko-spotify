import {ActionTypes} from '../constants/action-type';
/** this action call using dispatch call the albumReducer to store the payload inside state */
export const fetchAlbums = (albums) => {
    return {
      type: ActionTypes.GET_ALBUMS,
      payload: albums
    };
  };