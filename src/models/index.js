const User = require("./User");
const Company = require("./Company");
const Portfolio = require("./Portfolio");
const PortfolioCompany = require("./PortfolioCompany");

// A user has many portfolios
User.hasMany(Portfolio, {
  foreignKey: "user_id",
});

// A portfolio has one user
Portfolio.belongsTo(User, {
  foreignKey: "user_id",
});

// A portfolio has many companies
Portfolio.belongsToMany(Company, {
  through: PortfolioCompany,
  foreignKey: "portfolio_id",
});

// A company has many portfolios
Company.belongsToMany(Portfolio, {
  through: PortfolioCompany,
  foreignKey: "company_id",
});

module.exports = { User, Company, Portfolio, PortfolioCompany };
