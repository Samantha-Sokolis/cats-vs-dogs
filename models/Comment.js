const { timeStamp } = require('console');
const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type:Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        text: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: Datatypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        dog_breed: {
            type: Datatypes.INTEGER,
            allowNull: true,
            references: {
                model: 'dogs',
                key: 'dog_breed',
            }
        },
        cat_breed: {
            type: Datatypes.INTEGER,
            allowNull: true,
            references: {
                model: 'cats',
                key: 'cat_breed',
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }

)