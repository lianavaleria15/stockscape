const { Portfolio } = require("../../models");

const portfolioData = [
  {
    name: "Safe investment strategy",
    user_id: 2,
    remaining_budget: 1000000,
  },
  {
    name: "My YOLO Savings",
    user_id: 2,
    remaining_budget: 500000,
  },
  {
    name: "My 2021 Bet on Tech",
    user_id: 3,
    remaining_budget: 200000,
  },
  {
    name: "Causal Pocket Money",
    user_id: 4,
    remaining_budget: 100000,
  },
  {
    name: "Portfolio of the Year??",
    user_id: 4,
    remaining_budget: 50000,
  },
  {
    name: "Retirement Funds",
    user_id: 4,
    remaining_budget: 20,
  },
];

const seedPortfolios = () => Portfolio.bulkCreate(portfolioData);

module.exports = seedPortfolios;
