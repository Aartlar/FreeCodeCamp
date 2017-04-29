// kompletnie niewiem jak to zrobić w 1 pętli.
var size = 8;
var board = "";

for (var i = 0; y < size; i++) {
  for (var j = 0; x < size; j++) {
    if ((i + j) % 2 === 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
