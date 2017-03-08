module.exports = function reduce(arr, fn, initial) {
  if (!arr.length) return initial;
  var next = arr[0];
  var result = fn(initial, next);
  arr = arr.slice(1);
  return reduce(arr, fn, result);
};