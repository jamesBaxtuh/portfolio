// Utilities and Constants
import {
	GITHUB,
	LINKEDIN,
	UPWORK,
} from '../../../data/content/common/socialsData';

// Components
import Socials from '../../Socials/Socials';
import Reset from '../../misc/Reset/Reset';
import Divider from '../Divider';
import VaultV2 from '../../Vault/Vault_V2';
import EasterEggs from '../../projects/demos/EasterEggs/Eggs/Eggs';
import Logo from '../Header/Logo/Logo';
import GradientWrapper from '../wrappers/Gradient/Gradient';

// Images and Styles
import './Footer.css';

export default function Footer() {
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
				<aside className='side'></aside>
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
					<VaultV2 />
					<Socials socials={[GITHUB, LINKEDIN, UPWORK]} parent='footer' />
				</section>
				<aside className='side right'>
					<EasterEggs demo={false} />
				</aside>
			</footer>
		</GradientWrapper>
	);
}
