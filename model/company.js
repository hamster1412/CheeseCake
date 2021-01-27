const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("database", "username", {
  dialect: "postgres",
  dialectOptions: {},
});

class Company extends Model {}

Company.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Company" }
);
