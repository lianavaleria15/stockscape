const { PortfolioCompany } = require("../../models");

const portfolioCompanyData = [
  {
    units: 1000,
    company_id: 1,
    portfolio_id: 1,
    unit_cost: 129.41,
  },
  {
    units: 2000,
    company_id: 2,
    portfolio_id: 1,
    unit_cost: 212.25,
  },
  {
    units: 3000,
    company_id: 2,
    portfolio_id: 2,
    unit_cost: 212.25,
  },
  {
    units: 4000,
    company_id: 1,
    portfolio_id: 2,
    unit_cost: 129.41,
  },
  {
    units: 5000,
    company_id: 4,
    portfolio_id: 2,
    unit_cost: 755.98,
  },
  {
    units: 125,
    company_id: 5,
    portfolio_id: 3,
    unit_cost: 1722.88,
  },
  {
    units: 7000,
    company_id: 6,
    portfolio_id: 4,
    unit_cost: 263.61,
  },
];

const seedPortfolioCompany = () =>
  PortfolioCompany.bulkCreate(portfolioCompanyData);

module.exports = seedPortfolioCompany;
