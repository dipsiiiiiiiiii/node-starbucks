const sequelize = require('../database');

const MODELS = [
  'Drink',
  'Category',
  'DetailImage',
  'Nutrients',
  'User',
  'Order',
  'OrderItem',
  'OrderStatus',
  'Like',
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

model.User.hasMany(model.Order);
model.Order.belongsTo(model.User);

model.Order.hasMany(model.OrderItem);
model.OrderItem.belongsTo(model.Order);

model.OrderItem.belongsTo(model.OrderStatus);
model.OrderStatus.hasMany(model.OrderItem);

model.User.hasMany(model.Like);
model.Like.belongsTo(model.User);

model.Drink.hasMany(model.Like);
model.Like.belongsTo(model.Drink);

module.exports = { ...model, sequelize };
