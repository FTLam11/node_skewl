module.exports = function Spy(target, method) {
  this.count = 0;
  var self = this;
  var prey = target[method];

  target[method] = function() {
    self.count++;
    return prey.apply(this, arguments);
  };

  return this;
};