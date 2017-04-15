function reverseString(str) {
  var newStr = str.split('');
  newStr.reverse();
  return newStr.join('');
}

reverseString("hello");
