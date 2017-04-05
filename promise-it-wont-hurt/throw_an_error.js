var json = process.argv[2];

function parsePromised(json) {
  return new Promise(function(fulfill, reject) {
    try {
      fulfill(JSON.parse(json));
    } catch(err) {
      reject(err);
    };
  });
};

parsePromised(json).then(null, console.log)