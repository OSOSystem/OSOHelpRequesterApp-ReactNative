// ActionCreators

export const selectHelpProvider = (helpProviderId) => {
	return {
		type: 'select_helpProvider',
		payload: helpProviderId
	};
};