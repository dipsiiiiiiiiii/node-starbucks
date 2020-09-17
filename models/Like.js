const { ATTRIBUTE_ID } = require('./options');
module.exports = function (sequelize) {
  return sequelize.define('likes', {
    id: ATTRIBUTE_ID,
  });
};
