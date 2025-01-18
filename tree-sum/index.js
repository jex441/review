// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeSum = (root) => {
	if (root === null) {
		return 0;
	}
	let sum = 0;
	let queue = [root];

	while (queue.length > 0) {
		let cur = queue.shift();
		sum += cur.val;
		if (cur.left !== null) {
			queue.push(cur.left);
		}
		if (cur.right !== null) {
			queue.push(cur.right);
		}
	}

	return sum;
};
