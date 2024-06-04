// External NPM Packages
import { useEffect } from 'react';
import { Tooltip } from 'react-tooltip';

// Images and Styles
import './Skill.css';

const Skill = ({ data, options }) => {
	const { Icon, tooltip, id } = data;
	const { containerWidth, iconHeight, iconWidth } = options;

	useEffect(() => {
		const tooltipTrigger = document.querySelector(
			`[data-tooltip-id="${data.id}"]`
		);
		if (tooltipTrigger) {
			tooltipTrigger.setAttribute('tabindex', '0'); // Make it focusable
		}
	}, [data.id]);

	return (
		<button
			className='skillIconContainer d-flex jc-center ai-center'
			style={{ width: containerWidth }}
		>
			<Icon
				data-tooltip-id={id}
				data-tooltip-content={tooltip}
				aria-label={`${tooltip} icon.`}
				style={{
					height: iconHeight,
					width: iconWidth,
					color: options.iconColor ? options.iconColor : 'inherit',
				}}
			/>
			<Tooltip place='right' id={id} style={{ zIndex: 100 }} />
		</button>
	);
};

export default Skill;
