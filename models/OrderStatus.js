const { ATTRIBUTE_STRING_OPTION } = require('./options');
module.exports = function (sequelize) {
  return sequelize.define('order_status', {
    status: ATTRIBUTE_STRING_OPTION,
  });
};
