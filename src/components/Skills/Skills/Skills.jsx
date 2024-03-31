// Components
import Icon from '../Skill/Skill';

// Images and Styles
import './Skills.css';

const Skills = ({ skillData }) => {
	return (
		<div id='skillContainer' className='d-flex jc-saround fw-wrap'>
			{skillData.map((data) => (
				<Icon key={data.id} data={data} />
			))}
		</div>
	);
};

export default Skills;
