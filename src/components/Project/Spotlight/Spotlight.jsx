// External NPM Packages
import { Link } from 'react-router-dom';
import { HiOutlineArrowLongRight as Arrow } from 'react-icons/hi2';

// Components
import Typewriter from '../../misc/Typewriter/Typewriter';
import Sparkles from '../../misc/Sparkles/Sparkles';

// Images and Styles
import './Spotlight.css';

const Spotlight = ({ projectData }) => {
	const { imgs, extra } = projectData;

	const { typeWriterTexts } = extra;
	return (
		<section id='spotlight' className='d-flex jc-center of-hidden w-100'>
			<div className='spotlight-section d-flex fd-col ai-center jc-center'>
				<h1 className='fw-100'>Project</h1>
				<h1 className='fw-100'>Spotlight</h1>
			</div>
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
						<button className='projectView as-fend of-hidden pos-rel d-iblock td-none'>
							<span className='text pos-r'>View Project</span>
							<span className='d-block pos-abs'>
								<Link to='/projects/cushman'>
									<Arrow />
								</Link>
							</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Spotlight;
