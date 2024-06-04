// External NPM Packages

// Utilities and Constants

// Contexts

// Components
import ContentWrapper from '../../wrappers/Content/Content';

// Images and Styles
import './Contextual.css';

const ContextualText = ({ children, textContext, styles }) => {
	const { backgroundColor, highlightColor, textColor, Icon } = textContext;

	return (
		<ContentWrapper
			styles={{
				backgroundColor,
				color: textColor,
				position: 'relative',
				borderLeft: `3px solid ${highlightColor}`,
				overflow: 'visible',
				padding: '1.25% 2%',
				height: 'fit-content',
				width: 'fit-content',
			}}
		>
			<div className='iconWrapper'>
				<div style={{ border: `2px solid ${highlightColor}` }}>
					{Icon ? <Icon style={{ color: highlightColor }} /> : null}
				</div>
			</div>
			<p className='contextualTextContent'>{children}</p>
		</ContentWrapper>
	);
};

export default ContextualText;
