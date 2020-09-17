const { ATTRIBUTE_INT_OPTION } = require('./options');

module.exports = function (sequelize) {
  return sequelize.define('nutrients', {
    kcal: ATTRIBUTE_INT_OPTION,
    sugar: ATTRIBUTE_INT_OPTION,
    protein: ATTRIBUTE_INT_OPTION,
    natrium: ATTRIBUTE_INT_OPTION,
    saturated_fat: ATTRIBUTE_INT_OPTION,
    caffeine: ATTRIBUTE_INT_OPTION,
  });
};
