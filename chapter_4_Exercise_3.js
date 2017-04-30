function arrayToList(arr) {
  var list = null;
  for (var i = arr.length - 1; i >= 0; i--) {
    list = {value: arr[i], rest: list};
  }
  return list;
}

function listToArray(list){
  var arr = [];
    for (var node = list; node; node = node.rest) {
        arr.push(node.value);
    }
  return arr;
}

function prepend(value, rest) {
  return {value: value, rest: rest}
}

function nth(list, num) {
  if (list === null) return undefined;
  return num === 0? list.value : nth(list.rest, num - 1);
}



console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 2));
// → 20