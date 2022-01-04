const { Company } = require("../../models");

const companyData = [
  {
    name: "International Consolidated Airlines Group",
    ticker: "IAG",
    investment_profile_id: 1,
  },
  {
    name: "BP PLC",
    ticker: "BP",
    investment_profile_id: 2,
  },
  {
    name: "Barclays",
    ticker: "BARC",
    investment_profile_id: 2,
  },
  {
    name: "Royal Mail PLC ORD",
    ticker: "RMG",
    investment_profile_id: 3,
  },
  {
    name: "Whitbread PLC ORD",
    ticker: "WTB",
    investment_profile_id: 3,
  },
];

const seedCompanies = () => Company.bulkCreate(companyData);

module.exports = seedCompanies;
