var hasCycle = function (head) {
	let values = [];
	let current = head;

	while (current !== null) {
		if (values.includes(current.val)) {
			return true;
		}
		values.push(current.val);
		current = current.next;
	}

	return false;
};
