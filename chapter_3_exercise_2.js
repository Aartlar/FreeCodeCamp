function isEven(number) {
  if (number < 0) {
    return false;
  } else if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
