require('dotenv').config();
const { PORT } = process.env;
const http = require('http');
const app = require('./app');
const { sequelize } = require('./models');
const server = http.createServer(app);

(async function () {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true, alter: true });

    server.listen(PORT, () => console.log('Server is running on ', PORT));
  } catch (err) {
    console.log('ERROR: ', err);
  }
})();
