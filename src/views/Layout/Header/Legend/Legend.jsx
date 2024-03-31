// Utilities and Constants
import { github, linkedin, upwork } from '../../../../data/misc/socialsData';

// Components
import Theme from './Theme/Theme';
import Clock from './Clock/Clock';
import Socials from '../../../../components/Socials/Socials';

// Images and Styles
import './Legend.css';

export default function Legend() {
	return (
		<section id='legendSection' className='d-flex jc-fend ai-center'>
			<Socials socials={[github, linkedin, upwork]} parent='header' />
			<>
				<Theme />
				<Clock />
			</>
		</section>
	);
}
