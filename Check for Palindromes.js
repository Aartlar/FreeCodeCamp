function palindrome(str) {
  var newStr = str.replace(/[_\W]+/g, "").toLowerCase();
  var halfStr = newStr.split("").reverse().join("");

  return newStr === halfStr;
}



palindrome("not a palindrome");
