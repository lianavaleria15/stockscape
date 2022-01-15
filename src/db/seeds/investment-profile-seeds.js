const { Portfolio } = require("../../models");

const portfolioData = [
  {
    units: 10000,
  },
  {
    units: 270000,
  },
  {
    units: 1000,
  },
  {
    units: 13000,
  },
];

const seedPortfolios = () => Portfolio.bulkCreate(portfolioData);

module.exports = seedPortfolios;
