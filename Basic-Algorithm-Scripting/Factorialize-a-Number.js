
function factorialize(num) {
	var total = 1;
	for (i = 1; i <= num; i++) {
		total = total * i;
	}
	return total;
}

factorialize(5);