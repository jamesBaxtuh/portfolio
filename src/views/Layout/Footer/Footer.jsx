// Utilities and Constants
import { github, linkedin, upwork } from '../../../data/misc/socialsData';
import { findEgg } from '../../../utils/userContext/eggUtils';

// Contexts
import { useUserContext } from '../../../contexts/User/UserContext';

// Components
import Socials from '../../../components/Socials/Socials';
import Reset from '../../../components/misc/Reset/Reset';
import Divider from '../../../components/misc/Divider';
import EasterEggs from '../../../components/EasterEggs/Eggs/Eggs';
import Logo from '../Header/Logo/Logo';

// Images and Styles
import './Footer.css';

export default function Footer() {
	const { state, dispatch } = useUserContext();
	const handleFindEgg = () => {
		const id = (function () {
			const randomId = Math.floor(Math.random() * 4);
			return randomId === 0 ? randomId + 1 : randomId;
		})();
		findEgg(id, state, dispatch);
	};

	return (
		<footer className='bg-gradient mt-auto'>
			<div className='d-flex bg-primary'>
				<aside className='side'></aside>
				<section className='middle d-flex jc-center ai-center fd-col'>
					<Logo />
					<p>&copy; 2024 Nicholas Dunn, All Rights Reserved</p>
					<div className='d-flex jc-center ai-center'>
						<a
							href='https://github.com/jamesbaxtuh'
							target='_blank'
							rel='noopener noreferrer'
							className='hvr-underline-from-center pos-rel of-hidden td-none c-alternate'
						>
							View this site's code
						</a>
						<Divider />
						<Reset />
					</div>
					<button onClick={handleFindEgg}>Find Easter Egg</button>
					<Socials socials={[github, linkedin, upwork]} parent='footer' />
				</section>
				<aside className='side right'>
					<EasterEggs />
				</aside>
			</div>
		</footer>
	);
}
