module.exports = function countWords(words) {
  return words.reduce(function(wordHash, word) {
    wordHash[word] ? wordHash[word] += 1 : wordHash[word] = 1;
    return wordHash;
  }, {});
};