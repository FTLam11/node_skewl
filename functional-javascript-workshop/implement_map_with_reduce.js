module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(result, currentItem) {
    result.push(fn.call(null, currentItem));
    return result;
  }, []);
};