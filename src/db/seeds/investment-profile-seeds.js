const { InvestmentProfile } = require("../../models");

const investmentProfileData = [
  {
    name: "My 2022 Investments",
    time_period: "12",
    initial_investment: 10000,
    currency_code: "GBP",
  },
  {
    name: "Get Rich Plan",
    time_period: "12",
    initial_investment: 270000,
    currency_code: "GBP",
  },
  {
    name: "Risky Investments",
    time_period: "6",
    initial_investment: 1000,
    currency_code: "GBP",
  },
  {
    name: "Conservative Investments",
    time_period: "12",
    initial_investment: 13000,
    currency_code: "GBP",
  },
];

const seedInvestmentProfiles = () =>
  InvestmentProfile.bulkCreate(investmentProfileData);

module.exports = seedInvestmentProfiles;
