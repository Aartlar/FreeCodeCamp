function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    } else if (i === arr.length - 1 && arr[i] < num) {
      return i + 1;
    } else {
      continue;
    }
  }


}

getIndexToIns([5, 3, 20, 3], 5);
