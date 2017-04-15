function findLongestWord(str) {
  var newStr = str.split(' ');
  var example = 0;

  for (var i = 0; i < newStr.length; i++) {
    if (newStr[i].length > example) {
      example = newStr[i].length;
    }
  }
  return example;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
