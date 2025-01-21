const intersection = (a, b) => {
	let output = [];
	let array;
	let shortArray;
	if (a.length > b.length) {
		array = a;
		shortArray = b;
	} else {
		array = b;
		shortArray = a;
	}
	for (let i = 0; i < array.length; i++) {
		if (shortArray.includes(array[i])) {
			output.push(array[i]);
		}
	}
	return output;
};
