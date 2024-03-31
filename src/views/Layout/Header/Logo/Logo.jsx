// External NPM Packages
import { Link } from 'react-router-dom';

// Contexts
import { useTheme } from '../../../../contexts/Theme/ThemeContext';

// Images and Styles
import './Logo.css';

export default function Logo() {
	const { theme } = useTheme();
	return (
		<Link to='/'>
			{theme === 'light' && (
				<img
					id='logo'
					src='https://res.cloudinary.com/thatcloudisbuff/image/upload/v1710021737/ztq7ah0pm0rqx659igvz.png'
					alt='Developer Logo'
				/>
			)}

			{theme === 'dark' && (
				<img
					id='logo'
					src='https://res.cloudinary.com/thatcloudisbuff/image/upload/v1710021725/rgnihotwr9v6r9hwm5hq.png'
					alt='Developer Logo'
				/>
			)}
		</Link>
	);
}
