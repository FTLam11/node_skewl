var promise1 = first();

promise1
  .then(function(secret) {
    return second(secret);
  })
  .then(function(val) {
    console.log(val);
  })
