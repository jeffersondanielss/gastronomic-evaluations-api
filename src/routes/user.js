const users = require('../controllers/users');

module.exports = (router) => {
  router
    .post('/signin', users.save);

  router
    .post('/auth', users.auth);
};
