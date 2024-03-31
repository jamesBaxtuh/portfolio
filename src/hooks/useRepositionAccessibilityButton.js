// External NPM Packages
import { useEffect } from 'react';

const useRepositionAccessibilityButton = () => {
	useEffect(() => {
		const btn = document.querySelector('.asw-menu-btn');
		if (btn) {
			btn.style.position = 'fixed';
			btn.style.bottom = '50px'; // Reset bottom position
			btn.style.left = '20px'; // Reset left position
			btn.style.top = 'auto';
		}
	}, []);
};

export default useRepositionAccessibilityButton;
