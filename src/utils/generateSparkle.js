// Utilities and Constants
import random from './random';

// Default color is a bright yellow
export default function generateSparkle(colors) {
	return {
		id: String(random(10000, 99999)),
		createdAt: Date.now(),
		color:
			typeof colors === 'string'
				? colors
				: colors[Math.floor(Math.random() * colors.length)],
		size: random(10, 20),
		style: {
			// Pick a random spot in the available space
			top: random(0, 100) + '%',
			left: random(0, 100) + '%',
			// Float sparkles above sibling content
			zIndex: 2,
		},
	};
}
