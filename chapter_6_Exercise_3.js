function logFive(obj) {
  for (var i = 0; i < 5; i++) {
    if (!obj.next())
      break;
    console.log(obj.current());
  }
}

function ArraySeq(seq) {
  this.pos = -1;
  this.array = seq;
}

ArraySeq.prototype.next = function() {
  if (this.pos >= this.array.length - 1)
    return false;
  this.pos++
  return true;
}

ArraySeq.prototype.current = function() {
  return this.array[this.pos];
}

function RangeSeq(start, end) {
  this.start = start -1;
  this.end = end;
}

RangeSeq.prototype.next = function() {
  if (this.start > this.end)
    return false;
  this.start++
  return true;
}

RangeSeq.prototype.current = function() {
  return this.start;
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104