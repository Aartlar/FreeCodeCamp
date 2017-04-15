function repeatStringNumTimes(str, num) {
  var example = "";
  if (num > 0) {
    for (var i = 0; i < num; i++) {
      example += str;
    }
  }
  return example;
}

repeatStringNumTimes("abc", 3);
