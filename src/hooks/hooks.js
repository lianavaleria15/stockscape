const bcrypt = require("bcrypt");

const beforeCreate = async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
};

const hashPassword = async (data) => {
  //   hash password
  const hashedPassword = await bcrypt.hash(data.password, 10);

  // declare new data.password value as hashed password
  data.password = hashedPassword;

  return data;
};

module.exports = { beforeCreate, hashPassword };
