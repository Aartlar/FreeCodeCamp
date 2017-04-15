function mutation(arr) {
  var newArr = arr[0].toLowerCase();
  var serached = arr[1].toLowerCase();

  for (var i = 0; i < arr[1].length; i++) {
    var ex = 0;
    if (newArr.indexOf(serached[i]) >= 0) {
      continue;
    } else return false;
  }
  return true;
}

mutation(["hello", "sey"]);
