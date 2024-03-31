// External NPM Packages
import { useState } from 'react';
import { IoMoon as Moon, IoSunny as Sun } from 'react-icons/io5';

// Contexts
import { useTheme } from '../../../../../contexts//Theme/ThemeContext';

// Images and Styles
import './Theme.css';

export default function Theme() {
	const { theme, setTheme } = useTheme();
	const [slideIn, setSlideIn] = useState(undefined);
	const [slideOut, setSlideOut] = useState(undefined);
	const [invisible, setInvisible] = useState(undefined);

	const handleClick = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light'; // Get new theme
		document.body.setAttribute('data-theme', newTheme); // Set appropriate attribute on the document body
		localStorage.setItem('theme', newTheme); // Save the theme preference (for components outside of ThemeContext i.e. <Loading/>)
		setTheme(newTheme);

		if (
			(theme === 'light' && slideOut === 'sun') ||
			(theme === 'dark' && slideOut === 'moon')
		) {
			setInvisible(theme === 'light' ? 'sun' : 'moon');
		} else {
			setInvisible(undefined);
		}
	};

	const onMouseEnter = () => {
		// Reset visibility of icons
		setInvisible(undefined);

		if (theme === 'dark') {
			setSlideOut('moon');
			setSlideIn('sun');
		} else {
			setSlideOut('sun');
			setSlideIn('moon');
		}
	};

	const onMouseLeave = () => {
		setSlideOut(undefined);
		setSlideIn(undefined);
	};

	return (
		<button
			id='themeButton'
			className={`${theme} bg-gradient`}
			onClick={handleClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<div className='d-flex jc-center ai-center of-hidden pos-rel h-100 w-100 bg-primary border-50'>
				<Moon
					className={`moon icon ${theme === 'dark' ? 'active' : 'inactive'} ${
						slideIn === 'moon' && 'slideIn'
					} ${slideOut === 'moon' && 'slideOut'}
					${invisible === 'moon' && 'hidden'}
					`}
				/>
				<Sun
					className={`sun icon ${theme === 'light' ? 'active' : 'inactive'} ${
						slideIn === 'sun' && 'slideIn'
					} ${slideOut === 'sun' && 'slideOut'}
					${invisible === 'sun' && 'hidden'}
					`}
				/>
			</div>
		</button>
	);
}
