// External NPM Packages
import { useEffect } from 'react';

// Utilities and Constants
import useGetPageName from './usePageName';

// Contexts
import { useUserContext } from '../contexts/User/UserContext';

const useTrackPage = () => {
	const pageName = useGetPageName();
	const { dispatch } = useUserContext();

	useEffect(() => {
		const timestamp = Date.now();

		// Grab user state from local storage
		const userState = JSON.parse(localStorage.getItem('user'));
		const isFirstVisit =
			userState && userState.pageHistory && userState.pageHistory.length === 0;

		// Dispatch logic based on whether it's the first site visit
		dispatch({
			type: 'TRACK_PAGE',
			payload: {
				page: pageName,
				timestamp,
				isFirstVisit: isFirstVisit ?? false,
			},
		});
	}, [pageName, dispatch]); // Reacts to changes in pageName now, instead of location
};

export default useTrackPage;
