// External NPM Packages
import { useLocation } from 'react-router-dom';

// Utilities and Constants
import pageNames from '../data/contexts/pageNames';

// Custom hook to get the current page name based on the route
const usePageName = () => {
	const location = useLocation();
	const page = location.pathname;

	// Determine pageName based on the current pathname
	const pageName = pageNames[page] ? pageNames[page] : 'NotFound';

	return pageName;
};

export default usePageName;
