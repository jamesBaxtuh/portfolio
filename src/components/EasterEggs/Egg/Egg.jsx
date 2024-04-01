// External NPM Packages
import { FaEgg as EggIcon } from 'react-icons/fa6';

// Utilities and Constants
import eggData from '../../../data/contexts/eggData';

const Egg = ({ easterEgg, detailed = false }) => {
	if (detailed) {
		// Display detailed easter egg status
		return (
			<div>
				<EggIcon />
				<p>{eggData[easterEgg.id].title}</p>
				{/* <p>{easterEggs.stateMessage}</p> */}
			</div>
		);
	} else {
		const eggColor = easterEgg.found ? '#07bc0c' : 'var(--alternate-color)';
		// const eggColor = easterEgg.found ? '#07bc0c' : 'red';
		return (
			<div
				className='easterEgg d-flex fd-col ai-center f-grow-0'
				// style={{ color: eggColor }}
			>
				<div className='easterEggTitle'>
					<EggIcon
						className='fw-600'
						// style={{ fontSize: '16px', marginRight: '5px' }}
						style={{ fontSize: '16px', marginRight: '5px', color: eggColor }}
					/>
					<p className='mbl-0'>{`${easterEgg.title}`}</p>
				</div>
				<p>
					{/* <p style={{ color: eggColor }}> */}
					{easterEgg.found ? ' Found!' : ' Not Found'}
				</p>
			</div>
		);
	}
};

export default Egg;
