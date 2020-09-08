const { TABLE_OPTION, ATTRIBUTE_STRING_OPTION } = require('./options');

module.exports = function (sequelize) {
  return sequelize.define(
    'detail_images',
    {
      url: ATTRIBUTE_STRING_OPTION,
    },
    TABLE_OPTION
  );
};
