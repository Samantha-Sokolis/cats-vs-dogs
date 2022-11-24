const { Category, Animals } = require('../models');

const router = require('express').Router();

// GET all categories for the homepage
router.get('/', async (req, res) => {
  try {
    const dbCategoryData = await Category.findAll({
      include: [
        {
          model: Animals,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const categories = dbCategoryData.map((category) =>
      category.get({ plain: true })
    );

    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('homepage', { 
      categories,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one category
router.get('/category/:id', async (req, res) => {
  try {
    const dbCategoryData = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Animals,
          attributes: [
            'id',
            'animal_breed',
            'size',
            'temperament',
            'description',
            'filename',
          ],
        },
      ],
    });

    const category = dbCategoryData.get({ plain: true });
    res.render('category', { category });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  } 
});

// GET one animals
router.get('/animals/:id', async (req, res) => {
  try {
    const dbAnimalData = await Animals.findByPk(req.params.id);

    const animal = dbAnimalData.get({ plain: true });

    res.render('painting', { painting });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;
