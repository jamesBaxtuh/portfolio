// Utilities and Constants
import { getEggHint, getEggMessage } from '../../utils/contexts/user/eggUtils';
import { createNewStateForPageTrack } from '../../utils/contexts/user/userUtils';
import loadInitialState from '../../utils/contexts/loadInitialState';
import defaultStates from '../../data/contexts/defaultStates';
import calculateTimeFromMs from '../../utils/calculateTimeFromMs';

export const initialState = loadInitialState('userContext');

export const userReducer = function (state, action) {
	switch (action.type) {
		/* User Actions */
		case 'TRACK_PAGE': {
			const { user } = state;
			const { page, isFirstVisit = false } = action.payload;

			// Create and add new log
			const newLog = {
				page,
				timestamp: isFirstVisit ? user.timer : Date.now(),
			};

			const updatedState = createNewStateForPageTrack(
				state,
				newLog,
				isFirstVisit
			);

			return {
				...updatedState,
			};
		}
		/* Easter Egg Actions */
		case 'FIND_EGG': {
			const { foundAt, id } = action.payload;
			const { easterEggs } = state;
			const foundEgg = easterEggs.eggs[id];
			console.log(
				'originalTime:',
				new Date(foundEgg.startTime).toString(),
				'\nTime in Ms:',
				foundEgg.startTime
			);
			console.log(
				'foundAt:',
				new Date(foundAt).toString(),
				'\nTime in Ms:',
				foundAt
			);
			console.log(
				'Difference:',
				foundAt - foundEgg.startTime,
				`\nTime diff:`,
				calculateTimeFromMs(foundAt - foundEgg.startTime)
			);

			return state;
			// Make sure egg hasn't already been found
			if (foundEgg.found) {
				return state;
			}

			const eggEntry = {
				id,
				hintUsed: foundEgg.hintUsed,
				timeUsed: foundAt - foundEgg.startTime,
			};

			// Updated values
			const updatedFoundCount = easterEggs.found + 1;
			const updatedTimer = Date.now(); // Reset time to current time for the timeUsed calculation of next egg
			const updatedMessage = getEggMessage(
				easterEggs.found + 1,
				easterEggs.hints
			);
			const updatedLog = [...easterEggs.log, eggEntry];
			const updatedEggData = {
				...easterEggs.eggs,
				[id]: {
					...foundEgg,
					found: true,
				},
			};

			return {
				...state,
				easterEggs: {
					...easterEggs,
					found: updatedFoundCount,
					timer: updatedTimer,
					eggs: updatedEggData,
					hintMessage: null,
					stateMessage: updatedMessage,
					log: updatedLog,
				},
			};
		}
		case 'USE_HINT': {
			const { easterEggs } = state;
			const previousEggState = easterEggs.eggs[action.payload];

			if (previousEggState.hintUsed || previousEggState.found) return state;

			// Updated value
			const updatedHintCount = easterEggs.hints + 1;

			return {
				...state,
				easterEggs: {
					...easterEggs,
					eggs: {
						...easterEggs.eggs,
						[action.payload]: {
							...previousEggState,
							hintUsed: true,
						},
					},
					hints: updatedHintCount,
				},
			};
		}
		/* General Actions */
		case 'RESET_STATS': {
			return {
				...defaultStates['userContext'],
			};
		}
		default:
			return state;
	}
};
