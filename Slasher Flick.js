function slasher(arr, howMany) {
  var newArr = arr.slice(howMany, arr.length);

  return newArr;
}

slasher([1, 2, 3], 2);
