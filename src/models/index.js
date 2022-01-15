const User = require("./User");
const Company = require("./Company");
const Portfolio = require("./Portfolio");
const InvestorType = require("./InvestorType");
const PortfolioCompany = require("./PortfolioCompany");

// A investment type belongs to user
// InvestorType.belongsTo(User, {
//   foreignKey: "investor_type",
// });

// A user has one investor type
User.hasOne(InvestorType, {
  foreignKey: "investor_type",
});

// A company belongs to a user
// Company.belongsTo(User, {
//   foreignKey: "favourite_company",
// });

// A user has one favourite company
// User.hasOne(Company, {
//   foreignKey: "favourite_company",
// });

// A user has many portfolios
// User.hasMany(Portfolio, {
//   foreignKey: "user_id",
// });

// A portfolio has one user
// Portfolio.belongsTo(User, {
//   foreignKey: "user_id",
// });

// A portfolio has many companies
// Portfolio.belongsToMany(Company, {
//   through: PortfolioCompany,
//   foreignKey: "portfolio_id",
// });

// A company has many portfolios
// Company.belongsToMany(Portfolio, {
//   through: PortfolioCompany,
//   foreignKey: "company_id",
// });

module.exports = { User, Company, Portfolio, InvestorType };
