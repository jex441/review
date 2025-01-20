const sumList = (head) => {
	let count = 0;
	let current = head;
	while (current !== null) {
		count += current.val;
		current = current.next;
	}
	return count;
};
