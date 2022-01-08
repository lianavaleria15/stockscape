const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class User extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  first_name: { type: DataTypes.STRING, allowNull: false },
  last_name: { type: DataTypes.STRING, allowNull: false },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8, 64],
      // 8-64 characters; requires letters, numbers, special characters
      is: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,64}$/,
    },
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [8, 30],
    },
  },
  email: {
    type: DataTypes.STRING,
    validate: { isEmail: true },
    unique: true,
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  investor_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  favourite_company: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  investment_profile_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "investmentprofile",
      key: "id",
    },
  },
};

const options = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "user",
};

User.init(schema, options);

module.exports = User;
