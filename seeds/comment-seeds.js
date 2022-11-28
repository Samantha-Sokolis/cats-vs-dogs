const { Comment } = require('../models');

const commentData = [
    {
        text: 'So cute!',
        user_id: 1,
        animal_id: 1,

    },
    {
        text: 'Looks just like mine!',
        user_id: 2,
        animal_id: 2,

    },
    {
        text: 'Love his eyes!',
        user_id: 3,
        animal_id: 3,

    },
    {
        text: 'So cute!',
        user_id: 4,
        animal_id: 4,

    },
    
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;