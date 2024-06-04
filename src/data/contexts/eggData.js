/** IDEAS
 * - Hyperlink in a tooltip to a hidden page
 * - (?) Easter Egg if hidden page becomes user's favorite page (most time spent)
 * - Setting ability to turn skills(or shapes in spotlight) invis if clicked on (resets to visible w/in a certain time), if all are invis w/in a certain timeframe, easter egg
 * -
 */

function getDateMinusMinutes(minutes) {
	const currentDate = new Date(); // Get the current date and time
	const millisecondsToSubtract = minutes * 60 * 1000; // Convert minutes to milliseconds
	const pastDate = new Date(currentDate.getTime() - millisecondsToSubtract); // Subtract the milliseconds

	return pastDate;
}
// const pastDate = getDateMinusMinutes(15);
// console.log(pastDate);
// const createdAt = pastDate.getTime();
const createdAt = Date.now();
// console.log(Date(createdAt));

const EGG_DATA = {
	1: {
		id: 1,
		found: false,
		hintUsed: false,
		startTime: createdAt,
		hint: "Who knew it could snow in the desert?",
		title: "Home Page",
		location: "Home Page",
	},
	2: {
		id: 2,
		found: false,
		hintUsed: false,
		startTime: createdAt,
		hint: "Project Page Egg Hint",
		title: "Project Page",
		location: "Project Page",
	},
	3: {
		id: 3,
		found: false,
		hintUsed: false,
		startTime: createdAt,
		hint: "Secret Page Egg Hint",
		title: "Secret Page",
		location: "Secret Page Egg",
	},
};

export default EGG_DATA;
