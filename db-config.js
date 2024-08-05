const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const dbUrl = process.env.DB_URL;

if (!dbUrl) {
  throw new Error("Database config not provided");
}

const sequelize = new Sequelize(dbUrl);

const RequestData = sequelize.define("RequestData", {
  data: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { sequelize, RequestData };
