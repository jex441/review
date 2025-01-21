var longestCommonPrefix = function (strs) {
	let map = {};
	for (let word of strs) {
		for (let i = 0; i < word.length; i++) {
			if (!map[i]) {
				map[i] = [];
			}
			map[i].push(word[i]);
		}
	}

	let pref = "";

	for (let key in map) {
		let match = map[key][0];
		console.log("match", match);
		let segment = "";
		for (let char of map[key]) {
			if (char === match) {
				segment += char;
			}
			if (segment.length === strs.length) {
				pref += segment[0];
			}
		}
	}
	return pref;
};
