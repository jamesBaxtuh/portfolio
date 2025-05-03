// External NPM Packages
import { useMemo } from 'react';
import { FaEgg as EggIcon, FaRegLightbulb as HintIcon } from 'react-icons/fa6';
import { Tooltip } from 'react-tooltip';

// Utilities and Constants
import { createEggSettings } from '../../../../../utils/contexts/user/eggUtils';

// Contexts
import { useUserContext } from '../../../../../contexts/User/UserContext';
import ContextualText from '../../../../common/text/Contextual/Contextual';
import { infoContext } from '../../../../../data/content/common/themedTextData';

const Egg = ({ easterEgg, isDemo = false }) => {
	const { dispatch } = useUserContext();

	const useHint = () => {
		dispatch({ type: 'USE_HINT', payload: easterEgg.id });
	};

	const easterEggSettings = useMemo(
		() => createEggSettings(easterEgg, isDemo),
		[easterEgg.found, easterEgg.hintUsed]
	);

	// console.log(easterEggSettings);
	return (
		<div className={`easterEgg ${easterEggSettings.eggType}`}>
			<div className='easterEggHeader'>
				{isDemo ? (
					<>
						<EggIcon
							className={`easterEggIcon easterEgg${easterEggSettings.status}`}
						/>
						<h4>{`${easterEgg.title}`}</h4>
						<div className='iconContainer'>
							<HintIcon
								data-tooltip-id={`hint${easterEgg.id}`}
								data-tooltip-content={easterEggSettings.tooltip.content}
								aria-label={easterEggSettings.tooltip.ariaLabel}
								className={`${
									easterEggSettings.status !== 'Hint' ||
									easterEggSettings.status !== 'Discovered'
										? 'disabled'
										: ''
								}`}
								onClick={useHint}
							/>
							<Tooltip
								place='right'
								id={`hint${easterEgg.id}`}
								style={easterEggSettings.tooltip.styles}
							/>
						</div>
					</>
				) : (
					<>
						<EggIcon
							className={`easterEggIcon easterEgg${easterEggSettings.status}`}
						/>
						<h4>{`${easterEgg.title}`}</h4>
					</>
				)}
			</div>
			{!isDemo ? (
				<p>{easterEgg.found ? ' Found!' : ' Not Found'}</p>
			) : (
				<div className='easterEggBody'>
					<>
						{easterEgg.hintUsed && (
							<ContextualText textContext={infoContext}>
								{easterEgg.hint}
							</ContextualText>
						)}
					</>
				</div>
			)}
		</div>
	);
};

export default Egg;
