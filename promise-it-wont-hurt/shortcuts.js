var promise = Promise.resolve('Yo mama');
var promise2 = Promise.reject(new Error('Got the wooden leg with real feet'));

promise.then(console.log)
promise2.catch(function(err) {
  console.log(err.message);
})
