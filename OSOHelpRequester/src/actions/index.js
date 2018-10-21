// ActionCreators

export const selectHelpProvider = (helpProviderId) => {
	return {
		type: 'select_helpProvider',
		payload: helpProviderId
	};
};

export * from './AuthActions';
export * from './HelpProviderActions.js';