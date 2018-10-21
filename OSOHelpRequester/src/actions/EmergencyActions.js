import { Actions } from 'react-native-router-flux';
import { 
	EMERGENCY_SEND,
	EMERGENCY_REACHED_SERVER,
	EMERGENCY_REACHED_HP,
	EMERGENCY_FAILED
} from './types';




export const sendEmergency = ({ url, longitude, latitude }) => {
    dispatch({ type: EMERGENCY_SEND });

    // ...
};


const emergencyFailed = (dispatch) => {
	dispatch({ type: EMERGENCY_FAILED });
};

const emergencyReachedServer = (dispatch) => {
	dispatch({ type: EMERGENCY_REACHED_SERVER });
};

const emergencyReachedHP = (dispatch) => {
	dispatch({ type: EMERGENCY_REACHED_HP });
};