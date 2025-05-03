// Utilities and Constants
import eggData from '../../data/contexts/eggData';

const DEFAULT_STATES = {
	userContext: {
		user: {
			totalTime: 0,
			timer: Date.now(),
			favoritePage: null,
			favoriteProject: null,
			pageStats: {
				Home: {
					totalVisits: 0,
					totalTime: 0,
				},
				Projects: {
					totalVisits: 0,
					totalTime: 0,
				},
				Project_Cushman: {
					totalVisits: 0,
					totalTime: 0,
				},
				Project_Eggs: {
					totalVisits: 0,
					totalTime: 0,
				},
				Project_Stats: {
					totalVisits: 0,
					totalTime: 0,
				},
				Project_JsLibrary: {
					totalVisits: 0,
					totalTime: 0,
				},
				SecretPage: {
					totalVisits: 0,
					totalTime: 0,
				},
				NotFound: {
					totalVisits: 0,
					totalTime: 0,
				},
			},
			pageHistory: [],
		},
		easterEggs: {
			found: 0,
			hints: 0,
			eggs: eggData,
			stateMessage:
				'What are you doing here? There are easter eggs to be found!',
			timer: Date.now(),
			log: [],
		},
	},
	themeContext: getInitialTheme(),
};

function getInitialTheme() {
	const hour = new Date().getHours();
	const theme = hour >= 19 || hour < 6 ? 'dark' : 'light';
	return theme;
}

export default DEFAULT_STATES;
