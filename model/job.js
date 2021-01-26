const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("database", "username", {
  dialect: "postgres",
});

class Job extends Model {}

Job.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Job",
  }
);
