const Diamond = ({ styles, id }) => {
	const { height = 200, width = 200 } = styles;
	return (
		<svg
			style={styles}
			viewBox='0 0 487.272 487.272'
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
				d='M468.018 196.707 289.885 18.573c-26.341-23.625-66.246-23.625-92.587 0L19.165 196.493c-25.554 25.573-25.554 67.014 0 92.587L197.298 467a63.997 63.997 0 0 0 46.293 19.413 64 64 0 0 0 46.293-18.987l178.133-178.133.267-.267c25.421-25.567 25.302-66.9-.266-92.319z'
				fill={`url(#${id})`}
			></path>
		</svg>
	);
};

export default Diamond;
