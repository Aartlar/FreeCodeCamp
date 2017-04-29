for (var i = 1; i <= 100; i++) {
  var count = i += " ";
  if (i % 3 === 0) {
    count += "Fizz";
  }
  if (i % 5 === 0) {
    count += "Buzz";
  }
  console.log(count);
};
