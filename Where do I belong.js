function getIndexToIns(arr, num) {
  var sortedArr = arr;
  sortedArr.push(num);
  sortedArr.sort(function(a, b) {
    return a - b;
  });
  return sortedArr.indexOf(num);
  
}

getIndexToIns([5, 3, 20, 3], 5);
