const { InvestmentProfile } = require("../../models");

const investmentProfileData = [
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

const seedInvestmentProfiles = () =>
  InvestmentProfile.bulkCreate(investmentProfileData);

module.exports = seedInvestmentProfiles;
