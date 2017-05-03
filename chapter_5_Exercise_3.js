function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var centures = {};
ancestry.forEach(function(person){
  var century = Math.ceil(person.died / 100);
  centures[century] = average(ancestry.filter(function(obj){
   	return Math.ceil(obj.died / 100) === century;
  }).map(function(element){
   	return element.died - element.born;
  }));
});

console.log(centures);

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94