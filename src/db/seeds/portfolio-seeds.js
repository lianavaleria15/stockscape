const { Portfolio } = require("../../models");

const portfolioData = [
  {
    company_id: 1,
    units: 10000,
    // calculated by stock returns hook
    stock_returns: 200000,
    user_id: 1,
  },
  {
    company_id: 1,
    units: 10000,
    // calculated by stock returns hook
    stock_returns: 200000,
    user_id: 2,
  },
  {
    company_id: 1,
    units: 10000,
    // calculated by stock returns hook
    stock_returns: 200000,
    user_id: 3,
  },
  {
    company_id: 1,
    units: 10000,
    // calculated by stock returns hook
    stock_returns: 200000,
    user_id: 4,
  },
];

const seedPortfolios = () => Portfolio.bulkCreate(portfolioData);

module.exports = seedPortfolios;
