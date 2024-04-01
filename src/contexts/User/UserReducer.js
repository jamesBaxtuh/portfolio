// Utilities and Constants
import { getEggHint, getEggMessage } from '../../utils/contexts/user/eggUtils';
import { createNewStateForPageTrack } from '../../utils/contexts/user/userUtils';
import loadInitialState from '../../utils/contexts/loadInitialState';
import defaultStates from '../../data/contexts/defaultStates';

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

			// Make sure egg hasn't already been found
			if (easterEggs.eggs[id].found) {
				return state;
			}

			const eggEntry = {
				id,
				hintUsed: easterEggs.hintMessage !== null,
				timeUsed: foundAt - easterEggs.timer,
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
					...easterEggs.eggs[id],
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
			const hintMessage = getEggHint(easterEggs);
			// Updated value
			const updatedHintCount = easterEggs.hints + 1;

			return {
				...state,
				easterEggs: {
					...easterEggs,
					hints: updatedHintCount,
					hintMessage,
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
