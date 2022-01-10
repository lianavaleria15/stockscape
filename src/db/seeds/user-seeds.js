const { User } = require("../../models");

const userData = [
  {
    first_name: "Liana",
    last_name: "Laurentiu",
    password: "Password123!",
    username: "lianavaleria15",
    email: "liana@email.com",
  },
  {
    first_name: "Kayle",
    last_name: "Patton",
    password: "Password123!",
    username: "kayleriegerpatton",
    email: "kayle@email.com",
  },
  {
    first_name: "Conor",
    last_name: "Kelly",
    password: "Password123!",
    username: "conorKELLY",
    email: "conor@email.com",
  },
  {
    first_name: "Matt",
    last_name: "Palmer",
    password: "Password123!",
    username: "tigerbath",
    email: "matt@email.com",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
