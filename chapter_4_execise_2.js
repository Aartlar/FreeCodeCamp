function reverseArray(arr) {
  var newArr = arr.reverse();
  return newArr;
};

function reverseArrayInPlace(arr) {
  arrayValue = arr.reverse();
};

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
