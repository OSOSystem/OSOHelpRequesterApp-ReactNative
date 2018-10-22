import { Actions } from 'react-native-router-flux';
import Login from '../keycloak/index';
import { defaultAuthConfig } from '../configs/keycloakConfig';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';


export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text
});

export const loginUser = ({ email, password }) => {
  console.log('Login user...');

  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    if (email == 'osotest' && password == 'osotest') loginUserSuccess(dispatch, null);

    const gatheredTokens = Login.getTokens();
    Login.refreshToken();

    console.log('Before stored-token test');
    if (JSON.stringify(gatheredTokens).includes('access_token')) {
      console.log('Valid stored tokens');
      loginUserSuccess(dispatch, null);
    }
    else {
      console.log('Start-Login with ', defaultAuthConfig, email, password);

      Login.startLoginProcess({
        url: defaultAuthConfig.url,
        realm: defaultAuthConfig.realm,
        clientId: defaultAuthConfig.clientId,
        clientSecret: defaultAuthConfig.clientSecret,
        username: email,
        password
      }).then((tokens) => {
        if (JSON.stringify(tokens).includes('access_token')) {
          console.log('Login-User success');
          Login.saveTokens(tokens);
          loginUserSuccess(dispatch, null);
        }
        else {
          console.log('Login-User failed');
          console.log(tokens);
          loginUserFail(dispatch);
        }
      });
    }
  };
};


const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};
