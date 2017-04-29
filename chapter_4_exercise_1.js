function range(a, b, c) {
  c === undefined? c = 1 : c;
  var arr = [];
  for (a; a !== b; a += c) {
    arr.push(a);
  }
  arr.push(b);
  return arr;
};

function sum(range) {
   return range.reduce(function(previous, current) {
     return previous += current;
   });
 };

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
