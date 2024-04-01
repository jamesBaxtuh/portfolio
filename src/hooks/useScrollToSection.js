// External NPM Packages
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToSection = () => {
	const location = useLocation();

	useEffect(() => {
		// Check if there's a scrollTo section specified in the location
		const scrollToId = location.hash.slice(1);
		if (scrollToId) {
			const element = document.getElementById(scrollToId);
			if (element) {
				element.scrollIntoView();
			}
		}
	}, [location]);
};

export default useScrollToSection;
