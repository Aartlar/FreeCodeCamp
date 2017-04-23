function range(a, b, c) {
  var c = arguments[2];
  var result = [];
  if (c === undefined) {
    c = 1;
  }
  if (a > b) {
    for (; a >= b; a += c) {
    result.push(a);
    }
  } else {
    for (; a <= b; a += c) {
    result.push(a);
    }
  }
  return result;
};

function sum(range) {
   var result = 0;
   for (var i = 0; i < range.length; i++) {
     result += range[i];
   }
   return result;
 };

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
