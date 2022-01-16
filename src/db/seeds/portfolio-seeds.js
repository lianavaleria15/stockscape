const { Portfolio } = require("../../models");

const portfolioData = [
  {
    units: 12430,
    // calculated by stock returns hook
    stock_returns: 256000,
    user_id: 1,
  },
  {
    units: 1000,
    // calculated by stock returns hook
    stock_returns: 200000,
    user_id: 2,
  },
  {
    units: 10000,
    // calculated by stock returns hook
    stock_returns: 2000,
    user_id: 3,
  },
  {
    units: 1050,
    // calculated by stock returns hook
    stock_returns: 20067800,
    user_id: 4,
  },
];

const seedPortfolios = () => Portfolio.bulkCreate(portfolioData);

module.exports = seedPortfolios;
