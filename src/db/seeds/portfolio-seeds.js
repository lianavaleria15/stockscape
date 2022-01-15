const { Portfolio } = require("../../models");

const portfolioData = [
  {
    company_id: 1,
    units: 10000,
    user_id: 1,
    // calculated by stock returns hook
    stock_returns:
  },
];

const seedPortfolios = () => Portfolio.bulkCreate(portfolioData);

module.exports = seedPortfolios;
