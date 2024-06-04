function artificialDelay(importFunction, delay) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(importFunction());
		}, delay);
	});
}

export default artificialDelay;
