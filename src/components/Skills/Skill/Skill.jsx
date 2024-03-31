// External NPM Packages
import { Tooltip } from 'react-tooltip';

// Images and Styles
import './Skill.css';

const Skill = ({ data }) => {
	const { Icon, tooltip, id } = data;

	return (
		<div className='skillIconContainer d-flex jc-center ai-center'>
			<Icon data-tooltip-id={id} data-tooltip-content={tooltip} />
			<Tooltip place='right' id={id} />
		</div>
	);
};

export default Skill;
