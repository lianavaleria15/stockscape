const { User } = require("../../models");

const userData = [
  {
    first_name: "Liana",
    last_name: "Laurentiu",
    password: "P@ssword123",
    username: "lianavaleria15",
    email: "liana@email.com",
  },
  {
    first_name: "Kayle",
    last_name: "Patton",
    password: "Passw0rd456",
    username: "kayleriegerpatton",
    email: "kayle@email.com",
  },
  {
    first_name: "Conor",
    last_name: "Kelly",
    password: "Pa55word789",
    username: "conorKELLY",
    email: "conor@email.com",
  },
  {
    first_name: "Matt",
    last_name: "Palmer",
    password: "PaSsWoRd012",
    username: "tigerbath",
    email: "matt@email.com",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
