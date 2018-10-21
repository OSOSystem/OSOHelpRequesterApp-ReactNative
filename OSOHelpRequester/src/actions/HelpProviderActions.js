import { Actions } from 'react-native-router-flux';
import {
    HELPPROVIDERS_FETCH_SUCCESS,
    HELPPROVIDER_SELECT
} from './types';

export const helpProvidersFetch = () => {

};

export const selectHelpProvider = (helpProviderId) => {
	return {
		type: HELPPROVIDER_SELECT,
		payload: helpProviderId
	};
};

