const getNodeValue = (head, index) => {
	// todo
	let cur = head;
	let count = 0;
	while (cur !== null) {
		if (count === index) {
			return cur.val;
		}
		count += 1;
		cur = cur.next;
	}
	return null;
};
