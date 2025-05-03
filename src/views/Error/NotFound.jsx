// External NPM Packages
import { Link } from 'react-router-dom';

// Components
import PageWrapper from '../../components/common/wrappers/Page/Page';

// Images and Styles
import './NotFound.css';
import ContentWrapper from '../../components/common/wrappers/Content/Content';

const NotFound = () => {
	return (
		<ContentWrapper
			styles={{
				textAlign: 'center',
				borderRadius: '2.5px',
				padding: '2.5%',
				minHeight: '40vh',
				margin: '10vh auto',
			}}
		>
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
		</ContentWrapper>
	);
};

export default NotFound;
