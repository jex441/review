//   }
// }

const breadthFirstValues = (root) => {
	if (root === null) {
		return [];
	}
	let queue = [root];
	let values = [];

	while (queue.length > 0) {
		let cur = queue.shift();
		values.push(cur.val);
		if (cur.left !== null) {
			queue.push(cur.left);
		}
		if (cur.right !== null) {
			queue.push(cur.right);
		}
	}

	return values;
};
