// External NPM Packages
import { useState, useEffect } from 'react';

// Utilities and Constants
import random from '../../../utils/random';
import { VARIABLE_CONFETTI_COLORS } from '../../../data/misc/css';

// Images and Styles
import './Countdown.css';

const Countdown = ({ startValue, increment, onReset, DisplayIcon }) => {
	const [time, setTime] = useState(startValue);
	// Initialize randomColor with useState so that its value doesn't change each re-render (which happens at every setTime() runs, which happens to be each second)
	const [randomColor, setRandomColor] = useState(
		() => VARIABLE_CONFETTI_COLORS[random(0, VARIABLE_CONFETTI_COLORS.length)]
	);

	useEffect(() => {
		let intervalId;
		if (time > 0) {
			intervalId = setInterval(() => {
				setTime((prevTime) => {
					const updatedTime = prevTime - increment;
					if (updatedTime <= 0) {
						clearInterval(intervalId); // Clear the interval if time runs out
						if (onReset) {
							onReset(); // Call the reset callback
						}
					}
					return Math.max(updatedTime, 0); // Prevent time from going negative
				});
			}, increment);
		}

		return () => clearInterval(intervalId); // Cleanup on unmount
	}, [time, increment, onReset]);

	return (
		<div className='skillIconContainer countdown d-flex jc-center ai-center'>
			{DisplayIcon ? (
				<>
					<DisplayIcon style={{ color: randomColor }} />
					<span className='countdownValue'>{time / 1000}</span>
				</>
			) : (
				<>
					<div
						className='countdownCircle'
						style={{
							backgroundColor: randomColor,
						}}
					/>
					<span className='countdownValue'>{time / 1000}</span>
				</>
			)}
		</div>
	);
};

export default Countdown;
