const seedAnimals = require('./Animals-seeds');
const seedUsers = require('./userData');
const seedComments = require('./comment-seeds');
const seedCategories = require('./category-seeds')

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCategories();
  console.log('\n----- ANIMALS SEEDED -----\n');

  await seedAnimals();
  console.log('\n----- ANIMALS SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
