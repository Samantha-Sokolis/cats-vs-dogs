const router = require('express').Router();

const animalRoutes = require('./animal-route');
const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');
// const categoryRoutes = require('./category-routes');

router.use('/animal', animalRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
// router.use('/category', categoryRoutes);

module.exports = router;
