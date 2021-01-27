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
    company_id: {
      type: DataTypes.INTEGER,
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
    posted_time: {
        type: DataTypes.TIME,
    }
  },
  {
    sequelize,
    modelName: "Job",
  }
);
