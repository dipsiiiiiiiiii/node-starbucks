const { ATTRIBUTE_STRING_OPTION } = require('./options');
module.exports = function (sequelize) {
  return sequelize.define('users', {
    email: ATTRIBUTE_STRING_OPTION,
    password: ATTRIBUTE_STRING_OPTION,
  });
};
