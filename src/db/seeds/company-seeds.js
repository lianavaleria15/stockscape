const { Company } = require("../../models");

const companyData = [
  {
    name: "Apple Inc.",
    symbol: "AAPL",
    investment_profile_id: 1,
    janPrice: 129.41,
    decPrice: 177.57,
    gainLoss: ,
    sector:,
    companySummary:"",
  },
];

const seedCompanies = () => Company.bulkCreate(companyData);

module.exports = seedCompanies;
