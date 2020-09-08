const sequelize = require('../database');

const MODELS = [
  'Drink',
  'Category',
  'DetailImage',
  'Nutrients',
  // 'Like',
  // 'User',
  // 'Order',
  // 'OrderItem',
  // 'OrderStatus',
];

const sequelizeModels = function (sequelize) {
  return MODELS.reduce((sequelized, model) => {
    return {
      ...sequelized,
      [model]: require(`./${model}`)(sequelize),
    };
  }, {});
};
const model = sequelizeModels(sequelize);

model.Drink.hasMany(model.DetailImage);
model.DetailImage.belongsTo(model.Drink);

model.Drink.hasMany(model.Nutrients);
model.Nutrients.belongsTo(model.Drink);

model.Drink.belongsTo(model.Category);
model.Category.hasMany(model.Drink);

module.exports = { model, sequelize };
