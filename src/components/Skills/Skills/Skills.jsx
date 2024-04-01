// External NPM Packages
import { useState, useEffect, useCallback } from 'react';

// Utilities and Constants
import { findEgg } from '../../../utils/contexts/user/eggUtils';

// Contexts
import { useUserContext } from '../../../contexts/User/UserContext';

// Components
import Skill from '../Skill/Skill';

// Images and Styles
import './Skills.css';

const Skills = ({ skillData, easterEgg = false }) => {
	const { state, dispatch } = useUserContext();
	const [toggledSkills, setToggledSkills] = useState(0);

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
		} else if (toggledSkills === 0) {
			console.log('reset');
		}
	}, [toggledSkills]);

	return (
		<div id='skillContainer' className='d-flex jc-saround fw-wrap'>
			{skillData.map((data) => (
				<Skill
					key={data.id}
					data={data}
					onToggle={onToggle}
					easterEgg={easterEgg}
				/>
			))}
		</div>
	);
};

export default Skills;
