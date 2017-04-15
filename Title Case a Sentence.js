function titleCase(str) {
  var newStr = str.split(' ');
  var example = "";

  for (var i = 0; i < newStr.length; i++) {
    var subExample = "";
    subExample = newStr[i][0].toUpperCase();

    for (var j = 1; j < newStr[i].length; j++) {
      subExample += newStr[i][j].toLowerCase();
    }

    example += subExample + " ";
  }

  return example.trimRight();
}

titleCase("I'm a lIttle tea pot");
