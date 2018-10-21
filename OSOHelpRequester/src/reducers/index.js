import { combineReducers } from 'redux';
import HelpProviderReducer from './HelpProviderReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
	helpProviders: HelpProviderReducer,
	selectedHelpProviderId: SelectionReducer
});