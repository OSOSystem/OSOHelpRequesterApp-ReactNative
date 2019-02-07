import {
  EMERGENCY_SEND,
  EMERGENCY_REACHED_SERVER,
  EMERGENCY_REACHED_HP,
  EMERGENCY_FAILED
} from '../actions/types';

const INITIAL_STATE = {
  url: 'http://51.75.67.97:32085/emergency/emit',
  error: '',
  loading: false,
  sended: false,
  reachedServer: false,
  reachedHP: false
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMERGENCY_SEND:
      return {
        ...state, sended: true, loading: true, error: ''
      };
    case EMERGENCY_REACHED_SERVER:
      return { ...state, loading: false, reachedServer: true };
    case EMERGENCY_REACHED_HP:
      return {
        ...state, loading: false, reachedServer: true, reachedHP: true
      };
    case EMERGENCY_FAILED:
      console.log('Failed Failed');
      return {
        ...state, error: 'Failed', loading: false, reachedServer: false, reachedHP: false
      };
    default:
      return state;

  }
};
