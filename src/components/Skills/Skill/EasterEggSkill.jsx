// External NPM Packages
import { useState, useEffect, useCallback } from 'react';
import { Tooltip } from 'react-tooltip';
import { FaEgg as EggIcon } from 'react-icons/fa6';

// Images and Styles
import './Skill.css';

// Components
import CountDown from '../../misc/Countdown/Countdown';

const EasterEggSkill = ({ data, onToggle, options }) => {
	const { Icon, tooltip, id } = data;
	const { containerWidth, iconHeight, iconWidth } = options;

	const [clicked, setClicked] = useState(false);

	const handleClick = useCallback(() => {
		setClicked(true);
	}, []);

	const onReset = useCallback(() => {
		setClicked(!clicked);
	}, [clicked]);

	useEffect(() => {
		if (clicked) {
			onToggle('add');
		} else {
			onToggle('subtract');
		}
	}, [clicked]);

	useEffect(() => {
		const tooltipTrigger = document.querySelector(
			`[data-tooltip-id="${data.id}"]`
		);
		if (tooltipTrigger) {
			tooltipTrigger.setAttribute('tabindex', '0'); // Make it focusable
		}
	}, [data.id]);

	if (clicked) {
		return (
			<div
				className='skillIconContainer d-flex jc-center ai-center'
				style={{ width: containerWidth }}
			>
				<CountDown
					increment={1000}
					startValue={10000}
					onReset={onReset}
					options={{
						DisplayIcon: EggIcon,
						...options,
					}}
				/>
			</div>
		);
	} else {
		return (
			<button
				className='skillIconContainer d-flex jc-center ai-center'
				style={{ width: containerWidth }}
			>
				<Icon
					onClick={handleClick}
					data-tooltip-id={id}
					data-tooltip-content={tooltip}
					aria-label={`Learn more about ${tooltip}`}
					style={{ height: iconHeight, width: iconWidth }}
				/>
				<Tooltip place='right' id={id} style={{ zIndex: 100 }} />
			</button>
		);
	}
};

export default EasterEggSkill;
