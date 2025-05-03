// External NPM Packages
import { useState, useEffect, useCallback, useMemo } from 'react';

// Utilities and Data
import { findEgg } from '../../../utils/contexts/user/eggUtils';

// Contexts
import { useUserContext } from '../../../contexts/User/UserContext';

// Components
import Skill from '../Skill/Skill';
import EasterEggSkill from '../Skill/EasterEggSkill';

// Images and Styles
import './Skills.css';

// Constants
const defaultIconOptions = {
	containerWidth: '33%',
	iconHeight: '50px',
	iconWidth: '50px',
};

const Skills = ({ skillData, isEasterEgg = false, iconOptions = {} }) => {
	const { state, dispatch } = useUserContext();
	const [toggledSkills, setToggledSkills] = useState(0);

	const finalizedIconOptions = useMemo(() => {
		const tempOptions = { ...defaultIconOptions, ...iconOptions };
		// Ensure that width and height are equal
		if (iconOptions.iconHeight && !iconOptions.iconWidth) {
			// If only height is provided, set width to height value
			tempOptions.iconWidth = iconOptions.iconHeight;
		} else if (iconOptions.iconWidth && !iconOptions.iconHeight) {
			// If only width is provided, set height to width value
			tempOptions.iconHeight = iconOptions.iconWidth;
		} else if (iconOptions.iconWidth != iconOptions.iconHeight) {
			// If both are provided, but unequal, use default values
			tempOptions.iconHeight = defaultIconOptions.iconHeight;
			tempOptions.iconWidth = defaultIconOptions.iconWidth;
		}

		return tempOptions;
	}, [iconOptions]);

	const onToggle = useCallback((action) => {
		setToggledSkills((current) => {
			if (action === 'add') {
				return current + 1;
			} else {
				return Math.max(0, current - 1); // Prevent negative values
			}
		});
	}, []);

	useEffect(() => {
		if (toggledSkills === skillData.length) {
			findEgg(1, state, dispatch);
		}
	}, [toggledSkills]);

	return (
		<div id='skillContainer' className='d-flex jc-sbetween fw-wrap'>
			{skillData.map((data) =>
				isEasterEgg ? (
					<EasterEggSkill
						key={data.id}
						data={data}
						onToggle={onToggle}
						options={finalizedIconOptions}
					/>
				) : (
					<Skill key={data.id} data={data} options={finalizedIconOptions} />
				)
			)}
		</div>
	);
};

export default Skills;
