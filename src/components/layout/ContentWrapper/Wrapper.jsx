// Images and Styles
import './Wrapper.css';

const ContentWrapper = ({ children, styles }) => {
	return (
		<div className='contentWrapper' style={styles}>
			{children}
		</div>
	);
};

export default ContentWrapper;
