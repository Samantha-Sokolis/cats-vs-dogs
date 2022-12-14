const router = require('express').Router();
const { Animal, User, Comment} = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/Auth');

// Cloudinary class added
var cloudinary = require('cloudinary').v2;

// GET 'api/animal/' find all content 
router.get('/', (req, res) => {
    Animal.findAll({ 
        attributes: ['id','animal_type','animal_breed','size', 'temperament', 'description'],
        include: [{
            model: Comment,
            attributes: ['id', 'text', 'user_id', 'animal_id'],
            include: {
                model: User,
                attributes: ['username']
            },
        },
    ]
    })
    .then((animalData) => res.json(animalData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET by id ('api/animal/:id) returns data when user pick on the animal
router.get('/:id', (req, res) => {
    Animal.findOne({
        where: {
            id: req.params.id,
        },
        attributes: ['id','animal_type','animal_breed','size', 'temperament', 'description'],
        include: [{
            model: Comment,
            attributes: ['id', 'text', 'user_id', 'animal_id'],
            include: {
                model: User,
                attributes: ['username']
            }
        }]
    })
    .then((animalData) => {
        if (!animalData) {
            res.status(404).json({ message: "No animal found with this id"});
            return;
        }
        res.json(animalData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});


// POST route connects user session then creates new animal to database

// PUT by id route connects user session then updates selected animal data with new data

// DELETE route remove animal from database

module.exports = router;