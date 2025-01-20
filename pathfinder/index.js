const pathFinder = (root, target) => {
	if (root === null) return null;
	if (root.val === target) return [target];

	const leftPath = pathFinder(root.left, target);
	if (leftPath !== null) return [root.val, ...leftPath];

	const rightPath = pathFinder(root.right, target);
	if (rightPath !== null) return [root.val, ...rightPath];

	return null;
};
