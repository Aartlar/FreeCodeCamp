function largestOfFour(arr) {
  var newArr = [];
  arr.forEach(function(element){
    newArr.push(element.reduce(function(previousValue, currentValue, index, array){
      return previousValue < currentValue? currentValue : previousValue;
      })
    );
  });
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
