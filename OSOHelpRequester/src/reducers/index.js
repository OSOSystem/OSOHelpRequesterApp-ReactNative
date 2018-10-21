import { combineReducers } from 'redux';
import HelpProviderReducer from './HelpProviderReducer';
import SelectionReducer from './SelectionReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
	helpProviders: HelpProviderReducer,
	selectedHelpProviderId: SelectionReducer,
	auth: AuthReducer
});