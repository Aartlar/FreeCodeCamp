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

function groupBy(arr, fun) {
  var ages = fun(arr);
  ages.forEach(function(age){
    var ageArr = [];
    arr.filter(function(person){
      return Math.ceil(person.died / 100) === age? true : false;
    }).forEach(function(person){
      ageArr.push(person.died - person.born);
    });
    var ageMedian = average(ageArr);
    console.log("{" + age + " : " + ageMedian + "}");
  });
}

console.log(groupBy(ancestry, function(persons){
  var c1 = [];
  for (var i = 0; i < persons.length; i++) {
  	var c2 = Math.ceil(persons[i].died / 100);
    if (!c1.includes(Math.ceil(c2))) c1.push(c2);
  }
  return c1.sort();
}));

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94