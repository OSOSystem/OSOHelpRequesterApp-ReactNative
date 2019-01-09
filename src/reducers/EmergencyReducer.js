import {
  EMERGENCY_SEND,
  EMERGENCY_REACHED_SERVER,
  EMERGENCY_REACHED_HP,
  EMERGENCY_FAILED,
  EMERGENCY_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  // url: 'http://app.ososystem.de:8080/emergency/emit',
  url: 'http://1eb93463-90b8-4e29-80c2-a54ef3a9305b.mock.pstmn.io//emergency/emit',
  error: '',
  loading: false,
  sended: false,
  reachedServer: false,
  reachedHP: false,
  responseStatus: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMERGENCY_SEND:
      return {
        ...state, sended: true, loading: true, error: ''
      };
    case EMERGENCY_REACHED_SERVER:
      console.log('EMERGENCY_REACHED_SERVER');
      return {
        ...state,
        error: '',
        loading: false,
        sended: true,
        reachedServer: true,
        reachedHP: false,
        responseStatus: action.payload
      };
    case EMERGENCY_REACHED_HP:
      return {
        ...state,
        loading: false,
        reachedServer: true,
        reachedHP: true,
        responseStatus: action.payload
      };
    case EMERGENCY_FAILED:
      return {
        ...state,
        error: 'Failed',
        loading: false,
        reachedServer: false,
        reachedHP: false,
        responseStatus: action.payload
      };
    case EMERGENCY_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        reachedServer: false,
        reachedHP: false,
        responseStatus: 0
      };
    default:
      return state;
  }
};
