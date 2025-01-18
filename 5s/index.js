const fiveSort = (nums) => {
	let i = 0;
	let j = nums.length - 1;

	while (i < j) {
		if (nums[i] !== 5) {
			i += 1;
		}
		if (nums[j] === 5) {
			j -= 1;
		} else if (nums[i] === 5 && nums[j] !== 5) {
			let left = nums[i];
			let right = nums[j];
			nums[i] = right;
			nums[j] = left;
			i += 1;
			j -= 1;
		}
	}
	return nums;
};
