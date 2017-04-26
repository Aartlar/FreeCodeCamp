function confirmEnding(str, target) {
  return str.includes(target, str.length - target.length);
}

confirmEnding("Bastin", "n");
