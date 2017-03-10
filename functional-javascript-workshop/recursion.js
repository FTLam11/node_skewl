module.exports = function getDependencies(tree, dependencies = []) {
  Object.keys(tree).forEach(function(key) {
    if (key === 'dependencies') {
      return getDependencies(tree['dependencies'], dependencies);
    } else if (typeof tree[key] === 'object') {
      dependencies.push(`${key}@${tree[key].version}`);
      return getDependencies(tree[key], dependencies);
    };
  });
  return unique(dependencies.sort());
};

function unique(sortedCollection) {
  var unique = [];
  for (var i = 0; i < sortedCollection.length; i++) {
    if (sortedCollection[i] != sortedCollection[i + 1]) unique.push(sortedCollection[i]);
  };
  return unique;
};