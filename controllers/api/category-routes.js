const router = require('express').Router();
// Sam - Require - check if below is correct - only User required?
const { User, Category } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/Auth');

// Cloudinary class added
var cloudinary = require('cloudinary').v2;

// GET 'api/category/' find all content - cat and dog
router.get('/', (req, res) => {
    Category.findAll({ 
        attributes: ['id','name'],
            },
    )},
    )
    .then((categoryData) => res.json(categoryData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

// GET by id ('api/category/:id) returns data when user pick on the animal - cat OR dog
// need to include animal model to bring through image - FILENAME
router.get('/:id', (req, res) => {
    Category.findOne({
        where: {
            id: req.params.id,
        },
        attributes: ['id','name'],
            },
    )}
    )
    .then((categoryData) => {
        if (!categoryData) {
            res.status(404).json({ message: "No animal found with this id"});
            return;
        }
        res.json(categoryData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

module.exports = router;

