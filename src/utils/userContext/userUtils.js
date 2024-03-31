export const createNewStateForPageTrack = (state, newLog, isFirstVisit) => {
	const { user } = state;
	const { page } = newLog;

	if (isFirstVisit) {
		return handleFirstVisit(state, user, newLog, page);
	} else {
		return handleSubsequentVisit(state, user, newLog, page);
	}
};

// Handle the first visit scenario
function handleFirstVisit(state, user, newLog, page) {
	const updatedPageStats = updateUserPageStats(user.pageStats, page, 1, 0);
	return {
		...state,
		user: {
			...user,
			pageHistory: [newLog],
			favoritePage: page,
			pageStats: updatedPageStats,
		},
	};
}

// Handle subsequent visits
function handleSubsequentVisit(state, user, newLog, page) {
	const updatedTimer = Date.now();
	const previousPage = user.pageHistory[user.pageHistory.length - 1];
	const timeSpent = updatedTimer - previousPage.timestamp;
	const updatedPageStats = updateUserPageStats(
		user.pageStats,
		page,
		1,
		timeSpent,
		previousPage.page
	);
	const updatedFavoritePage = determineFavoritePage(
		user,
		previousPage.page,
		page
	);

	return {
		...state,
		user: {
			...user,
			totalTime: user.totalTime + timeSpent,
			timer: updatedTimer,
			favoritePage: updatedFavoritePage,
			pageHistory: [...user.pageHistory, newLog],
			pageStats: updatedPageStats,
		},
	};
}

// Utility function to update page stats
function updateUserPageStats(
	pageStats,
	currentPage,
	visitsToAdd,
	timeToAdd,
	previousPage = null
) {
	const updatedStats = { ...pageStats };

	// Update current page visits
	if (currentPage in updatedStats) {
		updatedStats[currentPage] = {
			...updatedStats[currentPage],
			totalVisits: updatedStats[currentPage].totalVisits + visitsToAdd,
		};
	} else {
		updatedStats[currentPage] = { totalVisits: 1, totalTime: 0 }; // Initialize if not exist
	}

	// Add time to previous page if specified
	if (previousPage && previousPage in updatedStats) {
		updatedStats[previousPage].totalTime += timeToAdd;
	}

	return updatedStats;
}

// Determine the favorite page based on total time spent
function determineFavoritePage(user, previousPage, currentPage) {
	return user.pageStats[previousPage].totalTime >
		user.pageStats[user.favoritePage].totalTime
		? previousPage
		: user.favoritePage;
}
