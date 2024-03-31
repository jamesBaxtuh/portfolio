// External NPM Packages
import { useState, useEffect } from 'react';

export default function useLocalTime(interval) {
	const newDate = new Date();
	// const newTime = newDate.toLocaleTimeString();
	const [localTime, setLocalTime] = useState(newDate);

	useEffect(() => {
		const intervalId = setInterval(() => {
			const newDate = new Date();
			// const newTime = newDate.toLocaleTimeString();
			setLocalTime(newDate);
		}, interval);
		return () => clearInterval(intervalId);
	}, []);

	return localTime;
}
