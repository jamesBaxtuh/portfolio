// External NPM Packages
import { toast } from 'react-toastify';
import { FaEgg as Egg } from 'react-icons/fa6';
import confetti from 'canvas-confetti';

// Utilities and Constants
import eggData from '../../data/contexts/eggData';

export const getEggHint = (easterEggs) => {
	let hintId;
	let possibleHints = [1, 2, 3];
	if (easterEggs.log.length !== 0) {
		const foundHints = easterEggs.log.map((foundEgg) => foundEgg.id);
		possibleHints = possibleHints.filter((hint) => !foundHints.includes(hint));
	}

	hintId = possibleHints[Math.floor(Math.random() * possibleHints.length)];

	return eggData[hintId].hint;
};

export const getEggMessage = (found, hints) => {
	const messages = {
		'1-0':
			"Nice job finding your first egg -- you didn't even need a hint! Keep searching, there are two more!",
		'1-1':
			'Nice job finding your first egg -- albeit with the help of a hint. Keep searching, there are two more!',
		'2-0':
			'Wow! Two eggs found, no hints! Maybe I should look into hiring you! One more to go!',
		'2-2':
			"Hmmmm.... I'm assuming you looked a little bit before smashing the hint button. Try and find the next one hint-free, or you may be roasted!",
		'2-1':
			'Nice job finding your second egg, especially using only one hint. One more to go!',
		'3-0':
			"You're a modern-day Sherlock! Great job finding all the site's eggs, hint-free. These eggs are bound to change over time, only time will tell if you can nail the next three!",
		'3-1':
			"Nice job finding all the eggs, especially using only one hint! You're a true Sherlock in the making!",
		'3-2':
			'Nice job finding all the eggs, especially only using two hints! These eggs are bound to change over time, only time will tell if you can nail the next three!',
		'3-3': '3 eggs found, 3 hints used. ',
	};

	const roasts = [
		'I recall even my grandma needing fewer hints.',
		"That's simply not very impressive.",
		"Maybe I should've made the easter eggs blink for users like you.",
		'Your detective skills might need a little polish.',
		'Hints are not keys to victory, but you seem to think otherwise.',
		'Are you warming up, or is finding things not really your thing?',
		'Hope you’re not planning on becoming a detective.',
		'Some folks find Waldo faster than you’re finding these eggs!',
		'This would have been a roast, but the random number gods have decided to spare you.',
	];

	const key = `${found}-${hints}`;

	if (key === '3-3') {
		return messages[key] + roasts[Math.floor(Math.random() * roasts.length)];
	} else {
		return messages[key];
	}
};

export const fireConfetti = () => {
	var count = 400;
	var defaults = {
		origin: { y: 0.7 },
		ticks: 250,
	};

	function fire(particleRatio, opts) {
		confetti({
			...defaults,
			...opts,
			particleCount: Math.floor(count * particleRatio),
		});
	}

	fire(0.25, {
		spread: 26,
		startVelocity: 55,
	});
	fire(0.2, {
		spread: 60,
	});
	fire(0.35, {
		spread: 100,
		decay: 0.91,
		scalar: 0.8,
	});
	fire(0.1, {
		spread: 120,
		startVelocity: 25,
		decay: 0.92,
		scalar: 1.2,
	});
	fire(0.1, {
		spread: 120,
		startVelocity: 45,
	});
};

export const snow = () => {
	var duration = 7.5 * 1000;
	var animationEnd = Date.now() + duration;
	var skew = 1;

	function randomInRange(min, max) {
		return Math.random() * (max - min) + min;
	}

	(function frame() {
		var timeLeft = animationEnd - Date.now();
		var ticks = Math.max(200, 500 * (timeLeft / duration));
		skew = Math.max(0.8, skew - 0.001);

		confetti({
			particleCount: 1,
			startVelocity: 0,
			ticks: ticks,
			origin: {
				x: Math.random(),
				// since particles fall down, skew start toward the top
				y: Math.random() * skew - 0.2,
			},
			colors: ['#ffffff'],
			shapes: ['circle'],
			// gravity: randomInRange(0.4, 0.6),
			gravity: randomInRange(0.8, 0.9),
			scalar: randomInRange(0.4, 1),
			drift: randomInRange(-0.4, 0.5),
		});

		if (timeLeft > 0) {
			requestAnimationFrame(frame);
		}
	})();
};

export const findEgg = (id, state, dispatch) => {
	const egg = eggData[id];
	const alreadyFound = state.easterEggs.eggs[id].found;
	if (!alreadyFound) {
		dispatch({
			type: 'FIND_EGG',
			payload: {
				foundAt: Date.now(),
				id: id,
			},
		});
		fireConfetti();
		toast.success(`${egg.title} egg found!`, {
			icon: <Egg />,
		});
	}

	switch (id) {
		case 1:
			return snow();
		case 2:
			console.log('project');
			break;
		case 3:
			console.log('secret');
			break;
		default:
			return;
	}
};
