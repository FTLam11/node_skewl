module.exports = function() {
  return Function.call.apply(Array.prototype.slice, arguments);
};