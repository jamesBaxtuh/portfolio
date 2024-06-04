// Images and Styles
import './Content.css';

const ContentWrapper = ({ children, styles, containChildren = false }) => {
	return (
		<div className={`contentWrapper ${containChildren && 'children-mw-90'}`} style={styles}>
			{children}
		</div>
	);
};

export default ContentWrapper;
