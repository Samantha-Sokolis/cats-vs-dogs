const router = require('express').Router();
const { Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/Auth');

// GET all display all comments 'api/comments'
router.get('/', (req, res) => {
    Comment.findAll({})
    .then((commentData) => res.json(commentData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET by id for a specific comment 'api/comments/:id'
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
            user_id: req.session.user_id
        })
        .then((commentData) => res.json(commentData))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

// PUT route update a comment if user is logged in
router.put('/:id', withAuth, (req, res) => {
    Comment.update(
        {
            text: req.body.text
        },
        {
            where: {
                id: req.params.id
            },
        }
    )
    .then((commentData) => {
        if (!commentData) {
            res.status(404).json({ message: 'No comment with this id'});
            return;
        }
        res.json(commentData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE route to delete comment using comment id 
router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        },
    })
    .then ((commentData) => {
        if (!commentData) {
            res.status(404).json({ message: 'No comment with this id'});
            return;
        }
        res.json(commentData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;