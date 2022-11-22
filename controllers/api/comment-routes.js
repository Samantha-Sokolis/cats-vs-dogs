const router = require('express').Router();
const { Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/Auth');

// GET all display all related comments when a animal/:id is viewed
router.get('/', (req, res) => {
    Comment.findAll({})
    .then((commentData) => res.json(commentData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET by id for a specific comment
router.get('/:id', (req, res) => {
    Comment.findAll({
        where: {
            id: req.params.id
        },
    })
    .then((commentData) => res.json(commentData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });
});

// POST route created a comment and save it to db if user is logged in
router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Comment.create({
            text: req.body.text,
            animal_id: req.body.animal_id,
            user_id: req.session.user_id,
        })
        .then((commentData) => res.json(commentData))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

// PUT route update a comment if user is logged in


// DELETE route to delete comment using comment id 