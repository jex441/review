const treeLevels = (root) => {
	if (root === null) {
		return [];
	}
	let queue = [root];
	let levels = [];

	while (queue.length) {
		let length = queue.length;
		let curLevel = [];
		for (let i = 0; i < length; i++) {
			let cur = queue.shift();
			curLevel.push(cur.val);
			if (cur.left) queue.push(cur.left);
			if (cur.right) queue.push(cur.right);
		}
		levels.push(curLevel);
	}

	return levels;
};
