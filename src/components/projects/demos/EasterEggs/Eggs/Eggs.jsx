// External NPM Packages
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { RxExternalLink as LinkArrow } from 'react-icons/rx';
import { FaEgg as EggIcon } from 'react-icons/fa6';

// Utilities and Constants
import { EGG_STATES } from '../../../../../data/content/projects/EasterEggs/easterEggData';
import calculateTimeFromMs from '../../../../../utils/calculateTimeFromMs';

// Contexts
import { useUserContext } from '../../../../../contexts/User/UserContext';

// Components
import Egg from '../Egg/Egg';
import GradientWrapper from '../../../../common/wrappers/Gradient/Gradient';

// Images and Styles
import './Eggs.css';

const Eggs = ({ demo = true }) => {
	const { state } = useUserContext();
	const { easterEggs } = state;

	const mappableEggs = useMemo(() => {
		return Object.values(easterEggs.eggs);
	}, [easterEggs.eggs]);

	if (demo) {
		return (
			<div
				className='d-flex'
				style={{
					backgroundColor: 'var(--ee-demo-bg)',
					padding: '2.5%',
					borderRadius: '5px',
				}}
			>
				<GradientWrapper
					styles={{
						borderRadius: '2.5px',
						marginInline: 'auto',
						minWidth: '45%',
						maxWidth: '45%',
						padding: '1px',
					}}
				>
					<div className='easterEggs demo'>
						<h3 className='easterEggsHeader'>{easterEggs.stateMessage}</h3>
						<div className='eggLegend'>
							{EGG_STATES.map((eggState) => (
								<span key={eggState[0]}>
									<EggIcon style={{ color: eggState[1], marginRight: '5px' }} />
									<span>{eggState[0]}</span>
								</span>
							))}
						</div>
						<div className='easterEggsLegend'></div>
						{mappableEggs.map((egg) => (
							<Egg easterEgg={egg} key={egg.id} isDemo={true} />
						))}
					</div>
				</GradientWrapper>
				<GradientWrapper
					styles={{
						borderRadius: '2.5px',
						marginInline: 'auto',
						minWidth: '45%',
						maxWidth: '45%',
						padding: '1px',
					}}
				>
					<section className='logSection'>
						<h3 className='easterEggHeader'>Log</h3>
						<div className='eggLog'>
							{easterEggs.log.length === 0 ? (
								<>
									<h4>Oh no! So empty!</h4>
									<p>
										When you find easter eggs, their stats will be populated
										here!
									</p>
								</>
							) : (
								easterEggs.log.map((foundEgg, index) => (
									<div className='eggLogEntry' key={index}>
										<div className='eggLogEntryHeader'>
											<h4>Entry #{index + 1}:</h4>
										</div>
										<div className='eggLogEntryContent d-flex'>
											<div className='eggLogEntryStat'>
												<p>{easterEggs.eggs[foundEgg.id].title}</p>
												<span>Egg Name</span>
											</div>
											<div className='eggLogEntryStat middle'>
												<p>
													{calculateTimeFromMs(
														Math.floor(foundEgg.timeUsed / 100)
													)}
												</p>
												<span>Time Needed</span>
											</div>
											<div className='eggLogEntryStat'>
												<p>{foundEgg.hintUsed ? 'Yes' : 'No'}</p>
												<span>Hint Needed</span>
											</div>
										</div>
									</div>
								))
							)}
						</div>
					</section>
				</GradientWrapper>
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
				<div className='easterEggs footer'>
					<p className='easterEggsHeader'>Easter Eggs </p>
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
