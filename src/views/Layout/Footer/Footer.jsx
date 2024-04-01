// Utilities and Constants
import { GITHUB, LINKEDIN, UPWORK } from '../../../data/misc/socialsData';
import { findEgg } from '../../../utils/contexts/user/eggUtils';

// Contexts
import { useUserContext } from '../../../contexts/User/UserContext';

// Components
import Socials from '../../../components/Socials/Socials';
import Reset from '../../../components/misc/Reset/Reset';
import Divider from '../../../components/common/Divider';
import Vault from '../../../components/misc/Vault/Vault';
import EasterEggs from '../../../components/EasterEggs/Eggs/Eggs';
import Logo from '../Header/Logo/Logo';
import GradientWrapper from '../../../components/common/wrappers/Gradient/Gradient';

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
		<GradientWrapper
			styles={{
				marginTop: 'auto',
				minHeight: '100px',
				minWidth: '100%',
				paddingTop: '2px',
			}}
		>
			<footer className='d-flex bg-primary'>
				<aside className='side'>
					<Vault />
				</aside>
				<section className='middle d-flex jc-center ai-center fd-col'>
					<Logo />
					<p>&copy; 2024 Nicholas Dunn, All Rights Reserved</p>
					<div className='d-flex jc-center ai-center'>
						<a
							href='https://GITHUB.com/jamesbaxtuh/portfolio'
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
					<Socials socials={[GITHUB, LINKEDIN, UPWORK]} parent='footer' />
				</section>
				<aside className='side right'>
					<EasterEggs />
				</aside>
			</footer>
		</GradientWrapper>
	);
}
