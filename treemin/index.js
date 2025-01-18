const treeMinValue = (root) => {
	// todo
	let queue = [root];
	let min = Infinity;

	while (queue.length) {
		let cur = queue.shift();
		if (cur.val < min) {
			min = cur.val;
		}
		if (cur.left !== null) queue.push(cur.left);
		if (cur.right !== null) queue.push(cur.right);
	}
	return min;
};
