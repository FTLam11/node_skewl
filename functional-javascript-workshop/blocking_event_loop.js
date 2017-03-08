module.exports = function repeat(operation, num) {
  // modify this so it can be interrupted
  var repeater = function() {
    if (num <= 0) return;
    operation();
    return repeat(operation, --num);
  };

  setInterval(repeater);
};