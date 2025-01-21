var twoSum = function (nums, target) {
	let map = {};

	for (let i = 0; i < nums.length; i++) {
		map[nums[i]] = i;
	}

	for (let j = 0; j < nums.length; j++) {
		let diff = target - nums[j];
		if (diff in map && map[diff] !== j) {
			return [j, map[diff]];
		}
	}
};
