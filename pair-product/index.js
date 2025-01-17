const pairProduct = (numbers, targetProduct) => {
	// todo
	let i = 0;

	while (i < numbers.length - 1) {
		for (let j = i + 1; j < numbers.length; j++) {
			if (numbers[i] * numbers[j] === targetProduct) {
				return [i, j];
			}
		}
		i += 1;
	}
};
