function reverseString(str) {
  var newStr = str.split('');
  newStr.reverse();
  return newStr.join('');
}

reverseString("hello");

// bez split reverse i join

function reverseString(str) {
  var newStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

reverseString("hello");