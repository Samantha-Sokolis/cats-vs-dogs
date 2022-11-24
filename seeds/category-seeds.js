const { Category } = require('../models');

const categoryData = [
  {
    name: 'Dog',
  },
  {
    name: 'Cat',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
