const BlurWrapper = ({ children, blurRadius, styles }) => {
	return (
		<div
			style={{ ...styles, backdropFilter: `blur(${blurRadius})` }}
			className='w-100 h-100'
		>
			{children}
		</div>
	);
};

export default BlurWrapper;
