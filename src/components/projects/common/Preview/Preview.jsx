// External NPM Packages
import { Link } from 'react-router-dom';
// Utilities and Constants

// Contexts
import { infoContext } from '../../../../data/content/common/themedTextData';

// Components
import SpotlightGraphic from '../Spotlight/SpotlightGraphic';
import GradientWrapper from '../../../common/wrappers/Gradient/Gradient';
import ContextualText from '../../../common/text/Contextual/Contextual';
import Skills from '../../../Skills/Skills/Skills';

// Images and Styles
import './Preview.css';

const Preview = ({ data }) => {
	return (
		<Link to={data.href} className='previewContainer'>
			{data.spotlight ? (
				<div className='previewGraphic'>
					<SpotlightGraphic showButton={false} />
				</div>
			) : (
				<div className='previewGraphic'>
					<img src={data.graphic} />
				</div>
			)}
			<div className='previewContent'>
				<h1>{data.title}</h1>
				<p>
					{data.projectType}
				</p>
				{data.ongoing && (
					<ContextualText textContext={infoContext}>
						This project is on-going.
					</ContextualText>
				)}
				<Skills
					skillData={data.attributes}
					iconOptions={{
						containerWidth: '10%',
						iconHeight: '25px',
						iconWidth: '25px',
						iconColor: 'var(--alternate-color)',
					}}
				/>
				<p>{data.preview}</p>
			</div>
		</Link>
	);
};

export default Preview;
