iteration

module.exports = function times(operation, num) {
  for (var i = 0; i < num; i++) {
    operation();
  };
};

// recursion

// module.exports = function times(operation, num) {
//   if (num == 0) return;
//   operation();
//   return times(operation, --num);
// };