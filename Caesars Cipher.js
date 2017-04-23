function rot13(str) { // LBH QVQ VG!
  var newStr = "";

  for (var i = 0; i < str.length; i++) {
    var subExample = str[i].charCodeAt();
    if (str[i] === " ") {
      newStr += " ";
    } else if (subExample < 65 || subExample > 90) {
      newStr += str[i];
    } else {
      subExample += 13;
      if (subExample > 90) {
        subExample -= 26;
        newStr += String.fromCharCode(subExample);
      } else {
        newStr += String.fromCharCode(subExample);
      }
    }
  }
  return newStr;
}

// Change the inputs below to test
rot13("LBH QVQ VG!");
