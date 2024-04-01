// External NPM Packages
import { useState, useEffect, useCallback } from 'react';
import { Tooltip } from 'react-tooltip';
import { FaEgg as EggIcon } from 'react-icons/fa6';

// Images and Styles
import './Skill.css';

// Components
import CountDown from '../../misc/Countdown/Countdown';

const Skill = ({ data, onToggle = false, easterEgg = false }) => {
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

	const { Icon, tooltip, id } = data;
	if (easterEgg && clicked) {
		return (
			<CountDown
				startValue={10000}
				increment={1000}
				onReset={onReset}
				DisplayIcon={EggIcon}
			/>
		);
	} else {
		return (
			<button className='skillIconContainer d-flex jc-center ai-center'>
				<Icon
					onClick={handleClick}
					data-tooltip-id={id}
					data-tooltip-content={tooltip}
					aria-label={`Learn more about ${tooltip}`}
				/>
				<Tooltip place='right' id={id} />
			</button>
		);
	}
};

export default Skill;
