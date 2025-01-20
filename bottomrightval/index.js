const bottomRightValue = (root) => {
	let map = { level: -1, val: 0 };
	let count = -1;
	let queue = [root];

	while (queue.length > 0) {
		let length = queue.length;
		count += 1;
		for (let i = 0; i < length; i++) {
			let cur = queue.shift();
			if ((i = queue.length - 1)) {
				if (count > map.level) {
					map.level = count;
					map.val = cur.val;
				}
			}
			if (cur.left !== null) queue.push(cur.left);
			if (cur.right !== null) queue.push(cur.right);
		}
	}
	return map.val;
};
