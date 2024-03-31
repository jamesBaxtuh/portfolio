// External NPM Packages
import { useState, useEffect } from 'react';

// Contexts
import { ThemeContext } from './ThemeContext';

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('light'); // default theme is light

	useEffect(() => {
		const updateThemeBasedOnTime = () => {
			const hour = new Date().getHours();
			const newTheme = hour >= 19 || hour < 6 ? 'dark' : 'light';
			document.body.setAttribute('data-theme', newTheme);
			setTheme(newTheme);
		};

		updateThemeBasedOnTime(); // Update theme on component mount

		const intervalId = setInterval(updateThemeBasedOnTime, 3600000); // Check every hour

		return () => clearInterval(intervalId); // Cleanup interval on component unmount
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
