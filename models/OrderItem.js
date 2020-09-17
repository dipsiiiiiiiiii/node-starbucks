const { ATTRIBUTE_INT_OPTION } = require('./options');
module.exports = function (sequelize) {
  return sequelize.define('order_items', {
    quantity: ATTRIBUTE_INT_OPTION,
  });
};
