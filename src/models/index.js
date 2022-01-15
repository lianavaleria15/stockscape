const User = require("./User");
const Company = require("./Company");
const Portfolio = require("./Portfolio");
const InvestorType = require("./InvestorType");

// User has many investment profiles
// User.hasOne(Portfolio, { foreignKey: "user_id" });

// Investment profile belongs to user
// Portfolio.belongsTo(User, { foreignKey: "user_id" });

// Investment profile has many companies
// Portfolio.hasMany(Company, { foreignKey: "investment_profile_id" });

// Company belongs to many investment profiles
// Company.belongsToMany(Portfolio, {
//   foreignKey: "investment_profile_id",
// });

module.exports = { User, Company, Portfolio, InvestorType };
