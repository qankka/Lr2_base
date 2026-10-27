Array.prototype.square = function() {
  if (!this) return [];
  return this.map(num => num ** 2);
};

Array.prototype.cube = function() {
  if (!this) return [];
  return this.map(num => num ** 3);
};

Array.prototype.sum = function() {
  if (!this || this.length === 0) return 0;
  return this.reduce((acc, num) => acc + num, 0);
};

Array.prototype.average = function() {
  if (!this || this.length === 0) return NaN;
  return this.sum() / this.length;
};

Array.prototype.even = function() {
  if (!this) return [];
  return this.filter(num => num % 2 === 0);
};

Array.prototype.odd = function() {
  if (!this) return [];
  return this.filter(num => num % 2 !== 0);
};
