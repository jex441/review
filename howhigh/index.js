const howHigh = (node) => {
	if (node === null) return -1;

	let queue = [node];
	let count = -1;

	while (queue.length > 0) {
		let length = queue.length;

		for (let i = 0; i < length; i++) {
			let cur = queue.shift();
			if (cur.left !== null) queue.push(cur.left);
			if (cur.right !== null) queue.push(cur.right);
		}
		count += 1;
	}

	return count;
};
