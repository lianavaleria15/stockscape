const User = require("./User");
const Company = require("./Company");
const Portfolio = require("./Portfolio");
const InvestorType = require("./InvestorType");

// A user has one investment type
// InvestorType.belongsTo(User, {
//   foreignKey: "investor_type",
// });

// A user has one favourite company
// User.hasOne(Company, {
//   foreignKey: "favourite_company",
// });

// A user has many portfolios
User.hasMany(Portfolio, {
  foreignKey: "user_id",
});

// A portfolio has one user
Portfolio.belongsTo(User, {
  foreignKey: "user_id",
});

// A portfolio has many companies
// Portfolio.hasMany(Company, {
//   foreignKey: "company_id",
// });

// A company has many portfolios
Company.hasMany(Portfolio, {
  foreignKey: "portfolio_id",
});

module.exports = { User, Company, Portfolio, InvestorType };
