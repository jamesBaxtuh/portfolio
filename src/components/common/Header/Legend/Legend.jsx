// Utilities and Constants
import {
	GITHUB,
	LINKEDIN,
	UPWORK,
} from '../../../../data/content/common/socialsData';

// Components
import Theme from './Theme/Theme';
import Clock from './Clock/Clock';
import Socials from '../../../../components/Socials/Socials';

// Images and Styles
import './Legend.css';

export default function Legend() {
	return (
		<section id='legendSection' className='d-flex jc-fend ai-center'>
			<Socials socials={[GITHUB, LINKEDIN, UPWORK]} parent='header' />
			<>
				<Theme />
				<Clock />
			</>
		</section>
	);
}
