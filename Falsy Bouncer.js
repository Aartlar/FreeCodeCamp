function bouncer(arr) {
  
  function haveFalseVal(value) {
    return !!value;
  }
  
  return arr.filter(haveFalseVal);
}

bouncer([1, null, NaN, 2, undefined, 0, "'"]);
