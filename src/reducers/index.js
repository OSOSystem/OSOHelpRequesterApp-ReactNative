import { combineReducers } from 'redux';
import HelpProviderReducer from './HelpProviderReducer';
import SelectionReducer from './SelectionReducer';
import AuthReducer from './AuthReducer';
import EmergencyReducer from './EmergencyReducer';
import GeolocationReducer from './GeolocationReducer';

export default combineReducers({
  helpProviders: HelpProviderReducer,
  selectedHelpProviderId: SelectionReducer,
  emergency: EmergencyReducer,
  geolocation: GeolocationReducer,
  auth: AuthReducer
});
