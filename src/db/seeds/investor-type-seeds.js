const { InvestorType } = require("../../models");

const investorTypeData = [
  {
    name: "Yolo Life Savings",
  },
  {
    name: "Weekend Investor",
  },
  {
    name: "Play it safe",
  },
  {
    name: "r/WallStreetBets Graduate",
  },
  {
    name: "Jamie Dimonhands",
  },
];

const seedInvestorTypes = () => InvestorType.bulkCreate(investorTypeData);

module.exports = seedInvestorTypes;
