// Utilities and Constants
import useSetVisibilityOnScroll from '../../../hooks/useSetVisibilityOnScroll';

// Components
import Nav from './Nav/Nav';
import Legend from './Legend/Legend';
import Logo from './Logo/Logo';

// Images and Styles
import './Header.css';

export default function Header() {
	const [isFixed, isVisible] = useSetVisibilityOnScroll(5);
	const fixedClass = isFixed ? 'fixed' : '';
	const className = `${fixedClass} ${isVisible ? 'visible' : ''}`;

	return (
		<>
			{isFixed && <div id='placeHolder' />}
			<header id='header' className={className}>
				<Nav />
				<Logo />
				<Legend />
			</header>
		</>
	);
}
