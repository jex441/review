const treeValueCount = (root, target) => {
	if (root === null) return 0;

	let queue = [root];
	let count = 0;

	while (queue.length > 0) {
		let cur = queue.shift();
		if (cur.val && cur.val === target) count += 1;
		if (cur.left !== null) queue.push(cur.left);
		if (cur.right !== null) queue.push(cur.right);
	}

	return count;
};
