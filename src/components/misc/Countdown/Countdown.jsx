// External NPM Packages
import { useState, useEffect, useMemo } from 'react';

// Utilities and Data
import random from '../../../utils/random';
import { VARIABLE_CONFETTI_COLORS } from '../../../data/global/css';

// Images and Styles
import './Countdown.css';

// Constants
const defaultOptions = {
	DisplayIcon: null,
	useRandomColor: true,
	textColor: 'var(--site-black)',
	iconWidth: '50px',
	iconHeight: '50px',
};

const Countdown = ({ startValue, increment, onReset, options }) => {
	const [time, setTime] = useState(startValue);
	const finalizedOptions = useMemo(() => {
		return { ...defaultOptions, ...options };
	}, [options]);

	const { DisplayIcon, useRandomColor, textColor, iconHeight, iconWidth } =
		finalizedOptions;

	// Initialize randomColor with useState so that its value doesn't change each re-render (which happens at every setTime() runs, which happens to be every {increment})
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

	if (DisplayIcon)
		return (
			<>
				<DisplayIcon
					style={{
						color: useRandomColor ? randomColor : 'inherit',
						height: iconHeight,
						width: iconWidth,
					}}
				/>
				<span className='countdownValue' style={{ color: textColor }}>
					{time / 1000}
				</span>
			</>
		);
	return (
		<div className='d-flex jc-center ai-center' aria-live='polite'>
			<div
				className='countdownCircle'
				style={{
					backgroundColor: useRandomColor ? randomColor : 'inherit',
					color: textColor,
					height: iconHeight,
					width: iconWidth,
				}}
			/>
			<span className='countdownValue' style={{ color: textColor }}>
				{time / 1000}
			</span>
		</div>
	);
};

export default Countdown;
