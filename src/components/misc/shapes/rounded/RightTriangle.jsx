const Triangle = ({ styles, id }) => {
	const { height = 200, width = 200 } = styles;
	return (
		<svg
			style={styles}
			viewBox='0 0 494.148 494.148'
			width={width}
			height={height}
		>
			<linearGradient id={id}>
				<stop stopColor={styles.colorOne} offset='0'></stop>
				<stop stopColor={styles.colorTwo} offset='1'></stop>
			</linearGradient>
			<path
				d='M405.284 201.188 130.804 13.28C118.128 4.596 105.356 0 94.74 0 74.216 0 61.52 16.472 61.52 44.044v406.124c0 27.54 12.68 43.98 33.156 43.98 10.632 0 23.2-4.6 35.904-13.308l274.608-187.904c17.66-12.104 27.44-28.392 27.44-45.884.004-17.48-9.664-33.764-27.344-45.864z'
				fill={`url(#${id})`}
			></path>
		</svg>
	);
};

export default Triangle;
