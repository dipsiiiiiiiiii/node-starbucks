const { ATTRIBUTE_STRING_OPTION } = require('./options');

module.exports = function (sequelize) {
  return sequelize.define('categories', {
    name: ATTRIBUTE_STRING_OPTION,
  });
};
