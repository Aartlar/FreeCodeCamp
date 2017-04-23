function chunkArrayInGroups(arr, size) {
  var newArr = [];

  for (var i = 0; i < arr.length; i += size) {
    var subArr = [];
    for (var j = 0; j < size; j++) {
      if (arr[i + j] === undefined) {
        newArr.push(subArr);
        return newArr;
      } else {
        subArr.push(arr[i + j]);
      }
    }
    newArr.push(subArr);
  }
  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
