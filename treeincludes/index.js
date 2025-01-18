const treeIncludes = (root, target) => {
	if (root === null) {
		return false;
	}
	let stack = [root];

	while (stack.length > 0) {
		let cur = stack.pop();
		if (cur.val === target) {
			return true;
		} else {
			if (cur.left !== null) {
				stack.push(cur.left);
			}
			if (cur.right !== null) {
				stack.push(cur.right);
			}
		}
	}

	return false;
};
