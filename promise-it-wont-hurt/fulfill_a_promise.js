var promise = new Promise(function(fulfill, reject) {
  setTimeout(function() {
    fulfill('FULFILLED!');
  }, 300)
});

promise.then(function(res) {
  console.log(res);
})