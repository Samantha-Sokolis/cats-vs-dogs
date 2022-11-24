const { Category } = require('../models');

const categoryData = [
  {
    name: 'Dog',
  },
  {
    name: 'Cat',
  },
];

const seedGallery = () => Gallery.bulkCreate(categoryData);

module.exports = seedCategories;
