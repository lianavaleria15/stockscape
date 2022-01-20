const { Portfolio } = require("../../models");

const portfolioData = [
  {
    name: "My Portfolio 1",
    user_id: 2,
    remaining_budget: 1000000,
  },

  {
    name: "Yolo Savings ",
    user_id: 2,
    remaining_budget: 500000,
  },
  {
    name: "My Portfolio 3",
    user_id: 3,
    remaining_budget: 200000,
  },

  {
    name: "Yolo Savings 456",
    user_id: 4,
    remaining_budget: 100000,
  },
  {
    name: "My portfolio 6",
    user_id: 4,
    remaining_budget: 50000,
  },
  {
    name: "Retirement",
    user_id: 4,
    remaining_budget: 20,
  },
];

const seedPortfolios = () => Portfolio.bulkCreate(portfolioData);

module.exports = seedPortfolios;
