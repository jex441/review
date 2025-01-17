const mostFrequentChar = (s) => {
	let count = {};

	for (let char of s) {
		if (char in count) {
			count[char] += 1;
		} else {
			count[char] = 1;
		}
	}

	let result = s[0];
	let max = -Infinity;

	for (let key in count) {
		if (count[key] > max) {
			console.log(key);
			result = key;
			max = count[key];
		}
	}
	return result;
};
