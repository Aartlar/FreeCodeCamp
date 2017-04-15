function palindrome(str) {
  var rdyStr = str.replace(/[_\W]+/g, "");
  var newStr = rdyStr.toLowerCase();
  var example;

  for (var i = 0; i < newStr.length;) {
    if (newStr[i] === newStr[newStr.length - 1 - i]) {
      example = true;
      i++;
    } else {
      return false;
    }
  }
  return example;
}



palindrome("E-ye#");
