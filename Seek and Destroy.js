function destroyer(arr) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    var anyFalse = true;
    for (var j = 1; j < arguments.length; j++) {
      if (arr[i] === arguments[j]) {
        anyFalse = false;
      }
    }
    if (anyFalse) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// V2

function destroyer(arr) {
  var serached = Array.prototype.slice.call(arguments,1);
  return arguments[0].filter(function(element, index, array){
    return !serached.includes(element);
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);