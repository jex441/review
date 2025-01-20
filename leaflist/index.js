const leafList = (root) => {
	if (root === null) return [];
	let stack = [root];
	let list = [];
	while (stack.length) {
		let cur = stack.pop();
		if (cur.left === null && cur.right === null) list.push(cur.val);
		if (cur.right) stack.push(cur.right);
		if (cur.left) stack.push(cur.left);
	}

	return list;
};
