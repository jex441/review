var mergeTwoLists = function (list1, list2) {
	let dummyHead = new ListNode(null);
	let tail = dummyHead;
	let current1 = list1;
	let current2 = list2;

	while (current1 !== null && current2 !== null) {
		if (current1.val > current2.val) {
			tail.next = current2;
			current2 = current2.next;
		} else {
			tail.next = current1;
			current1 = current1.next;
		}
		tail = tail.next;
	}

	if (current1 !== null) tail.next = current1;
	if (current2 !== null) tail.next = current2;

	return dummyHead.next;
};
