//v1 Tak wiem chujowo i poplontane. Ale chciałem to nanjpierw zrobić tak jak umiem sam. Teraz troche zreaserchuje i poprawie.

function loopOverObj(obj1, obj2) {
  var proObj1 = Object.getOwnPropertyNames(obj1);
  var proObj2 = Object.getOwnPropertyNames(obj2);
  for (var i = 0; i < proObj1.length; i++) {
      if (obj1[proObj1[i]] === obj2[proObj1[i]]) {
        continue;
      } else if (typeof obj1[proObj1[i]] === "object") {
        return loopOverObj(obj1[proObj1[i]], obj2[proObj2[i]]);
      } else {
        return false;
      }
   }
  return true;
}
function deepEqual(obj1, obj2) {
  var proObj1 = Object.getOwnPropertyNames(obj1);
  var proObj2 = Object.getOwnPropertyNames(obj2);
  if (proObj1.length === proObj2.length && proObj1.every(function(element, index){ 
    return element === proObj2[index];})){
    for (var i = 0; i < proObj1.length; i++) {
      if (obj1[proObj1[i]] === obj2[proObj1[i]]) {
        continue;
      } else if (typeof obj1[proObj1[i]] === "object") {
        return loopOverObj(obj1[proObj1[i]], obj2[proObj2[i]]);
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

//v2 Wiedziałem że da się to zrobić łatwiej! ;)

function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a === null || b === null ||
      typeof a !== "object" || typeof b !== "object")
    return false;
  
  var propsA = 0;
  var propsB = 0;

  for (var prop in a) {
    propsA += 1;
  }

  for (var prop in b) {
    propsB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsA == propsB;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true