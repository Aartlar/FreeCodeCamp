function palindrome(str) {
  var newStr = str.replace(/[_\W]+/g, "").toLowerCase();
  var halfStr = newStr.split("").reverse().join("").split(newStr.length / 2);

  return newStr.includes(halfStr);
}



palindrome("not a palindrome");
