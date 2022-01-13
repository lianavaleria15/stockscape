// Internal imports
const seedUsers = require("./user-seeds");
const seedCompanies = require("./company-seeds");
const seedInvestmentProfiles = require("./investment-profile-seeds");
const sequelize = require("../../config/connection");

// external imports
// const colors = require("colors");

// colors.setTheme({
//   success: ["bgGreen", "black"],
//   warning: ["bgBrightYellow", "black", "bold"],
//   fail: ["bgRed", "white", "bold"],
//   message: ["bgWhite", "black"],
// });

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- Database synced -----\n");

  await seedCompanies();
  console.log("\n----- Companies seeded -----\n");

  await seedUsers();
  console.log("\n----- Users seeded -----\n");

  await seedInvestmentProfiles();
  console.log("\n----- Investments seeded -----\n");

  process.exit(0);
};

seedAll();
