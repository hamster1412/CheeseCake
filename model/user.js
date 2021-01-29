const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("my_database", "john", "doe", {
  dialect: "postgres",
});

class User extends Model {}

User.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
  },
  {
    sequelize,
    modelName: "User",
  }
);
