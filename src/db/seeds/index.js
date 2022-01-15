// IMPORTS
const seedUsers = require("./user-seeds");
const seedCompanies = require("./company-seeds");
const seedPortfolio = require("./portfolio-seeds");
const seedPortfolioCompany = require("./portfolio-company-seeds");
const sequelize = require("../../config/connection");

// seed all models
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- Database synced -----\n");

  await seedCompanies();
  console.log("\n----- Companies seeded -----\n");

  await seedUsers();
  console.log("\n----- Users seeded -----\n");

  await seedPortfolio();
  console.log("\n----- Portfolios seeded -----\n");

  await seedPortfolioCompany();
  console.log("\n----- PortfolioCompany seeded -----\n");

  process.exit(0);
};

seedAll();
