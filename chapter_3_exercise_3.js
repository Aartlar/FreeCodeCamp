function countBs(string) {
	var newStr = 0;
	for (var i = 0; i < string.length; i++) {
      if (string[i] === 'B') {
        newStr++;
      }
    }
  	return newStr;
};

function countChar(string, letter) {
	var newStr = 0;
	for (var i = 0; i < string.length; i++) {
      if (string[i] === letter) {
        newStr++;
      }
    }
  	return newStr;
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
