const { ATTRIBUTE_ID } = require('./options');

module.exports = function (seqeulize) {
  return seqeulize.define('orders', {
    id: ATTRIBUTE_ID,
  });
};
