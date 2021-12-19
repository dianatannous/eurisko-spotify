import {ActionTypes} from '../constants/action-type';
export const fetchArtists = (artists) => {
 
    return {
      type: ActionTypes.GET_ARTISTS,
      payload: artists
    };
  };