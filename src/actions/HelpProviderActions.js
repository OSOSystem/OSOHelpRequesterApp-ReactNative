import {
  HELPPROVIDERS_FETCH_SUCCESS,
  HELPPROVIDER_SELECT
} from './types';

export const helpProvidersFetch = () => {

};

export const selectHelpProvider = helpProviderId => ({
  type: HELPPROVIDER_SELECT,
  payload: helpProviderId
});
