// Utilities and Constants
import NAV_LINKS from '../../../../data/global/navLinks';

// Components
import NavLink from './Link/Link';

// Images and Styles
import './Nav.css';

export default function Nav() {
	return (
		<nav>
			<ul className='d-flex jc-start h-100'>
				{NAV_LINKS.map((data) => (
					<NavLink data={data} key={data.content} />
				))}
			</ul>
		</nav>
	);
}
