// External NPM Packages
import { useReducer, useEffect } from 'react';

// Utilities and Constants
import { userReducer, initialState } from './UserReducer';

// Contexts
import { UserContext } from './UserContext';

export const UserProvider = ({ children }) => {
	const [state, dispatch] = useReducer(userReducer, initialState);
	const { user, easterEggs } = state;

	useEffect(() => {
		// Update localStorage whenever 'user' state changes
		localStorage.setItem('user', JSON.stringify(user));
	}, [user]);

	useEffect(() => {
		// Update localStorage whenever 'easterEggs' state changes
		localStorage.setItem('easterEggs', JSON.stringify(easterEggs));
	}, [easterEggs]);

	return (
		<UserContext.Provider value={{ state, dispatch }}>
			{children}
		</UserContext.Provider>
	);
};
