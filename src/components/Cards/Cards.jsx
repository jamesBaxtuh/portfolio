// Components
import Card from './Card';

// Images and Styles
import './Cards.css';

const Cards = function ({ data, textAlign = '' }) {
	const textAlignClass = textAlign ? `ta-${textAlign}` : '';
	return (
		<div className={`homeStats d-flex fd-col ${textAlignClass}`}>
			{data.map((cardData, idx) => (
				<Card data={cardData} key={idx} />
			))}
		</div>
	);
};

export default Cards;
