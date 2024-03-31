// External NPM Packages
import { useState, useEffect } from 'react';

const useSetVisibilityOnScroll = (threshold) => {
	const [isVisible, setIsVisible] = useState(false);
	const [isFixed, setIsFixed] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			let currentScrollY = window.scrollY;
			const navbarHeight = document.getElementById('header').offsetHeight;

			if (Math.abs(currentScrollY - lastScrollY) >= threshold) {
				if (currentScrollY > navbarHeight) {
					setIsFixed(true);
					setIsVisible(currentScrollY < lastScrollY);
				} else {
					setIsFixed(false);
				}
				setLastScrollY(currentScrollY); // Update the last scroll position
			}
		};

		// Set the event listener
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll); // Clean up the event listener
		};
	}, [threshold, lastScrollY]);

	return [isFixed, isVisible];
};

export default useSetVisibilityOnScroll;
