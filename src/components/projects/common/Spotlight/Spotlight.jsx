// Components
import SpotlightGraphic from './SpotlightGraphic';

// Images and Styles
import './Spotlight.css';

const Spotlight = () => {
	return (
		<section id='spotlight' className='d-flex jc-center of-hidden w-100'>
			<div className='spotlight-section d-flex fd-col ai-center jc-center'>
				<h1 className='fw-100'>Project</h1>
				<h1 className='fw-100'>Spotlight</h1>
			</div>
			<SpotlightGraphic />
		</section>
	);
};
export default Spotlight;
