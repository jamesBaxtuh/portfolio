const RoundedSquare = ({ styles, id }) => {
	const { height = 200, width = 200 } = styles;
	return (
		<svg
			style={styles}
			viewBox='0 0 497.502 497.502'
			width={width}
			height={height}
		>
			<defs>
				<linearGradient id={id}>
					<stop stopColor={styles.colorOne} offset='0'></stop>
					<stop stopColor={styles.colorTwo} offset='1'></stop>
				</linearGradient>
			</defs>
			<path
				d='M433.498.009H65.071A64.21 64.21 0 0 0 63.996 0C28.649.005 0 28.663.004 64.009v368.427c.117 35.887 29.18 64.95 65.067 65.067h368.427c35.469-.695 63.891-29.591 64-65.067V64.009c0-35.346-28.654-64-64-64z'
				fill={`url(#${id})`}
			></path>
		</svg>
	);
};

export default RoundedSquare;
