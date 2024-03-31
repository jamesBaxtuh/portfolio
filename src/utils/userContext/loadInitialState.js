// Utilities and Constants
import defaultStates from '../../data/contexts/defaultStates';

const loadInitialState = (context) => {
	try {
		let returnedState = {};

		if (context === 'userContext') {
			const { userContext } = defaultStates;
			for (const stateKey in userContext) {
				const stateValue = userContext[stateKey];
				const existingState = localStorage.getItem(stateKey);
				if (existingState) {
					// Grab previous state from local storage if present
					returnedState[stateKey] = JSON.parse(existingState);
				} else {
					// Initialize default state and save it to local storage
					returnedState[stateKey] = stateValue;
					localStorage.setItem(stateKey, JSON.stringify(stateValue));
				}
			}
		}
		return returnedState;
	} catch (e) {
		console.log(`Error retrieving state from localStorage.`, e);
		return defaultStates[context];
	}
};

export default loadInitialState;
