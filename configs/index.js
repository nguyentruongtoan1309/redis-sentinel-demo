require("dotenv").config();
const dbConfig = require("./db");
const serverConfig = require('./server');

module.exports = {
  ...dbConfig,
  ...serverConfig,
};
