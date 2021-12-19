import {ActionTypes} from '../constants/action-type';
const initialState = {
    albums:[]
};
/** First identifer the action of type then we store the data */
export const albumReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.GET_ALBUMS:
      return {...state,albums:payload };
     default :
   return state;
  }
};