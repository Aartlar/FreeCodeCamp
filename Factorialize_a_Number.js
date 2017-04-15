
function factorialize(num) {
  var subReturn = 1;
  for (var i = 1; i <= num; i++) {
    subReturn = subReturn * i;
  }
  return subReturn;
}

factorialize(5);
