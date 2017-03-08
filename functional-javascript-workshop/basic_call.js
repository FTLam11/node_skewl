module.exports = function duckCount() {
  var args = [].slice.call(arguments);
  return args.filter(function(obj) {
    return {}.hasOwnProperty.call(obj, 'quack');
  }).length;
};