// External NPM Packages
import { useLocation } from 'react-router-dom';

// Utilities and Constants
import PAGE_NAMES from '../data/global/pageNames';

// Custom hook to get the current page name based on the route
const usePageName = () => {
	const location = useLocation();
	const page = location.pathname;

	// Determine pageName based on the current pathname
	const pageName = PAGE_NAMES[page] ? PAGE_NAMES[page] : 'NotFound';

	return pageName;
};

export default usePageName;
