function countBs(value) {
  return value.split("").filter(function(element) {
    return element === "B";
  }).length;
}

function countChar(value, serached) {
  return value.split("").filter(function(element) {
    return element === serached;
  }).length;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
