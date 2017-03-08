module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(result, currentItem) {
    result.push(fn.call(null, currentItem)); // push returns length of array
    // return result.concat(fn.call(null, currentItem)); // fails nested array inputs
    return result;
  }, []);
};