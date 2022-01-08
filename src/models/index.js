const User = require("./User");
const Company = require("./Company");
const InvestmentProfile = require("./InvestmentProfile");

// User has many investment profiles
User.hasOne(InvestmentProfile, { foreignKey: "user_id" });

// Investment profile belongs to user
InvestmentProfile.belongsTo(User, { foreignKey: "user_id" });

// Investment profile has many companies
InvestmentProfile.hasMany(Company, { foreignKey: "investment_profile_id" });

// Company belongs to many investment profiles
Company.belongsToMany(InvestmentProfile, {
  foreignKey: "investment_profile_id",
});

module.exports = { User, Company, InvestmentProfile };
