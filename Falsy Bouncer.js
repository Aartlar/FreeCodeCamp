function bouncer(arr) {

  function haveFalseVal(value) {
    if (value) {
      return true;
    } else return false;
}

   var example = arr.filter(haveFalseVal);
  return example;
}

bouncer([1, null, NaN, 2, undefined, 0, "'"]);
