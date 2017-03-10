function repeat(operation, num) {
  // Modify this so it doesn't cause a stack overflow!
  if (num <= 0) return;
  if (operation() == true) {
    return repeat(operation, --num);
  } else {
    return;
  };
};

function trampoline(fn) {
  // You probably want to implement a trampoline!
  while (fn() == true) {
    fn();
  };
};

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  try {
    trampoline(operation);
  } catch(e) {
    console.log(e);
  };
  return repeat(operation, num)
};
