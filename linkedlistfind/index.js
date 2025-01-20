const linkedListFind = (head, target) => {
	let cur = head;
	while (cur !== null) {
		if (cur.val === target) return true;
		cur = cur.next;
	}
	return false;
};
