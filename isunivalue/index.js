const isUnivalueList = (head) => {
	// todo
	let val = head.val;
	let cur = head;

	while (cur) {
		if (cur.val !== val) return false;
		cur = cur.next;
	}
	return true;
};
