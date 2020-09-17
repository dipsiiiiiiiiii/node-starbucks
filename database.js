const {
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_HOST,
  MYSQL_PORT,
} = process.env;
const { Sequelize } = require('sequelize');
const { TABLE_OPTION } = require('./models/options');

const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  logging: false,
  dialect: 'mysql',
  define: TABLE_OPTION,
});

module.exports = sequelize;
