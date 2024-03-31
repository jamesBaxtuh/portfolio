// External NPM Packages
import { Link } from 'react-router-dom';

// Images and Styles
import './NotFound.css';

const NotFound = () => {
	return (
		<div id='notFound' className='ta-center m-auto'>
			<h1>404</h1>
			<h3>Feeling Lost?</h3>
			<p>
				Let's get you back{' '}
				<Link to='/' className='td-none fw-600 c-highlight'>
					home
				</Link>
				.
			</p>
		</div>
	);
};

export default NotFound;
