const Divider = ({
	height = '80%',
	width = '2px',
	backgroundColor = 'var(--alternate-color)',
	opacity = '0.5',
	marginInline = '7.5px',
}) => {
	return (
		<div style={{ height, width, backgroundColor, opacity, marginInline }} />
	);
};
export default Divider;
