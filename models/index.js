// relationships
const User = require('./User');
const Animals = require('./Animals');
const Comment = require('./Comment');

// User has many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

// Comment belong to user
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

// Animals has many comment
Animals.hasMany(Comment, {
    foreignKey: 'animal_id',
    onDelete: 'CASCADE'
})

// Comment belong to Animal
Comment.belongsTo(Animals, {
    foreignKey: 'animal_id',
    onDelete: 'CASCADE'
})

module.exports = {
    User,
    Animals,
    Comment,
};