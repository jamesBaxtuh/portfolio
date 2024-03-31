// External NPM Packages
import { useEffect, useRef } from 'react';

// Utilities and Constants
import random from '../utils/random';

const useRandomInterval = (callback, minDelay, maxDelay) => {
	const timeoutId = useRef(null);
	const savedCallback = useRef(callback);

	// Set the callback once on mounting and only update it if callback changes
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	useEffect(() => {
		const isValidDelay = (delay) => typeof delay === 'number' && delay > 0;
		const isEnabled = isValidDelay(minDelay) && isValidDelay(maxDelay);

		if (!isEnabled) {
			return;
		}

		const handleTick = () => {
			const nextTickAt = random(minDelay, maxDelay);
			timeoutId.current = window.setTimeout(() => {
				savedCallback.current();
				handleTick();
			}, nextTickAt);
		};

		handleTick();

		return () => window.clearTimeout(timeoutId.current);
	}, [minDelay, maxDelay]);

	const cancel = () => window.clearTimeout(timeoutId.current);

	return cancel;
};

export default useRandomInterval;
