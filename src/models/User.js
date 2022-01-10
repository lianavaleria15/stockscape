const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

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
    allowNull: false,
  },
  score: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  bio: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  investor_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  favourite_company: {
    type: DataTypes.STRING,
    allowNull: true,
  },
};

class User extends Model {
  async checkPassword(userPassword) {
    const isValid = await bcrypt.compare(userPassword, this.password);
    return isValid;
  }
}

const options = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "user",
};

User.init(schema, options);

module.exports = User;
