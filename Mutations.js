function mutation(arr) {
  var newArr = arr[0].toLowerCase();
  var serached = arr[1].toLowerCase().split("");
  return serached.every(function(element){
    return newArr.indexOf(element) >= 0;
  });
}

mutation(["Hello", "he"]);
