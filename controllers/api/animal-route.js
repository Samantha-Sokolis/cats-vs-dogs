const router = require('express').Router();
const { Animals, User, Comment} = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/Auth');
const { post } = require('./user-routes');

// GET 'api/animals/' find all content and post it on page
router.get('/', (req, res) => {
    Animals.findAll({ 
        attributes: ['id','animal_type','animal_breed','size', 'temperament', 'description'],
        include: [{
            model: Comment,
            attributes: ['id', 'text', 'user_id', 'animal_id', 'created_at'],
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

// GET by animal type, returns data when user click on dogs or cats

// GET by id, returns data when user pick on the breed of dogs/cats
router.get('/:id', (req, res) => {
    post.findOne({
        where: {
            id: req.params.id,
        },
        attributes: ['id','animal_type','animal_breed','size', 'temperament', 'description'],
        include: [{
            model: Comment,
            attributes: ['id', 'text', 'user_id', 'animal_id', 'created_at'],
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

// PUT by id route update selected animal data with new data

// DELETE route remove animal from database