const GradientWrapper = ({ children, styles, autoSetBg = true }) => {
	if (autoSetBg) {
		return (
			<div className='gradientWrapper bg-gradient' style={styles}>
				{children}
			</div>
		);
	} else {
		return (
			<div className='gradientWrapper' style={styles}>
				{children}
			</div>
		);
	}
};

export default GradientWrapper;
