var size = 8;
var string = "";

for (var i = 1; i <= size; i++) {
  for (var j = 1; j <= size; j++) {
    if (i % 2 !== 0 && j % 2 === 0) {
      string += " ";
    } else if (i % 2 !== 0 && j % 2 !== 0) {
      string += "#";
    } else if (i % 2 === 0 && j % 2 === 0) {
      string += "#";
    } else if (i % 2 === 0 && j % 2 !== 0) {
      string += " ";
    }
  }
  string += "\n";
}
console.log(string);
