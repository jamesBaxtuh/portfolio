import './Page.css';

const PageWrapper = ({ children, styles }) => {
	return (
		<main id='pageWrapper' style={styles}>
			{children}
		</main>
	);
};

export default PageWrapper;
