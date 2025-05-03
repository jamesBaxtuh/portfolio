// External NPM Packages
import { Link } from 'react-router-dom';
import { HiOutlineArrowLongRight as Arrow } from 'react-icons/hi2';

// Utilities and Constants
import { SPOTLIGHT_DATA } from '../../../../data/content/projects/Spotlight/spotlightData';

// Components
import Typewriter from '../../../misc/Typewriter/Typewriter';
import Sparkles from '../../../misc/Sparkles/Sparkles';

export const SpotlightGraphic = ({ showButton = true }) => {
	const { imgs, extra } = SPOTLIGHT_DATA;
	const { typeWriterTexts } = extra;

	return (
		<div className='spotlight-section'>
			<div className='w-100 h-100 d-flex fd-col'>
				<div id='circleOne' className='pos-abs'></div>
				<div id='circleTwo' className='pos-abs'></div>
				<Sparkles>
					<img
						src={imgs.introImageUrlAndAlt[0]}
						alt={imgs.introImageUrlAndAlt[1]}
					/>
				</Sparkles>
				<div className='d-flex fd-col jc-center mt-auto'>
					<Typewriter texts={typeWriterTexts} />
					{showButton && (
						<button className='projectView as-fend of-hidden pos-rel d-iblock td-none'>
							<span className='text pos-r'>View Project</span>
							<span className='d-block pos-abs'>
								<Link to={`/projects/${SPOTLIGHT_DATA.title}`}>
									<Arrow />
								</Link>
							</span>
						</button>
					)}
				</div>
			</div>
		</div>
	);
};
export default SpotlightGraphic;
