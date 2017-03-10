module.exports = function loadUsers(userIds, load, done) {
  var users = [];
  userIds.forEach(function(userId) {
    load(userId, function(user) {
      if (!user) return;
      users.push(user);
      if (users.length == userIds.length) {
        return done(users);
      };
    });
  });
};