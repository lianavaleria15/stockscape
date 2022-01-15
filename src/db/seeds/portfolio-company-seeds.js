const { PortfolioCompany } = require("../../models");

const portfolioCompanyData = [
  {
    portfolio_id: 1,
    company_id: 1,
  },
  {
    portfolio_id: 1,
    company_id: 3,
  },
  {
    portfolio_id: 1,
    company_id: 4,
  },
  {
    portfolio_id: 1,
    company_id: 6,
  },
  {
    portfolio_id: 2,
    company_id: 1,
  },
  {
    portfolio_id: 2,
    company_id: 3,
  },
  {
    portfolio_id: 3,
    company_id: 9,
  },
  {
    portfolio_id: 3,
    company_id: 7,
  },
];

const seedPortfolioCompany = () =>
  PortfolioCompany.bulkCreate(portfolioCompanyData);

module.exports = seedPortfolioCompany;
