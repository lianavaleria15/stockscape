const seedUsers = require("./category-seeds");
const seedCompanies = require("./product-seeds");
const seedInvestmentProfiles = require("./tag-seeds");

//user
//investment
//companies
const sequelize = require("../../config/connection");
//come back to this
const seedAll = async () => {
  //   await sequelize.sync({ force: true });
  //   console.log("\n----- DATABASE SYNCED -----\n");
  //   await seedCategories();
  //   console.log("\n----- USERS SEEDED -----\n");
  //   await seedProducts();
  //   console.log("\n----- INVESTMENT PROFILE SEEDED -----\n");
  //   await seedTags();
  //   console.log("\n----- COMPANIES SEEDED -----\n");
  //   process.exit(0);
};

seedAll();
