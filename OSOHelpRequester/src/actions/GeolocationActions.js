import { Actions } from 'react-native-router-flux';
import { 
	LONGITUDE_CHANGED,
	LATITUDE_CHANGED
} from './types';

export const longitudeChanged = (number) => {
	return {
		type: LONGITUDE_CHANGED,
		payload: number
	};
};

export const latitudeChanged = (number) => {
	return {
		type: LATITUDE_CHANGED,
		payload: number
	};
};