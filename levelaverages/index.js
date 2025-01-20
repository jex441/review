const levelAverages = (root) => {
	if (root === null) return [];
	let queue = [root];
	let averages = [];

	while (queue.length) {
		let length = queue.length;
		let sum = 0;

		for (let i = 0; i < length; i++) {
			let cur = queue.shift();
			sum += cur.val;
			if (cur.left) queue.push(cur.left);
			if (cur.right) queue.push(cur.right);
		}
		let curAvg = sum / length;
		averages.push(curAvg);
	}

	return averages;
};
