// IMPORTS
const seedUsers = require("./user-seeds");
const seedCompanies = require("./company-seeds");
const seedPortfolio = require("./investment-profile-seeds");
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
  console.log("\n----- Investments seeded -----\n");

  process.exit(0);
};

seedAll();
