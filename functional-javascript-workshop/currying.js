module.exports = function curryN(fn, n) {
  var count = n || fn.length;
  var args = [].slice.call(arguments);

  return function curryChef(a) {
    if (args.length >= n) {
      return fn.apply(this, args);
    } else {
      return curryChef(a);
    };
  };
};