var promise = new Promise(function(fulfill, reject) {
  fulfill('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});

function onRejected(err) {
  console.log(err.message);
};

promise.then(console.log, onRejected);