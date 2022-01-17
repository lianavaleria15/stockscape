const { Portfolio } = require("../../models");

const portfolioData = [
  {
    name: "My Portfolio 1",
    user_id: 2,
  },

  {
    name: "Yolo Savings ",
    user_id: 2,
  },
  {
    name: "My Portfolio 3",
    user_id: 3,
  },

  {
    name: "Yolo Savings 456",
    user_id: 4,
  },
  {
    name: "My portfolio 6",
    user_id: 4,
  },
  {
    name: "Retirement",
    user_id: 4,
  },
];

const seedPortfolios = () => Portfolio.bulkCreate(portfolioData);

module.exports = seedPortfolios;
