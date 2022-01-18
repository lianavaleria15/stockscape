const { User } = require("../../models");

const userData = [
  {
    firstName: "Liana",
    lastName: "Laurentiu",
    password: "Password123!",
    username: "lianavaleria15",
    email: "liana@email.com",
    investor_type: 1,
    favourite_company: 3,
    bio: "My hobbies include xyz",
  },
  {
    firstName: "Kayle",
    lastName: "Patton",
    password: "Password123!",
    username: "kayleriegerpatton",
    email: "kayle@email.com",
    investor_type: 2,
    favourite_company: 5,
    bio: "My hobbies include 123",
  },
  {
    firstName: "Conor",
    lastName: "Kelly",
    password: "Password123!",
    username: "conorKELLY",
    email: "conor@email.com",
    investor_type: 3,
    favourite_company: 7,
    bio: "My hobbies include ABC",
  },
  {
    firstName: "Matt",
    lastName: "Palmer",
    password: "Password123!",
    username: "tigerbath",
    email: "matt@email.com",
    favourite_company: 9,
  },
];

const seedUsers = async () => {
  const promises = userData.map((user) => User.create(user));
  await Promise.all(promises);
};

module.exports = seedUsers;
