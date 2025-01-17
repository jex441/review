const uncompress = (s) => {
	let output = [];
	let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	let i = 0;
	let j = 0;

	while (j < s.length) {
		if (nums.includes(s[j])) {
			j += 1;
		} else {
			const num = Number(s.slice(i, j));
			for (count = 0; count < num; count += 1) {
				output.push(s[j]);
			}
			j += 1;
			i = j;
		}
	}
	return output.join("");
};
