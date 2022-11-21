const router = require('express').Router();
const { Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/Auth');

// GET all display all related comments when a animal/:id is viewed

// GET by id for a specific comment

// POST route created a comment and save it to db if user is logged in

// PUT route update a comment if user is logged in

// DELETE route to delete comment using comment id 