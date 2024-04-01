// External NPM Packages
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { RxExternalLink as LinkArrow } from 'react-icons/rx';

// Contexts
import { useUserContext } from '../../../contexts/User/UserContext';

// Components
import Egg from '../Egg/Egg';
import GradientWrapper from '../../common/wrappers/Gradient/Gradient';

// Images and Styles
import './Eggs.css';

const Eggs = ({ detailed = false }) => {
	const { state, dispatch } = useUserContext();
	const [showHint, setShowHint] = useState(false);

	const { easterEggs } = state;

	const useHint = () => {
		if (easterEggs.hintMessage === null) {
			dispatch({ type: 'USE_HINT' });
		}
		setShowHint(!showHint);
	};

	const mappableEggs = useMemo(() => {
		return Object.values(easterEggs.eggs);
	}, [easterEggs.eggs]);

	if (detailed) {
		return (
			<div>
				<h1>Placeholder</h1>
			</div>
		);
	} else {
		return (
			<GradientWrapper
				styles={{
					borderRadius: '2.5px',
					marginInline: 'auto',
					maxWidth: 'fit-content',
					padding: '1px',
				}}
			>
				<div className='easterEggs d-flex fd-col ai-center fw-300 bg-primary'>
					<p className='mbl-0 ta-center'>Easter Eggs </p>
					{mappableEggs.map((egg) => (
						<Egg easterEgg={egg} key={egg.id} />
					))}
					<div className='d-flex ai-center'>
						<Link to='/projects/easter-eggs'>Stats and hints</Link>
						<LinkArrow style={{ marginLeft: '5px' }} />
					</div>
				</div>
			</GradientWrapper>
		);
	}
};

export default Eggs;
