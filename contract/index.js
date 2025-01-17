const compress = (s) => {
	let i = 0;
	let j = 0;
	let output = [];

	while (i < s.length) {
		if (s[i] === s[j]) {
			j += 1;
		} else {
			let num = j - i;
			num > 1 ? output.push(num + s[i]) : output.push(s[i]);
			i = j;
			j += 1;
		}
	}

	return output.join("");
};
