module.exports = function validateUser(goodUsers) {
  return function allUsersValid(candidates) {
    return candidates.every(function(candidate) {
      return goodUsers.some(function(goodUser) {
        return goodUser.id === candidate.id;
      });
    });
  };
};