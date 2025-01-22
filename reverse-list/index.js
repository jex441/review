const reverseList = (head) => {
	let current = head;
	let prev = null;

	while (current !== null) {
		let next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}

	return prev;
};

// recursive:
// const reverseList = (head, prev = null) => {
//     if(head === null) return prev;
//     let next = head.next;
//     head.next = prev;
//     prev = head;
//     return reverseList(next, prev)
//   };
