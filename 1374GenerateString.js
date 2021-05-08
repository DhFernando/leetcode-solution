var generateTheString = function(n) {
	return n > 1 
		? (n % 2 ? 'ab' : 'a').padEnd(n, 'c') 
		: 'a'
};