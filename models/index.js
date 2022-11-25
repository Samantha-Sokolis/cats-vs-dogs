// relationships
const User = require('./User');
const Animal = require('./Animal');
const Comment = require('./Comment');
const Category = require('./Category')

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
Animal.hasMany(Comment, {
    foreignKey: 'animal_id',
    onDelete: 'CASCADE'
})

// Comment belong to Animal
Comment.belongsTo(Animal, {
    foreignKey: 'animal_id',
    onDelete: 'CASCADE'
})

//Category has many animals
Category.hasMany(Animal, {
    foreignKey: 'category_id',
})

//Animals belongs to Category
Animal.belongsTo(Category, {
    foreignKey: 'category_id',
})

module.exports = {
    User,
    Animal,
    Comment,
    Category,
};