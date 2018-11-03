import {
  LONGITUDE_CHANGED,
  LATITUDE_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  longitude: 0,
  latitude: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LONGITUDE_CHANGED:
      return { ...state, longitude: action.payload };
    case LATITUDE_CHANGED:
      return { ...state, latitude: action.payload };
    default:
      return state;

  }
};
