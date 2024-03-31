const Blur = ({ children, blurRadius }) => {
	return (
		<div
			style={{ backdropFilter: `blur(${blurRadius})` }}
			className='w-100 h-100'
		>
			{children}
		</div>
	);
};

export default Blur;
