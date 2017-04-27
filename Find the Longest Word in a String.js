function findLongestWord(str) {
  return str.split(" ").reduce(function(previousValue, currentValue, index, array) {
  return previousValue.length > currentValue.length? previousValue : currentValue;
}).length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

