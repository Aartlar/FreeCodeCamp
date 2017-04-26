function factorialize(num) {
  var newNum = num;
  if (newNum <= 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}

factorialize(5);
