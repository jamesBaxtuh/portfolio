// External NPM Packages
import { Link } from 'react-router-dom';

// Components
import ConditionalNavLink from './ConditionalNavLink';

// Images and Styles
import './Nav.css';

export default function Nav() {
	return (
		<nav>
			<ul className='d-flex jc-start h-100'>
				<div className='navLinkContainer'>
					<ConditionalNavLink to='/#homeIntro' content='About' />
				</div>
				<div className='navLinkContainer'>
					<li>
						<Link to='/projects'>Projects</Link>
					</li>
				</div>
			</ul>
		</nav>
	);
}
