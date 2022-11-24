const { Category } = require('../models');

const categoryData = [
  {
    name: 'Dog',
  },
  {
    name: 'Cat',
  },
];

const seedCategories = () => Gallery.bulkCreate(categoryData);

module.exports = seedCategories;
