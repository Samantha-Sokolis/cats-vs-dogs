const { Comment } = require('../models');

const commentData = [
    {
        text: 'Example comment 1',
        user_id: 1,
        animal_id: 1,

    },
    {
        text: 'Example comment 2',
        user_id: 2,
        animal_id: 2,

    },
    {
        text: 'Example comment 3',
        user_id: 3,
        animal_id: 3,

    },
    {
        text: 'Example comment 4',
        user_id: 4,
        animal_id: 4,

    },
    
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;