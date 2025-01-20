const linkedListValues = (head) => {
	// todo
	let vals = [];
	let current = head;
	while (current !== null) {
		vals.push(current.val);
		current = current.next;
	}
	return vals;
};
