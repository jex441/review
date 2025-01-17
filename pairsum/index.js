const pairSum = (numbers, targetSum) => {
	let i = 0;

	while (i < numbers.length - 1) {
		for (let k = i + 1; k < numbers.length; k++) {
			if (numbers[i] + numbers[k] === targetSum) {
				return [i, k];
			}
		}
		i += 1;
	}
};
