const { ATTRIBUTE_STRING_OPTION } = require('./options');

module.exports = function (sequelize) {
  return sequelize.define('drinks', {
    name: ATTRIBUTE_STRING_OPTION,
    thumbnail: ATTRIBUTE_STRING_OPTION,
    description: ATTRIBUTE_STRING_OPTION,
  });
};
