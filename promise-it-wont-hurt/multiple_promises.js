function all(promise1, promise2) {
  var counter = 0;
  var output = [];
  var promise = new Promise(function(fulfill, reject) {
    promise1.then(function(res) {
      counter++;
      output.push(res);

      if(counter == 2) fulfill(output);
    });
    promise2.then(function(res) {
      counter++;
      output.push(res);

      if(counter == 2) fulfill(output);
    });
  });

  return promise;
};

all(getPromise1(), getPromise2()).then(console.log);

