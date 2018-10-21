import { Actions } from 'react-native-router-flux';
import {
	HELPPROVIDER_UPDATE,
	HELPPROVIDER_CREATE,
	HELPPROVIDERS_FETCH_SUCCESS,
	HELPPROVIDERS_SAVE_SUCCESS
} from './types';

export const helpProviderUpdate = ({ prop, value }) => {
	return {
		type: HELPPROVIDER_UPDATE,
		payload: { prop, value }
	};
};


export const helpProviderCreate = ({ name, phone, shift }) => {
    /*
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/helpProviders`)
			.push({ name, phone, shift })
			.then(() => {
				dispatch({ type: HELPPROVIDER_CREATE });
				Actions.helpProviderList({ type: 'reset' });
			});
    };
    */
};

export const helpProvidersFetch = () => {
    /*
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/helpProviders`)
			.on('value', snapshot => {
				dispatch({ type: HELPPROVIDERS_FETCH_SUCCESS, payload: snapshot.val() });
			});
    };
    */
};

export const helpProviderSave = ({ name, phone, shift, uid }) => {
    /*
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/helpProviders/${uid}`)
			.set({ name, phone, shift })
			.then(() => {
				dispatch({ type: HELPPROVIDER_SAVE_SUCCESS });
				Actions.helpProviderList({ type: 'reset' });
			});
    };
    */
};

export const helpProviderDelete = ({ uid }) => {
    /*
	const { currentUser } = firebase.auth();

	return () => {
		firebase.database().ref(`/users/${currentUser.uid}/helpProviders/${uid}`)
			.remove()
			.then(() => {
				Actions.helpProviderList({ type: 'reset' });
		});
    };
    */
};
