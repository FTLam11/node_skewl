function attachTitle(person) {
  return `DR. ${person}`;
};

var promise = Promise.resolve('MANHATTAN');

promise
  .then(attachTitle)
  .then(console.log)