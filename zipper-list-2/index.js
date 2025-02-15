const zipperLists = (head1, head2) => {
	let head = head1;
	let tail = head;
	let current1 = head1.next;
	let current2 = head2;
	let count = 0;

	while (current1 !== null && current2 !== null) {
		if (count % 2 === 0) {
			// if even, take from list2
			tail.next = current2;
			current2 = current2.next;
		} else {
			// if odd, take from list1
			tail.next = current1;
			current1 = current1.next;
		}
		tail = tail.next;
		count += 1;
	}

	if (current1 !== null) tail.next = current1;
	if (current2 !== null) tail.next = current2;

	return head;
};
