import {
	EMERGENCY_SEND,
	EMERGENCY_REACHED_SERVER,
	EMERGENCY_REACHED_HP,
	EMERGENCY_FAILED
} from '../actions/types';

const INITIAL_STATE = {
	url: 'http://app.ososystem.de:8080/emergency/emit',
	error: '',
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	console.log(action);
	switch (action.type) {
		case EMERGENCY_SEND:
			return { ...state, loading: true, error: '' };
		case EMERGENCY_REACHED_SERVER:
			return { ...state, loading: false };
		case EMERGENCY_REACHED_HP:
			return { ...state, loading: false };
		case EMERGENCY_FAILED:
			return { ...state, error: 'Failed', loading: false };
		default:
			return state;

	}
};