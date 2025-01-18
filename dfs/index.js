const depthFirstValues = (root) => {
	if (root == null) {
		return [];
	}
	let stack = [root];
	let values = [];

	while (stack.length > 0) {
		let cur = stack.pop();
		values.push(cur.val);
		if (cur.right) {
			stack.push(cur.right);
		}
		if (cur.left) {
			stack.push(cur.left);
		}
	}

	return values;
};
