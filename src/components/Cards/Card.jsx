const Card = ({ data }) => {
	const { heading, content, extra = undefined } = data;
	return (
		<div>
			<b className='c-alternate'>{heading}</b>
			<p className='fw-300'>{content}</p>
			{extra !== undefined && <p>{extra}</p>}
		</div>
	);
};

export default Card;
