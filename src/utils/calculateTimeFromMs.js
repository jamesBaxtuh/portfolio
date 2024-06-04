const calculateTimeFromMs = (timeInMs) => {
	const timeUnits = {
		d: 24 * 60 * 60 * 1000,
		h: 60 * 60 * 1000,
		m: 60 * 1000,
		s: 1000,
	};

	const results = {};

	Object.entries(timeUnits).forEach(([unit, value]) => {
		results[unit] = Math.floor(timeInMs / value);
		timeInMs %= value; // Reduce remaining time
	});

	const formatTime = (count, unit) => {
		if (count === 0) return '';
		return `${count}${unit} `;
	};

	return Object.entries(results)
		.map(([unit, count]) => formatTime(count, unit))
		.join('')
		.trim(); // Trim the trailing space if any
};

export default calculateTimeFromMs;
