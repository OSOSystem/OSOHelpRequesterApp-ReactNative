import {
  EMERGENCY_SEND,
  EMERGENCY_REACHED_SERVER,
  EMERGENCY_REACHED_HP,
  EMERGENCY_FAILED,
  EMERGENCY_ERROR
} from './types';

import sendSignal from '../utilities/EmergencySend';

// eslint-disable-next-line import/prefer-default-export
export const sendEmergency = (url, longitude, latitude) => {
  console.log('SendEmergency');

  return (dispatch) => {
    emergencySend(dispatch);

    sendSignal(url, longitude, latitude)
      .then((response) => {
        console.log(response);
        if (response.status >= 300) {
          console.log('Response.Status >= 300');
          emergencyFailed(dispatch, response.status);
        } else if (response.status >= 100) {
          console.log('Response.Status >= 100');
          emergencyReachedServer(dispatch, response.status);
          console.log('EMERGENCY_REACHED_SERVER');
        } else {
          console.log('Response.Status < 100');
          emergencyFailed(dispatch, response.status);
        }
        console.log('Status: ', response.status);
      })
      .catch((error) => {
        console.log('error: ', error);
        emergencyError(dispatch, error);
      });
  };
};

const emergencySend = (dispatch) => {
  dispatch({ type: EMERGENCY_SEND });
};


const emergencyFailed = (dispatch, response) => {
  dispatch({
    type: EMERGENCY_FAILED,
    payload: response
  });
};

const emergencyError = (dispatch, error) => {
  dispatch({
    type: EMERGENCY_ERROR,
    payload: error
  });
};

const emergencyReachedServer = (dispatch, response) => {
  dispatch({
    type: EMERGENCY_REACHED_SERVER,
    payload: response
  });
};

const emergencyReachedHP = (dispatch, response) => {
  dispatch({
    type: EMERGENCY_REACHED_HP,
    payload: response
  });
};
